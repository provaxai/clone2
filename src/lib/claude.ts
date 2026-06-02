import Anthropic from '@anthropic-ai/sdk';

/**
 * Modelos Claude disponíveis — ProvaX AI
 *
 * Estratégia de uso:
 * - haiku-3-5  → chat rápido, respostas simples (mais barato)
 * - sonnet-4   → geração de questões, análise de edital (melhor custo-benefício)
 * - opus-4     → análise complexa, estratégia avançada (mais inteligente)
 */
export const CLAUDE_MODELS = {
  // Haiku — rápido e barato (chat diário)
  'claude-haiku-3-5':   { id: 'claude-haiku-3-5',  label: 'Claude Haiku 3.5',  speed: 'Rápido',  cost: 'Barato',  use: 'Chat diário, respostas simples' },
  // Sonnet — equilíbrio perfeito (uso principal)
  'claude-sonnet-4-5':  { id: 'claude-sonnet-4-5', label: 'Claude Sonnet 4.5', speed: 'Rápido',  cost: 'Médio',   use: 'Geração de questões, análise de edital' },
  'claude-sonnet-4':    { id: 'claude-sonnet-4',    label: 'Claude Sonnet 4',   speed: 'Médio',   cost: 'Médio',   use: 'Análise aprofundada, cronograma' },
  // Opus — mais inteligente (análise estratégica)
  'claude-opus-4-5':    { id: 'claude-opus-4-5',    label: 'Claude Opus 4.5',   speed: 'Lento',   cost: 'Alto',    use: 'Estratégia avançada, análise complexa' },
  'claude-opus-4':      { id: 'claude-opus-4',      label: 'Claude Opus 4',     speed: 'Lento',   cost: 'Alto',    use: 'Máxima inteligência' },
} as const;

export type ClaudeModelId = keyof typeof CLAUDE_MODELS;
export const CLAUDE_MODEL_LIST = Object.values(CLAUDE_MODELS);

// Configuração padrão por função — otimizado para custo x qualidade
export const DEFAULT_MODELS = {
  chat:      'claude-haiku-3-5'  as ClaudeModelId, // chat diário — rápido e barato
  questions: 'claude-sonnet-4-5' as ClaudeModelId, // geração de questões — preciso
  schedule:  'claude-haiku-3-5'  as ClaudeModelId, // cronograma — simples
  analyze:   'claude-sonnet-4-5' as ClaudeModelId, // análise de edital/material — preciso
};

// ── Contexto base da Athena ──────────────────────────────────────────────────
const ATHENA_SYSTEM = `Você é a Athena AI, mentora estratégica de elite do ProvaX AI —
plataforma de preparação para o concurso da Polícia Rodoviária Federal (PRF).

Seu perfil:
- Tom: direto, motivador e técnico. Como um instrutor policial de alta performance.
- Especialidade: edital PRF 2021 CEBRASPE, CTB, resoluções CONTRAN, direito administrativo, penal, constitucional.
- Regra CEBRASPE: uma questão errada anula uma certa. Oriente o aluno a deixar em branco quando incerto.
- Foco em aprovação, não em volume de estudo.

Responda SEMPRE em português brasileiro. Seja preciso e cite artigos de lei quando relevante.
Mantenha respostas curtas e diretas para o chat — máximo 3-4 parágrafos.`;

// ── Função principal (Claude direto) ─────────────────────────────────────────
export async function callClaude(options: {
  apiKey: string;
  model?: ClaudeModelId;
  system?: string;
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  maxTokens?: number;
}): Promise<string> {
  const client = new Anthropic({ apiKey: options.apiKey });
  const response = await client.messages.create({
    model: options.model ?? DEFAULT_MODELS.chat,
    max_tokens: options.maxTokens ?? 1024,
    system: options.system ?? ATHENA_SYSTEM,
    messages: options.messages,
  });
  const block = response.content[0];
  if (block.type !== 'text') throw new Error('Resposta inesperada da API');
  return block.text;
}

