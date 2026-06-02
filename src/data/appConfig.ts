/**
 * FONTE ÚNICA DA VERDADE — ProvaX AI
 * Todos os dados de planos, preços e nomes devem vir daqui.
 * Nunca hardcode valores de planos em componentes individuais.
 */

export const PLANS = {
  free: {
    id: 'free' as const,
    name: 'Gratuito',
    price: 0,
    priceLabel: 'R$ 0,00',
    priceSuffix: '/mês',
    isTrial: false,
    features: [
      'Acesso a 5 questões diárias',
      'Plano de estudos padrão genérico',
      'Até 3 mensagens diárias com a Athena',
      'Flashcards pré-programados limitados',
    ],
  },
  essencial: {
    id: 'essencial' as const,
    name: 'Essencial PRF',
    price: 49.90,
    priceLabel: 'R$ 49,90',
    priceSuffix: '/mês',
    isTrial: true,
    features: [
      'Resolução ilimitada de questões da PRF',
      'Cronograma adaptativo personalizado',
      'Flashcards em todos os modos e Lei Seca',
      'Até 50 mensagens diárias com a Athena',
      'Histórico de progresso e estatísticas básicas',
    ],
  },
  premium: {
    id: 'premium' as const,
    name: 'Athena Supreme',
    price: 97.00,
    priceLabel: 'R$ 97,00',
    priceSuffix: '/mês',
    isTrial: true,
    badge: 'A Experiência da Excelência',
    features: [
      'Mentora Athena 100% ILIMITADA — 24h/dia',
      'Simulados ilimitados gerados por IA sob demanda',
      'Diagnóstico preditivo CEBRASPE e probabilidade de aprovação',
      'Biblioteca inteligente de PDFs (leitura por IA)',
      'Geração personalizada de questões e flashcards',
      'Acesso antecipado a atualizações legislativas urgentes',
      '7 dias GRÁTIS — sem cobrança imediata',
    ],
  },
} as const;

export type PlanId = keyof typeof PLANS;

export const PLAN_LIST = [PLANS.free, PLANS.essencial, PLANS.premium];

/** Retorna o nome do plano pelo ID */
export const getPlanName = (id: PlanId | string): string =>
  PLANS[id as PlanId]?.name ?? 'Gratuito';

/** Retorna o preço formatado pelo ID */
export const getPlanPrice = (id: PlanId | string): string =>
  PLANS[id as PlanId]?.priceLabel ?? 'R$ 0,00';

/** Mapa de cores por plano para uso na UI */
export const PLAN_COLORS: Record<string, string> = {
  free:      'text-slate-400',
  essencial: 'text-indigo-400',
  premium:   'text-amber-400',
};

export const PLAN_BADGES: Record<string, string> = {
  free:      'bg-slate-500/10 border-slate-500/20 text-slate-400',
  essencial: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
  premium:   'bg-amber-500/10 border-amber-500/20 text-amber-400',
};

/** Configurações gerais do app */
export const APP_CONFIG = {
  name: 'ProvaX AI',
  tagline: 'Inteligência Estratégica para Aprovação',
  concurso: 'Polícia Rodoviária Federal (PRF)',
  banca: 'CEBRASPE',
  cutScore: 82,           // nota de corte histórica PRF (%)
  totalQuestoes: 120,     // total de questões na prova
  testDate: '2026-12-15', // data prevista do edital
  suporte: 'contato@provaxai.com.br',
};
