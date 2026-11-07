import React, { useState } from 'react';
import { 
  BookOpen, 
  Volume2, 
  CheckCircle, 
  Lightbulb, 
  Sparkles,
  Headphones,
  Check,
  Eye,
  EyeOff
} from 'lucide-react';
import type { CourseLesson, MicroListeningItem } from '../types/curriculum';
import { useSpeech } from '../hooks/useSpeech';
import { InteractiveWorkbook } from './InteractiveWorkbook';
import { GrammarChartViewer } from './GrammarChartViewer';

interface Props {
  lessons: CourseLesson[];
  completedLessons: string[];
  savedAnswers: Record<string, string>;
  lastActiveLessonId?: string;
  lastActiveStep?: string;
  onSavePosition: (lessonId: string, step: string) => void;
  onSaveWorkbookAnswer: (lessonId: string, questionId: string, text: string) => void;
  onMarkLessonCompleted: (lessonId: string) => void;
}

export const CurriculumHub: React.FC<Props> = ({ 
  lessons, 
  completedLessons,
  savedAnswers,
  lastActiveLessonId,
  lastActiveStep,
  onSavePosition,
  onSaveWorkbookAnswer,
  onMarkLessonCompleted
}) => {
  const [selectedLevel, setSelectedLevel] = useState<'A1' | 'A2' | 'B1' | 'B2'>(() => {
    if (lastActiveLessonId) {
      if (lastActiveLessonId.includes('a2')) return 'A2';
      if (lastActiveLessonId.includes('b1')) return 'B1';
      if (lastActiveLessonId.includes('b2')) return 'B2';
    }
    return 'A1';
  });

  const [selectedLesson, setSelectedLesson] = useState<CourseLesson>(() => {
    if (lastActiveLessonId) {
      const match = lessons.find(l => l.id === lastActiveLessonId);
      if (match) return match;
    }
    return lessons[0];
  });

  const [activeStep, setActiveStep] = useState<'theory' | 'vocabulary' | 'chunks' | 'listening' | 'workbook'>(
    (lastActiveStep === 'clarification' ? 'listening' : (lastActiveStep as any)) || 'theory'
  );

  // Multi-Listening State
  const [activeListeningIdx, setActiveListeningIdx] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [showScript, setShowScript] = useState<Record<string, boolean>>({});

  const { speak, isSpeaking } = useSpeech();

  const filteredLessons = lessons.filter(l => l.level === selectedLevel);
  const currentListenings: MicroListeningItem[] = selectedLesson.listenings || [];
  const activeListening = currentListenings[activeListeningIdx] || currentListenings[0];

  const handleStepChange = (step: 'theory' | 'vocabulary' | 'chunks' | 'listening' | 'workbook') => {
    setActiveStep(step);
    onSavePosition(selectedLesson.id, step);
  };

  const handleSelectLesson = (lesson: CourseLesson) => {
    setSelectedLesson(lesson);
    setActiveStep('theory');
    setActiveListeningIdx(0);
    setSelectedOptions({});
    setShowScript({});
    onSavePosition(lesson.id, 'theory');
  };

  const handleLevelChange = (lvl: 'A1' | 'A2' | 'B1' | 'B2') => {
    setSelectedLevel(lvl);
    const firstOfLevel = lessons.find(l => l.level === lvl);
    if (firstOfLevel) {
      handleSelectLesson(firstOfLevel);
    }
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4 space-y-6">
      {/* Level Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border border-slate-200 p-4 rounded-3xl shadow-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Plan de Clases Prácticas</h3>
            <p className="text-xs text-slate-500">20 Clases Maestras con Contenido 100% Único e Individual</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {(['A1', 'A2', 'B1', 'B2'] as const).map(lvl => (
            <button
              key={lvl}
              onClick={() => handleLevelChange(lvl)}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition-all ${
                selectedLevel === lvl
                  ? 'bg-blue-600 text-white shadow-xs scale-105'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              Nivel {lvl}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left sidebar: Lessons list */}
        <div className="lg:col-span-3 space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
            Clases del Nivel {selectedLevel}
          </div>
          {filteredLessons.map(lesson => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isCurrent = selectedLesson.id === lesson.id;
            return (
              <button
                key={lesson.id}
                onClick={() => handleSelectLesson(lesson)}
                className={`w-full text-left p-4 rounded-2xl border transition-all ${
                  isCurrent
                    ? 'bg-blue-50/70 border-blue-500 shadow-xs ring-1 ring-blue-500/30'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                    isCurrent ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    Clase {lesson.lessonNumber}
                  </span>
                  {isCompleted && (
                    <span className="text-[10px] text-emerald-600 flex items-center gap-1 font-bold">
                      <CheckCircle className="w-3.5 h-3.5" /> Completada
                    </span>
                  )}
                </div>
                <h4 className="text-xs font-bold text-slate-900 line-clamp-1">{lesson.title}</h4>
                <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{lesson.tagline}</p>
              </button>
            );
          })}
        </div>

        {/* Right side: Lesson Content Engine */}
        <div className="lg:col-span-9 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          {/* Lesson Header */}
          <div className="border-b border-slate-100 pb-5 mb-6">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-[11px] font-black bg-blue-100 text-blue-800 border border-blue-200">
                {selectedLesson.level} • Clase {selectedLesson.lessonNumber}
              </span>
              <span className="text-xs text-slate-500 font-medium">{selectedLesson.grammarFocus}</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900">{selectedLesson.title}</h2>
            <p className="text-sm text-slate-600 mt-1.5 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{selectedLesson.practicalGoal}</span>
            </p>
          </div>

          {/* Navigation Steps inside the Lesson (5 Pasos Limpios) */}
          <div className="flex gap-2 border-b border-slate-100 pb-4 mb-6 overflow-x-auto">
            <button
              onClick={() => handleStepChange('theory')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
                activeStep === 'theory'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              <Lightbulb className="w-4 h-4" />
              <span>1. Teoría & Tablas</span>
            </button>

            <button
              onClick={() => handleStepChange('vocabulary')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
                activeStep === 'vocabulary'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>2. Vocabulario Único ({selectedLesson.vocabulary.length})</span>
            </button>

            <button
              onClick={() => handleStepChange('chunks')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
                activeStep === 'chunks'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>3. Chunks Clave ({selectedLesson.coreChunks.length})</span>
            </button>

            <button
              onClick={() => handleStepChange('listening')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap ${
                activeStep === 'listening'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              <Headphones className="w-4 h-4" />
              <span>4. Multi-Listening ({currentListenings.length} Audios)</span>
            </button>

            <button
              onClick={() => handleStepChange('workbook')}
              className={`px-4 py-2 rounded-2xl text-xs font-black transition flex items-center gap-1.5 whitespace-nowrap ${
                activeStep === 'workbook'
                  ? 'bg-blue-600 text-white shadow-xs ring-2 ring-blue-400/30'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              <CheckCircle className="w-4 h-4" />
              <span>5. Workbook Práctico ({selectedLesson.workbook.length})</span>
            </button>
          </div>

          {/* STEP 1: THEORY & GRAMMAR CHART */}
          {activeStep === 'theory' && (
            <div className="space-y-6">
              <GrammarChartViewer theory={selectedLesson.theory} />

              <button
                onClick={() => handleStepChange('vocabulary')}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-sm transition shadow-xs flex items-center justify-center gap-2"
              >
                <span>Continuar al Vocabulario Frecuente (20 Palabras)</span>
                <span>→</span>
              </button>
            </div>
          )}

          {/* STEP 2: VOCABULARY (20 Palabras Únicas) */}
          {activeStep === 'vocabulary' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-600">
                  Las 20 palabras indispensables de esta clase. Pulsa el altavoz para escuchar su pronunciación nativa:
                </p>
                <span className="text-xs font-bold text-blue-600">{selectedLesson.vocabulary.length} palabras</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {selectedLesson.vocabulary.map(v => (
                  <div
                    key={v.id}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 transition-all flex flex-col justify-between shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">{v.word}</span>
                          {v.phonetic && <span className="text-[11px] font-mono text-slate-400">{v.phonetic}</span>}
                        </div>
                        <button
                          onClick={() => speak(v.word)}
                          className="p-1.5 rounded-lg bg-white hover:bg-blue-600 text-blue-600 hover:text-white transition border border-slate-200 shadow-2xs"
                          title="Pronunciación"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-xs text-blue-700 font-semibold mb-2">
                        👉 {v.meaningEs} <span className="text-[10px] text-slate-400 font-normal">({v.partOfSpeech})</span>
                      </div>

                      <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-xs text-slate-600 italic">
                        "{v.exampleEn}"
                        <span className="block not-italic text-slate-400 text-[11px] mt-0.5">{v.exampleEs}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleStepChange('chunks')}
                className="w-full mt-4 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-sm transition shadow-xs flex items-center justify-center gap-2"
              >
                <span>Continuar a los Chunks de Oro (10 Frases)</span>
                <span>→</span>
              </button>
            </div>
          )}

          {/* STEP 3: CHUNKS (10 Chunks Únicos) */}
          {activeStep === 'chunks' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">
                Los 10 chunks automáticos para hablar sin traducir palabra por palabra:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedLesson.coreChunks.map((chk, i) => (
                  <div
                    key={chk.id || i}
                    className="p-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-400 transition-all flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                          {chk.usageContext}
                        </span>
                        <button
                          onClick={() => speak(chk.chunk)}
                          className="p-1.5 rounded-lg bg-slate-100 hover:bg-blue-600 text-slate-700 hover:text-white transition"
                          title="Escuchar audio"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-1">"{chk.chunk}"</h4>
                      <p className="text-xs text-amber-700 font-semibold mb-2">👉 {chk.meaningEs}</p>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs text-slate-600 italic">
                        "{chk.exampleSentence}"
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => handleStepChange('listening')}
                className="w-full mt-4 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-sm transition shadow-xs flex items-center justify-center gap-2"
              >
                <span>Continuar al Multi-Listening ({currentListenings.length} Audios)</span>
                <span>→</span>
              </button>
            </div>
          )}

          {/* STEP 4: MULTI-LISTENING (3 Audios Diferenciados por Clase) */}
          {activeStep === 'listening' && activeListening && (
            <div className="space-y-6">
              {/* Listening Selector Tabs */}
              <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
                {currentListenings.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveListeningIdx(idx)}
                    className={`px-4 py-2 rounded-2xl text-xs font-bold transition flex items-center gap-1.5 ${
                      activeListeningIdx === idx
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Headphones className="w-3.5 h-3.5" />
                    <span>{item.title}</span>
                  </button>
                ))}
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                  <div>
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 rounded-full">
                      Audio #{activeListeningIdx + 1} de {currentListenings.length}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2">{activeListening.title}</h3>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 mb-6 border border-slate-200">
                  <p className="text-xs uppercase font-bold text-slate-400 mb-1">Situación / Contexto:</p>
                  <p className="text-sm text-slate-700">{activeListening.spanishContext}</p>
                </div>

                {/* Audio controls */}
                <div className="flex flex-wrap items-center justify-center gap-4 py-6 bg-blue-50/50 rounded-2xl border border-blue-100 mb-6">
                  <button
                    onClick={() => speak(activeListening.audioScript, 0.95)}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm"
                  >
                    <Volume2 className="w-5 h-5" />
                    <span>{isSpeaking ? 'Escuchando...' : 'Velocidad Normal (1.0x)'}</span>
                  </button>

                  <button
                    onClick={() => speak(activeListening.audioScript, 0.75)}
                    className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-slate-100 text-slate-700 rounded-2xl font-semibold border border-slate-200 transition"
                  >
                    <Volume2 className="w-4 h-4 text-blue-600" />
                    <span>Lento (0.75x)</span>
                  </button>

                  <button
                    onClick={() => setShowScript(prev => ({ ...prev, [activeListening.id]: !prev[activeListening.id] }))}
                    className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-slate-100 text-slate-700 rounded-2xl font-semibold border border-slate-200 transition"
                  >
                    {showScript[activeListening.id] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4 text-emerald-600" />}
                    <span>{showScript[activeListening.id] ? 'Ocultar Guion' : 'Revelar Guion'}</span>
                  </button>
                </div>

                {showScript[activeListening.id] && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mb-6 text-center animate-fade-in">
                    <p className="text-xs uppercase font-bold text-emerald-800 mb-1">Guion Completo:</p>
                    <p className="text-base font-semibold text-slate-900 italic">"{activeListening.audioScript}"</p>
                  </div>
                )}

                {/* Comprehension Question */}
                <div className="mb-4">
                  <label className="block text-sm font-bold text-slate-800 mb-3">
                    {activeListening.comprehensionQuestion}
                  </label>
                  <div className="space-y-2">
                    {activeListening.options.map((opt, i) => {
                      const isCorrect = opt === activeListening.correctAnswer;
                      const isSelected = selectedOptions[activeListening.id] === opt;

                      let style = "w-full text-left p-3.5 rounded-2xl border text-sm font-medium transition flex items-center justify-between ";
                      if (!selectedOptions[activeListening.id]) {
                        style += "bg-white border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50/20";
                      } else if (isCorrect) {
                        style += "bg-emerald-50 border-emerald-400 text-emerald-900 font-bold";
                      } else if (isSelected && !isCorrect) {
                        style += "bg-rose-50 border-rose-400 text-rose-900";
                      } else {
                        style += "bg-slate-50 border-slate-200 text-slate-400 opacity-60";
                      }

                      return (
                        <button
                          key={i}
                          disabled={!!selectedOptions[activeListening.id]}
                          onClick={() => setSelectedOptions(prev => ({ ...prev, [activeListening.id]: opt }))}
                          className={style}
                        >
                          <span>{opt}</span>
                          {selectedOptions[activeListening.id] && isCorrect && <Check className="w-4 h-4 text-emerald-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {selectedOptions[activeListening.id] && (
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600">
                    <span className="font-bold text-slate-800 block mb-1">Explicación:</span>
                    {activeListening.explanation}
                  </div>
                )}
              </div>

              {/* Next Audio / Go to Workbook */}
              <div className="flex items-center justify-between">
                {activeListeningIdx < currentListenings.length - 1 ? (
                  <button
                    onClick={() => setActiveListeningIdx(prev => prev + 1)}
                    className="px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white font-bold rounded-2xl text-xs transition"
                  >
                    Siguiente Audio de la Clase ({activeListeningIdx + 2}/{currentListenings.length}) →
                  </button>
                ) : (
                  <div />
                )}

                <button
                  onClick={() => handleStepChange('workbook')}
                  className="py-3.5 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-black rounded-2xl text-sm transition shadow-md flex items-center gap-2"
                >
                  <span>Ir al Workbook de Práctica Extensiva (20 Ejercicios)</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: WORKBOOK (20 Ejercicios Interactivos con Respuestas Guardadas) */}
          {activeStep === 'workbook' && (
            <InteractiveWorkbook
              prompts={selectedLesson.workbook}
              savedAnswers={savedAnswers}
              onSaveAnswer={(qId, text) => {
                onSaveWorkbookAnswer(selectedLesson.id, qId, text);
                onMarkLessonCompleted(selectedLesson.id);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
