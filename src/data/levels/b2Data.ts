import type { CourseLesson } from '../../types/curriculum';
import { B2_CONTENT } from '../curriculum/b2Content';

const BASE_B2_LESSONS: CourseLesson[] = [
  {
    "id": "lesson-b2-1",
    "level": "B2",
    "lessonNumber": 1,
    "title": "Tercer Condicional y Arrepentimientos (should have / would have)",
    "tagline": "El análisis retrospectivo: analiza errores pasados y cómo pudieron ser distintos",
    "grammarFocus": "Third Conditional (If + had + participle, would have + participle) y Should have",
    "practicalGoal": "Evaluar retrospectivas de proyectos, expresar arrepentimientos y justificar lecciones aprendidas.",
    "theory": {
      "title": "Third Conditional & Past Regrets",
      "overviewEs": "El Tercer Condicional se usa para hablar de situaciones hipotéticas en el PASADO que nunca sucedieron, y de sus consecuencias imaginadas en el pasado. Es el condicional de los arrepentimientos y el análisis de proyectos ('Si hubiera sabido esto, habría actuado diferente').",
      "grammarChart": {
        "title": "Third Conditional: Lo que pudo haber sido",
        "structureFormula": "If + had + past participle, would have + past participle",
        "rows": [
          {
            "subject": "Hipotético Pasado Completo",
            "affirmative": "If we had left earlier, we would have caught the flight.",
            "negative": "If I hadn't lost my notes, I wouldn't have failed.",
            "question": "Would you have accepted if they had offered more?",
            "shortAnswer": "Yes, I would have."
          },
          {
            "subject": "Arrepentimiento (Should have)",
            "affirmative": "I should have double-checked the numbers.",
            "negative": "I shouldn't have stayed up so late.",
            "question": "Should we have called them?",
            "shortAnswer": "Yes, we should have."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Pronunciación conectada 'would've'",
            "description": "Los nativos nunca dicen 'would have' separado en conversación casual: dicen 'would've' /wʊdəv/.",
            "example": "I would've called you."
          }
        ]
      },
      "signalWords": [
        "had I known",
        "in hindsight",
        "looking back",
        "regretfully",
        "if only"
      ],
      "commonMistakes": [
        {
          "wrong": "If I would have known, I would have told you",
          "correct": "If I had known, I would have told you",
          "explanation": "Nunca pongas 'would have' dentro de la cláusula IF. Solo usa Past Perfect ('had known')."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-B2-1-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-B2-1-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-B2-1-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-B2-1-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-B2-1-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-B2-1-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-B2-1-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-B2-1-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-B2-1-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-B2-1-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-B2-1-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-B2-1-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-B2-1-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-B2-1-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-B2-1-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-B2-1-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-B2-1-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-B2-1-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-B2-1-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-B2-1-20",
        "word": "figure out",
        "phonetic": "/ˈfɪɡjər aʊt/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "descifrar / resolver",
        "exampleEn": "We need to figure out a better solution.",
        "exampleEs": "Debemos descifrar una mejor solución."
      }
    ],
    "coreChunks": [
      {
        "id": "c-B2-1-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-B2-1-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-B2-1-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-B2-1-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-B2-1-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-B2-1-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-B2-1-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-B2-1-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-B2-1-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-B2-1-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-B2-1-1",
        "category": "routine",
        "situationEs": "Situación #1 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-2",
        "category": "social",
        "situationEs": "Situación #2 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Tercer Condicional y Arrepentimientos (should have / would have) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Tercer Condicional y Arrepentimientos (should have / would have) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-6",
        "category": "routine",
        "situationEs": "Situación #6 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Tercer Condicional y Arrepentimientos (should have / would have) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-7",
        "category": "social",
        "situationEs": "Situación #7 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Tercer Condicional y Arrepentimientos (should have / would have) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Tercer Condicional y Arrepentimientos (should have / would have) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-11",
        "category": "routine",
        "situationEs": "Situación #11 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-12",
        "category": "social",
        "situationEs": "Situación #12 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Tercer Condicional y Arrepentimientos (should have / would have) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Tercer Condicional y Arrepentimientos (should have / would have) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-16",
        "category": "routine",
        "situationEs": "Situación #16 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Tercer Condicional y Arrepentimientos (should have / would have) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-17",
        "category": "social",
        "situationEs": "Situación #17 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Tercer Condicional y Arrepentimientos (should have / would have) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-1-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Tercer Condicional y Arrepentimientos (should have / would have): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Tercer Condicional y Arrepentimientos (should have / would have) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      }
    ],
    "listenings": [
      {
        "id": "ml-lesson-b2-1-1",
        "title": "Audio 1: Diálogo Cotidiano / Café",
        "contextType": "daily",
        "audioScript": "Hey! Are you having lunch around here today? We're heading to the Italian bistro across the street if you want to join us.",
        "spanishContext": "Un colega te invita casualmente a almorzar en un restaurante cercano.",
        "comprehensionQuestion": "¿A dónde van a ir y qué te preguntan?",
        "options": [
          "Van a trabajar hasta tarde y te piden un reporte",
          "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
          "Van al aeropuerto a recoger a un cliente"
        ],
        "correctAnswer": "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
        "explanation": "El hablante dice 'heading to the Italian bistro across the street if you want to join us'."
      },
      {
        "id": "ml-lesson-b2-1-2",
        "title": "Audio 2: Llamada / Contexto Laboral",
        "contextType": "work",
        "audioScript": "Good morning. Quick update on the client request: we've reviewed the feedback, and everything looks ready for the final sign-off this afternoon.",
        "spanishContext": "Mensaje de voz de tu supervisor sobre la solicitud de un cliente.",
        "comprehensionQuestion": "¿Cuál es el estatus del requerimiento del cliente?",
        "options": [
          "Fue cancelado por presupuesto",
          "Revisaron el feedback y todo está listo para la firma final esta tarde",
          "Necesitan dos semanas más para corregir errores"
        ],
        "correctAnswer": "Revisaron el feedback y todo está listo para la firma final esta tarde",
        "explanation": "Menciona 'reviewed the feedback, and everything looks ready for the final sign-off this afternoon'."
      },
      {
        "id": "ml-lesson-b2-1-3",
        "title": "Audio 3: Situación Rápida / Imprevisto",
        "contextType": "fast_paced",
        "audioScript": "Excuse me, could you tell me if the express train to the airport stops at platform four or platform seven? The display board is down.",
        "spanishContext": "Un viajero apresurado en la estación de tren te pide auxilio por una pantalla apagada.",
        "comprehensionQuestion": "¿Qué información necesita el viajero?",
        "options": [
          "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
          "Comprar un boleto de ida y vuelta",
          "A qué hora abren las tiendas del aeropuerto"
        ],
        "correctAnswer": "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
        "explanation": "Pregunta 'if the express train to the airport stops at platform four or platform seven? The display board is down'."
      }
    ]
  },
  {
    "id": "lesson-b2-2",
    "level": "B2",
    "lessonNumber": 2,
    "title": "Voz Pasiva en Entornos Profesionales y Corporativos",
    "tagline": "El lenguaje de la diplomacia: cómo sonar objetivo, formal e impersonal",
    "grammarFocus": "Passive Voice (be + past participle) en correos y reportes de negocios",
    "practicalGoal": "Redactar informes objetivos, reportar errores sin culpar a personas individuales y redactar minutas.",
    "theory": {
      "title": "Voz Pasiva Formal y Corporativa",
      "overviewEs": "En el mundo laboral y periodístico, la Voz Pasiva se utiliza para enfocar la atención en la acción o el resultado y no en la persona que la ejecutó. Es invaluable para la diplomacia empresarial porque permite reportar problemas sin señalar con el dedo ('A mistake was made' en vez de 'You made a mistake').",
      "grammarChart": {
        "title": "Voz Pasiva por Tiempos Verbales",
        "structureFormula": "Object becomes Subject + appropriate form of BE + Past Participle",
        "rows": [
          {
            "subject": "Present Simple",
            "affirmative": "The invoices are processed daily.",
            "negative": "Data is not stored on public servers.",
            "question": "Is the report reviewed every week?",
            "shortAnswer": "Yes, it is."
          },
          {
            "subject": "Past Simple",
            "affirmative": "The contract was signed yesterday.",
            "negative": "The client was not notified on time.",
            "question": "Was the server rebooted last night?",
            "shortAnswer": "Yes, it was."
          },
          {
            "subject": "Present Perfect",
            "affirmative": "All requirements have been met.",
            "negative": "The bug has not been fixed yet.",
            "question": "Have the changes been approved?",
            "shortAnswer": "Yes, they have."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Agente 'by' solo si es relevante",
            "description": "Omitimos 'by someone' si es obvio o desconocido.",
            "example": "The building was renovated in 2020."
          }
        ]
      },
      "signalWords": [
        "it was agreed",
        "it is recommended",
        "was established",
        "has been updated"
      ],
      "commonMistakes": [
        {
          "wrong": "The documents was signed",
          "correct": "The documents were signed",
          "explanation": "El verbo TO BE debe concordar en número con el sujeto de la oración pasiva."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-B2-2-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-B2-2-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-B2-2-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-B2-2-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-B2-2-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-B2-2-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-B2-2-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-B2-2-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-B2-2-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-B2-2-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-B2-2-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-B2-2-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-B2-2-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-B2-2-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-B2-2-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-B2-2-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-B2-2-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-B2-2-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-B2-2-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-B2-2-20",
        "word": "figure out",
        "phonetic": "/ˈfɪɡjər aʊt/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "descifrar / resolver",
        "exampleEn": "We need to figure out a better solution.",
        "exampleEs": "Debemos descifrar una mejor solución."
      }
    ],
    "coreChunks": [
      {
        "id": "c-B2-2-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-B2-2-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-B2-2-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-B2-2-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-B2-2-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-B2-2-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-B2-2-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-B2-2-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-B2-2-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-B2-2-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-B2-2-1",
        "category": "routine",
        "situationEs": "Situación #1 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-2",
        "category": "social",
        "situationEs": "Situación #2 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Voz Pasiva en Entornos Profesionales y Corporativos when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Voz Pasiva en Entornos Profesionales y Corporativos when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-6",
        "category": "routine",
        "situationEs": "Situación #6 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Voz Pasiva en Entornos Profesionales y Corporativos when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-7",
        "category": "social",
        "situationEs": "Situación #7 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Voz Pasiva en Entornos Profesionales y Corporativos when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Voz Pasiva en Entornos Profesionales y Corporativos when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-11",
        "category": "routine",
        "situationEs": "Situación #11 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-12",
        "category": "social",
        "situationEs": "Situación #12 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Voz Pasiva en Entornos Profesionales y Corporativos when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Voz Pasiva en Entornos Profesionales y Corporativos when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-16",
        "category": "routine",
        "situationEs": "Situación #16 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Voz Pasiva en Entornos Profesionales y Corporativos when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-17",
        "category": "social",
        "situationEs": "Situación #17 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Voz Pasiva en Entornos Profesionales y Corporativos when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-2-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Voz Pasiva en Entornos Profesionales y Corporativos: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Voz Pasiva en Entornos Profesionales y Corporativos when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      }
    ],
    "listenings": [
      {
        "id": "ml-lesson-b2-2-1",
        "title": "Audio 1: Diálogo Cotidiano / Café",
        "contextType": "daily",
        "audioScript": "Hey! Are you having lunch around here today? We're heading to the Italian bistro across the street if you want to join us.",
        "spanishContext": "Un colega te invita casualmente a almorzar en un restaurante cercano.",
        "comprehensionQuestion": "¿A dónde van a ir y qué te preguntan?",
        "options": [
          "Van a trabajar hasta tarde y te piden un reporte",
          "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
          "Van al aeropuerto a recoger a un cliente"
        ],
        "correctAnswer": "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
        "explanation": "El hablante dice 'heading to the Italian bistro across the street if you want to join us'."
      },
      {
        "id": "ml-lesson-b2-2-2",
        "title": "Audio 2: Llamada / Contexto Laboral",
        "contextType": "work",
        "audioScript": "Good morning. Quick update on the client request: we've reviewed the feedback, and everything looks ready for the final sign-off this afternoon.",
        "spanishContext": "Mensaje de voz de tu supervisor sobre la solicitud de un cliente.",
        "comprehensionQuestion": "¿Cuál es el estatus del requerimiento del cliente?",
        "options": [
          "Fue cancelado por presupuesto",
          "Revisaron el feedback y todo está listo para la firma final esta tarde",
          "Necesitan dos semanas más para corregir errores"
        ],
        "correctAnswer": "Revisaron el feedback y todo está listo para la firma final esta tarde",
        "explanation": "Menciona 'reviewed the feedback, and everything looks ready for the final sign-off this afternoon'."
      },
      {
        "id": "ml-lesson-b2-2-3",
        "title": "Audio 3: Situación Rápida / Imprevisto",
        "contextType": "fast_paced",
        "audioScript": "Excuse me, could you tell me if the express train to the airport stops at platform four or platform seven? The display board is down.",
        "spanishContext": "Un viajero apresurado en la estación de tren te pide auxilio por una pantalla apagada.",
        "comprehensionQuestion": "¿Qué información necesita el viajero?",
        "options": [
          "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
          "Comprar un boleto de ida y vuelta",
          "A qué hora abren las tiendas del aeropuerto"
        ],
        "correctAnswer": "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
        "explanation": "Pregunta 'if the express train to the airport stops at platform four or platform seven? The display board is down'."
      }
    ]
  },
  {
    "id": "lesson-b2-3",
    "level": "B2",
    "lessonNumber": 3,
    "title": "Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones",
    "tagline": "Cómo transmitir lo que otros dijeron sin errores de concordancia temporal",
    "grammarFocus": "Reported Statements, Questions y Requests (backshift de tiempos)",
    "practicalGoal": "Resumir reuniones con clientes a tu equipo y transmitir mensajes importantes de terceros con precisión.",
    "theory": {
      "title": "Reported Speech: Retransmitir Mensajes",
      "overviewEs": "Cuando contamos lo que otra persona dijo en el pasado, los tiempos verbales suelen dar 'un paso hacia atrás' (backshift). Por ejemplo, el Present Simple se convierte en Past Simple, el Present Continuous en Past Continuous, y 'will' se convierte en 'would'.",
      "grammarChart": {
        "title": "Tabla de Transformación (Backshift)",
        "structureFormula": "Direct Speech ➔ Reported Speech (say / tell that)",
        "rows": [
          {
            "subject": "Present ➔ Past",
            "affirmative": "'I need more time' ➔ He said he needed more time.",
            "negative": "'I don't agree' ➔ She said she didn't agree.",
            "question": "'Where do you live?' ➔ He asked where I lived.",
            "shortAnswer": "N/A"
          },
          {
            "subject": "Will ➔ Would",
            "affirmative": "'I will call you' ➔ He promised he would call me.",
            "negative": "'I won't do it' ➔ She said she wouldn't do it.",
            "question": "'Will you come?' ➔ He asked if I would come.",
            "shortAnswer": "N/A"
          },
          {
            "subject": "Can ➔ Could",
            "affirmative": "'I can finish it' ➔ She said she could finish it.",
            "negative": "'I can't access' ➔ He said he couldn't access.",
            "question": "'Can you help?' ➔ She asked if I could help.",
            "shortAnswer": "N/A"
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Say vs Tell",
            "description": "'Say' no requiere persona directa ('She said that...'). 'Tell' exige a quién se le dijo ('She told ME that...').",
            "example": "He said that he was ready / He told me that he was ready."
          }
        ]
      },
      "signalWords": [
        "he explained that",
        "she mentioned that",
        "they confirmed that",
        "he asked whether"
      ],
      "commonMistakes": [
        {
          "wrong": "He said me that he was tired",
          "correct": "He told me that he was tired / He said that he was tired",
          "explanation": "Nunca uses 'said me'. Usa 'told me' o 'said to me'."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-B2-3-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-B2-3-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-B2-3-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-B2-3-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-B2-3-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-B2-3-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-B2-3-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-B2-3-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-B2-3-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-B2-3-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-B2-3-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-B2-3-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-B2-3-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-B2-3-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-B2-3-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-B2-3-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-B2-3-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-B2-3-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-B2-3-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-B2-3-20",
        "word": "figure out",
        "phonetic": "/ˈfɪɡjər aʊt/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "descifrar / resolver",
        "exampleEn": "We need to figure out a better solution.",
        "exampleEs": "Debemos descifrar una mejor solución."
      }
    ],
    "coreChunks": [
      {
        "id": "c-B2-3-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-B2-3-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-B2-3-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-B2-3-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-B2-3-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-B2-3-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-B2-3-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-B2-3-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-B2-3-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-B2-3-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-B2-3-1",
        "category": "routine",
        "situationEs": "Situación #1 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-2",
        "category": "social",
        "situationEs": "Situación #2 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-6",
        "category": "routine",
        "situationEs": "Situación #6 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-7",
        "category": "social",
        "situationEs": "Situación #7 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-11",
        "category": "routine",
        "situationEs": "Situación #11 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-12",
        "category": "social",
        "situationEs": "Situación #12 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-16",
        "category": "routine",
        "situationEs": "Situación #16 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-17",
        "category": "social",
        "situationEs": "Situación #17 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-3-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      }
    ],
    "listenings": [
      {
        "id": "ml-lesson-b2-3-1",
        "title": "Audio 1: Diálogo Cotidiano / Café",
        "contextType": "daily",
        "audioScript": "Hey! Are you having lunch around here today? We're heading to the Italian bistro across the street if you want to join us.",
        "spanishContext": "Un colega te invita casualmente a almorzar en un restaurante cercano.",
        "comprehensionQuestion": "¿A dónde van a ir y qué te preguntan?",
        "options": [
          "Van a trabajar hasta tarde y te piden un reporte",
          "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
          "Van al aeropuerto a recoger a un cliente"
        ],
        "correctAnswer": "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
        "explanation": "El hablante dice 'heading to the Italian bistro across the street if you want to join us'."
      },
      {
        "id": "ml-lesson-b2-3-2",
        "title": "Audio 2: Llamada / Contexto Laboral",
        "contextType": "work",
        "audioScript": "Good morning. Quick update on the client request: we've reviewed the feedback, and everything looks ready for the final sign-off this afternoon.",
        "spanishContext": "Mensaje de voz de tu supervisor sobre la solicitud de un cliente.",
        "comprehensionQuestion": "¿Cuál es el estatus del requerimiento del cliente?",
        "options": [
          "Fue cancelado por presupuesto",
          "Revisaron el feedback y todo está listo para la firma final esta tarde",
          "Necesitan dos semanas más para corregir errores"
        ],
        "correctAnswer": "Revisaron el feedback y todo está listo para la firma final esta tarde",
        "explanation": "Menciona 'reviewed the feedback, and everything looks ready for the final sign-off this afternoon'."
      },
      {
        "id": "ml-lesson-b2-3-3",
        "title": "Audio 3: Situación Rápida / Imprevisto",
        "contextType": "fast_paced",
        "audioScript": "Excuse me, could you tell me if the express train to the airport stops at platform four or platform seven? The display board is down.",
        "spanishContext": "Un viajero apresurado en la estación de tren te pide auxilio por una pantalla apagada.",
        "comprehensionQuestion": "¿Qué información necesita el viajero?",
        "options": [
          "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
          "Comprar un boleto de ida y vuelta",
          "A qué hora abren las tiendas del aeropuerto"
        ],
        "correctAnswer": "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
        "explanation": "Pregunta 'if the express train to the airport stops at platform four or platform seven? The display board is down'."
      }
    ]
  },
  {
    "id": "lesson-b2-4",
    "level": "B2",
    "lessonNumber": 4,
    "title": "Phrasal Verbs Avanzados de Negocios y Oficina",
    "tagline": "El lenguaje informal de las reuniones globales: entiende todo a la primera",
    "grammarFocus": "Phrasal verbs corporativos (follow up, wrap up, bring up, call off, figure out)",
    "practicalGoal": "Participar con naturalidad en standups, calls ágiles y redactar correos de seguimiento.",
    "theory": {
      "title": "Business Phrasal Verbs",
      "overviewEs": "En el mundo profesional angloparlante (Silicon Valley, Londres, multinacionales), nadie dice 'Let us postpone the assembly'. Dicen 'Let's push back the call'. Dominar estos phrasal verbs es el verdadero sello de un nivel B2 sólido.",
      "grammarChart": {
        "title": "Phrasal Verbs Clave de Oficina",
        "structureFormula": "Verb + Preposition / Particle with idiomatic meaning",
        "rows": [
          {
            "subject": "Follow up (dar seguimiento)",
            "affirmative": "I will follow up with the client this afternoon.",
            "negative": "We didn't follow up on that lead.",
            "question": "Did you follow up with HR?",
            "shortAnswer": "Yes, I did."
          },
          {
            "subject": "Bring up (sacar a colación un tema)",
            "affirmative": "She brought up the budget issue during the sync.",
            "negative": "Don't bring up the delay now.",
            "question": "Should we bring it up today?",
            "shortAnswer": "Yes, we should."
          },
          {
            "subject": "Call off (cancelar un evento)",
            "affirmative": "They called off the meeting due to illness.",
            "negative": "They decided not to call it off.",
            "question": "Was the launch called off?",
            "shortAnswer": "Yes, it was."
          },
          {
            "subject": "Wrap up (concluir / cerrar)",
            "affirmative": "Let's wrap up this discussion in five minutes.",
            "negative": "We haven't wrapped up the audit yet.",
            "question": "Can we wrap this up?",
            "shortAnswer": "Almost done."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Separabilidad",
            "description": "Muchos phrasal verbs aceptan el pronombre en medio.",
            "example": "Call it off (NO: Call off it)."
          }
        ]
      },
      "signalWords": [
        "follow up",
        "wrap up",
        "bring up",
        "call off",
        "figure out",
        "point out"
      ],
      "commonMistakes": [
        {
          "wrong": "I will call off it",
          "correct": "I will call it off",
          "explanation": "Cuando el objeto es un pronombre (it/them/him), debe colocarse entre el verbo y la partícula."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-B2-4-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-B2-4-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-B2-4-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-B2-4-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-B2-4-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-B2-4-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-B2-4-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-B2-4-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-B2-4-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-B2-4-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-B2-4-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-B2-4-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-B2-4-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-B2-4-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-B2-4-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-B2-4-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-B2-4-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-B2-4-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-B2-4-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-B2-4-20",
        "word": "figure out",
        "phonetic": "/ˈfɪɡjər aʊt/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "descifrar / resolver",
        "exampleEn": "We need to figure out a better solution.",
        "exampleEs": "Debemos descifrar una mejor solución."
      }
    ],
    "coreChunks": [
      {
        "id": "c-B2-4-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-B2-4-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-B2-4-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-B2-4-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-B2-4-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-B2-4-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-B2-4-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-B2-4-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-B2-4-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-B2-4-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-B2-4-1",
        "category": "routine",
        "situationEs": "Situación #1 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-2",
        "category": "social",
        "situationEs": "Situación #2 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Phrasal Verbs Avanzados de Negocios y Oficina when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Phrasal Verbs Avanzados de Negocios y Oficina when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-6",
        "category": "routine",
        "situationEs": "Situación #6 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Phrasal Verbs Avanzados de Negocios y Oficina when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-7",
        "category": "social",
        "situationEs": "Situación #7 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Phrasal Verbs Avanzados de Negocios y Oficina when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Phrasal Verbs Avanzados de Negocios y Oficina when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-11",
        "category": "routine",
        "situationEs": "Situación #11 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-12",
        "category": "social",
        "situationEs": "Situación #12 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Phrasal Verbs Avanzados de Negocios y Oficina when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Phrasal Verbs Avanzados de Negocios y Oficina when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-16",
        "category": "routine",
        "situationEs": "Situación #16 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Phrasal Verbs Avanzados de Negocios y Oficina when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-17",
        "category": "social",
        "situationEs": "Situación #17 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Phrasal Verbs Avanzados de Negocios y Oficina when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-4-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Phrasal Verbs Avanzados de Negocios y Oficina: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Phrasal Verbs Avanzados de Negocios y Oficina when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      }
    ],
    "listenings": [
      {
        "id": "ml-lesson-b2-4-1",
        "title": "Audio 1: Diálogo Cotidiano / Café",
        "contextType": "daily",
        "audioScript": "Hey! Are you having lunch around here today? We're heading to the Italian bistro across the street if you want to join us.",
        "spanishContext": "Un colega te invita casualmente a almorzar en un restaurante cercano.",
        "comprehensionQuestion": "¿A dónde van a ir y qué te preguntan?",
        "options": [
          "Van a trabajar hasta tarde y te piden un reporte",
          "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
          "Van al aeropuerto a recoger a un cliente"
        ],
        "correctAnswer": "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
        "explanation": "El hablante dice 'heading to the Italian bistro across the street if you want to join us'."
      },
      {
        "id": "ml-lesson-b2-4-2",
        "title": "Audio 2: Llamada / Contexto Laboral",
        "contextType": "work",
        "audioScript": "Good morning. Quick update on the client request: we've reviewed the feedback, and everything looks ready for the final sign-off this afternoon.",
        "spanishContext": "Mensaje de voz de tu supervisor sobre la solicitud de un cliente.",
        "comprehensionQuestion": "¿Cuál es el estatus del requerimiento del cliente?",
        "options": [
          "Fue cancelado por presupuesto",
          "Revisaron el feedback y todo está listo para la firma final esta tarde",
          "Necesitan dos semanas más para corregir errores"
        ],
        "correctAnswer": "Revisaron el feedback y todo está listo para la firma final esta tarde",
        "explanation": "Menciona 'reviewed the feedback, and everything looks ready for the final sign-off this afternoon'."
      },
      {
        "id": "ml-lesson-b2-4-3",
        "title": "Audio 3: Situación Rápida / Imprevisto",
        "contextType": "fast_paced",
        "audioScript": "Excuse me, could you tell me if the express train to the airport stops at platform four or platform seven? The display board is down.",
        "spanishContext": "Un viajero apresurado en la estación de tren te pide auxilio por una pantalla apagada.",
        "comprehensionQuestion": "¿Qué información necesita el viajero?",
        "options": [
          "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
          "Comprar un boleto de ida y vuelta",
          "A qué hora abren las tiendas del aeropuerto"
        ],
        "correctAnswer": "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
        "explanation": "Pregunta 'if the express train to the airport stops at platform four or platform seven? The display board is down'."
      }
    ]
  },
  {
    "id": "lesson-b2-5",
    "level": "B2",
    "lessonNumber": 5,
    "title": "Hedging, Diplomacia y Rescate Conversacional",
    "tagline": "Lidera debates complejos, discrepa con elegancia y recupera el control si te bloqueas",
    "grammarFocus": "Estrategias de 'Hedging' (modulación asertiva) y frases de rescate mental",
    "practicalGoal": "Cuestionar suposiciones con respeto, liderar juntas de alta presión y reconducir la charla si olvidas una idea.",
    "theory": {
      "title": "Hedging y Asertividad Diplomática",
      "overviewEs": "A nivel B2, la fluidez no consiste solo en no cometer errores gramaticales, sino en modular el tono con diplomacia. La técnica de 'Hedging' permite expresar desacuerdos constructivos ('To play devil's advocate...', 'I have some reservations...') sin parecer autoritario ni grosero.",
      "grammarChart": {
        "title": "Técnicas de Modulación Diplomática",
        "structureFormula": "Softener + Assertion + Constructive Alternative",
        "rows": [
          {
            "subject": "Abogado del Diablo",
            "affirmative": "To play devil's advocate, what happens if adoption drops?",
            "negative": "I'm not against it, but...",
            "question": "Could we consider the risks?",
            "shortAnswer": "Fair point."
          },
          {
            "subject": "Expresar Reservas con Tacto",
            "affirmative": "I have some reservations regarding the current timeline.",
            "negative": "It might not be the most cost-effective path.",
            "question": "Does that seem feasible?",
            "shortAnswer": "We'll see."
          },
          {
            "subject": "Rescate: Quedarse en Blanco",
            "affirmative": "Pardon me, I lost my train of thought for a second.",
            "negative": "Coming back to my initial point...",
            "question": "Where were we?",
            "shortAnswer": "On slide 4."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Evitar afirmaciones tajantes",
            "description": "En vez de 'This design is bad', decimos 'I wonder if this design might be confusing for users'.",
            "example": "It seems to me that we could refine this."
          }
        ]
      },
      "signalWords": [
        "to play devil's advocate",
        "with all due respect",
        "on the flip side",
        "the bottom line is"
      ],
      "commonMistakes": [
        {
          "wrong": "Sorry, my English is terrible (al trabarte)",
          "correct": "Pardon me, I lost my train of thought for a second. As I was saying...",
          "explanation": "Disculparse por tu inglés proyecta inseguridad; reencuadrar con 'I lost my train of thought' demuestra dominio del idioma."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-B2-5-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-B2-5-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-B2-5-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-B2-5-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-B2-5-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-B2-5-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-B2-5-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-B2-5-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-B2-5-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-B2-5-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-B2-5-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-B2-5-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-B2-5-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-B2-5-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-B2-5-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-B2-5-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-B2-5-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-B2-5-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-B2-5-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-B2-5-20",
        "word": "figure out",
        "phonetic": "/ˈfɪɡjər aʊt/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "descifrar / resolver",
        "exampleEn": "We need to figure out a better solution.",
        "exampleEs": "Debemos descifrar una mejor solución."
      }
    ],
    "coreChunks": [
      {
        "id": "c-B2-5-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-B2-5-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-B2-5-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-B2-5-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-B2-5-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-B2-5-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-B2-5-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-B2-5-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-B2-5-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-B2-5-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-B2-5-1",
        "category": "routine",
        "situationEs": "Situación #1 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-2",
        "category": "social",
        "situationEs": "Situación #2 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Hedging, Diplomacia y Rescate Conversacional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Hedging, Diplomacia y Rescate Conversacional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-6",
        "category": "routine",
        "situationEs": "Situación #6 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Hedging, Diplomacia y Rescate Conversacional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-7",
        "category": "social",
        "situationEs": "Situación #7 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Hedging, Diplomacia y Rescate Conversacional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Hedging, Diplomacia y Rescate Conversacional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-11",
        "category": "routine",
        "situationEs": "Situación #11 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-12",
        "category": "social",
        "situationEs": "Situación #12 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Hedging, Diplomacia y Rescate Conversacional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Hedging, Diplomacia y Rescate Conversacional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-16",
        "category": "routine",
        "situationEs": "Situación #16 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Hedging, Diplomacia y Rescate Conversacional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-17",
        "category": "social",
        "situationEs": "Situación #17 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Hedging, Diplomacia y Rescate Conversacional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Are you able to take care of this today, or should we schedule it for tomorrow?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B2-5-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Hedging, Diplomacia y Rescate Conversacional: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Hedging, Diplomacia y Rescate Conversacional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      }
    ],
    "listenings": [
      {
        "id": "ml-lesson-b2-5-1",
        "title": "Audio 1: Diálogo Cotidiano / Café",
        "contextType": "daily",
        "audioScript": "Hey! Are you having lunch around here today? We're heading to the Italian bistro across the street if you want to join us.",
        "spanishContext": "Un colega te invita casualmente a almorzar en un restaurante cercano.",
        "comprehensionQuestion": "¿A dónde van a ir y qué te preguntan?",
        "options": [
          "Van a trabajar hasta tarde y te piden un reporte",
          "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
          "Van al aeropuerto a recoger a un cliente"
        ],
        "correctAnswer": "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
        "explanation": "El hablante dice 'heading to the Italian bistro across the street if you want to join us'."
      },
      {
        "id": "ml-lesson-b2-5-2",
        "title": "Audio 2: Llamada / Contexto Laboral",
        "contextType": "work",
        "audioScript": "Good morning. Quick update on the client request: we've reviewed the feedback, and everything looks ready for the final sign-off this afternoon.",
        "spanishContext": "Mensaje de voz de tu supervisor sobre la solicitud de un cliente.",
        "comprehensionQuestion": "¿Cuál es el estatus del requerimiento del cliente?",
        "options": [
          "Fue cancelado por presupuesto",
          "Revisaron el feedback y todo está listo para la firma final esta tarde",
          "Necesitan dos semanas más para corregir errores"
        ],
        "correctAnswer": "Revisaron el feedback y todo está listo para la firma final esta tarde",
        "explanation": "Menciona 'reviewed the feedback, and everything looks ready for the final sign-off this afternoon'."
      },
      {
        "id": "ml-lesson-b2-5-3",
        "title": "Audio 3: Situación Rápida / Imprevisto",
        "contextType": "fast_paced",
        "audioScript": "Excuse me, could you tell me if the express train to the airport stops at platform four or platform seven? The display board is down.",
        "spanishContext": "Un viajero apresurado en la estación de tren te pide auxilio por una pantalla apagada.",
        "comprehensionQuestion": "¿Qué información necesita el viajero?",
        "options": [
          "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
          "Comprar un boleto de ida y vuelta",
          "A qué hora abren las tiendas del aeropuerto"
        ],
        "correctAnswer": "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
        "explanation": "Pregunta 'if the express train to the airport stops at platform four or platform seven? The display board is down'."
      }
    ]
  }
];

export const B2_LESSONS: CourseLesson[] = BASE_B2_LESSONS.map((lesson) => {
  const content = B2_CONTENT[lesson.id];
  if (!content) {
    throw new Error(`Falta el contenido único de la lección ${lesson.id}`);
  }
  return { ...lesson, ...content };
});
