import { createFileRoute } from "@tanstack/react-router";
import { analyzeMaterial as analyzeWithClaude, DEFAULT_MODELS, type ClaudeModelId } from "../../lib/claude";
import { analyzeMaterial as analyzeMock } from "../../lib/provaxApi";

export const Route = createFileRoute("/api/analyze-library")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const body = await request.json().catch(() => ({}));

        const anthropicKey: string = body.anthropicKey || process.env.ANTHROPIC_API_KEY || '';
        const fileName = body.fileName || 'Material';
        const textContent = body.textContent || '';

        if (!anthropicKey || !textContent.trim()) {
          return Response.json(analyzeMock(fileName, textContent));
        }

        try {
          const result = await analyzeWithClaude({
            apiKey: anthropicKey,
            model: (body.claudeModel ?? DEFAULT_MODELS.analyze) as ClaudeModelId,
            fileName,
            textContent,
          });

          return Response.json({
            summary: result.summary,
            keyPoints: result.keyPoints,
            athenaQuestion: {
              id: `lib-${Date.now()}`,
              discipline: 'Análise de Material',
              subtopic: fileName,
              statement: result.question.statement,
              correctAnswer: result.question.correctAnswer,
              difficulty: 'Média' as const,
              explanation: result.question.explanation,
            },
          });
        } catch (err: any) {
          console.error('[analyze-library]', err.message);
          return Response.json(analyzeMock(fileName, textContent));
        }
      },
    },
  },
});
