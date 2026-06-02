/**
 * ProvaX AI — Sistema Unificado de Provedores de IA
 * Suporta: Anthropic Claude + OpenAI GPT
 *
 * Arquitetura:
 * - Cada função (chat, questões, análise, cronograma) pode usar um modelo diferente
 * - Fallback automático para mock se não houver chave
 * - Sistema de notificação de novos modelos
 */

// ─────────────────────────────────────────────────────────────────────────────
// REGISTRO DE MODELOS
// ─────────────────────────────────────────────────────────────────────────────

export interface AIModel {
  id: string;
  provider: 'anthropic' | 'openai' | 'google';
  label: string;
  speed: 'Muito Rápido' | 'Rápido' | 'Médio' | 'Lento';
  cost: 'Muito Barato' | 'Barato' | 'Médio' | 'Alto' | 'Muito Alto';
  intelligence: 1 | 2 | 3 | 4 | 5; // 1=básico, 5=máximo
  contextWindow: string;
  bestFor: string[];
  badge: string;
  badgeCls: string;
  isNew?: boolean;
  isRecommended?: boolean;
  // Sistema de créditos (1 crédito ≈ R$ 0,01)
  credits: {
    base: number;        // créditos base por interação
    multiplier: number;  // multiplicador do modelo
    total: number;       // total = base × multiplier
    perMonth: string;    // estimativa para 500 alunos ativos/mês
  };
}

