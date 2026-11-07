export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2';

export interface TheoryPoint {
  title: string;
  explanationEs: string; // Explicación directa y práctica, sin terminología técnica pesada
  practicalFormula: string; // e.g. "Do you mind if + I + [verbo presente]?"
  comparisonSpanish: string; // Comparación con el error típico del hispanohablante
}

export interface FunctionalChunk {
  chunk: string;
  meaningEs: string;
  usageContext: string;
  exampleSentence: string;
}

export interface ClarificationQuestion {
  triggerSituation: string; // "Si no entendiste una palabra técnica"
  phrase: string; // "Could you rephrase that in simpler terms?"
  audioText: string;
  meaningEs: string;
}

export interface LessonExercise {
  id: string;
  type: 'fill_chunk' | 'reflex_reply' | 'micro_listening' | 'ask_clarification';
  promptEs: string;
  promptEn?: string;
  audioPrompt?: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  safetyBeltHint?: string;
}

export interface CourseLesson {
  id: string;
  level: CEFRLevel;
  lessonNumber: number;
  title: string;
  tagline: string;
  practicalGoal: string; // Lo que el alumno podrá decir/preguntar al terminar
  theory: TheoryPoint;
  coreChunks: FunctionalChunk[];
  clarificationTools: ClarificationQuestion[]; // "Cómo preguntar si no sé algo"
  exercises: LessonExercise[];
}

