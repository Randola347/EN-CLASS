import React from 'react';
import { User, Award, Flame, AlertCircle, CheckCircle, LogIn, LogOut, ShieldCheck } from 'lucide-react';
import type { StudentProfile } from '../types';

interface Props {
  profile: StudentProfile;
  onUpdateProfile: (updated: Partial<StudentProfile>) => void;
  isAuthenticated: boolean;
  userEmail?: string;
  onRequestAuth: () => void;
  onLogout: () => void;
}

export const StudentProfileModal: React.FC<Props> = ({
  profile,
  onUpdateProfile,
  isAuthenticated,
  userEmail,
  onRequestAuth,
  onLogout,
}) => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Overview Card */}
      <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 w-full md:w-auto min-w-0">
          <div className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-2xl bg-gradient-to-tr from-indigo-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
            <User className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="text"
                value={profile.student_name}
                onChange={(e) => onUpdateProfile({ student_name: e.target.value })}
                className="text-base sm:text-xl font-bold text-white bg-transparent border-b border-dashed border-slate-600 hover:border-indigo-400 focus:border-indigo-500 outline-none px-1 max-w-full"
              />
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 whitespace-nowrap">
                {profile.current_level} ➔ {profile.target_level}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 break-words">
              {isAuthenticated
                ? 'Progreso sincronizado con Neon.'
                : 'Modo invitado: el progreso de esta sesión no se guarda al recargar.'}
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center justify-between sm:justify-start gap-3 sm:gap-4 w-full md:w-auto">
          <div className="bg-slate-900/80 px-4 py-3 rounded-xl border border-slate-700/60 text-center">
            <div className="flex items-center justify-center gap-1 text-amber-400 font-bold text-base">
              <Flame className="w-4 h-4 fill-current" />
              <span>{profile.streak_days}d</span>
            </div>
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Streak</span>
          </div>

          <div className="bg-slate-900/80 px-4 py-3 rounded-xl border border-slate-700/60 text-center">
            <div className="flex items-center justify-center gap-1 text-emerald-400 font-bold text-base">
              <Award className="w-4 h-4" />
              <span>{profile.drills_completed}</span>
            </div>
            <span className="text-[10px] text-slate-400 uppercase font-semibold">Drills Done</span>
          </div>
        </div>
      </div>

      {/* Account / Login */}
      {isAuthenticated ? (
        <div className="rounded-2xl border border-emerald-500/25 bg-slate-900 p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-white">Cuenta conectada</h3>
              <p className="text-xs text-slate-400 mt-0.5 break-words">
                {userEmail ? `${userEmail} · ` : ''}Tu progreso, respuestas y chunks se guardan en Neon.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-300"
          >
            <LogOut className="w-4 h-4" />
            Cerrar sesión
          </button>
        </div>
      ) : (
        <div className="rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/70 to-slate-900 p-4 sm:p-5 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3 min-w-0">
            <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-300 shrink-0">
              <LogIn className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-white">Estás en modo invitado</h3>
              <p className="text-xs text-slate-400 mt-0.5 break-words">
                Puedes usar todas las clases, listenings y drills sin cuenta. Inicia sesión solo si
                quieres guardar tu progreso y tu racha en Neon.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onRequestAuth}
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
          >
            <LogIn className="w-4 h-4" />
            Iniciar sesión o crear cuenta
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mastered Chunks */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <CheckCircle className="w-4 h-4" />
              <span>Mastered Chunks ({profile.mastered_chunks.length})</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 mb-3">
            Estructuras automáticas listas para usar sin traducir:
          </p>
          {profile.mastered_chunks.length === 0 ? (
            <p className="rounded-xl border border-slate-700 bg-slate-900/60 p-3 text-xs text-slate-500">
              Todavía no has dominado ningún chunk. Completa los Micro-Listening y Reflex Prompts y
              aparecerán aquí.
            </p>
          ) : (
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto no-scrollbar pr-1">
              {profile.mastered_chunks.map((chk, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-lg text-xs font-medium"
                >
                  "{chk}"
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Error Bank */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
              <AlertCircle className="w-4 h-4" />
              <span>Error Bank & Mental Blocks ({profile.error_bank.length})</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 mb-3">
            Vicios lingüísticos detectados y su reconfiguración:
          </p>
          {profile.error_bank.length === 0 ? (
            <p className="rounded-xl border border-slate-700 bg-slate-900/60 p-3 text-xs text-slate-500">
              Sin errores registrados todavía. Cuando falles un drill, verás aquí la corrección.
            </p>
          ) : (
            <div className="space-y-2 max-h-48 overflow-y-auto no-scrollbar pr-1 text-xs">
              {profile.error_bank.map((err, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-slate-900/60 border border-rose-500/20">
                  <div className="text-rose-400 line-through">✗ {err.error}</div>
                  <div className="text-emerald-400 font-medium mt-0.5">✓ {err.correction}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
