export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2';

export interface GrammarChartRow {
  subject: string;
  affirmative: string;
  negative: string;
  question: string;
  shortAnswer: string;
}

export interface GrammarChart {
  title: string;
  structureFormula: string; // e.g. "Subject + verb + -s / -es"
  rows: GrammarChartRow[];
  usageRules: {
    ruleTitle: string;
    description: string;
    example: string;
  }[];
  spellingRules?: {
    condition: string;
    change: string;
    example: string;
  }[];
}

export interface TheoryPoint {
  title: string;
  overviewEs: string;
  explanationEs?: string;
  practicalFormula?: string;
  grammarChart: GrammarChart;
  signalWords: string[];
  commonMistakes: {
    wrong: string;
    correct: string;
    explanation: string;
  }[];
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
  id: string;
  chunk: string;
  meaningEs: string;
  usageContext: string;
  exampleSentence: string;
}

export interface ClarificationQuestion {
  id: string;
  triggerSituation: string;
  phrase: string;
  audioSample?: string;
  meaningEs: string;
  whyItWorks: string;
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
  lessonNumber: number; // 1 to 5
  title: string;
  tagline: string;
  practicalGoal: string;
  grammarFocus: string;
  theory: TheoryPoint;
  vocabulary: VocabularyItem[]; // 20 palabras específicas
  coreChunks: FunctionalChunk[]; // 10 chunks específicos
  clarificationTools: ClarificationQuestion[]; // 6 preguntas salvavidas
  listening: MicroListeningItem;
  workbook: WorkbookPrompt[]; // 20 prompts prácticos con redacción
}
