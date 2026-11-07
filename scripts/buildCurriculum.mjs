// Script to generate high density curriculum with 5 classes per level (20 classes total)
// Each class has:
// - Theory with Practical Verb Tenses
// - 20 Everyday Vocabulary items
// - 10 Golden Functional Chunks
// - 6 Clarification Formulas ("¿Y si no sé algo?")
// - 1 Micro-Listening with audio script
// - 20 Interactive Workbook Prompts with Model Answers & Pedagogical Notes

import fs from 'fs';
import path from 'path';

function createLesson(level, lessonNumber, title, tagline, grammarFocus, practicalGoal, theoryObj, vocabList, chunksList, clarifList, listeningObj, workbookList) {
  return {
    id: `lesson-${level.toLowerCase()}-${lessonNumber}`,
    level,
    lessonNumber,
    title,
    tagline,
    grammarFocus,
    practicalGoal,
    theory: theoryObj,
    vocabulary: vocabList,
    coreChunks: chunksList,
    clarificationTools: clarifList,
    listening: listeningObj,
    workbook: workbookList
  };
}

// Write helper
const outDir = path.resolve('src/data/levels');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

console.log("Ready to generate full levels.");