// Tabela de créditos: 1 crédito ≈ R$ 0,01 | estimativa 500 alunos/mês com uso moderado
export const AI_MODELS: AIModel[] = [
  // ── Anthropic Claude ──────────────────────────────────────────────────────
  {
    id: 'claude-haiku-3-5',
    provider: 'anthropic',
    label: 'Claude Haiku 3.5',
    speed: 'Muito Rápido',
    cost: 'Muito Barato',
    intelligence: 2,
    contextWindow: '200k tokens',
    bestFor: ['chat', 'schedule'],
    badge: 'Rápido · Barato',
    badgeCls: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    credits: { base: 1, multiplier: 1, total: 1, perMonth: '~R$ 50–150' },
  },
  {
    id: 'claude-sonnet-4-5',
    provider: 'anthropic',
    label: 'Claude Sonnet 4.5',
    speed: 'Rápido',
    cost: 'Médio',
    intelligence: 4,
    contextWindow: '200k tokens',
    bestFor: ['questions', 'analyze', 'chat'],
    badge: 'Melhor custo-benefício ⭐',
    badgeCls: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    isRecommended: true,
    credits: { base: 1, multiplier: 5, total: 5, perMonth: '~R$ 100–250' },
  },
  {
    id: 'claude-sonnet-4',
    provider: 'anthropic',
    label: 'Claude Sonnet 4',
    speed: 'Médio',
    cost: 'Médio',
    intelligence: 4,
    contextWindow: '200k tokens',
    bestFor: ['analyze', 'questions'],
    badge: 'Equilibrado',
    badgeCls: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    credits: { base: 1, multiplier: 8, total: 8, perMonth: '~R$ 150–350' },
  },
  {
    id: 'claude-opus-4-5',
    provider: 'anthropic',
    label: 'Claude Opus 4.5',
    speed: 'Lento',
    cost: 'Alto',
    intelligence: 5,
    contextWindow: '200k tokens',
    bestFor: ['analyze'],
    badge: 'Alta inteligência',
    badgeCls: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    credits: { base: 1, multiplier: 25, total: 25, perMonth: '~R$ 400–800' },
  },
  {
    id: 'claude-opus-4',
    provider: 'anthropic',
    label: 'Claude Opus 4',
    speed: 'Lento',
    cost: 'Muito Alto',
    intelligence: 5,
    contextWindow: '200k tokens',
    bestFor: ['analyze'],
    badge: 'Máxima precisão',
    badgeCls: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    credits: { base: 1, multiplier: 40, total: 40, perMonth: '~R$ 600–1.200' },
  },

  // ── Google Gemini ─────────────────────────────────────────────────────────
  {
    id: 'gemini-2.0-flash',
    provider: 'google',
    label: 'Gemini 2.0 Flash',
    speed: 'Muito Rápido',
    cost: 'Muito Barato',
    intelligence: 3,
    contextWindow: '1M tokens',
    bestFor: ['chat', 'schedule'],
    badge: 'Mais rápido · 1M contexto',
    badgeCls: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    isNew: true,
    credits: { base: 1, multiplier: 1, total: 1, perMonth: '~R$ 30–80' },
  },
  {
    id: 'gemini-2.5-flash',
    provider: 'google',
    label: 'Gemini 2.5 Flash',
    speed: 'Rápido',
    cost: 'Barato',
    intelligence: 4,
    contextWindow: '1M tokens',
    bestFor: ['chat', 'questions', 'schedule'],
    badge: 'Melhor custo-benefício ⭐',
    badgeCls: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    isRecommended: true,
    isNew: true,
    credits: { base: 1, multiplier: 3, total: 3, perMonth: '~R$ 60–150' },
  },
  {
    id: 'gemini-2.5-pro',
    provider: 'google',
    label: 'Gemini 2.5 Pro',
    speed: 'Médio',
    cost: 'Médio',
    intelligence: 5,
    contextWindow: '1M tokens',
    bestFor: ['analyze', 'questions'],
    badge: 'Máxima inteligência Google',
    badgeCls: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    isNew: true,
    credits: { base: 1, multiplier: 10, total: 10, perMonth: '~R$ 150–300' },
  },
  {
    id: 'gemini-1.5-flash',
    provider: 'google',
    label: 'Gemini 1.5 Flash',
    speed: 'Muito Rápido',
    cost: 'Muito Barato',
    intelligence: 2,
    contextWindow: '1M tokens',
    bestFor: ['chat', 'schedule'],
    badge: 'Estável · Testado',
    badgeCls: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    credits: { base: 1, multiplier: 1, total: 1, perMonth: '~R$ 20–60' },
  },
  {
    id: 'gemini-1.5-pro',
    provider: 'google',
    label: 'Gemini 1.5 Pro',
    speed: 'Médio',
    cost: 'Médio',
    intelligence: 4,
    contextWindow: '2M tokens',
    bestFor: ['analyze', 'questions'],
    badge: 'Contexto longo',
    badgeCls: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    credits: { base: 1, multiplier: 7, total: 7, perMonth: '~R$ 120–250' },
  },

  // ── OpenAI GPT ────────────────────────────────────────────────────────────
  {
    id: 'gpt-4o-mini',
    provider: 'openai',
    label: 'GPT-4o Mini',
    speed: 'Muito Rápido',
    cost: 'Muito Barato',
    intelligence: 2,
    contextWindow: '128k tokens',
    bestFor: ['chat', 'schedule'],
    badge: 'Rápido · Barato',
    badgeCls: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    credits: { base: 1, multiplier: 1, total: 1, perMonth: '~R$ 40–100' },
  },
  {
    id: 'gpt-4o',
    provider: 'openai',
    label: 'GPT-4o',
    speed: 'Rápido',
    cost: 'Médio',
    intelligence: 4,
    contextWindow: '128k tokens',
    bestFor: ['questions', 'analyze', 'chat'],
    badge: 'Recomendado OpenAI ⭐',
    badgeCls: 'text-green-400 bg-green-500/10 border-green-500/20',
    isRecommended: true,
    credits: { base: 1, multiplier: 5, total: 5, perMonth: '~R$ 100–250' },
  },
  {
    id: 'gpt-4-turbo',
    provider: 'openai',
    label: 'GPT-4 Turbo',
    speed: 'Médio',
    cost: 'Alto',
    intelligence: 4,
    contextWindow: '128k tokens',
    bestFor: ['questions', 'analyze'],
    badge: 'Equilibrado',
    badgeCls: 'text-green-400 bg-green-500/10 border-green-500/20',
    credits: { base: 1, multiplier: 10, total: 10, perMonth: '~R$ 180–400' },
  },
  {
    id: 'o1-mini',
    provider: 'openai',
    label: 'OpenAI o1 Mini',
    speed: 'Lento',
    cost: 'Alto',
    intelligence: 5,
    contextWindow: '128k tokens',
    bestFor: ['analyze', 'questions'],
    badge: 'Raciocínio avançado',
    badgeCls: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    isNew: true,
    credits: { base: 1, multiplier: 15, total: 15, perMonth: '~R$ 250–500' },
  },
  {
    id: 'o3-mini',
    provider: 'openai',
    label: 'OpenAI o3 Mini',
    speed: 'Lento',
    cost: 'Alto',
    intelligence: 5,
    contextWindow: '200k tokens',
    bestFor: ['analyze'],
    badge: 'Novo · Raciocínio máximo',
    badgeCls: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    isNew: true,
    credits: { base: 1, multiplier: 20, total: 20, perMonth: '~R$ 350–700' },
  },
];

