import React, { useState } from 'react';
import { Volume2, Eye, EyeOff, CheckCircle2, XCircle, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import type { MicroListeningDrill } from '../types';
import { useSpeech } from '../hooks/useSpeech';

interface Props {
  drills: MicroListeningDrill[];
  onCompleteDrill: (chunk: string, error?: { error: string; correction: string }) => void;
}

export const MicroListeningModule: React.FC<Props> = ({ drills, onCompleteDrill }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showScript, setShowScript] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
  const { speak, isSpeaking } = useSpeech();

  const current = drills[currentIndex];

  const handlePlayAudio = (rate = 0.95) => {
    speak(current.audioPrompt, rate);
  };

  const handleSelectOption = (option: string) => {
    if (hasAnswered) return;
    setSelectedOption(option);
    setHasAnswered(true);

    const isCorrect = option === current.correctAnswer;
    if (isCorrect) {
      onCompleteDrill(current.chunkFocus);
    } else {
      onCompleteDrill(current.chunkFocus, {
        error: `Confundido con "${option}" en lugar de "${current.correctAnswer}"`,
        correction: `Chunk clave: ${current.chunkFocus}`
      });
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    setShowScript(false);
    if (currentIndex < drills.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop or finish
    }
  };

  return (
    <div className="bg-slate-800/90 border border-slate-700/70 rounded-2xl p-6 sm:p-8 backdrop-blur shadow-xl max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-700/60 pb-4 mb-6">
        <div>
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-indigo-500/20 text-indigo-400 rounded-full border border-indigo-500/30">
            Micro-Listening Drill #{currentIndex + 1} of {drills.length}
          </span>
          <h2 className="text-xl font-bold text-white mt-2">Natural Ear Training</h2>
        </div>
        <div className="text-sm font-medium text-slate-400">
          Target: <span className="text-indigo-400 font-semibold">{current.chunkFocus.split(' ')[0]}</span>
        </div>
      </div>

      {/* Context Badge */}
      <div className="bg-slate-900/60 rounded-xl p-4 mb-6 border border-slate-800 flex items-start gap-3">
        <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Situación / Contexto</p>
          <p className="text-sm text-slate-200">{current.spanishContext}</p>
        </div>
      </div>

      {/* Audio Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 py-6 bg-slate-900/40 rounded-xl border border-slate-700/50 mb-6">
        <button
          onClick={() => handlePlayAudio(0.95)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all shadow-md ${
            isSpeaking 
              ? 'bg-indigo-600 text-white animate-pulse' 
              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/20'
          }`}
        >
          <Volume2 className="w-5 h-5" />
          {isSpeaking ? 'Listening...' : 'Play Normal Speed'}
        </button>

        <button
          onClick={() => handlePlayAudio(0.75)}
          className="flex items-center gap-2 px-4 py-3 bg-slate-700/80 hover:bg-slate-700 text-slate-200 rounded-xl font-medium transition"
        >
          <Volume2 className="w-4 h-4 text-indigo-400" />
          Slow 0.75x
        </button>

        <button
          onClick={() => setShowScript(!showScript)}
          className="flex items-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition"
        >
          {showScript ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-emerald-400" />}
          {showScript ? 'Hide Script' : 'Reveal Script'}
        </button>
      </div>

      {/* Instant Reveal Script */}
      {showScript && (
        <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 mb-6 text-center animate-fade-in">
          <p className="text-xs uppercase font-semibold text-emerald-400 tracking-wider mb-1">Transcript & Chunk Breakdown</p>
          <p className="text-lg font-medium text-white italic">"{current.script}"</p>
          <div className="mt-2 inline-block px-3 py-1 bg-emerald-500/10 text-emerald-300 text-xs rounded-full border border-emerald-500/20">
            🎯 Functional Chunk: <strong>{current.chunkFocus}</strong>
          </div>
        </div>
      )}

      {/* Question */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-300 mb-3">
          {current.challengeQuestion}
        </label>
        <div className="space-y-2.5">
          {current.options.map((option, idx) => {
            const isSelected = selectedOption === option;
            const isCorrect = option === current.correctAnswer;

            let btnClass = "w-full text-left p-4 rounded-xl text-sm font-medium border transition-all flex items-center justify-between ";
            if (!hasAnswered) {
              btnClass += "bg-slate-800/80 hover:bg-slate-700/60 border-slate-700 text-slate-200 hover:border-slate-500";
            } else if (isCorrect) {
              btnClass += "bg-emerald-900/40 border-emerald-500/60 text-emerald-200";
            } else if (isSelected && !isCorrect) {
              btnClass += "bg-rose-900/40 border-rose-500/60 text-rose-200";
            } else {
              btnClass += "bg-slate-800/40 border-slate-700/40 text-slate-500 opacity-60";
            }

            return (
              <button
                key={idx}
                disabled={hasAnswered}
                onClick={() => handleSelectOption(option)}
                className={btnClass}
              >
                <span>{option}</span>
                {hasAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                {hasAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Safety Belt Tip */}
      {hasAnswered && (
        <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-4 mb-6 flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-200/90 leading-relaxed">
            <span className="font-bold text-amber-400 block mb-0.5">🛡️ Safety Belt Response:</span>
            Si te toca responder a esto en la vida real, di: <span className="font-semibold text-white">"{current.safetyBeltHint}"</span>
          </div>
        </div>
      )}

      {/* Next Button */}
      {hasAnswered && (
        <button
          onClick={handleNext}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20 transition"
        >
          <span>Next Drill</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
