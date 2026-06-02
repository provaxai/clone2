import { ApprovalHistoryEntry, ProgressData } from '../types';

const today = () => new Date().toISOString().split('T')[0];

/**
 * Atualiza ou adiciona uma entrada no histórico de aprovação do dia atual.
 * Mantém no máximo os últimos 30 dias para o gráfico.
 */
export function recordProgressHistory(prev: ProgressData, overrides?: Partial<ApprovalHistoryEntry>): ApprovalHistoryEntry[] {
  const date = today();
  const existing = prev.approvalHistory ?? [];

  const todayEntry: ApprovalHistoryEntry = {
    date,
    prob: overrides?.prob ?? prev.currentApprovalProbability,
    questoes: overrides?.questoes ?? (prev.minutosHojeData === date ? prev.totalQuestionsAnswered : 0),
    acerto: overrides?.acerto ?? prev.overallAccuracyRate,
    minutos: overrides?.minutos ?? (prev.minutosHojeData === date ? prev.minutosHoje : 0),
  };

  // Substitui entrada de hoje se já existir, senão adiciona
  const withoutToday = existing.filter(e => e.date !== date);
  const updated = [...withoutToday, todayEntry].sort((a, b) => a.date.localeCompare(b.date));

  // Mantém últimos 30 dias
  return updated.slice(-30);
}

/**
 * Inicializa o histórico com o estado atual caso esteja vazio.
 */
export function initHistory(progress: ProgressData): ApprovalHistoryEntry[] {
  if (progress.approvalHistory && progress.approvalHistory.length > 0) {
    return progress.approvalHistory;
  }
  // Gera últimos 5 dias de histórico inicial com base no estado atual
  const history: ApprovalHistoryEntry[] = [];
  const base = progress.currentApprovalProbability;
  for (let i = 4; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const variation = (4 - i) * (base * 0.03);
    history.push({
      date: dateStr,
      prob: Math.max(10, Math.round((base - variation + (i === 0 ? 0 : -variation * 0.5)) * 10) / 10),
      questoes: Math.round(progress.totalQuestionsAnswered / 5),
      acerto: Math.max(40, progress.overallAccuracyRate - (4 - i) * 3),
      minutos: Math.round(progress.minutosHoje / 5) || 30,
    });
  }
  return history;
}