export const CLAUDE_MODELS = AI_MODELS.filter(m => m.provider === 'anthropic');
export const OPENAI_MODELS  = AI_MODELS.filter(m => m.provider === 'openai');

export const getModel = (id: string) => AI_MODELS.find(m => m.id === id);

// ─────────────────────────────────────────────────────────────────────────────
// SISTEMA DE NOTIFICAÇÃO DE NOVOS MODELOS
// ─────────────────────────────────────────────────────────────────────────────

const NEW_MODELS_KEY = 'provax_known_model_ids';

export interface ModelUpdateNotification {
  newModels: AIModel[];
  hasUpdates: boolean;
}

/**
 * Verifica se há modelos novos que o admin ainda não viu.
 * Retorna lista de modelos novos e se há atualizações.
 */
export function checkForNewModels(): ModelUpdateNotification {
  try {
    const known = JSON.parse(localStorage.getItem(NEW_MODELS_KEY) || '[]') as string[];
    const allIds = AI_MODELS.map(m => m.id);
    const newModels = AI_MODELS.filter(m => !known.includes(m.id));
    return { newModels, hasUpdates: newModels.length > 0 };
  } catch {
    return { newModels: [], hasUpdates: false };
  }
}

/** Marca todos os modelos atuais como "vistos" pelo admin. */
export function markModelsAsSeen(): void {
  localStorage.setItem(NEW_MODELS_KEY, JSON.stringify(AI_MODELS.map(m => m.id)));
}

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULTS POR FUNÇÃO — escolha o melhor de cada provider
// ─────────────────────────────────────────────────────────────────────────────

export const DEFAULT_CONFIGS = {
  anthropic: {
    chat:      'claude-haiku-3-5',
    questions: 'claude-sonnet-4-5',
    analyze:   'claude-sonnet-4-5',
    schedule:  'claude-haiku-3-5',
  },
  openai: {
    chat:      'gpt-4o-mini',
    questions: 'gpt-4o',
    analyze:   'gpt-4o',
    schedule:  'gpt-4o-mini',
  },
  google: {
    chat:      'gemini-2.0-flash',
    questions: 'gemini-2.5-flash',
    analyze:   'gemini-2.5-pro',
    schedule:  'gemini-2.0-flash',
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// CHAMADA UNIFICADA — Claude ou GPT com mesma interface
// ─────────────────────────────────────────────────────────────────────────────

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function callAI(options: {
  provider: 'anthropic' | 'openai' | 'google';
  apiKey: string;
  model: string;
  system: string;
  messages: ChatMessage[];
  maxTokens?: number;
}): Promise<string> {
  const { provider, apiKey, model, system, messages, maxTokens = 1024 } = options;

  if (provider === 'anthropic') {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    const client = new Anthropic({ apiKey });
    const response = await client.messages.create({
      model,
      max_tokens: maxTokens,
      system,
      messages,
    });
    const block = response.content[0];
    if (block.type !== 'text') throw new Error('Unexpected response type');
    return block.text;
  }

  if (provider === 'openai') {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        max_tokens: maxTokens,
        messages: [{ role: 'system', content: system }, ...messages],
      }),
    });
    if (!response.ok) throw new Error(`OpenAI error: ${response.status}`);
    const data = await response.json();
    return data.choices?.[0]?.message?.content ?? '';
  }

  if (provider === 'google') {
    // Gemini via REST API (sem SDK adicional)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const geminiMessages = messages.map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));
    const body = {
      system_instruction: { parts: [{ text: system }] },
      contents: geminiMessages,
      generationConfig: { maxOutputTokens: maxTokens, temperature: 0.7 },
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(`Gemini error: ${response.status}`);
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
  }

  throw new Error(`Provider não suportado: ${provider}`);
}
