import React, { useState } from 'react';
import { 
  BookOpen, 
  Volume2, 
  CheckCircle, 
  ArrowRight, 
  Lightbulb, 
  Sparkles,
  MessageCircleQuestion,
  ShieldAlert
} from 'lucide-react';
import type { CourseLesson, LessonExercise } from '../types/curriculum';
import { useSpeech } from '../hooks/useSpeech';

interface Props {
  lessons: CourseLesson[];
  completedLessons: string[];
  onCompleteExercise: (lessonId: string, chunk: string, error?: { error: string; correction: string }) => void;
}

export const CurriculumHub: React.FC<Props> = ({ lessons, completedLessons, onCompleteExercise }) => {
  const [selectedLevel, setSelectedLevel] = useState<'A1' | 'A2' | 'B1' | 'B2'>('A1');
  const [selectedLesson, setSelectedLesson] = useState<CourseLesson>(() => {
    return lessons.find(l => l.level === 'A1') || lessons[0];
  });
  const [activeStep, setActiveStep] = useState<'theory' | 'chunks' | 'clarification' | 'drills'>('theory');

  // Exercise runner state
  const [exerciseIdx, setExerciseIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const { speak } = useSpeech();

  const filteredLessons = lessons.filter(l => l.level === selectedLevel);
  const currentExercise: LessonExercise | undefined = selectedLesson.exercises[exerciseIdx];

  const handleLevelChange = (lvl: 'A1' | 'A2' | 'B1' | 'B2') => {
    setSelectedLevel(lvl);
    const firstOfLevel = lessons.find(l => l.level === lvl);
    if (firstOfLevel) {
      setSelectedLesson(firstOfLevel);
      setActiveStep('theory');
      setExerciseIdx(0);
      setAnswered(false);
      setSelectedOption(null);
    }
  };

  const handleOptionSelect = (option: string) => {
    if (answered || !currentExercise) return;
    setSelectedOption(option);
    setAnswered(true);

    const isCorrect = option === currentExercise.correctAnswer;
    if (isCorrect) {
      onCompleteExercise(selectedLesson.id, selectedLesson.coreChunks[0].chunk);
    } else {
      onCompleteExercise(selectedLesson.id, selectedLesson.coreChunks[0].chunk, {
        error: option,
        correction: currentExercise.correctAnswer
      });
    }
  };

  const handleNextExercise = () => {
    setSelectedOption(null);
    setAnswered(false);
    if (exerciseIdx < selectedLesson.exercises.length - 1) {
      setExerciseIdx(prev => prev + 1);
    } else {
      setExerciseIdx(0);
      setActiveStep('theory');
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Level Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-3 sm:p-4 rounded-2xl shadow-md">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <span className="text-sm font-bold text-white uppercase tracking-wider">Plan de Clases Prácticas</span>
        </div>

        <div className="flex items-center gap-2">
          {(['A1', 'A2', 'B1', 'B2'] as const).map(lvl => (
            <button
              key={lvl}
              onClick={() => handleLevelChange(lvl)}
              className={`px-4 py-2 rounded-xl text-xs font-black transition-all ${
                selectedLevel === lvl
                  ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/20 scale-105'
                  : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              Nivel {lvl}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left sidebar: Lessons list */}
        <div className="lg:col-span-1 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
            Clases de {selectedLevel}
          </div>
          {filteredLessons.map(lesson => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isCurrent = selectedLesson.id === lesson.id;
            return (
              <button
                key={lesson.id}
                onClick={() => {
                  setSelectedLesson(lesson);
                  setActiveStep('theory');
                  setExerciseIdx(0);
                  setAnswered(false);
                  setSelectedOption(null);
                }}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                  isCurrent
                    ? 'bg-slate-800 border-indigo-500 shadow-md ring-1 ring-indigo-500/50'
                    : 'bg-slate-900/70 border-slate-800 hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Clase {lesson.lessonNumber}
                  </span>
                  {isCompleted && (
                    <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                      <CheckCircle className="w-3 h-3" /> Completada
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-bold text-white line-clamp-1">{lesson.title}</h4>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{lesson.tagline}</p>
              </button>
            );
          })}
        </div>

        {/* Right side: Lesson Content Engine */}
        <div className="lg:col-span-3 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
          <div>
            {/* Lesson Title Header */}
            <div className="border-b border-slate-800 pb-5 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {selectedLesson.level} • Módulo {selectedLesson.lessonNumber}
                </span>
                <span className="text-xs text-slate-400">Objetivo comunicativo claro</span>
              </div>
              <h2 className="text-2xl font-black text-white">{selectedLesson.title}</h2>
              <p className="text-sm text-slate-300 mt-1.5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{selectedLesson.practicalGoal}</span>
              </p>
            </div>

            {/* Navigation Tabs inside the Lesson */}
            <div className="flex gap-2 border-b border-slate-800/80 pb-4 mb-6 overflow-x-auto">
              <button
                onClick={() => setActiveStep('theory')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activeStep === 'theory'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white'
                }`}
              >
                <Lightbulb className="w-4 h-4" />
                <span>1. Teoría Práctica</span>
              </button>

              <button
                onClick={() => setActiveStep('chunks')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activeStep === 'chunks'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>2. Chunks Clave ({selectedLesson.coreChunks.length})</span>
              </button>

              <button
                onClick={() => setActiveStep('clarification')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activeStep === 'clarification'
                    ? 'bg-amber-500 text-slate-950 font-black'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white'
                }`}
              >
                <MessageCircleQuestion className="w-4 h-4" />
                <span>3. ¿Si No Sé Algo? (Preguntas Salvavidas)</span>
              </button>

              <button
                onClick={() => setActiveStep('drills')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                  activeStep === 'drills'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white'
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                <span>4. Práctica Interactiva</span>
              </button>
            </div>

            {/* TAB 1: THEORY */}
            {activeStep === 'theory' && (
              <div className="space-y-6">
                <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/70">
                  <h3 className="text-lg font-bold text-white mb-2">{selectedLesson.theory.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {selectedLesson.theory.explanationEs}
                  </p>

                  <div className="mt-5 p-4 bg-indigo-950/40 border border-indigo-500/30 rounded-xl">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                      Fórmula de uso inmediato:
                    </span>
                    <span className="text-base font-mono font-bold text-white">
                      {selectedLesson.theory.practicalFormula}
                    </span>
                  </div>

                  <div className="mt-4 p-4 bg-amber-950/20 border border-amber-500/30 rounded-xl flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
                        El error común del hispanohablante:
                      </span>
                      <p className="text-xs text-amber-200/90 leading-relaxed">
                        {selectedLesson.theory.comparisonSpanish}
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveStep('chunks')}
                  className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-2"
                >
                  <span>Continuar a los Chunks Clave</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* TAB 2: CHUNKS */}
            {activeStep === 'chunks' && (
              <div className="space-y-4">
                <p className="text-xs text-slate-400 mb-2">
                  No memorices palabras sueltas. Memoriza la frase completa con su pronunciación natural:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedLesson.coreChunks.map((chk, i) => (
                    <div
                      key={i}
                      className="bg-slate-800/90 border border-slate-700/70 rounded-2xl p-5 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2 py-0.5 rounded">
                            {chk.usageContext}
                          </span>
                          <button
                            onClick={() => speak(chk.chunk)}
                            className="p-1.5 rounded-lg bg-slate-700 hover:bg-indigo-600 text-slate-300 hover:text-white transition"
                            title="Escuchar audio"
                          >
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <h4 className="text-base font-bold text-white mb-1">"{chk.chunk}"</h4>
                        <p className="text-xs text-amber-300 font-medium mb-3">👉 {chk.meaningEs}</p>
                        <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 italic">
                          "{chk.exampleSentence}"
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setActiveStep('clarification')}
                  className="w-full mt-4 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-2"
                >
                  <span>Ver Frases Salvavidas para Preguntar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* TAB 3: CLARIFICATION (SI NO SÉ ALGO) */}
            {activeStep === 'clarification' && (
              <div className="space-y-5">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4">
                  <h4 className="text-sm font-bold text-amber-300 mb-1 flex items-center gap-2">
                    <MessageCircleQuestion className="w-4 h-4" />
                    Cómo pedir ayuda o aclaración como un nativo
                  </h4>
                  <p className="text-xs text-slate-300">
                    Si no sabes una palabra o no entendiste, no te quedes en silencio. Usa estas frases para tomar la iniciativa en la conversación.
                  </p>
                </div>

                <div className="space-y-3">
                  {selectedLesson.clarificationTools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-800 border border-slate-700 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 block mb-1">
                          Situación: {tool.triggerSituation}
                        </span>
                        <div className="text-base font-bold text-white flex items-center gap-2">
                          "{tool.phrase}"
                          <button
                            onClick={() => speak(tool.audioText)}
                            className="p-1 rounded bg-slate-700 hover:bg-indigo-600 text-slate-300 hover:text-white transition"
                            title="Escuchar audio"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-xs text-emerald-400 mt-1 font-medium">👉 {tool.meaningEs}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setActiveStep('drills')}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Comenzar Ejercicios Interactivos</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* TAB 4: DRILLS */}
            {activeStep === 'drills' && currentExercise && (
              <div className="space-y-6">
                <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                      Ejercicio {exerciseIdx + 1} de {selectedLesson.exercises.length}
                    </span>
                    <span className="text-xs text-slate-400">Tipo: {currentExercise.type.replace('_', ' ')}</span>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs uppercase text-slate-400 font-semibold mb-1">Escenario</label>
                    <p className="text-base font-medium text-white">{currentExercise.promptEs}</p>
                    {currentExercise.promptEn && (
                      <p className="text-sm text-indigo-300 font-semibold mt-2">
                        Te dicen: "{currentExercise.promptEn}"
                      </p>
                    )}
                  </div>

                  {/* Options */}
                  <div className="space-y-2.5">
                    {currentExercise.options?.map((opt, i) => {
                      const isSelected = selectedOption === opt;
                      const isCorrect = opt === currentExercise.correctAnswer;

                      let btnStyle = "w-full text-left p-4 rounded-xl text-sm font-medium border transition flex items-center justify-between ";
                      if (!answered) {
                        btnStyle += "bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-800";
                      } else if (isCorrect) {
                        btnStyle += "bg-emerald-950/60 border-emerald-500 text-emerald-200";
                      } else if (isSelected && !isCorrect) {
                        btnStyle += "bg-rose-950/60 border-rose-500 text-rose-200";
                      } else {
                        btnStyle += "bg-slate-900/40 border-slate-800 text-slate-500 opacity-60";
                      }

                      return (
                        <button
                          key={i}
                          disabled={answered}
                          onClick={() => handleOptionSelect(opt)}
                          className={btnStyle}
                        >
                          <span>{opt}</span>
                          {answered && isCorrect && <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {answered && (
                    <div className="mt-5 p-4 rounded-xl bg-slate-900/90 border border-slate-700 text-xs">
                      <span className="font-bold text-slate-300 uppercase block mb-1">Feedback Práctico:</span>
                      <p className="text-slate-300">{currentExercise.explanation}</p>
                    </div>
                  )}
                </div>

                {answered && (
                  <button
                    onClick={handleNextExercise}
                    className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm transition flex items-center justify-center gap-2"
                  >
                    <span>{exerciseIdx < selectedLesson.exercises.length - 1 ? 'Siguiente Ejercicio' : 'Completar Módulo'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
