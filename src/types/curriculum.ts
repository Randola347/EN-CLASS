export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2';

export interface TheoryPoint {
  title: string;
  explanationEs: string;
  practicalFormula: string;
  timeExpressions?: string[];
  commonMistakeEs?: string;
  comparisonSpanish?: string;
}

export interface VocabularyItem {
  id: string;
  word: string;
  phonetic?: string;
  partOfSpeech: string;
  meaningEs: string;
  exampleEn: string;
  exampleEs: string;
}

export interface FunctionalChunk {
  id?: string;
  chunk: string;
  meaningEs: string;
  usageContext: string;
  exampleSentence: string;
}

export interface ClarificationQuestion {
  id?: string;
  triggerSituation: string;
  phrase: string;
  audioText?: string;
  audioSample?: string;
  meaningEs: string;
  whyItWorks?: string;
}

export interface MicroListeningItem {
  id: string;
  audioScript: string;
  spanishContext: string;
  comprehensionQuestion: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface WorkbookPrompt {
  id: string;
  category: 'routine' | 'social' | 'problem_solving' | 'asking_help' | 'opinion';
  situationEs: string;
  promptEn: string;
  guidanceTipEs: string;
  recommendedAnswers: string[];
  pedagogicalNote: string;
}

export interface CourseLesson {
  id: string;
  level: CEFRLevel;
  lessonNumber: number;
  title: string;
  tagline: string;
  practicalGoal: string;
  grammarFocus?: string;
  theory: TheoryPoint;
  vocabulary: VocabularyItem[];
  coreChunks: FunctionalChunk[];
  clarificationTools: ClarificationQuestion[];
  listening: MicroListeningItem;
  workbook: WorkbookPrompt[];
}
