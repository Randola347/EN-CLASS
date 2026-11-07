import type { RescueFormula } from '../types/curriculum';

export const RESCUE_FORMULAS: RescueFormula[] = [
  // 1. REPETIR / NO ESCUCHÉ
  {
    id: 'res-1',
    category: 'repeat',
    categoryLabelEs: '1. Pedir que repitan sin pena',
    situationEs: 'El interlocutor habló demasiado rápido o hubo ruido ambiental.',
    phrase: 'Could you say that one more time a little slower, please?',
    meaningEs: '¿Podrías repetir eso una vez más un poco más despacio, por favor?',
    audioSample: 'Could you say that one more time a little slower, please?',
    whyItWorks: 'Es la fórmula estándar y más respetuosa en todo el mundo angloparlante. Nunca digas solo "What?".',
    exampleDialogue: {
      speakerA: "We're meeting at the downtown branch at seven sharp.",
      userReply: "Sorry, could you say that one more time a little slower, please?"
    }
  },
  {
    id: 'res-2',
    category: 'repeat',
    categoryLabelEs: '1. Pedir que repitan sin pena',
    situationEs: 'La persona se presentó pero el nombre fue ininteligible o muy veloz.',
    phrase: "Sorry, I didn't quite catch your name?",
    meaningEs: 'Disculpa, ¿no alcancé a captar tu nombre?',
    audioSample: "Sorry, I didn't quite catch your name?",
    whyItWorks: 'Muestra interés genuino y suena natural en eventos, reuniones o llamadas.',
    exampleDialogue: {
      speakerA: "Hi, I'm Siobhan from logistics.",
      userReply: "Hi! Sorry, I didn't quite catch your name?"
    }
  },
  {
    id: 'res-3',
    category: 'repeat',
    categoryLabelEs: '1. Pedir que repitan sin pena',
    situationEs: 'En una videollamada la voz se entrecortó por unos segundos.',
    phrase: 'Your audio cut out for a second; could you repeat that last part?',
    meaningEs: 'Tu audio se cortó un segundo; ¿podrías repetir la última parte?',
    audioSample: 'Your audio cut out for a second; could you repeat that last part?',
    whyItWorks: 'Atribuye la duda a la conexión tecnológica y no a tu capacidad de comprensión.',
    exampleDialogue: {
      speakerA: "...and the third priority is to... (audio congelado)",
      userReply: "Your audio cut out for a second; could you repeat that last part?"
    }
  },

  // 2. SIGNIFICADO DE PALABRAS Y ACRÓNIMOS
  {
    id: 'res-4',
    category: 'meaning',
    categoryLabelEs: '2. Preguntar el significado de un término',
    situationEs: 'Alguien usó una sigla técnica o corporativa (ej. KPI, ETA, ROI, ASAP).',
    phrase: 'What does that acronym stand for in this context?',
    meaningEs: '¿Qué significan esas siglas en este contexto?',
    audioSample: 'What does that acronym stand for in this context?',
    whyItWorks: 'Incluso los nativos preguntan por acrónimos de otras empresas; demuestra madurez profesional.',
    exampleDialogue: {
      speakerA: "We need to analyze the churn rate and the CAC.",
      userReply: "Pardon me, what does CAC stand for in this context?"
    }
  },
  {
    id: 'res-5',
    category: 'meaning',
    categoryLabelEs: '2. Preguntar el significado de un término',
    situationEs: 'Escuchaste una palabra que no conoces y quieres su definición sencilla.',
    phrase: 'What do you mean by that word?',
    meaningEs: '¿Qué quieres decir con esa palabra / a qué te refieres?',
    audioSample: 'What do you mean by that word?',
    whyItWorks: 'Invita a la otra persona a parafrasear con vocabulario más básico.',
    exampleDialogue: {
      speakerA: "The initial results look a bit dubious.",
      userReply: "I'm not familiar with that term; what do you mean by dubious?"
    }
  },

  // 3. CÓMO SE DICE EN INGLÉS
  {
    id: 'res-6',
    category: 'translate',
    categoryLabelEs: '3. Preguntar cómo se dice algo',
    situationEs: 'Estás frente a un objeto, comida o documento y quieres saber cómo llamarlo.',
    phrase: 'What is this called in English?',
    meaningEs: '¿Cómo se llama esto en inglés?',
    audioSample: 'What is this called in English?',
    whyItWorks: 'Puedes señalar con la mano y aprender el término de inmediato de un nativo.',
    exampleDialogue: {
      speakerA: "Can I get you anything else?",
      userReply: "What is this pastry called in English? It looks delicious."
    }
  },
  {
    id: 'res-7',
    category: 'translate',
    categoryLabelEs: '3. Preguntar cómo se dice algo',
    situationEs: 'Sabes la palabra en español pero se te escapa la traducción al inglés.',
    phrase: 'How do you say "presupuesto" in English again?',
    meaningEs: '¿Cómo se decía "presupuesto" en inglés?',
    audioSample: 'How do you say that in English again?',
    whyItWorks: 'Preguntar de manera directa mantiene la fluidez de la conversación sin pausas incómodas.',
    exampleDialogue: {
      userReply: "We need to check the... how do you say 'presupuesto' in English again?",
      speakerA: "Oh, you mean the budget!"
    }
  },

  // 4. GANAR TIEMPO PARA PENSAR (SAFETY BELTS)
  {
    id: 'res-8',
    category: 'buying_time',
    categoryLabelEs: '4. Ganar 3 a 5 segundos para pensar',
    situationEs: 'Te hacen una pregunta inesperada y necesitas organizar tus ideas antes de contestar.',
    phrase: "That's a very good question; let me think for a second...",
    meaningEs: 'Esa es una muy buena pregunta; déjame pensar un segundo...',
    audioSample: "That's a very good question; let me think for a second...",
    whyItWorks: 'Elimina el silencio incómodo y le da a tu cerebro tiempo para estructurar la frase en inglés.',
    exampleDialogue: {
      speakerA: "Where do you see yourself in three years?",
      userReply: "That's a great question; let me think for a second... I would say..."
    }
  },
  {
    id: 'res-9',
    category: 'buying_time',
    categoryLabelEs: '4. Ganar 3 a 5 segundos para pensar',
    situationEs: 'Te trabaste a mitad de una frase larga y quieres recomenzar limpiamente.',
    phrase: "What I'm trying to say is...",
    meaningEs: 'Lo que intento decir es... (reencuadre inmediato)',
    audioSample: "What I'm trying to say is...",
    whyItWorks: 'Borra el enredo gramatical previo y te permite reiniciar la idea con palabras sencillas.',
    exampleDialogue: {
      userReply: "Because if we do... and then... what I'm trying to say is that we need more testing.",
      speakerA: "Got it, that makes sense."
    }
  },

  // 5. CONFIRMAR ENTENDIMIENTO (MISMA SINTONÍA)
  {
    id: 'res-10',
    category: 'confirm',
    categoryLabelEs: '5. Confirmar acuerdos y sintonía',
    situationEs: 'Terminaron de acordar una tarea y quieres garantizar que entendiste bien el objetivo.',
    phrase: "Just to make sure we're on the same page, the next step is...?",
    meaningEs: 'Solo para asegurarnos de que estamos en sintonía, ¿el siguiente paso es...?',
    audioSample: "Just to make sure we're on the same page, what are the next steps?",
    whyItWorks: 'Evita errores costosos en proyectos y denota alto profesionalismo.',
    exampleDialogue: {
      speakerA: "Great, let's move forward with option B.",
      userReply: "Just to make sure we're on the same page, should I email the draft by Friday?"
    }
  },
  {
    id: 'res-11',
    category: 'confirm',
    categoryLabelEs: '5. Confirmar acuerdos y sintonía',
    situationEs: 'Explicaste una idea y quieres comprobar si fuiste claro.',
    phrase: 'Does that make sense, or should I explain it differently?',
    meaningEs: '¿Tiene sentido o debería explicarlo de otra manera?',
    audioSample: 'Does that make sense, or should I explain it differently?',
    whyItWorks: 'Traslada la responsabilidad de la claridad a ti de forma educada.',
    exampleDialogue: {
      userReply: "...so that's why we adjusted the server settings. Does that make sense?",
      speakerA: "Yes, completely clear!"
    }
  },
  {
    id: 'res-12',
    category: 'buying_time',
    categoryLabelEs: '4. Ganar 3 a 5 segundos para pensar',
    situationEs: 'Te distrajiste o se te fue la idea principal mientras exponías.',
    phrase: 'Pardon me, I lost my train of thought for a second. Coming back to my point...',
    meaningEs: 'Perdón, se me fue el hilo un segundo. Volviendo a mi punto...',
    audioSample: 'Pardon me, I lost my train of thought for a second.',
    whyItWorks: 'Los oradores nativos lo usan constantemente; nunca pidas disculpas por tu inglés.',
    exampleDialogue: {
      userReply: "And then the numbers... pardon me, I lost my train of thought. Coming back to user retention...",
      speakerA: "Sure, go ahead."
    }
  }
];
