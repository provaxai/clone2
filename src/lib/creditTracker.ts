/**
 * ProvaX AI — Sistema de Monitoramento de Créditos
 * Rastreia uso de créditos por interação, modelo e aluno
 * 1 crédito ≈ R$ 0,01
 */

export interface CreditEntry {
  id: string;
  timestamp: string;        // ISO
  studentId: string;        // ID do aluno (ou 'system' para geração em lote)
  studentName: string;
  action: 'chat' | 'question' | 'analyze' | 'schedule';
  provider: 'anthropic' | 'openai' | 'google' | 'mock';
  model: string;
  credits: number;          // total de créditos gastos nesta interação
  baseCredits: number;
  multiplier: number;
}

export interface CreditSummary {
  totalCredits: number;
  totalBRL: number;         // créditos × 0,01
  byStudent: Record<string, { name: string; credits: number; interactions: number }>;
  byModel: Record<string, { credits: number; interactions: number }>;
  byAction: Record<string, number>;
  byDay: Record<string, number>;
  lastUpdated: string;
}

const LEDGER_KEY = 'provax_credit_ledger';
const MAX_ENTRIES = 5000; // limitar tamanho do ledger

// ── Tabela de créditos por modelo ─────────────────────────────────────────
export const MODEL_CREDITS: Record<string, { base: number; multiplier: number }> = {
  'claude-haiku-3-5':  { base: 1, multiplier: 1  },
  'claude-sonnet-4-5': { base: 1, multiplier: 5  },
  'claude-sonnet-4':   { base: 1, multiplier: 8  },
  'claude-opus-4-5':   { base: 1, multiplier: 25 },
  'claude-opus-4':     { base: 1, multiplier: 40 },
  'gemini-2.0-flash':  { base: 1, multiplier: 1  },
  'gemini-2.5-flash':  { base: 1, multiplier: 3  },
  'gemini-2.5-pro':    { base: 1, multiplier: 10 },
  'gemini-1.5-flash':  { base: 1, multiplier: 1  },
  'gemini-1.5-pro':    { base: 1, multiplier: 7  },
  'gpt-4o-mini':       { base: 1, multiplier: 1  },
  'gpt-4o':            { base: 1, multiplier: 5  },
  'gpt-4-turbo':       { base: 1, multiplier: 10 },
  'o1-mini':           { base: 1, multiplier: 15 },
  'o3-mini':           { base: 1, multiplier: 20 },
  'mock':              { base: 0, multiplier: 0  },
};

export function getCreditsForModel(model: string): { base: number; multiplier: number; total: number } {
  const c = MODEL_CREDITS[model] ?? { base: 1, multiplier: 1 };
  return { ...c, total: c.base * c.multiplier };
}

// ── Ledger (localStorage) ─────────────────────────────────────────────────
function getLedger(): CreditEntry[] {
  try {
    return JSON.parse(localStorage.getItem(LEDGER_KEY) || '[]');
  } catch { return []; }
}

function saveLedger(entries: CreditEntry[]): void {
  // Manter apenas os últimos MAX_ENTRIES
  const trimmed = entries.slice(-MAX_ENTRIES);
  localStorage.setItem(LEDGER_KEY, JSON.stringify(trimmed));
}

