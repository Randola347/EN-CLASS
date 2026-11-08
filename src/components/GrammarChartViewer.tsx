import React from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Info, 
  AlertTriangle,
  Sparkles,
  BookOpen
} from 'lucide-react';
import type { TheoryPoint } from '../types/curriculum';

interface Props {
  theory: TheoryPoint;
}

export const GrammarChartViewer: React.FC<Props> = ({ theory }) => {
  const { grammarChart, signalWords, commonMistakes, overviewEs } = theory;

  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-6 shadow-xs">
        <div className="flex items-start sm:items-center gap-2 mb-2">
          <span className="w-8 h-8 shrink-0 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <BookOpen className="w-4 h-4" />
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 break-words">{theory.title}</h3>
        </div>
        <p className="text-sm text-slate-600 leading-relaxed mb-4 break-words">
          {overviewEs}
        </p>

        {/* Structure Formula Banner */}
        <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-0.5">
              Fórmula Estructural:
            </span>
            <span className="text-base font-mono font-bold text-slate-900 break-words">
              {grammarChart.structureFormula}
            </span>
          </div>
          <span className="text-xs text-blue-600 bg-white px-3 py-1 rounded-xl border border-blue-200 font-semibold self-start sm:self-auto">
            Grammar Reference
          </span>
        </div>
      </div>

      {/* Main Grammar Table (Test-English Style) */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-xs overflow-hidden">
        <div className="p-3 sm:p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2 break-words">
            <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
            Tabla de Conjugación Completa: {grammarChart.title}
          </span>
          <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">
            Forma Afirmativa • Negativa • Pregunta • Respuesta Corta
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-xs">
            <thead className="bg-slate-50/70 text-slate-700 border-b border-slate-200 font-bold uppercase tracking-wider">
              <tr>
                <th className="p-4 w-1/6">Sujeto / Persona</th>
                <th className="p-4 w-2/6 text-emerald-800 bg-emerald-50/40">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Afirmativo (+)</span>
                  </div>
                </th>
                <th className="p-4 w-2/6 text-rose-800 bg-rose-50/40">
                  <div className="flex items-center gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-rose-600" />
                    <span>Negativo (-)</span>
                  </div>
                </th>
                <th className="p-4 w-2/6 text-blue-800 bg-blue-50/40">
                  <div className="flex items-center gap-1.5">
                    <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                    <span>Pregunta (?)</span>
                  </div>
                </th>
                <th className="p-4 w-1/6 text-slate-700">Respuestas Cortas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {grammarChart.rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition">
                  <td className="p-4 font-bold text-slate-900 bg-slate-50/30">
                    {row.subject}
                  </td>
                  <td className="p-4 font-semibold text-emerald-950 bg-emerald-50/20">
                    {row.affirmative}
                  </td>
                  <td className="p-4 font-semibold text-rose-950 bg-rose-50/20">
                    {row.negative}
                  </td>
                  <td className="p-4 font-semibold text-blue-950 bg-blue-50/20">
                    {row.question}
                  </td>
                  <td className="p-4 text-slate-600 font-medium">
                    {row.shortAnswer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Usage Rules & Contexts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {grammarChart.usageRules.map((rule, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <h4 className="text-sm font-bold text-slate-900 break-words">{rule.ruleTitle}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-3 break-words">
                {rule.description}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800 italic break-words">
              Ejemplo: "{rule.example}"
            </div>
          </div>
        ))}
      </div>

      {/* Spelling Rules (if any) */}
      {grammarChart.spellingRules && grammarChart.spellingRules.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Reglas Ortográficas de Terminación
            </h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {grammarChart.spellingRules.map((sp, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <span className="font-bold text-slate-700 block mb-1">{sp.condition}</span>
                <span className="text-blue-700 font-semibold block mb-1">➔ {sp.change}</span>
                <span className="text-slate-500 italic block">Ej: {sp.example}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Signal Words (Expresiones y Palabras Clave) */}
      {signalWords && signalWords.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
            Palabras Clave y Marcadores de Tiempo Típicos:
          </span>
          <div className="flex flex-wrap gap-2">
            {signalWords.map((word, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Common Mistakes & Contrast */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-amber-500" />
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
            Errores Comunes del Hispanohablante
          </h4>
        </div>
        <div className="space-y-3">
          {commonMistakes.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/80 text-xs space-y-1.5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-rose-600 font-bold line-through break-words">✗ {m.wrong}</span>
                <span className="text-emerald-700 font-bold break-words">✓ {m.correct}</span>
              </div>
              <p className="text-slate-600 mt-1 break-words">{m.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
