export interface ErrorRecord {
  error: string;
  correction: string;
  explanation?: string;
  timestamp?: string;
}

export interface StudentProfile {
  student_name: string;
  current_level: string; // e.g. "A1-A2"
  target_level: string; // e.g. "B1+"
  obstacles: string[];
  mastered_chunks: string[];
  error_bank: ErrorRecord[];
  session_summary: string;
  streak_days: number;
  drills_completed: number;
}

export interface MicroListeningDrill {
  id: string;
  audioPrompt: string; // Text to be read with Web Speech API
  slowRate?: number;
  script: string;
  chunkFocus: string;
  spanishContext: string;
  challengeQuestion: string;
  options: string[];
  correctAnswer: string;
  safetyBeltHint: string;
}

export interface ReflexDrill {
  id: string;
  promptEs: string; // "Te ofrecen un café pero prefieres té con educación"
  targetChunk: string; // "I'd rather have..." or "Could I get..."
  promptEn: string;
  timeLimitSec: number; // segundos para responder sin traducir (10s por defecto)
  acceptableAnswers: string[];
  explanation: string;
  safetyBelt: string; // e.g., "Well, actually..."
}

export interface SafetyBeltItem {
  id: string;
  category: 'buying_time' | 'clarifying' | 'rephrasing' | 'softening';
  chunk: string;
  spanishMeaning: string;
  audioSample: string;
  exampleContext: string;
}

export interface RoleplayScenario {
  id: string;
  title: string;
  description: string;
  partnerRole: string;
  userRole: string;
  recommendedChunks: string[];
  starterPrompt: string;
  aiFirstMessage: string;
}

