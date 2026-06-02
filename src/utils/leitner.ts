/**
 * Sistema Leitner de Repetição Espaçada
 *
 * Caixas e intervalos de revisão:
 * Box 1 → revisar em 1 dia
 * Box 2 → revisar em 2 dias
 * Box 3 → revisar em 4 dias
 * Box 4 → revisar em 8 dias
 * Box 5 → revisar em 16 dias (dominado)
 */

export interface LeitnerCard {
  id: string;            // mesmo ID do Flashcard
  box: number;           // 1 a 5
  lastReviewed: string;  // YYYY-MM-DD
  nextReview: string;    // YYYY-MM-DD
  totalReviews: number;
  correctStreak: number;
}

export type LeitnerState = Record<string, LeitnerCard>;

const BOX_INTERVALS: Record<number, number> = {
  1: 1,
  2: 2,
  3: 4,
  4: 8,
  5: 16,
};

const today = () => new Date().toISOString().split('T')[0];

const addDays = (date: string, days: number): string => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
};

/** Inicializa um card no Leitner (box 1, devido hoje) */
export function initCard(id: string): LeitnerCard {
  return {
    id,
    box: 1,
    lastReviewed: '',
    nextReview: today(),
    totalReviews: 0,
    correctStreak: 0,
  };
}

/** Processa feedback do usuário e retorna card atualizado */
export function processLeitnerFeedback(
  card: LeitnerCard,
  remembered: boolean
): LeitnerCard {
  const t = today();
  if (remembered) {
    const newBox = Math.min(card.box + 1, 5);
    return {
      ...card,
      box: newBox,
      lastReviewed: t,
      nextReview: addDays(t, BOX_INTERVALS[newBox]),
      totalReviews: card.totalReviews + 1,
      correctStreak: card.correctStreak + 1,
    };
  } else {
    return {
      ...card,
      box: 1,
      lastReviewed: t,
      nextReview: addDays(t, BOX_INTERVALS[1]),
      totalReviews: card.totalReviews + 1,
      correctStreak: 0,
    };
  }
}

/** Retorna se o card está devido para revisão hoje */
export function isDue(card: LeitnerCard): boolean {
  return card.nextReview <= today();
}

/** Ordena IDs dos cards por prioridade: vencidos primeiro, depois por box crescente */
export function sortByPriority(ids: string[], state: LeitnerState): string[] {
  return [...ids].sort((a, b) => {
    const ca = state[a] || initCard(a);
    const cb = state[b] || initCard(b);
    const aDue = isDue(ca) ? 0 : 1;
    const bDue = isDue(cb) ? 0 : 1;
    if (aDue !== bDue) return aDue - bDue;
    return ca.box - cb.box; // menor box primeiro
  });
}

/** Estatísticas do deck */
export function getDeckStats(ids: string[], state: LeitnerState) {
  const cards = ids.map(id => state[id] || initCard(id));
  return {
    dueToday: cards.filter(c => isDue(c)).length,
    box1: cards.filter(c => c.box === 1).length,
    box2: cards.filter(c => c.box === 2).length,
    box3: cards.filter(c => c.box === 3).length,
    box4: cards.filter(c => c.box === 4).length,
    box5: cards.filter(c => c.box === 5).length,
    mastered: cards.filter(c => c.box === 5).length,
    total: cards.length,
  };
}

export const BOX_LABELS = ['', '1 dia', '2 dias', '4 dias', '8 dias', '16 dias'];
export const BOX_COLORS = ['', '#EF4444', '#F97316', '#EAB308', '#22C55E', '#6366F1'];
