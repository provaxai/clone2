/**
 * Design System — ProvaX AI Premium
 * Tokens compartilhados por todos os componentes
 */

export const ds = {
  // Backgrounds
  bg: {
    base:    'bg-[#080b14]',
    card:    'bg-[#0d1117]',
    raised:  'bg-[#131a27]',
    overlay: 'bg-[#0a0e1a]/95',
  },

  // Borders
  border: {
    base:   'border border-white/[0.06]',
    subtle: 'border border-white/[0.04]',
    hover:  'hover:border-white/[0.12]',
    accent: 'border border-indigo-500/30',
    gold:   'border border-amber-500/30',
    green:  'border border-emerald-500/30',
    red:    'border border-red-500/30',
  },

  // Text
  text: {
    primary: 'text-white',
    muted:   'text-slate-400',
    faint:   'text-slate-500',
    gold:    'text-amber-400',
    blue:    'text-indigo-400',
    green:   'text-emerald-400',
    red:     'text-red-400',
    orange:  'text-orange-400',
  },

  // Labels / badges
  label: 'text-[10px] font-mono font-bold uppercase tracking-widest',

  // Card base
  card: 'bg-[#0d1117] border border-white/[0.06] rounded-2xl',
  cardHover: 'hover:border-white/[0.1] hover:bg-[#131a27] transition-all duration-200',

  // Radius
  radius: {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
  },

  // Shadows
  shadow: {
    card:  'shadow-xl shadow-black/40',
    glow:  {
      gold:  'shadow-lg shadow-amber-500/10',
      blue:  'shadow-lg shadow-indigo-500/10',
      green: 'shadow-lg shadow-emerald-500/10',
    },
  },

  // Buttons
  btn: {
    primary:   'px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer',
    gold:      'px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer',
    ghost:     'px-4 py-2 border border-white/[0.08] hover:bg-white/[0.04] text-slate-300 hover:text-white font-semibold rounded-xl transition-all cursor-pointer',
    danger:    'px-4 py-2 bg-red-950/30 border border-red-500/20 hover:bg-red-950/50 text-red-400 font-bold rounded-xl transition-all cursor-pointer',
    icon:      'p-2 rounded-lg border border-white/[0.06] hover:bg-white/[0.04] text-slate-400 hover:text-white transition-all cursor-pointer',
  },

  // Inputs
  input: 'bg-[#080b14] border border-white/[0.08] focus:border-indigo-500/60 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all',

  // Gradients
  gradient: {
    gold:  'bg-gradient-to-r from-amber-500 to-amber-400',
    blue:  'bg-gradient-to-r from-indigo-600 to-indigo-500',
    green: 'bg-gradient-to-r from-emerald-600 to-emerald-500',
    page:  'bg-gradient-to-b from-[#080b14] to-[#0a0e1a]',
  },

  // Pill / badge
  pill: {
    gold:  'bg-amber-500/10 border border-amber-500/20 text-amber-400',
    blue:  'bg-indigo-500/10 border border-indigo-500/20 text-indigo-400',
    green: 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400',
    red:   'bg-red-500/10 border border-red-500/20 text-red-400',
    gray:  'bg-white/[0.04] border border-white/[0.08] text-slate-400',
  },
} as const;
