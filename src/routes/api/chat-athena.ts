import { createFileRoute } from "@tanstack/react-router";
import { callAI, type ChatMessage } from "../../lib/aiProvider";
import { chatAthena as chatAthenaMock } from "../../lib/provaxApi";

const ATHENA_SYSTEM = `Você é a Athena AI, mentora estratégica de elite do ProvaX AI — plataforma de preparação para o concurso da Polícia Rodoviária Federal (PRF).

Perfil:
- Tom: direto, motivador e técnico. Como um instrutor policial de alto nível.
- Especialidade: edital PRF CEBRASPE, CTB, resoluções CONTRAN, direito administrativo, penal, constitucional.
- Regra CEBRASPE: uma questão errada anula uma certa. Oriente a deixar em branco quando incerto.

Responda SEMPRE em português brasileiro. Seja preciso, cite artigos quando relevante. Máximo 3-4 parágrafos.`;

export const Route = createFileRoute("/api/chat-athena")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json().catch(() => ({}));

        const provider  = (body.provider || 'anthropic') as 'anthropic' | 'openai';
        const apiKey    = provider === 'anthropic'
          ? (body.anthropicKey || process.env.ANTHROPIC_API_KEY || '')
          : (body.openaiKey    || process.env.OPENAI_API_KEY    || '');
        const model     = body.claudeModel || body.gptModel || '';
        const messages  = Array.isArray(body.messages) ? body.messages : [];
        const aiName    = body.aiName || 'Athena AI';
        const aiTone    = body.aiTone || 'elite';
        const onboarding = body.onboarding || {};
        const progress   = body.progress   || {};

        // Sem chave → fallback mock
        if (!apiKey || !model) {
          const lastMsg = messages.at(-1)?.content ?? '';
          return Response.json(chatAthenaMock(lastMsg, aiName));
        }

        // Converter histórico para formato ChatMessage
        const chatMessages: ChatMessage[] = [];
        for (const msg of messages) {
          if (msg.sender === 'user')   chatMessages.push({ role: 'user',      content: msg.content });
          if (msg.sender === 'athena') chatMessages.push({ role: 'assistant', content: msg.content });
        }
        if (!chatMessages.length || chatMessages[0].role !== 'user') {
          const lastMsg = messages.at(-1)?.content ?? '';
          return Response.json(chatAthenaMock(lastMsg, aiName));
        }

        const toneMap: Record<string, string> = {
          elite:      'Instrutor policial de alto desempenho — direto, técnico, motivador.',
          motivator:  'Motivador energético — entusiasta, encoraja constantemente.',
          academic:   'Professor acadêmico — formal, didático, detalhado.',
          direct:     'Direto ao ponto — respostas curtas, objetivas, sem rodeios.',
        };

        const weakDisciplines = Object.entries(progress.disciplinePerformance || {})
          .filter(([, d]: any) => d.status === 'critical')
          .map(([name]) => name)
          .slice(0, 3);

        const system = `${ATHENA_SYSTEM}

Seu nome: ${aiName}
Tom: ${toneMap[aiTone] ?? toneMap.elite}
${body.aiCustomInstruction ? `Instrução adicional: ${body.aiCustomInstruction}` : ''}

Contexto do aluno:
- Nome: ${onboarding.name || 'Recruta'}
- Aprovação atual: ${progress.currentApprovalProbability?.toFixed(1) ?? 'N/A'}%
- Disciplinas fracas: ${weakDisciplines.join(', ') || 'não identificadas'}`;

        try {
          const content = await callAI({ provider, apiKey, model, system, messages: chatMessages, maxTokens: 800 });
          return Response.json({ content, sender: 'athena', timestamp: new Date().toISOString() });
        } catch (err: any) {
          console.error('[chat-athena]', err.message);
          const lastMsg = messages.at(-1)?.content ?? '';
          return Response.json(chatAthenaMock(lastMsg, aiName));
        }
      },
    },
  },
});