// ── Registrar uso ─────────────────────────────────────────────────────────
export function trackCredit(options: {
  studentId: string;
  studentName: string;
  action: CreditEntry['action'];
  provider: CreditEntry['provider'];
  model: string;
}): CreditEntry {
  const c = getCreditsForModel(options.provider === 'mock' ? 'mock' : options.model);
  const entry: CreditEntry = {
    id: `cr-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    timestamp: new Date().toISOString(),
    studentId: options.studentId,
    studentName: options.studentName,
    action: options.action,
    provider: options.provider,
    model: options.model,
    credits: c.total,
    baseCredits: c.base,
    multiplier: c.multiplier,
  };
  const ledger = getLedger();
  ledger.push(entry);
  saveLedger(ledger);
  return entry;
}

// ── Calcular resumo ───────────────────────────────────────────────────────
export function getCreditSummary(days = 30): CreditSummary {
  const ledger = getLedger();
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - days);
  const filtered = ledger.filter(e => new Date(e.timestamp) >= cutoff);

  const summary: CreditSummary = {
    totalCredits: 0,
    totalBRL: 0,
    byStudent: {},
    byModel: {},
    byAction: {},
    byDay: {},
    lastUpdated: new Date().toISOString(),
  };

  for (const entry of filtered) {
    summary.totalCredits += entry.credits;

    // Por aluno
    if (!summary.byStudent[entry.studentId]) {
      summary.byStudent[entry.studentId] = { name: entry.studentName, credits: 0, interactions: 0 };
    }
    summary.byStudent[entry.studentId].credits += entry.credits;
    summary.byStudent[entry.studentId].interactions += 1;

    // Por modelo
    if (!summary.byModel[entry.model]) summary.byModel[entry.model] = { credits: 0, interactions: 0 };
    summary.byModel[entry.model].credits += entry.credits;
    summary.byModel[entry.model].interactions += 1;

    // Por ação
    summary.byAction[entry.action] = (summary.byAction[entry.action] || 0) + entry.credits;

    // Por dia
    const day = entry.timestamp.split('T')[0];
    summary.byDay[day] = (summary.byDay[day] || 0) + entry.credits;
  }

  summary.totalBRL = summary.totalCredits * 0.01;
  return summary;
}

export function getAllEntries(limit = 100): CreditEntry[] {
  return getLedger().slice(-limit).reverse();
}

export function clearLedger(): void {
  localStorage.removeItem(LEDGER_KEY);
}

// ── Dados simulados para demonstração ────────────────────────────────────
export function seedDemoData(): void {
  const existing = getLedger();
  if (existing.length > 0) return; // já tem dados

  const students = [
    { id: '1', name: 'Guilherme Toledo' },
    { id: '2', name: 'Ana Oliveira' },
    { id: '3', name: 'Carlos Eduardo' },
    { id: '4', name: 'Mariana Costa' },
    { id: '5', name: 'Roberto Mendes' },
    { id: '6', name: 'Juliana Vieira' },
  ];
  const models = ['claude-haiku-3-5', 'claude-sonnet-4-5', 'gpt-4o-mini', 'gpt-4o', 'gemini-2.5-flash'];
  const actions: CreditEntry['action'][] = ['chat', 'question', 'analyze', 'schedule'];
  const providers: CreditEntry['provider'][] = ['anthropic', 'anthropic', 'openai', 'google'];

  const entries: CreditEntry[] = [];
  const now = new Date();

  for (let d = 29; d >= 0; d--) {
    const date = new Date(now);
    date.setDate(date.getDate() - d);
    const interactionsPerDay = 20 + Math.floor(Math.random() * 30);

    for (let i = 0; i < interactionsPerDay; i++) {
      const student = students[Math.floor(Math.random() * students.length)];
      const model = models[Math.floor(Math.random() * models.length)];
      const action = actions[Math.floor(Math.random() * actions.length)];
      const provider = model.startsWith('claude') ? 'anthropic' : model.startsWith('gpt') || model.startsWith('o') ? 'openai' : 'google';
      const c = getCreditsForModel(model);
      const ts = new Date(date);
      ts.setHours(Math.floor(Math.random() * 16) + 6);
      ts.setMinutes(Math.floor(Math.random() * 60));

      entries.push({
        id: `demo-${d}-${i}`,
        timestamp: ts.toISOString(),
        studentId: student.id,
        studentName: student.name,
        action, provider, model,
        credits: c.total,
        baseCredits: c.base,
        multiplier: c.multiplier,
      });
    }
  }

  saveLedger(entries);
}
