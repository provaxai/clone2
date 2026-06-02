import { createFileRoute } from "@tanstack/react-router";

/**
 * Rota: POST /api/fetch-drive
 * Busca conteúdo de arquivos do Google Drive compartilhados publicamente.
 * Suporta: Google Docs, Sheets, PDFs exportados como texto, arquivos .txt
 */

function extractDriveFileId(url: string): string | null {
  // Formatos aceitos:
  // https://drive.google.com/file/d/FILE_ID/view
  // https://drive.google.com/open?id=FILE_ID
  // https://docs.google.com/document/d/FILE_ID/edit
  // https://docs.google.com/spreadsheets/d/FILE_ID/edit
  // https://drive.google.com/drive/folders/FOLDER_ID
  const patterns = [
    /\/file\/d\/([a-zA-Z0-9_-]+)/,
    /\/document\/d\/([a-zA-Z0-9_-]+)/,
    /\/spreadsheets\/d\/([a-zA-Z0-9_-]+)/,
    /\/presentation\/d\/([a-zA-Z0-9_-]+)/,
    /[?&]id=([a-zA-Z0-9_-]+)/,
    /\/folders\/([a-zA-Z0-9_-]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

function detectMimeType(url: string): 'doc' | 'sheet' | 'slide' | 'folder' | 'file' {
  if (url.includes('docs.google.com/document'))        return 'doc';
  if (url.includes('docs.google.com/spreadsheets'))   return 'sheet';
  if (url.includes('docs.google.com/presentation'))   return 'slide';
  if (url.includes('drive.google.com/drive/folders')) return 'folder';
  return 'file';
}

export const Route = createFileRoute("/api/fetch-drive")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json().catch(() => ({}));
        const { url, apiKey } = body as { url: string; apiKey: string };

        if (!url || !apiKey) {
          return Response.json({ error: 'URL e API Key são obrigatórios.' }, { status: 400 });
        }

        const fileId = extractDriveFileId(url);
        if (!fileId) {
          return Response.json({ error: 'Não foi possível extrair o ID do arquivo. Verifique o link.' }, { status: 400 });
        }

        const type = detectMimeType(url);

        try {
          // Buscar metadados do arquivo
          const metaUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?fields=name,mimeType,size&key=${apiKey}`;
          const metaRes = await fetch(metaUrl);
          if (!metaRes.ok) {
            const err = await metaRes.json().catch(() => ({}));
            const msg = (err as any)?.error?.message || `Erro ${metaRes.status}`;
            if (metaRes.status === 403) {
              return Response.json({ error: 'Acesso negado. Certifique-se de que o arquivo está compartilhado como "Qualquer pessoa com o link".' }, { status: 403 });
            }
            return Response.json({ error: `Erro ao acessar o arquivo: ${msg}` }, { status: metaRes.status });
          }
          const meta = await metaRes.json() as { name: string; mimeType: string; size?: string };

          let textContent = '';
          const fileName = meta.name || 'Arquivo do Drive';

          // Exportar conteúdo de acordo com o tipo
          if (type === 'doc' || meta.mimeType === 'application/vnd.google-apps.document') {
            // Google Docs → texto puro
            const exportUrl = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/plain&key=${apiKey}`;
            const textRes = await fetch(exportUrl);
            if (!textRes.ok) throw new Error(`Falha ao exportar documento: ${textRes.status}`);
            textContent = await textRes.text();

          } else if (type === 'sheet' || meta.mimeType === 'application/vnd.google-apps.spreadsheet') {
            // Sheets → CSV
            const exportUrl = `https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/csv&key=${apiKey}`;
            const csvRes = await fetch(exportUrl);
            if (!csvRes.ok) throw new Error(`Falha ao exportar planilha: ${csvRes.status}`);
            textContent = await csvRes.text();

          } else if (meta.mimeType === 'text/plain') {
            // Arquivo de texto puro
            const dlUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;
            const dlRes = await fetch(dlUrl);
            if (!dlRes.ok) throw new Error(`Falha ao baixar arquivo: ${dlRes.status}`);
            textContent = await dlRes.text();

          } else if (meta.mimeType === 'application/pdf') {
            // PDF → não conseguimos extrair texto via API simples, orientar o usuário
            return Response.json({
              fileName,
              mimeType: meta.mimeType,
              textContent: '',
              warning: 'Arquivos PDF do Drive não podem ser lidos diretamente. Abra o PDF e copie o conteúdo manualmente, ou converta para Google Docs antes de importar.',
              success: false,
            });

          } else {
            // Tentar baixar como texto
            const dlUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;
            const dlRes = await fetch(dlUrl);
            if (dlRes.ok) {
              textContent = await dlRes.text();
            } else {
              return Response.json({
                error: `Tipo de arquivo não suportado: ${meta.mimeType}. Use Google Docs, arquivos .txt ou planilhas.`,
              }, { status: 415 });
            }
          }

          // Limitar tamanho para não explodir a IA
          const MAX_CHARS = 50_000;
          const truncated = textContent.length > MAX_CHARS;
          textContent = textContent.slice(0, MAX_CHARS);

          return Response.json({
            fileName,
            mimeType: meta.mimeType,
            textContent,
            charCount: textContent.length,
            truncated,
            success: true,
          });

        } catch (err: any) {
          console.error('[fetch-drive]', err.message);
          return Response.json({ error: `Erro interno: ${err.message}` }, { status: 500 });
        }
      },
    },
  },
});
