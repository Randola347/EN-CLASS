import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Volume2, 
  Copy, 
  Check 
} from 'lucide-react';
import { RESCUE_FORMULAS } from '../data/rescueData';
import { useSpeech } from '../hooks/useSpeech';

export const RescueCenterHub: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const { speak } = useSpeech();

  const categories = [
    { key: 'all', label: 'Todas las Fórmulas (12)' },
    { key: 'repeat', label: '1. Pedir que Repitan' },
    { key: 'meaning', label: '2. Preguntar Significado' },
    { key: 'translate', label: '3. ¿Cómo se dice?' },
    { key: 'buying_time', label: '4. Ganar Tiempo (3-5s)' },
    { key: 'confirm', label: '5. Confirmar Sintonía' }
  ];

  const filtered = selectedCategory === 'all'
    ? RESCUE_FORMULAS
    : RESCUE_FORMULAS.filter(f => f.category === selectedCategory);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 space-y-6">
      {/* Banner de Presentación */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-bold mb-3 border border-blue-400/30">
            <ShieldAlert className="w-3.5 h-3.5 text-blue-300" />
            Centro de Rescate Comunicativo & Safety Belts
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-2">
            ¿Y si no sé algo o me quedo en blanco?
          </h2>
          <p className="text-sm text-blue-100 leading-relaxed">
            Los hablantes nativos nunca sufren en silencio: toman la iniciativa. Aquí tienes las 12 fórmulas de oro para pedir repetición, preguntar términos desconocidos, recomenzar ideas trabadas y ganar 5 segundos para pensar sin quedarte mudo.
          </p>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map(c => (
          <button
            key={c.key}
            onClick={() => setSelectedCategory(c.key)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              selectedCategory === c.key
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Formulas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(formula => (
          <div
            key={formula.id}
            className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                  {formula.categoryLabelEs}
                </span>
                <button
                  onClick={() => speak(formula.audioSample)}
                  className="p-1.5 rounded-xl bg-slate-50 hover:bg-blue-600 text-slate-600 hover:text-white transition border border-slate-200"
                  title="Pronunciación nativa"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-xs text-slate-500 font-medium mb-1">
                Situación: {formula.situationEs}
              </div>

              <h4 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                "{formula.phrase}"
              </h4>

              <p className="text-xs text-blue-700 font-semibold mb-3">
                👉 {formula.meaningEs}
              </p>

              {/* Mini Diálogo Demostrativo */}
              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 text-xs space-y-1.5 mb-3">
                <div className="text-slate-500">
                  <span className="font-bold text-slate-700">Ellos: </span>
                  "{formula.exampleDialogue.speakerA}"
                </div>
                <div className="text-blue-900 font-semibold">
                  <span className="font-bold text-blue-700">Tú dices: </span>
                  "{formula.exampleDialogue.userReply}"
                </div>
              </div>

              <div className="text-[11px] text-slate-500 italic">
                <span className="font-semibold text-slate-700 not-italic">Por qué funciona: </span>
                {formula.whyItWorks}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end">
              <button
                onClick={() => handleCopy(formula.id, formula.phrase)}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center gap-1.5"
              >
                {copiedId === formula.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === formula.id ? '¡Copiado!' : 'Copiar Frase'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
