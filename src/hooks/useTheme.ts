/**
 * Hook que retorna tokens de classes Tailwind baseados no tema.
 * Uso: const t = useTheme(theme)
 */
export function useTheme(theme: 'dark' | 'light' = 'dark') {
  const d = theme === 'dark';
  return {
    d,
    // Backgrounds
    page:    d ? 'bg-[#080b14]'  : 'bg-slate-50',
    card:    d ? 'bg-[#0d1117]'  : 'bg-white',
    raised:  d ? 'bg-[#131a27]'  : 'bg-slate-50',
    input:   d ? 'bg-[#131a27]'  : 'bg-white',
    // Borders
    border:  d ? 'border-white/[0.06]'  : 'border-slate-200',
    divider: d ? 'divide-white/[0.06]'  : 'divide-slate-200',
    // Text
    text:    d ? 'text-white'    : 'text-slate-900',
    muted:   d ? 'text-slate-400': 'text-slate-500',
    faint:   d ? 'text-slate-500': 'text-slate-400',
    // Input
    inputCls: d
      ? 'bg-[#131a27] border border-white/[0.08] focus:border-indigo-500/60 text-white placeholder-slate-600'
      : 'bg-white border border-slate-200 focus:border-indigo-400 text-slate-900 placeholder-slate-400',
    // Select
    selectCls: d
      ? 'bg-[#131a27] border border-white/[0.08] text-white'
      : 'bg-white border border-slate-200 text-slate-900',
    // Card classes
    cardCls: d
      ? 'bg-[#0d1117] border border-white/[0.06] rounded-2xl'
      : 'bg-white border border-slate-200 rounded-2xl shadow-sm',
    // Hover
    hoverCard: d ? 'hover:bg-white/[0.03]' : 'hover:bg-slate-50',
    // Track/progress bar
    track: d ? 'bg-white/[0.06]' : 'bg-slate-200',
  } as const;
}
