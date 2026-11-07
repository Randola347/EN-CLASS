import React, { useState } from 'react';
import { User, Award, Flame, AlertCircle, CheckCircle, Copy, Check, Download } from 'lucide-react';
import type { StudentProfile } from '../types';

interface Props {
  profile: StudentProfile;
  onUpdateProfile: (updated: Partial<StudentProfile>) => void;
}

export const StudentProfileModal: React.FC<Props> = ({ profile, onUpdateProfile }) => {
  const [copied, setCopied] = useState(false);

  const formattedJson = JSON.stringify(
    {
      student_name: profile.student_name,
      current_level: profile.current_level,
      obstacles: profile.obstacles,
      mastered_chunks: profile.mastered_chunks,
      error_bank: profile.error_bank,
      session_summary: profile.session_summary,
    },
    null,
    2
  );

  const handleCopyJson = () => {
    navigator.clipboard.writeText(formattedJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJson = () => {
    const blob = new Blob([formattedJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `student_profile_${profile.student_name.toLowerCase().replace(/\s+/g, '_')}.json`;
    a.click();
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Profile Overview Card */}
      <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
            <User className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={profile.student_name}
                onChange={(e) => onUpdateProfile({ student_name: e.target.value })}
                className="text-xl font-bold text-white bg-transparent border-b border-dashed border-slate-600 hover:border-indigo-400 focus:border-indigo-500 outline-none px-1"
              />
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                {profile.current_level} ➔ {profile.target_level}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Active Focus: Overcoming hesitation & eliminating mental Spanish translation.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-4">
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
          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1">
            {profile.mastered_chunks.map((chk, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-lg text-xs font-medium"
              >
                "{chk}"
              </span>
            ))}
          </div>
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
          <div className="space-y-2 max-h-48 overflow-y-auto pr-1 text-xs">
            {profile.error_bank.map((err, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-slate-900/60 border border-rose-500/20">
                <div className="text-rose-400 line-through">✗ {err.error}</div>
                <div className="text-emerald-400 font-medium mt-0.5">✓ {err.correction}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Database / JSON Export System */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              System Database Payload (Standard Output)
            </h3>
            <p className="text-xs text-slate-400">
              Formato JSON estructurado para persistencia multiusuario en base de datos.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyJson}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition border border-slate-700"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied!' : 'Copy JSON'}
            </button>
            <button
              onClick={handleDownloadJson}
              className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition shadow"
            >
              <Download className="w-3.5 h-3.5" />
              Export
            </button>
          </div>
        </div>

        <pre className="bg-slate-950 p-4 rounded-xl text-indigo-300 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed max-h-60">
          {formattedJson}
        </pre>
      </div>
    </div>
  );
};
