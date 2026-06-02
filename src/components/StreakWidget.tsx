import React, { useState } from 'react';
import { Flame, Trophy, AlertTriangle, X } from 'lucide-react';

interface StreakWidgetProps {
  daysConsecutive: number;
  studyStreakHistory: string[];
  theme?: 'dark' | 'light';
  compact?: boolean;
}

function getStreakMessage(days: number): { text: string; color: string } {
  if (days === 0) return { text: 'Comece hoje!', color: '#94a3b8' };
  if (days === 1) return { text: 'Primeiro dia! 💪', color: '#f97316' };
  if (days < 3)  return { text: 'Bom começo!', color: '#f97316' };
  if (days < 7)  return { text: 'Consistência crescendo!', color: '#f59e0b' };
  if (days < 14) return { text: 'Você está em chamas! 🔥', color: '#ef4444' };
  if (days < 30) return { text: 'Modo elite ativado! 🏆', color: '#a855f7' };
  return { text: 'Lendário! 🦉', color: '#6366f1' };
}

function getFlameColor(days: number): string {
  if (days === 0) return '#475569';
  if (days < 3)  return '#f97316';
  if (days < 7)  return '#f59e0b';
  if (days < 14) return '#ef4444';
  return '#a855f7';
}

export default function StreakWidget({ daysConsecutive, studyStreakHistory, theme = 'dark', compact = false }: StreakWidgetProps) {
  const [showPanel, setShowPanel] = useState(false);
  const isDark = theme === 'dark';

  const today = new Date().toISOString().split('T')[0];
  const studiedToday = studyStreakHistory.includes(today);
  const flameColor = getFlameColor(daysConsecutive);
  const { text: streakMsg, color: msgColor } = getStreakMessage(daysConsecutive);

  // Recorde pessoal
  const bestStreak = (() => {
    if (!studyStreakHistory.length) return daysConsecutive;
    const sorted = [...studyStreakHistory].sort();
    let best = 1, cur = 1;
    for (let i = 1; i < sorted.length; i++) {
      const prev = new Date(sorted[i - 1]);
      const curr = new Date(sorted[i]);
      const diff = (curr.getTime() - prev.getTime()) / 86400000;
      cur = diff === 1 ? cur + 1 : 1;
      best = Math.max(best, cur);
    }
    return Math.max(best, daysConsecutive);
  })();

  // ── COMPACT (header badge) ──
  if (compact) {
    return (
      <div
        className="flex items-center gap-1.5 cursor-pointer select-none"
        onClick={() => setShowPanel(true)}
        title="Ver streak detalhado"
      >
        <div className={`flex items-center gap-1 bg-slate-950 border border-slate-850 px-2.5 py-1.5 rounded-lg font-mono text-[10px] sm:text-xs transition-all hover:border-orange-500/40 ${!studiedToday ? 'opacity-70' : ''}`}>
          <Flame
            className={`w-4 h-4 ${daysConsecutive > 0 ? 'animate-pulse' : ''}`}
            style={{ color: flameColor }}
          />
          <span className="font-bold text-white uppercase">{daysConsecutive} Dias</span>
          {!studiedToday && daysConsecutive > 0 && (
            <span className="ml-1 text-amber-400 text-[9px]">⚠</span>
          )}
        </div>

        {/* Painel flutuante */}
        {showPanel && (
          <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4" onClick={() => setShowPanel(false)}>
            <div
              className={`w-full max-w-sm rounded-2xl border shadow-2xl p-5 space-y-4 ${isDark ? 'bg-[#0a0d1a] border-slate-800' : 'bg-white border-slate-200'}`}
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5" style={{ color: flameColor }} />
                  <span className={`text-sm font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>Seu Streak</span>
                </div>
                <button onClick={() => setShowPanel(false)} className="text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Número grande + mensagem */}
              <div className="text-center py-2">
                <div className="text-5xl font-black" style={{ color: flameColor }}>
                  {daysConsecutive}
                </div>
                <div className={`text-xs font-mono mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>dias consecutivos</div>
                <div className="text-xs font-bold mt-2" style={{ color: msgColor }}>{streakMsg}</div>
              </div>

              {/* Alerta */}
              {!studiedToday && daysConsecutive > 0 && (
                <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 rounded-lg px-3 py-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <p className="text-[11px] text-amber-300 font-medium">
                    Você ainda não estudou hoje — complete uma tarefa para manter o streak!
                  </p>
                </div>
              )}

              {/* Recorde */}
              <div className={`flex items-center justify-between px-3 py-2 rounded-lg ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <div className="flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Recorde pessoal</span>
                </div>
                <span className="text-[11px] font-black text-amber-400">{bestStreak} dias</span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── FULL (Dashboard card) ──
  return (
    <div className={`rounded-2xl border p-5 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Esquerda: fogo + número + mensagem */}
        <div className="flex items-center gap-4">
          <Flame className="w-8 h-8 animate-pulse shrink-0" style={{ color: flameColor }} />
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black leading-none" style={{ color: flameColor }}>{daysConsecutive}</span>
              <span className={`text-xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>dias seguidos</span>
            </div>
            <div className="text-xs font-bold mt-1" style={{ color: msgColor }}>{streakMsg}</div>
          </div>
        </div>

        {/* Direita: recorde */}
        <div className={`flex items-center gap-1.5 px-3 py-2 rounded-xl ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
          <Trophy className="w-4 h-4 text-amber-400" />
          <div>
            <div className="text-[10px] font-mono text-slate-500">Recorde</div>
            <div className="text-sm font-black text-amber-400">{bestStreak} dias</div>
          </div>
        </div>
      </div>

      {/* Alerta se não estudou hoje */}
      {!studiedToday && daysConsecutive > 0 && (
        <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/25 rounded-lg px-3 py-2 mt-4">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <p className="text-[11px] text-amber-300 leading-snug">
            Complete uma tarefa hoje para não perder seu streak de <b>{daysConsecutive} dias</b>!
          </p>
        </div>
      )}
    </div>
  );
}
