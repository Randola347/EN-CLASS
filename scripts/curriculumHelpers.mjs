import fs from 'fs';
import path from 'path';

// Helper to create 20 vocabulary items
function generateVocab(items) {
  return items.map((it, idx) => ({
    id: `v-${idx + 1}`,
    word: it[0],
    phonetic: it[1],
    partOfSpeech: it[2],
    meaningEs: it[3],
    exampleEn: it[4],
    exampleEs: it[5]
  }));
}

// Helper to create 10 chunks
function generateChunks(items) {
  return items.map((it, idx) => ({
    id: `c-${idx + 1}`,
    chunk: it[0],
    meaningEs: it[1],
    usageContext: it[2],
    exampleSentence: it[3]
  }));
}

// Helper to create 6 clarification questions
function generateClarification(items) {
  return items.map((it, idx) => ({
    id: `cf-${idx + 1}`,
    triggerSituation: it[0],
    phrase: it[1],
    meaningEs: it[2],
    audioSample: it[1],
    whyItWorks: it[3]
  }));
}

// Helper to create 20 workbook prompts
function generateWorkbook(items) {
  return items.map((it, idx) => ({
    id: `wb-${idx + 1}`,
    category: it[0],
    situationEs: it[1],
    promptEn: it[2],
    guidanceTipEs: it[3],
    recommendedAnswers: it[4],
    pedagogicalNote: it[5]
  }));
}

export { generateVocab, generateChunks, generateClarification, generateWorkbook };
