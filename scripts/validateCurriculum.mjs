/**
 * Valida que el contenido de las 20 lecciones sea único, completo y coherente.
 *
 * Uso: npx tsx scripts/validateCurriculum.mjs
 *
 * Sale con código 1 si encuentra cualquier problema.
 */
import { A1_LESSONS } from '../src/data/levels/a1Data.ts';
import { A2_LESSONS } from '../src/data/levels/a2Data.ts';
import { B1_LESSONS } from '../src/data/levels/b1Data.ts';
import { B2_LESSONS } from '../src/data/levels/b2Data.ts';

const lessons = [...A1_LESSONS, ...A2_LESSONS, ...B1_LESSONS, ...B2_LESSONS];

const MINIMUMS = {
  vocabulary: 20,
  coreChunks: 10,
  listenings: 3,
  workbook: 10,
};

const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function normalize(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function checkField(value, label) {
  if (value === undefined || value === null || String(value).trim() === '') {
    fail(`${label}: campo vacío o undefined`);
  }
}

function reportDuplicates(items, label, getValue) {
  const seen = new Map();
  for (const item of items) {
    const key = normalize(getValue(item.value));
    if (!key) continue;
    if (seen.has(key)) {
      fail(
        `${label} duplicado: "${getValue(item.value)}" en ${item.lessonId} y ${seen.get(key)}`
      );
    } else {
      seen.set(key, item.lessonId);
    }
  }
  return { total: items.length, unique: seen.size, repeated: items.length - seen.size };
}

function sameSetKey(values) {
  return values.map(normalize).sort().join('|');
}

// 1. Número de lecciones
if (lessons.length !== 20) {
  fail(`Se esperaban 20 lecciones y hay ${lessons.length}`);
}

for (const level of ['A1', 'A2', 'B1', 'B2']) {
  const count = lessons.filter((lesson) => lesson.level === level).length;
  if (count !== 5) fail(`El nivel ${level} debe tener 5 lecciones y tiene ${count}`);
}

// 2. Campos obligatorios y mínimos
const allIds = new Set();

for (const lesson of lessons) {
  const where = lesson.id;
  checkField(lesson.id, `${where} id`);
  checkField(lesson.title, `${where} title`);
  checkField(lesson.tagline, `${where} tagline`);
  checkField(lesson.practicalGoal, `${where} practicalGoal`);
  checkField(lesson.grammarFocus, `${where} grammarFocus`);
  checkField(lesson.theory?.overviewEs, `${where} theory.overviewEs`);
  checkField(lesson.theory?.grammarChart, `${where} theory.grammarChart`);

  if (allIds.has(lesson.id)) fail(`ID de lección duplicado: ${lesson.id}`);
  allIds.add(lesson.id);

  for (const [field, minimum] of Object.entries(MINIMUMS)) {
    const items = lesson[field];
    if (!Array.isArray(items)) {
      fail(`${where} ${field}: no es un array`);
      continue;
    }
    if (items.length < minimum) {
      fail(`${where} ${field}: tiene ${items.length}, mínimo ${minimum}`);
    }
  }

  for (const item of lesson.vocabulary ?? []) {
    for (const field of ['id', 'word', 'partOfSpeech', 'meaningEs', 'exampleEn', 'exampleEs']) {
      checkField(item[field], `${where} vocab ${item.id ?? '(sin id)'} ${field}`);
    }
  }

  for (const item of lesson.coreChunks ?? []) {
    for (const field of ['id', 'chunk', 'meaningEs', 'usageContext', 'exampleSentence']) {
      checkField(item[field], `${where} chunk ${item.id ?? '(sin id)'} ${field}`);
    }
  }

  for (const item of lesson.listenings ?? []) {
    for (const field of ['id', 'title', 'contextType', 'audioScript', 'spanishContext', 'comprehensionQuestion', 'correctAnswer', 'explanation']) {
      checkField(item[field], `${where} listening ${item.id ?? '(sin id)'} ${field}`);
    }
    if (!['daily', 'work', 'fast_paced'].includes(item.contextType)) {
      fail(`${where} listening ${item.id}: contextType inválido (${item.contextType})`);
    }
    if (!Array.isArray(item.options) || item.options.length !== 3) {
      fail(`${where} listening ${item.id}: debe tener exactamente 3 opciones`);
    } else if (!item.options.includes(item.correctAnswer)) {
      fail(`${where} listening ${item.id}: correctAnswer no coincide con ninguna opción`);
    }
  }

  for (const item of lesson.workbook ?? []) {
    for (const field of ['id', 'category', 'situationEs', 'promptEn', 'guidanceTipEs', 'pedagogicalNote']) {
      checkField(item[field], `${where} workbook ${item.id ?? '(sin id)'} ${field}`);
    }
    if (!['routine', 'social', 'problem_solving', 'asking_help', 'opinion'].includes(item.category)) {
      fail(`${where} workbook ${item.id}: category inválida (${item.category})`);
    }
    if (!Array.isArray(item.recommendedAnswers) || item.recommendedAnswers.length !== 3) {
      fail(`${where} workbook ${item.id}: debe tener exactamente 3 respuestas modelo`);
    } else if (item.recommendedAnswers.some((answer) => !String(answer).trim())) {
      fail(`${where} workbook ${item.id}: respuesta modelo vacía`);
    }
  }
}

// 3. IDs duplicados en todo el curriculum
const allItemIds = new Map();
for (const lesson of lessons) {
  const groups = [
    ['vocab', lesson.vocabulary ?? []],
    ['chunk', lesson.coreChunks ?? []],
    ['listening', lesson.listenings ?? []],
    ['workbook', lesson.workbook ?? []],
  ];
  for (const [kind, items] of groups) {
    for (const item of items) {
      if (allItemIds.has(item.id)) {
        fail(`ID duplicado (${kind}): ${item.id} en ${lesson.id} y ${allItemIds.get(item.id)}`);
      } else {
        allItemIds.set(item.id, lesson.id);
      }
    }
  }
}

// 4. Unicidad de contenido
const flat = (field) =>
  lessons.flatMap((lesson) => (lesson[field] ?? []).map((value) => ({ value, lessonId: lesson.id })));

const vocabMetrics = reportDuplicates(flat('vocabulary'), 'Vocabulario', (item) => item.word);
const chunkMetrics = reportDuplicates(flat('coreChunks'), 'Chunk', (item) => item.chunk);
const listeningMetrics = reportDuplicates(flat('listenings'), 'Listening', (item) => item.audioScript);
const workbookMetrics = reportDuplicates(flat('workbook'), 'Workbook prompt', (item) => item.promptEn);

const answerSets = lessons.flatMap((lesson) =>
  (lesson.workbook ?? []).map((item) => ({ value: item.recommendedAnswers ?? [], lessonId: lesson.id }))
);
const seenAnswerSets = new Map();
for (const { value, lessonId } of answerSets) {
  const key = sameSetKey(value);
  if (!key) continue;
  if (seenAnswerSets.has(key)) {
    fail(`Conjunto de respuestas modelo duplicado en ${lessonId} y ${seenAnswerSets.get(key)}`);
  } else {
    seenAnswerSets.set(key, lessonId);
  }
}

// 5. Métricas
const vocabUnique = vocabMetrics.unique;
const chunkUnique = chunkMetrics.unique;
const listeningUnique = listeningMetrics.unique;
const workbookUnique = workbookMetrics.unique;

if (errors.length > 0) {
  console.error(`\n✗ Validación fallida con ${errors.length} problema(s):\n`);
  for (const error of errors) console.error(`  - ${error}`);
  console.error(
    `\nMétricas: vocab ${vocabUnique}/${vocabMetrics.total} únicos · ` +
      `chunks ${chunkUnique}/${chunkMetrics.total} · ` +
      `listenings ${listeningUnique}/${listeningMetrics.total} · ` +
      `workbook ${workbookUnique}/${workbookMetrics.total} · ` +
      `respuestas ${seenAnswerSets.size}/${answerSets.length}`
  );
  process.exit(1);
}

if (warnings.length > 0) {
  console.warn(`\nAvisos:`);
  for (const warning of warnings) console.warn(`  - ${warning}`);
}

console.log(
  `Validación OK: ${vocabUnique} vocab únicos, ${chunkUnique} chunks únicos, ` +
    `${listeningUnique} listenings únicos, ${workbookUnique} workbook únicos, ` +
    `${seenAnswerSets.size} conjuntos de respuestas únicos en ${lessons.length} lecciones.`
);
