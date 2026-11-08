import React, { useState } from 'react';
import { 
  BookOpen, 
  Lightbulb, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  Volume2 
} from 'lucide-react';
import type { WorkbookPrompt } from '../types/curriculum';
import { useSpeech } from '../hooks/useSpeech';

interface Props {
  prompts: WorkbookPrompt[];
  savedAnswers: Record<string, string>;
  onSaveAnswer: (questionId: string, answerText: string) => void;
}

export const InteractiveWorkbook: React.FC<Props> = ({ prompts, savedAnswers, onSaveAnswer }) => {
  const [activePromptId, setActivePromptId] = useState<string>(prompts[0]?.id || '');
  const [localTexts, setLocalTexts] = useState<Record<string, string>>(savedAnswers || {});
  const [showModels, setShowModels] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [savedSuccessId, setSavedSuccessId] = useState<string | null>(null);

  const { speak } = useSpeech();

  const currentPrompt = prompts.find(p => p.id === activePromptId) || prompts[0];
  const currentIndex = prompts.findIndex(p => p.id === activePromptId);

  const completedCount = prompts.filter(p => (localTexts[p.id] || savedAnswers[p.id] || '').trim().length > 3).length;
  const progressPercent = Math.round((completedCount / prompts.length) * 100);

  const handleTextChange = (qId: string, text: string) => {
    setLocalTexts(prev => ({ ...prev, [qId]: text }));
  };

  const handleSave = (qId: string) => {
    const textToSave = localTexts[qId] ?? savedAnswers[qId] ?? '';
    onSaveAnswer(qId, textToSave);
    setSavedSuccessId(qId);
    setTimeout(() => setSavedSuccessId(null), 2500);
  };

  const handleCopyForReview = (p: WorkbookPrompt) => {
    const userAns = localTexts[p.id] || savedAnswers[p.id] || '(Aún sin redactar)';
    const promptClipboard = `Por favor actúa como profesor nativo de inglés. Revisa mi respuesta a la siguiente situación cotidiana:
Situación: ${p.situationEs}
Interlocutor: "${p.promptEn}"
Mi respuesta en inglés: "${userAns}"

Por favor dime:
1. ¿Se escucha natural en una conversación diaria?
2. ¿Qué pequeños ajustes gramaticales o de vocabulario me recomiendas?
3. Dame 2 formas alternativas de responder.`;

    navigator.clipboard.writeText(promptClipboard);
    setCopiedId(p.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-3xl shadow-xs overflow-hidden">
      {/* Top Header & Progress */}
      <div className="p-4 sm:p-6 border-b border-slate-100 bg-slate-50/70 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold mb-2 max-w-full">
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Workbook de Práctica Extensiva ({prompts.length} Situaciones Reales)</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 break-words">
            Cuaderno de Redacción y Respuesta Cotidiana
          </h3>
          <p className="text-xs text-slate-600 mt-0.5 break-words">
            Escribe tu respuesta con tus propias palabras. Se guarda en tu base de datos para que la consultes o la revises cuando quieras.
          </p>
        </div>

        {/* Progress Pill */}
        <div className="bg-white px-4 sm:px-5 py-3 rounded-2xl border border-slate-200 shadow-2xs flex items-center justify-between sm:justify-start gap-4 w-full md:w-auto shrink-0">
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tu Avance</div>
            <div className="text-base font-black text-blue-600">{completedCount} de {prompts.length} respondidas</div>
          </div>
          <div className="w-14 h-14 relative flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-100"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-blue-600 transition-all duration-300"
                strokeDasharray={`${progressPercent}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute text-xs font-black text-slate-800">{progressPercent}%</span>
          </div>
        </div>
      </div>

      {/* Main Double Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Left Col: Questions Directory (items list) */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-100 p-3 sm:p-4 bg-slate-50/50 space-y-1.5 max-h-[260px] lg:max-h-[640px] overflow-y-auto">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
            Lista de Ejercicios (1 - {prompts.length})
          </div>
          {prompts.map((p, idx) => {
            const hasAnswer = (localTexts[p.id] || savedAnswers[p.id] || '').trim().length > 3;
            const isSelected = p.id === currentPrompt.id;

            return (
              <button
                key={p.id}
                onClick={() => setActivePromptId(p.id)}
                className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-600/20'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50/30'
                }`}
              >
                <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                  isSelected 
                    ? 'bg-white text-blue-600' 
                    : hasAnswer 
                      ? 'bg-emerald-100 text-emerald-700 font-bold' 
                      : 'bg-slate-100 text-slate-500'
                }`}>
                  {idx + 1}
                </span>

                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                    {p.situationEs}
                  </p>
                  <p className={`text-[11px] line-clamp-1 mt-0.5 ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                    "{p.promptEn}"
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Col: Active Prompt Workspace */}
        <div className="lg:col-span-8 p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-6 min-w-0">
          <div className="space-y-6">
            {/* Active Prompt Header */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200 self-start">
                  Ejercicio #{currentIndex + 1} de {prompts.length}
                </span>
                <span className="text-xs font-semibold text-slate-400 capitalize">
                  Categoría: {currentPrompt.category.replace('_', ' ')}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug break-words">
                {currentPrompt.situationEs}
              </h4>

              {/* What the other person says with pronunciation */}
              <div className="mt-3 p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start sm:items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block mb-0.5">
                    El interlocutor te dice:
                  </span>
                  <p className="text-sm sm:text-base font-semibold text-slate-800 italic break-words">
                    "{currentPrompt.promptEn}"
                  </p>
                </div>
                <button
                  onClick={() => speak(currentPrompt.promptEn)}
                  className="p-2.5 shrink-0 rounded-xl bg-white hover:bg-blue-600 text-blue-600 hover:text-white transition shadow-2xs border border-blue-200"
                  title="Escuchar cómo lo dice un nativo"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>

              {/* Guidance Tip */}
              <div className="mt-2 text-xs text-slate-500 flex items-start gap-1.5">
                <Lightbulb className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="break-words">Pista práctica: {currentPrompt.guidanceTipEs}</span>
              </div>
            </div>

            {/* Answer Textarea */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Tu Respuesta Redactada en Inglés:
              </label>
              <textarea
                rows={4}
                value={localTexts[currentPrompt.id] ?? savedAnswers[currentPrompt.id] ?? ''}
                onChange={e => handleTextChange(currentPrompt.id, e.target.value)}
                placeholder="Escribe aquí tu respuesta completa usando los chunks y el tiempo verbal aprendido..."
                className="w-full p-4 rounded-2xl border border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-100 text-slate-800 text-base sm:text-sm placeholder-slate-400 outline-none transition bg-white shadow-2xs resize-none"
              />

              <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
                <div className="text-xs text-slate-500">
                  {savedSuccessId === currentPrompt.id ? (
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> ¡Guardado en tu cuenta en Neon DB!
                    </span>
                  ) : (
                    <span>Guarda tu respuesta para registrar tu progreso.</span>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => handleCopyForReview(currentPrompt)}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition flex items-center justify-center gap-1.5 border border-slate-200"
                    title="Copiar prompt listo para ChatGPT o DeepL"
                  >
                    {copiedId === currentPrompt.id ? <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> : <Copy className="w-3.5 h-3.5 shrink-0" />}
                    <span>{copiedId === currentPrompt.id ? '¡Copiado!' : 'Copiar para revisar con IA / Tutor'}</span>
                  </button>

                  <button
                    onClick={() => handleSave(currentPrompt.id)}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5 shrink-0" />
                    <span>Guardar Respuesta</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Model Answers Accordion */}
            <div className="pt-2">
              <button
                onClick={() => setShowModels(prev => ({ ...prev, [currentPrompt.id]: !prev[currentPrompt.id] }))}
                className="w-full p-3.5 rounded-2xl bg-amber-50/70 hover:bg-amber-100/70 border border-amber-200 text-amber-900 font-bold text-xs transition flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 text-left"
              >
                <div className="flex items-start sm:items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
                  <span>
                    {showModels[currentPrompt.id] 
                      ? 'Ocultar Respuestas Modelo de Nativos' 
                      : '💡 Ver cómo respondería un nativo (Model Answers)'}
                  </span>
                </div>
                <span className="text-[11px] underline shrink-0">
                  {showModels[currentPrompt.id] ? 'Cerrar' : 'Mostrar Opciones'}
                </span>
              </button>

              {showModels[currentPrompt.id] && (
                <div className="mt-3 p-5 rounded-2xl bg-amber-50/40 border border-amber-200 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                    Formas naturales de responder en el día a día:
                  </span>
                  <div className="space-y-2">
                    {currentPrompt.recommendedAnswers.map((ans, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-white border border-amber-200/80 flex items-start justify-between gap-3 shadow-2xs"
                      >
                        <span className="text-xs font-semibold text-slate-800 break-words min-w-0">"{ans}"</span>
                        <button
                          onClick={() => speak(ans)}
                          className="p-1.5 shrink-0 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-800 transition"
                          title="Escuchar audio"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t border-amber-200/60 text-xs text-amber-900 leading-relaxed">
                    <span className="font-bold">Nota pedagógica: </span>
                    {currentPrompt.pedagogicalNote}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Next / Prev Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-slate-100">
            <button
              disabled={currentIndex === 0}
              onClick={() => setActivePromptId(prompts[currentIndex - 1].id)}
              className="px-3 sm:px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-40 transition"
            >
              ← Ejercicio Anterior
            </button>

            <span className="text-xs font-semibold text-slate-400">
              {currentIndex + 1} de {prompts.length}
            </span>

            <button
              disabled={currentIndex === prompts.length - 1}
              onClick={() => setActivePromptId(prompts[currentIndex + 1].id)}
              className="px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition disabled:opacity-40 shadow-xs"
            >
              Siguiente Ejercicio →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
