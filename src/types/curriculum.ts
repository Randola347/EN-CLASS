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
  structureFormula: string;
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

export interface RescueFormula {
  id: string;
  category: 'repeat' | 'meaning' | 'translate' | 'clarify' | 'buying_time' | 'confirm';
  categoryLabelEs: string;
  situationEs: string;
  phrase: string;
  meaningEs: string;
  audioSample: string;
  whyItWorks: string;
  exampleDialogue: {
    speakerA: string;
    userReply: string;
  };
}

export interface MicroListeningItem {
  id: string;
  title: string; // e.g. "Audio 1: Diálogo Informal en la Cafetería"
  contextType: 'daily' | 'work' | 'fast_paced';
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
  vocabulary: VocabularyItem[]; // 20 palabras 100% únicas
  coreChunks: FunctionalChunk[]; // 10 chunks 100% únicos
  listenings: MicroListeningItem[]; // 3 micro-listenings por clase
  workbook: WorkbookPrompt[]; // 20 ejercicios 100% únicos
}
