import { createFileRoute } from "@tanstack/react-router";
import { callAI } from "../../lib/aiProvider";
import { createQuestion } from "../../lib/provaxApi";

export const Route = createFileRoute("/api/generate-question")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body       = await request.json().catch(() => ({}));
        const provider   = (body.provider || 'anthropic') as 'anthropic' | 'openai';
        const apiKey     = provider === 'anthropic'
          ? (body.anthropicKey || process.env.ANTHROPIC_API_KEY || '')
          : (body.openaiKey    || process.env.OPENAI_API_KEY    || '');
        const model      = body.claudeModel || body.gptModel || '';
        const discipline = body.discipline  || 'Legislação de Trânsito';
        const difficulty = body.difficulty  || 'Média';
        const subtopic   = body.subtopic    || '';

        if (!apiKey || !model) return Response.json(createQuestion(discipline, difficulty));

        const prompt = `Gere UMA questão inédita no padrão CEBRASPE (Certo/Errado):
Disciplina: ${discipline}
Dificuldade: ${difficulty}
${subtopic ? `Subtópico: ${subtopic}` : ''}

Responda APENAS com JSON válido:
{"statement":"texto da assertiva","correctAnswer":"C","explanation":"justificativa com artigo legal","subtopic":"nome do subtópico"}

Nível ${difficulty}: ${difficulty === 'Fácil' ? 'conceito direto' : difficulty === 'Média' ? 'detalhe ou exceção' : 'pegadinha sutil ou comparação de institutos'}`;

        try {
          const raw = await callAI({
            provider, apiKey, model,
            system: 'Especialista em questões CEBRASPE para concursos públicos. Responda apenas JSON válido, sem markdown.',
            messages: [{ role: 'user', content: prompt }],
            maxTokens: 512,
          });
          const json = JSON.parse(raw.replace(/```json|```/g, '').trim());
          return Response.json({
            id: `ai-${Date.now()}`, discipline,
            subtopic: json.subtopic || subtopic || discipline,
            statement: json.statement,
            correctAnswer: json.correctAnswer === 'C' ? 'C' : 'E',
            difficulty, explanation: json.explanation,
          });
        } catch (err: any) {
          console.error('[generate-question]', err.message);
          return Response.json(createQuestion(discipline, difficulty));
        }
      },
    },
  },
});
