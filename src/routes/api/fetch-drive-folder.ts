import { createFileRoute } from "@tanstack/react-router";

const PRF_DISCIPLINES = [
  'Legislação de Trânsito (CTB)',
  'Resoluções do CONTRAN',
  'Língua Portuguesa',
  'Raciocínio Lógico-Matemático',
  'Informática',
  'Física',
  'Ética e Cidadania',
  'Geopolítica',
  'Língua Estrangeira (Inglês ou Espanhol)',
  'Direito Administrativo',
  'Direito Constitucional',
  'Direito Penal',
  'Direito Processual Penal',
  'Legislação Especial',
  'Direitos Humanos',
  'Geral / Não identificado',
];

/** Extrai ID de pasta do Drive */
function extractFolderId(url: string): string | null {
  const patterns = [
    /\/folders\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

/** Exporta conteúdo de um arquivo do Drive */
async function fetchFileContent(fileId: string, mimeType: string, apiKey: string): Promise<string> {
  const MAX = 30_000;

  if (mimeType === 'application/vnd.google-apps.document') {
    const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/plain&key=${apiKey}`);
    if (!res.ok) return '';
    return (await res.text()).slice(0, MAX);
  }
  if (mimeType === 'application/vnd.google-apps.spreadsheet') {
    const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/csv&key=${apiKey}`);
    if (!res.ok) return '';
    return (await res.text()).slice(0, MAX);
  }
  if (mimeType === 'text/plain') {
    const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`);
    if (!res.ok) return '';
    return (await res.text()).slice(0, MAX);
  }
  // PDF e outros não suportados diretamente
  return '';
}

/** Classifica conteúdo com Gemini 2.0 Flash */
async function classifyWithGemini(fileName: string, textContent: string, geminiKey: string): Promise<string> {
  if (!geminiKey || !textContent.trim()) return 'Geral / Não identificado';

  const prompt = `Você é um especialista no concurso da Polícia Rodoviária Federal (PRF), banca CEBRASPE.

Analise o título e trecho do material abaixo e classifique em UMA das disciplinas do edital PRF:

${PRF_DISCIPLINES.map((d, i) => `${i + 1}. ${d}`).join('\n')}

Arquivo: "${fileName}"
Trecho do conteúdo:
"""
${textContent.slice(0, 1500)}
"""

Responda APENAS com o nome exato da disciplina da lista acima, sem explicação adicional.`;

  try {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 50, temperature: 0.1 },
      }),
    });
    if (!res.ok) return 'Geral / Não identificado';
    const data = await res.json() as any;
    const answer = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? '';
    // Validar que a resposta é uma disciplina válida
    const match = PRF_DISCIPLINES.find(d => answer.toLowerCase().includes(d.toLowerCase().slice(0, 20)));
    return match ?? 'Geral / Não identificado';
  } catch {
    return 'Geral / Não identificado';
  }
}

export const Route = createFileRoute("/api/fetch-drive-folder")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json().catch(() => ({}));
        const { url, apiKey, geminiKey } = body as { url: string; apiKey: string; geminiKey: string };

        if (!url || !apiKey) {
          return Response.json({ error: 'URL e API Key são obrigatórios.' }, { status: 400 });
        }

        const folderId = extractFolderId(url);
        if (!folderId) {
          return Response.json({ error: 'Não foi possível extrair o ID da pasta. Use um link de pasta do Google Drive.' }, { status: 400 });
        }

        // 1. Listar arquivos da pasta
        const listUrl = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&fields=files(id,name,mimeType,size)&pageSize=50&key=${apiKey}`;
        const listRes = await fetch(listUrl);
        if (!listRes.ok) {
          const err = await listRes.json().catch(() => ({})) as any;
          if (listRes.status === 403) {
            return Response.json({ error: 'Acesso negado. Compartilhe a pasta como "Qualquer pessoa com o link".' }, { status: 403 });
          }
          return Response.json({ error: `Erro ao listar pasta: ${err?.error?.message ?? listRes.status}` }, { status: listRes.status });
        }

        const listData = await listRes.json() as { files: Array<{ id: string; name: string; mimeType: string; size?: string }> };
        const files = listData.files ?? [];

        if (files.length === 0) {
          return Response.json({ error: 'Pasta vazia ou sem arquivos acessíveis.' }, { status: 404 });
        }

        // 2. Para cada arquivo: buscar conteúdo + classificar
        const SUPPORTED_TYPES = [
          'application/vnd.google-apps.document',
          'application/vnd.google-apps.spreadsheet',
          'text/plain',
        ];

        const results: Array<{
          id: string;
          name: string;
          mimeType: string;
          discipline: string;
          textContent: string;
          charCount: number;
          supported: boolean;
          error?: string;
        }> = [];

        for (const file of files) {
          const supported = SUPPORTED_TYPES.includes(file.mimeType);
          if (!supported) {
            results.push({
              id: file.id, name: file.name, mimeType: file.mimeType,
              discipline: 'Não suportado', textContent: '', charCount: 0, supported: false,
              error: file.mimeType === 'application/pdf' ? 'PDF — converta para Google Docs' : 'Tipo não suportado',
            });
            continue;
          }

          try {
            const textContent = await fetchFileContent(file.id, file.mimeType, apiKey);
            if (!textContent.trim()) {
              results.push({ id: file.id, name: file.name, mimeType: file.mimeType, discipline: 'Geral / Não identificado', textContent: '', charCount: 0, supported: true, error: 'Conteúdo vazio' });
              continue;
            }
            const discipline = await classifyWithGemini(file.name, textContent, geminiKey);
            results.push({ id: file.id, name: file.name, mimeType: file.mimeType, discipline, textContent, charCount: textContent.length, supported: true });
          } catch (err: any) {
            results.push({ id: file.id, name: file.name, mimeType: file.mimeType, discipline: 'Geral / Não identificado', textContent: '', charCount: 0, supported: true, error: err.message });
          }
        }

        return Response.json({
          folderName: `Pasta (${files.length} arquivos)`,
          totalFiles: files.length,
          supported: results.filter(r => r.supported && !r.error).length,
          skipped: results.filter(r => !r.supported || !!r.error).length,
          results,
          success: true,
        });
      },
    },
  },
});
