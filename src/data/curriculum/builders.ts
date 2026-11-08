import type {
  CEFRLevel,
  FunctionalChunk,
  MicroListeningItem,
  VocabularyItem,
  WorkbookPrompt,
} from '../../types/curriculum';

/**
 * Builders compactos para el contenido de las lecciones.
 *
 * Cada fila usa "|" como separador de campos. Las opciones de listening y las
 * respuestas modelo usan ";;" como separador interno. El contenido se escribe
 * a mano lección a lección; estos helpers solo le ponen IDs y forma de objeto.
 */

type Level = CEFRLevel;

function splitRow(row: string, expected: number, context: string): string[] {
  const parts = row.split('|').map((part) => part.trim());
  if (parts.length !== expected) {
    throw new Error(`${context}: se esperaban ${expected} campos y hay ${parts.length}: ${row}`);
  }
  if (parts.some((part) => part.length === 0)) {
    throw new Error(`${context}: hay un campo vacío en la fila: ${row}`);
  }
  return parts;
}

export function buildVocab(level: Level, lesson: number, rows: string[]): VocabularyItem[] {
  return rows.map((row, index) => {
    const [word, phonetic, partOfSpeech, meaningEs, exampleEn, exampleEs] = splitRow(
      row,
      6,
      `${level}-${lesson} vocab`
    );
    return {
      id: `v-${level}-${lesson}-${index + 1}`,
      word,
      phonetic,
      partOfSpeech,
      meaningEs,
      exampleEn,
      exampleEs,
    };
  });
}

export function buildChunks(level: Level, lesson: number, rows: string[]): FunctionalChunk[] {
  return rows.map((row, index) => {
    const [chunk, meaningEs, usageContext, exampleSentence] = splitRow(
      row,
      4,
      `${level}-${lesson} chunk`
    );
    return {
      id: `c-${level}-${lesson}-${index + 1}`,
      chunk,
      meaningEs,
      usageContext,
      exampleSentence,
    };
  });
}

export function buildListenings(level: Level, lesson: number, rows: string[]): MicroListeningItem[] {
  return rows.map((row, index) => {
    const [title, contextType, audioScript, spanishContext, comprehensionQuestion, optionsRaw, correctAnswer, explanation] =
      splitRow(row, 8, `${level}-${lesson} listening`);
    const options = optionsRaw.split(';;').map((option) => option.trim());
    if (options.length !== 3) {
      throw new Error(`${level}-${lesson} listening ${index + 1}: se esperaban 3 opciones`);
    }
    if (!options.includes(correctAnswer)) {
      throw new Error(`${level}-${lesson} listening ${index + 1}: correctAnswer no está en options`);
    }
    if (!['daily', 'work', 'fast_paced'].includes(contextType)) {
      throw new Error(`${level}-${lesson} listening ${index + 1}: contextType inválido`);
    }
    return {
      id: `ml-lesson-${level.toLowerCase()}-${lesson}-${index + 1}`,
      title,
      contextType: contextType as MicroListeningItem['contextType'],
      audioScript,
      spanishContext,
      comprehensionQuestion,
      options,
      correctAnswer,
      explanation,
    };
  });
}

export function buildWorkbook(level: Level, lesson: number, rows: string[]): WorkbookPrompt[] {
  return rows.map((row, index) => {
    const [category, situationEs, promptEn, guidanceTipEs, answersRaw, pedagogicalNote] = splitRow(
      row,
      6,
      `${level}-${lesson} workbook`
    );
    const recommendedAnswers = answersRaw.split(';;').map((answer) => answer.trim());
    if (recommendedAnswers.length !== 3) {
      throw new Error(`${level}-${lesson} workbook ${index + 1}: se esperaban 3 respuestas`);
    }
    if (!['routine', 'social', 'problem_solving', 'asking_help', 'opinion'].includes(category)) {
      throw new Error(`${level}-${lesson} workbook ${index + 1}: categoría inválida`);
    }
    return {
      id: `wb-${level}-${lesson}-${index + 1}`,
      category: category as WorkbookPrompt['category'],
      situationEs,
      promptEn,
      guidanceTipEs,
      recommendedAnswers,
      pedagogicalNote,
    };
  });
}
