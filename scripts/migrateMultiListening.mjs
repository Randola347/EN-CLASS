import fs from 'fs';
import path from 'path';

// Let's migrate all 4 levels so that:
// 1. Each lesson has 'listenings' array of 3 items (daily, work, fast_paced)
// 2. Remove 'clarificationTools' from lesson (now globally in RescueCenterHub)

const levels = ['a1', 'a2', 'b1', 'b2'];

for (const lvl of levels) {
  const filePath = path.resolve(`src/data/levels/${lvl}Data.ts`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const jsonStr = raw
    .replace(/^import type \{ CourseLesson \} from '\.\.\/\.\.\/types\/curriculum';\s*export const [A-Z0-9_]+: CourseLesson\[\] = /, '')
    .replace(/;\s*$/, '');

  const data = JSON.parse(jsonStr);

  const updated = data.map((lesson) => {
    // Generate 3 unique listenings
    const listenings = [
      {
        id: `ml-${lesson.id}-1`,
        title: `Audio 1: Diálogo Cotidiano / Café`,
        contextType: 'daily',
        audioScript: `Hey! Are you having lunch around here today? We're heading to the Italian bistro across the street if you want to join us.`,
        spanishContext: `Un colega te invita casualmente a almorzar en un restaurante cercano.`,
        comprehensionQuestion: "¿A dónde van a ir y qué te preguntan?",
        options: [
          "Van a trabajar hasta tarde y te piden un reporte",
          "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
          "Van al aeropuerto a recoger a un cliente"
        ],
        correctAnswer: "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
        explanation: "El hablante dice 'heading to the Italian bistro across the street if you want to join us'."
      },
      {
        id: `ml-${lesson.id}-2`,
        title: `Audio 2: Llamada / Contexto Laboral`,
        contextType: 'work',
        audioScript: `Good morning. Quick update on the client request: we've reviewed the feedback, and everything looks ready for the final sign-off this afternoon.`,
        spanishContext: `Mensaje de voz de tu supervisor sobre la solicitud de un cliente.`,
        comprehensionQuestion: "¿Cuál es el estatus del requerimiento del cliente?",
        options: [
          "Fue cancelado por presupuesto",
          "Revisaron el feedback y todo está listo para la firma final esta tarde",
          "Necesitan dos semanas más para corregir errores"
        ],
        correctAnswer: "Revisaron el feedback y todo está listo para la firma final esta tarde",
        explanation: "Menciona 'reviewed the feedback, and everything looks ready for the final sign-off this afternoon'."
      },
      {
        id: `ml-${lesson.id}-3`,
        title: `Audio 3: Situación Rápida / Imprevisto`,
        contextType: 'fast_paced',
        audioScript: `Excuse me, could you tell me if the express train to the airport stops at platform four or platform seven? The display board is down.`,
        spanishContext: `Un viajero apresurado en la estación de tren te pide auxilio por una pantalla apagada.`,
        comprehensionQuestion: "¿Qué información necesita el viajero?",
        options: [
          "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
          "Comprar un boleto de ida y vuelta",
          "A qué hora abren las tiendas del aeropuerto"
        ],
        correctAnswer: "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
        explanation: "Pregunta 'if the express train to the airport stops at platform four or platform seven? The display board is down'."
      }
    ];

    const copy = { ...lesson };
    delete copy.clarificationTools;
    delete copy.listening;
    copy.listenings = listenings;
    return copy;
  });

  const constName = `${lvl.toUpperCase()}_LESSONS`;
  const newContent = `import type { CourseLesson } from '../../types/curriculum';\n\nexport const ${constName}: CourseLesson[] = ${JSON.stringify(updated, null, 2)};\n`;
  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`Updated ${lvl}Data.ts with multi-listening and cleaned structure.`);
}
