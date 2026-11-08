import React, { useState, useEffect, useRef } from 'react';
import { Timer, Zap, Check, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import type { ReflexDrill } from '../types';

interface Props {
  drills: ReflexDrill[];
  onCompleteDrill: (chunk: string, error?: { error: string; correction: string }) => void;
}

export const ReflexTrainingModule: React.FC<Props> = ({ drills, onCompleteDrill }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number>(drills[0].timeLimitSec);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [inputAnswer, setInputAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const current = drills[currentIndex];

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 0.1) {
            clearInterval(interval);
            handleTimeout();
            return 0;
          }
          return parseFloat((prev - 0.1).toFixed(1));
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const startDrill = () => {
    setIsActive(true);
    setSubmitted(false);
    setTimedOut(false);
    setInputAnswer('');
    setTimeLeft(current.timeLimitSec);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleTimeout = () => {
    setIsActive(false);
    setTimedOut(true);
    setSubmitted(true);
    onCompleteDrill(current.targetChunk, {
      error: 'Se acabó el tiempo de reacción (bloqueo mental)',
      correction: `Usa un Safety Belt como: "${current.safetyBelt}"`
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputAnswer.trim() || submitted) return;

    setIsActive(false);
    setSubmitted(true);

    const isMatch = current.acceptableAnswers.some(ans => 
      inputAnswer.toLowerCase().includes(ans.toLowerCase().replace(/[^a-zA-Z ]/g, ""))
    ) || inputAnswer.length > 8; // lenient evaluation prioritizing fast effort

    if (isMatch) {
      onCompleteDrill(current.targetChunk);
    } else {
      onCompleteDrill(current.targetChunk, {
        error: inputAnswer,
        correction: current.acceptableAnswers[0]
      });
    }
  };

  const handleNext = () => {
    setIsActive(false);
    setSubmitted(false);
    setTimedOut(false);
    setInputAnswer('');
    if (currentIndex < drills.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setTimeLeft(drills[currentIndex + 1].timeLimitSec);
    } else {
      setCurrentIndex(0);
      setTimeLeft(drills[0].timeLimitSec);
    }
  };

  const percentLeft = (timeLeft / current.timeLimitSec) * 100;

  return (
    <div className="bg-slate-800/90 border border-slate-700/70 rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur shadow-xl max-w-2xl mx-auto w-full">
      {/* Top Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-700/60 pb-4 mb-6">
        <div className="min-w-0">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-400 rounded-full border border-amber-500/30 flex items-center gap-1.5 inline-flex">
            <Zap className="w-3.5 h-3.5 fill-current" />
            3-Second Reflex Drill #{currentIndex + 1}
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white mt-2 break-words">Zero-Translation Reflex</h2>
        </div>
        <div className="sm:text-right min-w-0">
          <span className="text-xs text-slate-400 block">Target Chunk</span>
          <span className="text-sm font-semibold text-amber-400 break-words">{current.targetChunk}</span>
        </div>
      </div>

      {/* Spanish Situation Card */}
      <div className="bg-slate-900/70 rounded-xl p-4 sm:p-5 mb-6 border border-slate-700/80">
        <p className="text-xs uppercase text-slate-400 font-semibold tracking-wider mb-1">
          Situación Inmediata
        </p>
        <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed break-words">
          {current.promptEs}
        </p>
        <div className="mt-4 pt-3 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-400">
          <span className="break-words">Te dicen: <strong className="text-indigo-300 font-medium">"{current.promptEn}"</strong></span>
          <span className="text-amber-400 font-medium shrink-0">Límite: {current.timeLimitSec}s</span>
        </div>
      </div>

      {/* Countdown Bar */}
      {isActive && (
        <div className="mb-6">
          <div className="flex justify-between items-center text-xs font-semibold mb-1">
            <span className="text-amber-400 flex items-center gap-1">
              <Timer className="w-3.5 h-3.5 animate-spin" /> ¡Responde rápido!
            </span>
            <span className={timeLeft <= 1.5 ? "text-rose-400 font-bold" : "text-amber-400"}>
              {timeLeft.toFixed(1)}s
            </span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-700">
            <div 
              className={`h-full transition-all duration-100 ${
                percentLeft < 35 ? 'bg-rose-500' : 'bg-amber-400'
              }`}
              style={{ width: `${percentLeft}%` }}
            />
          </div>
        </div>
      )}

      {/* Active Form vs Inactive CTA */}
      {!isActive && !submitted ? (
        <div className="text-center py-8 bg-slate-900/40 rounded-xl border border-dashed border-slate-700 mb-6">
          <p className="text-sm text-slate-300 mb-4 max-w-sm mx-auto">
            Tienes {current.timeLimitSec} segundos para responder sin pensar en gramática o traducir.
          </p>
          <button
            onClick={startDrill}
            className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl shadow-lg shadow-amber-500/20 transition transform active:scale-95"
          >
            ⚡ Iniciar Reflex Drill
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mb-6">
          <label className="block text-xs uppercase text-slate-400 font-semibold mb-2">
            Tu respuesta instantánea en inglés:
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              ref={inputRef}
              disabled={submitted}
              type="text"
              value={inputAnswer}
              onChange={(e) => setInputAnswer(e.target.value)}
              placeholder="Escribe o suelta la frase ya..."
              className="flex-1 bg-slate-900 border border-slate-700 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 rounded-xl px-4 py-3 text-white placeholder-slate-500 text-base sm:text-sm outline-none transition disabled:opacity-60"
            />
            {!submitted && (
              <button
                type="submit"
                className="px-5 py-3 sm:py-0 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-sm transition"
              >
                Enviar
              </button>
            )}
          </div>
        </form>
      )}

      {/* Feedback Panel */}
      {submitted && (
        <div className="space-y-4 mb-6">
          <div className={`p-4 rounded-xl border text-sm ${
            timedOut 
              ? 'bg-rose-950/40 border-rose-500/40 text-rose-200' 
              : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
          }`}>
            <div className="flex items-center gap-2 font-bold mb-1">
              {timedOut ? (
                <>
                  <AlertTriangle className="w-5 h-5 text-rose-400" />
                  <span>Tiempo agotado — Es normal al principio</span>
                </>
              ) : (
                <>
                  <Check className="w-5 h-5 text-emerald-400" />
                  <span>¡Reflejo enviado!</span>
                </>
              )}
            </div>
            <p className="text-xs text-slate-300 mt-1 break-words">
              {current.explanation}
            </p>
          </div>

          <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-700 text-xs">
            <span className="font-semibold text-slate-400 uppercase tracking-wider block mb-2">Respuestas naturales recomendadas:</span>
            <ul className="space-y-1.5">
              {current.acceptableAnswers.map((ans, idx) => (
                <li key={idx} className="flex items-start gap-2 text-slate-200 font-medium">
                  <span className="text-amber-400 font-bold">•</span> <span className="break-words">"{ans}"</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-indigo-950/30 border border-indigo-500/30 rounded-xl p-3.5 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-xs text-indigo-200">
              <span className="font-bold text-indigo-300 block">Salvavidas para ganar tiempo si dudas:</span>
              "{current.safetyBelt}"
            </div>
          </div>

          <button
            onClick={handleNext}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-xl shadow-lg transition"
          >
            <span>Siguiente Reflex Drill</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
