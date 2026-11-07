import type { CourseLesson } from '../../types/curriculum';

export const A2_LESSONS: CourseLesson[] = [
  {
    "id": "lesson-a2-1",
    "level": "A2",
    "lessonNumber": 1,
    "title": "Past Simple Irregular & Preguntas (did / didn't)",
    "tagline": "Domina los 20 verbos irregulares más importantes para relatar anécdotas",
    "grammarFocus": "Verbos irregulares de alta frecuencia (went, saw, got, took) y preguntas con Did",
    "practicalGoal": "Narrar con fluidez qué hiciste el fin de semana, qué compraste y responder preguntas sobre tu pasado.",
    "theory": {
      "title": "Past Simple: Verbos Irregulares",
      "overviewEs": "A diferencia de los verbos regulares que terminan en -ed, los verbos irregulares cambian de forma en oraciones afirmativas (go ➔ went, buy ➔ bought). Sin embargo, en oraciones negativas y preguntas, usamos 'didn't' y 'did', y el verbo vuelve a su forma base sin cambiar.",
      "grammarChart": {
        "title": "Past Simple Irregular",
        "structureFormula": "Affirmative: Irregular form | Negative: didn't + base | Question: Did + subject + base?",
        "rows": [
          {
            "subject": "Todos los sujetos (I, you, he, she, we, they)",
            "affirmative": "I went to the store and bought groceries.",
            "negative": "I didn't go to the party.",
            "question": "Did you see that movie?",
            "shortAnswer": "Yes, I did. / No, I didn't."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Momento Determinado en el Pasado",
            "description": "Siempre que sepamos cuándo ocurrió la acción.",
            "example": "I met Sarah two days ago."
          },
          {
            "ruleTitle": "Secuencia de Acciones",
            "description": "Narrar una lista de eventos consecutivos.",
            "example": "I woke up, had coffee, and left the house."
          }
        ]
      },
      "signalWords": [
        "yesterday",
        "last weekend",
        "an hour ago",
        "in June",
        "on my last trip"
      ],
      "commonMistakes": [
        {
          "wrong": "Did you went to the gym?",
          "correct": "Did you go to the gym?",
          "explanation": "En preguntas con 'Did', el verbo principal va en su forma base: 'Did you go'."
        },
        {
          "wrong": "I didn't bought anything",
          "correct": "I didn't buy anything",
          "explanation": "Tras 'didn't' el verbo se mantiene en forma infinitiva: 'didn't buy'."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-A2-1-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-A2-1-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-A2-1-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-A2-1-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-A2-1-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-A2-1-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-A2-1-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-A2-1-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-A2-1-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-A2-1-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-A2-1-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-A2-1-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-A2-1-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-A2-1-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-A2-1-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-A2-1-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-A2-1-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-A2-1-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-A2-1-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-A2-1-20",
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
        "id": "c-A2-1-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-A2-1-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-A2-1-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-A2-1-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-A2-1-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-A2-1-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-A2-1-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-A2-1-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-A2-1-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-A2-1-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-A2-1-1",
        "category": "routine",
        "situationEs": "Situación #1 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-1-2",
        "category": "social",
        "situationEs": "Situación #2 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas (did / didn't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-1-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-1-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas (did / didn't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-1-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-1-6",
        "category": "routine",
        "situationEs": "Situación #6 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas (did / didn't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-1-7",
        "category": "social",
        "situationEs": "Situación #7 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-1-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas (did / didn't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-1-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-1-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas (did / didn't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-1-11",
        "category": "routine",
        "situationEs": "Situación #11 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-1-12",
        "category": "social",
        "situationEs": "Situación #12 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas (did / didn't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-1-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-1-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas (did / didn't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-1-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-1-16",
        "category": "routine",
        "situationEs": "Situación #16 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas (did / didn't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-1-17",
        "category": "social",
        "situationEs": "Situación #17 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-1-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas (did / didn't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-1-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-1-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Past Simple Irregular & Preguntas (did / didn't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas (did / didn't) when you have a moment?",
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
        "id": "ml-lesson-a2-1-1",
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
        "id": "ml-lesson-a2-1-2",
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
        "id": "ml-lesson-a2-1-3",
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
    "id": "lesson-a2-2",
    "level": "A2",
    "lessonNumber": 2,
    "title": "Past Continuous & Interrupciones (was/were + verb-ing)",
    "tagline": "Cómo describir qué estaba pasando cuando algo repentino ocurrió",
    "grammarFocus": "Past Continuous y su combinación con Past Simple usando when y while",
    "practicalGoal": "Explicar anécdotas, justificar retrasos y describir el ambiente de una situación pasada.",
    "theory": {
      "title": "Past Continuous (was/were + -ing)",
      "overviewEs": "El Past Continuous describe una acción que estaba en pleno desarrollo en un punto específico del pasado. Muy a menudo, esa acción larga en progreso es interrumpida por una acción corta y puntual en Past Simple conectada por 'when' o 'while'.",
      "grammarChart": {
        "title": "Past Continuous & Interrupciones",
        "structureFormula": "was / were + verb-ing [while / when] past simple",
        "rows": [
          {
            "subject": "I / He / She / It",
            "affirmative": "I was walking home when it started raining.",
            "negative": "She wasn't driving fast.",
            "question": "Were you sleeping when I called?",
            "shortAnswer": "Yes, I was. / No, I wasn't."
          },
          {
            "subject": "You / We / They",
            "affirmative": "They were having dinner when the lights went out.",
            "negative": "We weren't paying attention.",
            "question": "What were you doing at 8 PM?",
            "shortAnswer": "I was reading."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Acción Larga Interrumpida",
            "description": "Acción en progreso (continuous) interrumpida por acción corta (simple).",
            "example": "I was cooking when the phone rang."
          },
          {
            "ruleTitle": "Dos Acciones Simultáneas en el Pasado",
            "description": "Usando 'while' para dos acciones paralelas.",
            "example": "While I was studying, my brother was playing guitar."
          }
        ]
      },
      "signalWords": [
        "when",
        "while",
        "at that exact moment",
        "all afternoon yesterday"
      ],
      "commonMistakes": [
        {
          "wrong": "I walked home when it was starting to rain",
          "correct": "I was walking home when it started to rain",
          "explanation": "La acción continua larga lleva -ing; la acción repentina que interrumpe va en Past Simple."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-A2-2-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-A2-2-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-A2-2-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-A2-2-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-A2-2-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-A2-2-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-A2-2-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-A2-2-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-A2-2-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-A2-2-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-A2-2-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-A2-2-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-A2-2-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-A2-2-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-A2-2-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-A2-2-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-A2-2-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-A2-2-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-A2-2-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-A2-2-20",
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
        "id": "c-A2-2-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-A2-2-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-A2-2-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-A2-2-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-A2-2-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-A2-2-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-A2-2-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-A2-2-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-A2-2-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-A2-2-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-A2-2-1",
        "category": "routine",
        "situationEs": "Situación #1 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-2-2",
        "category": "social",
        "situationEs": "Situación #2 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Continuous & Interrupciones (was/were + verb-ing) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-2-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-2-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Continuous & Interrupciones (was/were + verb-ing) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-2-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-2-6",
        "category": "routine",
        "situationEs": "Situación #6 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Continuous & Interrupciones (was/were + verb-ing) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-2-7",
        "category": "social",
        "situationEs": "Situación #7 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-2-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Continuous & Interrupciones (was/were + verb-ing) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-2-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-2-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Continuous & Interrupciones (was/were + verb-ing) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-2-11",
        "category": "routine",
        "situationEs": "Situación #11 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-2-12",
        "category": "social",
        "situationEs": "Situación #12 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Continuous & Interrupciones (was/were + verb-ing) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-2-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-2-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Continuous & Interrupciones (was/were + verb-ing) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-2-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-2-16",
        "category": "routine",
        "situationEs": "Situación #16 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Continuous & Interrupciones (was/were + verb-ing) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-2-17",
        "category": "social",
        "situationEs": "Situación #17 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-2-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Continuous & Interrupciones (was/were + verb-ing) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-2-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-2-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Past Continuous & Interrupciones (was/were + verb-ing): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Continuous & Interrupciones (was/were + verb-ing) when you have a moment?",
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
        "id": "ml-lesson-a2-2-1",
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
        "id": "ml-lesson-a2-2-2",
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
        "id": "ml-lesson-a2-2-3",
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
    "id": "lesson-a2-3",
    "level": "A2",
    "lessonNumber": 3,
    "title": "Planes a Futuro: Be going to vs Will vs Present Continuous",
    "tagline": "Elimina la confusión del futuro: aprende a agendar citas y hacer promesas",
    "grammarFocus": "Diferencia entre intenciones planeadas (going to), decisiones espontáneas (will) y citas fijas (present continuous)",
    "practicalGoal": "Hablar de tus próximas vacaciones, agendar reuniones con colegas y ofrecer ayuda espontánea.",
    "theory": {
      "title": "Las Tres Formas del Futuro",
      "overviewEs": "En inglés no hay una sola forma de futuro. Usamos 'be going to' para planes e intenciones ya pensadas con anticipación; usamos 'will' para decisiones espontáneas en el momento de hablar o promesas; y usamos el Present Continuous con marcador temporal para citas ya confirmadas en el calendario.",
      "grammarChart": {
        "title": "Futuro: Going to vs Will vs Continuous",
        "structureFormula": "Plan: am/is/are going to + verb | Espontáneo: will + verb | Cita: am/is/are + -ing",
        "rows": [
          {
            "subject": "Plan previo / Intención",
            "affirmative": "I am going to visit my parents this weekend.",
            "negative": "I'm not going to buy that car.",
            "question": "Are you going to move abroad?",
            "shortAnswer": "Yes, I am."
          },
          {
            "subject": "Decisión espontánea / Promesa",
            "affirmative": "The phone is ringing; I'll get it!",
            "negative": "I won't tell anyone, I promise.",
            "question": "Will you help me with this?",
            "shortAnswer": "Yes, I will."
          },
          {
            "subject": "Cita fija en calendario",
            "affirmative": "I am meeting the dentist tomorrow at 4 PM.",
            "negative": "We aren't working next Monday.",
            "question": "Are you leaving on Friday?",
            "shortAnswer": "Yes, I am."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Decisión en el Acto (Will)",
            "description": "Cuando decides en el mismo segundo en que hablas.",
            "example": "It's cold in here. I will close the window."
          },
          {
            "ruleTitle": "Plan Previo (Going to)",
            "description": "Ya lo habías decidido antes de este momento.",
            "example": "I'm going to start a master's degree in September."
          }
        ]
      },
      "signalWords": [
        "tomorrow",
        "next week",
        "in two days",
        "soon",
        "later today"
      ],
      "commonMistakes": [
        {
          "wrong": "Wait, I am going to help you with that bag",
          "correct": "Wait, I will help you with that bag!",
          "explanation": "Ofrecimientos inmediatos y espontáneos usan 'will / I'll'."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-A2-3-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-A2-3-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-A2-3-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-A2-3-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-A2-3-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-A2-3-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-A2-3-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-A2-3-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-A2-3-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-A2-3-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-A2-3-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-A2-3-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-A2-3-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-A2-3-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-A2-3-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-A2-3-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-A2-3-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-A2-3-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-A2-3-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-A2-3-20",
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
        "id": "c-A2-3-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-A2-3-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-A2-3-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-A2-3-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-A2-3-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-A2-3-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-A2-3-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-A2-3-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-A2-3-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-A2-3-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-A2-3-1",
        "category": "routine",
        "situationEs": "Situación #1 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-3-2",
        "category": "social",
        "situationEs": "Situación #2 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Planes a Futuro when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-3-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-3-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Planes a Futuro when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-3-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-3-6",
        "category": "routine",
        "situationEs": "Situación #6 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Planes a Futuro when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-3-7",
        "category": "social",
        "situationEs": "Situación #7 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-3-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Planes a Futuro when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-3-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-3-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Planes a Futuro when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-3-11",
        "category": "routine",
        "situationEs": "Situación #11 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-3-12",
        "category": "social",
        "situationEs": "Situación #12 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Planes a Futuro when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-3-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-3-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Planes a Futuro when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-3-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-3-16",
        "category": "routine",
        "situationEs": "Situación #16 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Planes a Futuro when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-3-17",
        "category": "social",
        "situationEs": "Situación #17 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-3-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Planes a Futuro when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-3-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-3-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Planes a Futuro: Be going to vs Will vs Present Continuous: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Planes a Futuro when you have a moment?",
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
        "id": "ml-lesson-a2-3-1",
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
        "id": "ml-lesson-a2-3-2",
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
        "id": "ml-lesson-a2-3-3",
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
    "id": "lesson-a2-4",
    "level": "A2",
    "lessonNumber": 4,
    "title": "Verbos Modales de Habilidad y Obligación (can, could, have to, must)",
    "tagline": "Aprende a expresar lo que sabes hacer, lo que debes hacer y las reglas comunes",
    "grammarFocus": "Modales Can/Could (habilidad/permiso) vs Have to/Must (obligación)",
    "practicalGoal": "Pedir permiso, dar consejos de reglas en el trabajo y expresar tus habilidades con naturalidad.",
    "theory": {
      "title": "Modals: Can, Could, Have to, Must",
      "overviewEs": "Los verbos modales modifican el significado del verbo principal. 'Can' expresa habilidad presente o permiso informal; 'Could' es más educado y formal; 'Have to' expresa obligación cotidiana o impuesta por reglas externas; y 'Don't have to' significa que no es necesario (ausencia de obligación).",
      "grammarChart": {
        "title": "Verbos Modales Esenciales",
        "structureFormula": "Subject + Modal + Verb (base form)",
        "rows": [
          {
            "subject": "Habilidad / Permiso",
            "affirmative": "I can speak two languages.",
            "negative": "I can't swim very well.",
            "question": "Could you help me, please?",
            "shortAnswer": "Yes, I can."
          },
          {
            "subject": "Obligación / Regla",
            "affirmative": "I have to wake up early on weekdays.",
            "negative": "You don't have to pay now (opcional).",
            "question": "Do you have to wear a suit?",
            "shortAnswer": "Yes, I do."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Los modales no llevan -s",
            "description": "Nunca agregues -s a can, could o must con he/she.",
            "example": "She can play piano (NO: She cans)."
          },
          {
            "ruleTitle": "Don't have to vs Mustn't",
            "description": "'Don't have to' = no es obligatorio (tú decides). 'Mustn't' = está terminantemente prohibido.",
            "example": "You don't have to come, but you mustn't park here."
          }
        ]
      },
      "signalWords": [
        "necessary",
        "allowed",
        "prohibited",
        "possible",
        "polite"
      ],
      "commonMistakes": [
        {
          "wrong": "I can to speak English",
          "correct": "I can speak English",
          "explanation": "Los modales NUNCA van seguidos de 'to'. Siempre van con el verbo base directo."
        },
        {
          "wrong": "You must not pay (cuando querías decir que es gratis)",
          "correct": "You don't have to pay",
          "explanation": "'Must not' significa prohibición estricta; 'don't have to' significa que no es necesario."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-A2-4-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-A2-4-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-A2-4-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-A2-4-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-A2-4-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-A2-4-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-A2-4-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-A2-4-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-A2-4-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-A2-4-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-A2-4-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-A2-4-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-A2-4-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-A2-4-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-A2-4-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-A2-4-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-A2-4-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-A2-4-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-A2-4-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-A2-4-20",
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
        "id": "c-A2-4-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-A2-4-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-A2-4-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-A2-4-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-A2-4-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-A2-4-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-A2-4-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-A2-4-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-A2-4-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-A2-4-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-A2-4-1",
        "category": "routine",
        "situationEs": "Situación #1 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-4-2",
        "category": "social",
        "situationEs": "Situación #2 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Verbos Modales de Habilidad y Obligación (can, could, have to, must) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-4-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-4-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Verbos Modales de Habilidad y Obligación (can, could, have to, must) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-4-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-4-6",
        "category": "routine",
        "situationEs": "Situación #6 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Verbos Modales de Habilidad y Obligación (can, could, have to, must) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-4-7",
        "category": "social",
        "situationEs": "Situación #7 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-4-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Verbos Modales de Habilidad y Obligación (can, could, have to, must) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-4-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-4-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Verbos Modales de Habilidad y Obligación (can, could, have to, must) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-4-11",
        "category": "routine",
        "situationEs": "Situación #11 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-4-12",
        "category": "social",
        "situationEs": "Situación #12 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Verbos Modales de Habilidad y Obligación (can, could, have to, must) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-4-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-4-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Verbos Modales de Habilidad y Obligación (can, could, have to, must) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-4-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-4-16",
        "category": "routine",
        "situationEs": "Situación #16 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Verbos Modales de Habilidad y Obligación (can, could, have to, must) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-4-17",
        "category": "social",
        "situationEs": "Situación #17 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-4-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Verbos Modales de Habilidad y Obligación (can, could, have to, must) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-4-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-4-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Verbos Modales de Habilidad y Obligación (can, could, have to, must): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Verbos Modales de Habilidad y Obligación (can, could, have to, must) when you have a moment?",
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
        "id": "ml-lesson-a2-4-1",
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
        "id": "ml-lesson-a2-4-2",
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
        "id": "ml-lesson-a2-4-3",
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
    "id": "lesson-a2-5",
    "level": "A2",
    "lessonNumber": 5,
    "title": "El Verbo Comodín GET en Todas sus Facetas",
    "tagline": "El secreto mejor guardado de los nativos: ahorra decenas de verbos difíciles",
    "grammarFocus": "Usos múltiples de GET: llegar, conseguir/comprar, volverse/cambiar de estado y entender",
    "practicalGoal": "Sustituir verbos formales pesados (arrive, receive, purchase, become) por fórmulas fluidas con GET.",
    "theory": {
      "title": "El Gran Verbo Comodín: GET",
      "overviewEs": "En el inglés informal y de negocios diario, 'GET' es el verbo más utilizado. Dependiendo de las palabras que lo acompañen, reemplaza con total naturalidad a verbos como recibir (get an email), comprar (get coffee), llegar (get home), entender (get it) o cambiar de estado (get tired).",
      "grammarChart": {
        "title": "Las 5 Dimensiones del Verbo GET",
        "structureFormula": "GET + noun (recibir/comprar) | GET + adjective (volverse) | GET to (llegar)",
        "rows": [
          {
            "subject": "1. Recibir / Conseguir",
            "affirmative": "I got your message five minutes ago.",
            "negative": "I didn't get the receipt.",
            "question": "Did you get my email?",
            "shortAnswer": "Yes, I got it."
          },
          {
            "subject": "2. Comprar / Obtener",
            "affirmative": "Can you get some milk on your way?",
            "negative": "I didn't get any bread.",
            "question": "Where did you get that coat?",
            "shortAnswer": "At the mall."
          },
          {
            "subject": "3. Llegar a un destino",
            "affirmative": "What time do you usually get home?",
            "negative": "We didn't get to the airport on time.",
            "question": "How did you get here?",
            "shortAnswer": "By train."
          },
          {
            "subject": "4. Cambiar de estado",
            "affirmative": "It is getting dark and I am getting cold.",
            "negative": "Don't get angry over small things.",
            "question": "Are you getting tired?",
            "shortAnswer": "Yes, a bit."
          },
          {
            "subject": "5. Entender una idea",
            "affirmative": "Oh, now I get what you mean!",
            "negative": "I don't get the joke.",
            "question": "Do you get my point?",
            "shortAnswer": "Yes, I get it."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Get home (sin 'to')",
            "description": "Con la palabra 'home' nunca se pone 'to'.",
            "example": "I got home safely (NO: got to home)."
          },
          {
            "ruleTitle": "Get back to you (responderte)",
            "description": "El chunk de oro corporativo para prometer una respuesta.",
            "example": "I will check the data and get back to you soon."
          }
        ]
      },
      "signalWords": [
        "get home",
        "get back to",
        "get along with",
        "get ready",
        "get used to"
      ],
      "commonMistakes": [
        {
          "wrong": "I arrived to my home",
          "correct": "I got home",
          "explanation": "'I got home' es 10 veces más natural en el habla diaria que 'I arrived at home'."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-A2-5-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-A2-5-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-A2-5-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-A2-5-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-A2-5-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-A2-5-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-A2-5-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-A2-5-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-A2-5-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-A2-5-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-A2-5-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-A2-5-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-A2-5-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-A2-5-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-A2-5-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-A2-5-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-A2-5-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-A2-5-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-A2-5-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-A2-5-20",
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
        "id": "c-A2-5-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-A2-5-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-A2-5-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-A2-5-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-A2-5-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-A2-5-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-A2-5-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-A2-5-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-A2-5-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-A2-5-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-A2-5-1",
        "category": "routine",
        "situationEs": "Situación #1 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-5-2",
        "category": "social",
        "situationEs": "Situación #2 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo Comodín GET en Todas sus Facetas when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-5-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-5-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo Comodín GET en Todas sus Facetas when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-5-5",
        "category": "opinion",
        "situationEs": "Situación #5 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-5-6",
        "category": "routine",
        "situationEs": "Situación #6 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo Comodín GET en Todas sus Facetas when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-5-7",
        "category": "social",
        "situationEs": "Situación #7 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-5-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo Comodín GET en Todas sus Facetas when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-5-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-5-10",
        "category": "opinion",
        "situationEs": "Situación #10 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo Comodín GET en Todas sus Facetas when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-5-11",
        "category": "routine",
        "situationEs": "Situación #11 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-5-12",
        "category": "social",
        "situationEs": "Situación #12 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo Comodín GET en Todas sus Facetas when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-5-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-5-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo Comodín GET en Todas sus Facetas when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-5-15",
        "category": "opinion",
        "situationEs": "Situación #15 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-5-16",
        "category": "routine",
        "situationEs": "Situación #16 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo Comodín GET en Todas sus Facetas when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-5-17",
        "category": "social",
        "situationEs": "Situación #17 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-5-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo Comodín GET en Todas sus Facetas when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A2-5-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A2-5-20",
        "category": "opinion",
        "situationEs": "Situación #20 de El Verbo Comodín GET en Todas sus Facetas: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo Comodín GET en Todas sus Facetas when you have a moment?",
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
        "id": "ml-lesson-a2-5-1",
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
        "id": "ml-lesson-a2-5-2",
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
        "id": "ml-lesson-a2-5-3",
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