// ── Chat Athena ──────────────────────────────────────────────────────────────
export async function athenaChat(options: {
  apiKey: string;
  model?: ClaudeModelId;
  aiName?: string;
  aiTone?: string;
  aiCustomInstruction?: string;
  messages: Array<{ sender: string; content: string }>;
  onboardingName?: string;
  approvalProb?: number;
  weakDisciplines?: string[];
}): Promise<string> {
  const {
    apiKey, model, aiName = 'Athena AI', aiTone = 'elite',
    aiCustomInstruction = '', messages,
    onboardingName = 'Recruta', approvalProb = 40, weakDisciplines = [],
  } = options;

  const toneMap: Record<string, string> = {
    elite:      'Instrutor policial de alto desempenho — direto, técnico, motivador.',
    motivator:  'Motivador energético — entusiasta, encoraja constantemente.',
    academic:   'Professor acadêmico — formal, didático, detalhado.',
    direct:     'Direto ao ponto — respostas curtas, objetivas, sem rodeios.',
  };

  const systemPrompt = `${ATHENA_SYSTEM}

Seu nome nesta sessão: ${aiName}
Tom de comunicação: ${toneMap[aiTone] ?? toneMap.elite}
${aiCustomInstruction ? `Instrução adicional: ${aiCustomInstruction}` : ''}

Contexto do aluno:
- Nome: ${onboardingName}
- Probabilidade de aprovação atual: ${approvalProb.toFixed(1)}%
- Disciplinas mais fracas: ${weakDisciplines.join(', ') || 'não identificadas ainda'}`;

  // Converter histórico para formato Anthropic
  const formattedMessages: Array<{ role: 'user' | 'assistant'; content: string }> = [];
  for (const msg of messages) {
    if (msg.sender === 'user') {
      formattedMessages.push({ role: 'user', content: msg.content });
    } else if (msg.sender === 'athena') {
      formattedMessages.push({ role: 'assistant', content: msg.content });
    }
  }

  // Garantir que começa com user
  if (!formattedMessages.length || formattedMessages[0].role !== 'user') return '';

  return callClaude({
    apiKey,
    model: model ?? DEFAULT_MODELS.chat,
    system: systemPrompt,
    messages: formattedMessages,
    maxTokens: 800,
  });
}

// ── Geração de Questão ───────────────────────────────────────────────────────
export async function generateQuestion(options: {
  apiKey: string;
  model?: ClaudeModelId;
  discipline: string;
  difficulty?: string;
  subtopic?: string;
}): Promise<{ statement: string; correctAnswer: 'C' | 'E'; explanation: string; subtopic: string }> {
  const { apiKey, model, discipline, difficulty = 'Média', subtopic } = options;

  const prompt = `Gere UMA questão inédita no padrão CEBRASPE (Certo/Errado) sobre:
Disciplina: ${discipline}
Dificuldade: ${difficulty}
${subtopic ? `Subtópico específico: ${subtopic}` : ''}

Responda EXATAMENTE neste formato JSON (sem markdown, sem explicação extra):
{
  "statement": "texto da assertiva aqui",
  "correctAnswer": "C",
  "explanation": "justificativa técnica citando o artigo ou fundamento legal",
  "subtopic": "nome do subtópico"
}

Regras:
- A assertiva deve ser uma afirmação que pode ser Certo (C) ou Errado (E)
- Cite artigos de lei quando possível
- A justificativa deve explicar POR QUE a assertiva é certa ou errada
- Nível ${difficulty}: ${difficulty === 'Fácil' ? 'conceito direto da lei' : difficulty === 'Média' ? 'detalhe ou exceção relevante' : 'pegadinha sutil ou comparação entre institutos'}`;

  const raw = await callClaude({
    apiKey,
    model: model ?? DEFAULT_MODELS.questions,
    system: 'Você é um especialista em criação de questões para concursos públicos brasileiros, especializado na banca CEBRASPE. Responda apenas com JSON válido.',
    messages: [{ role: 'user', content: prompt }],
    maxTokens: 512,
  });

  try {
    const json = JSON.parse(raw.replace(/```json|```/g, '').trim());
    return {
      statement: json.statement,
      correctAnswer: json.correctAnswer === 'C' ? 'C' : 'E',
      explanation: json.explanation,
      subtopic: json.subtopic || subtopic || discipline,
    };
  } catch {
    throw new Error('Falha ao parsear questão gerada');
  }
}

// ── Análise de Material ──────────────────────────────────────────────────────
export async function analyzeMaterial(options: {
  apiKey: string;
  model?: ClaudeModelId;
  fileName: string;
  textContent: string;
}): Promise<{ summary: string; keyPoints: string[]; question: { statement: string; correctAnswer: 'C' | 'E'; explanation: string } }> {
  const { apiKey, model, fileName, textContent } = options;

  const prompt = `Analise este material de estudo para concurso PRF CEBRASPE:

Título: ${fileName}
Conteúdo: ${textContent.slice(0, 4000)}

Responda em JSON:
{
  "summary": "resumo estratégico em 2-3 frases focado no que cai na prova",
  "keyPoints": ["ponto 1", "ponto 2", "ponto 3", "ponto 4"],
  "question": {
    "statement": "assertiva CEBRASPE sobre o conteúdo",
    "correctAnswer": "C",
    "explanation": "justificativa técnica"
  }
}`;

  const raw = await callClaude({
    apiKey,
    model: model ?? DEFAULT_MODELS.analyze,
    system: 'Especialista em análise de material para concursos públicos PRF CEBRASPE. Responda apenas JSON válido.',
    messages: [{ role: 'user', content: prompt }],
    maxTokens: 700,
  });

  try {
    const json = JSON.parse(raw.replace(/```json|```/g, '').trim());
    return {
      summary: json.summary,
      keyPoints: json.keyPoints,
      question: {
        statement: json.question.statement,
        correctAnswer: json.question.correctAnswer === 'C' ? 'C' : 'E',
        explanation: json.question.explanation,
      },
    };
  } catch {
    throw new Error('Falha ao parsear análise de material');
  }
}
