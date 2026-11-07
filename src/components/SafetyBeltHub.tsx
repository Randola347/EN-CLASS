import React, { useState } from 'react';
import { Shield, Volume2, Bookmark, Check } from 'lucide-react';
import type { SafetyBeltItem } from '../types';
import { useSpeech } from '../hooks/useSpeech';

interface Props {
  items: SafetyBeltItem[];
  onAddChunk: (chunk: string) => void;
}

export const SafetyBeltHub: React.FC<Props> = ({ items, onAddChunk }) => {
  const [filter, setFilter] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { speak } = useSpeech();

  const filtered = filter === 'all' 
    ? items 
    : items.filter(it => it.category === filter);

  const categories = [
    { key: 'all', label: 'All Salvavidas' },
    { key: 'buying_time', label: '⏳ Ganar Tiempo (3s)' },
    { key: 'rephrasing', label: '🔄 Reencauzar Idea' },
    { key: 'clarifying', label: '❓ Pedir Claridad' },
    { key: 'softening', label: '🤝 Suavizar Opinión' },
  ];

  const handleCopy = (item: SafetyBeltItem) => {
    navigator.clipboard.writeText(item.chunk);
    setCopiedId(item.id);
    onAddChunk(item.chunk);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Introduction banner */}
      <div className="bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border border-indigo-500/30 rounded-2xl p-6 mb-8 text-center sm:text-left sm:flex items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold mb-3">
            <Shield className="w-3.5 h-3.5" />
            Cero Silencios Incómodos
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Safety Belt Toolbox</h2>
          <p className="text-sm text-slate-300 max-w-xl">
            Los nativos usan "fillers" y muletillas estratégicas para ganar de 2 a 4 segundos sin quedarse en blanco. Memoriza estos chunks funcionales para nunca volver a trabarte.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(c => (
          <button
            key={c.key}
            onClick={() => setFilter(c.key)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              filter === c.key
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid of Safety Belts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map(item => (
          <div
            key={item.id}
            className="bg-slate-800/80 border border-slate-700/70 hover:border-indigo-500/50 rounded-2xl p-5 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                  {item.category.replace('_', ' ')}
                </span>
                <button
                  onClick={() => speak(item.chunk)}
                  className="p-1.5 rounded-lg bg-slate-700/60 hover:bg-indigo-600 text-slate-300 hover:text-white transition"
                  title="Listen pronunciation"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              <h3 className="text-lg font-bold text-white mb-1.5 flex items-center gap-2">
                "{item.chunk}"
              </h3>
              <p className="text-sm text-amber-300 font-medium mb-2">
                👉 {item.spanishMeaning}
              </p>
              <p className="text-xs text-slate-400 italic">
                Uso: {item.exampleContext}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-700/50 flex items-center justify-end">
              <button
                onClick={() => handleCopy(item)}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-emerald-600 text-slate-200 hover:text-white transition"
              >
                {copiedId === item.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    <span>¡Guardado a Mastered!</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-3.5 h-3.5" />
                    <span>Adoptar Chunk</span>
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
