import type { CourseLesson } from '../../types/curriculum';

export const B1_LESSONS: CourseLesson[] = [
  {
    "id": "lesson-b1-1",
    "level": "B1",
    "lessonNumber": 1,
    "title": "Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes",
    "tagline": "Conecta tu pasado con el ahora: habla de tus logros y de lo que ya hiciste",
    "grammarFocus": "Present Perfect (have/has + past participle) con already, yet, just y ever",
    "practicalGoal": "Hablar de experiencias de vida sin fecha fija, reportar tareas recién terminadas y preguntar '¿Alguna vez has...?'",
    "theory": {
      "title": "Present Perfect: El Puente entre Pasado y Presente",
      "overviewEs": "El Present Perfect se utiliza cuando el momento exacto en el pasado NO importa, o cuando una acción ocurrida tiene un resultado directo visible en el presente. Se forma con el auxiliar HAVE / HAS seguido del participio pasado del verbo.",
      "grammarChart": {
        "title": "Present Perfect Simple",
        "structureFormula": "Subject + have / has + Past Participle",
        "rows": [
          {
            "subject": "I / You / We / They",
            "affirmative": "I have ('ve) already finished the report.",
            "negative": "I haven't received the transfer yet.",
            "question": "Have you ever been to Japan?",
            "shortAnswer": "Yes, I have. / No, I haven't."
          },
          {
            "subject": "He / She / It",
            "affirmative": "She has ('s) just left the office.",
            "negative": "He hasn't called back yet.",
            "question": "Has the meeting started?",
            "shortAnswer": "Yes, it has. / No, it hasn't."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Experiencias de Vida (Ever / Never)",
            "description": "Preguntar si alguien ha vivido algo en cualquier momento de su vida.",
            "example": "Have you ever tried sushi?"
          },
          {
            "ruleTitle": "Already (ya ocurrió antes de lo esperado)",
            "description": "Va entre el auxiliar y el participio.",
            "example": "I have already booked the flight."
          },
          {
            "ruleTitle": "Yet (aún no / ya en preguntas)",
            "description": "Va SIEMPRE al final de oraciones negativas o preguntas.",
            "example": "I haven't eaten yet. / Have you seen it yet?"
          },
          {
            "ruleTitle": "Just (acaba de ocurrir hace 1 minuto)",
            "description": "Para acciones súper recientes.",
            "example": "I have just arrived at the station."
          }
        ]
      },
      "signalWords": [
        "already",
        "yet",
        "just",
        "ever",
        "never",
        "so far",
        "recently",
        "in my life"
      ],
      "commonMistakes": [
        {
          "wrong": "I have seen him yesterday",
          "correct": "I saw him yesterday",
          "explanation": "¡Regla de oro! Si mencionas una fecha o momento cerrado ('yesterday', 'in 2019'), DEBES usar Past Simple, NUNCA Present Perfect."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-B1-1-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-B1-1-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-B1-1-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-B1-1-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-B1-1-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-B1-1-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-B1-1-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-B1-1-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-B1-1-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-B1-1-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-B1-1-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-B1-1-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-B1-1-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-B1-1-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-B1-1-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-B1-1-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-B1-1-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-B1-1-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-B1-1-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-B1-1-20",
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
        "id": "c-B1-1-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-B1-1-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-B1-1-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-B1-1-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-B1-1-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-B1-1-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-B1-1-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-B1-1-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-B1-1-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-B1-1-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "clarificationTools": [
      {
        "id": "cf-B1-1-1",
        "triggerSituation": "No escuchaste bien una frase rápida",
        "phrase": "Could you say that one more time, please?",
        "meaningEs": "Podrías decir eso una vez más, por favor?",
        "audioSample": "Could you say that one more time, please?",
        "whyItWorks": "Es la fórmula estándar más educada en inglés."
      },
      {
        "id": "cf-B1-1-2",
        "triggerSituation": "La persona habla muy acelerada",
        "phrase": "Could you speak a little slower, please?",
        "meaningEs": "Podrías hablar un poco más despacio, por favor?",
        "audioSample": "Could you speak a little slower, please?",
        "whyItWorks": "Pide ajuste de velocidad de forma asertiva."
      },
      {
        "id": "cf-B1-1-3",
        "triggerSituation": "No entendiste una palabra técnica o sigla",
        "phrase": "What does that acronym stand for?",
        "meaningEs": "Qué significan esas siglas?",
        "audioSample": "What does that acronym stand for?",
        "whyItWorks": "Pregunta directa para aclarar términos."
      },
      {
        "id": "cf-B1-1-4",
        "triggerSituation": "Quieres saber cómo se dice algo en inglés",
        "phrase": "How do you say that in English?",
        "meaningEs": "Cómo se dice eso en inglés?",
        "audioSample": "How do you say that in English?",
        "whyItWorks": "Permite aprender señalando objetos o gestos."
      },
      {
        "id": "cf-B1-1-5",
        "triggerSituation": "Quieres verificar si entendiste bien",
        "phrase": "Just to make sure we're on the same page, did you mean...?",
        "meaningEs": "Solo para estar en sintonía, querías decir...?",
        "audioSample": "Just to make sure we're on the same page, did you mean...?",
        "whyItWorks": "Sincroniza acuerdos en reuniones."
      },
      {
        "id": "cf-B1-1-6",
        "triggerSituation": "Te perdiste en una explicación larga",
        "phrase": "Sorry, I lost my train of thought for a second. Could you clarify that last point?",
        "meaningEs": "Disculpa, se me fue el hilo un segundo. Podrías aclarar ese punto?",
        "audioSample": "Sorry, I lost my train of thought for a second. Could you clarify that last point?",
        "whyItWorks": "Recupera la atención con naturalidad nativa."
      }
    ],
    "listening": {
      "id": "ml-B1-1",
      "audioScript": "Hello! Quick update on our present perfect simple: experiencias de vida y consecuencias presentes: we are finishing up the preliminary review now, and we'll be ready to discuss next steps this afternoon. Let me know if that works for you.",
      "spanishContext": "Un colega te manda un mensaje de voz rápido para darte un reporte sobre present perfect simple: experiencias de vida y consecuencias presentes.",
      "comprehensionQuestion": "¿Cuál es el estado del proyecto y qué propone el colega para esta tarde?",
      "options": [
        "Cancelaron el proyecto por falta de tiempo",
        "Terminan la revisión preliminar ahora y discutirán los siguientes pasos esta tarde",
        "Piden reprogramar todo para el próximo mes"
      ],
      "correctAnswer": "Terminan la revisión preliminar ahora y discutirán los siguientes pasos esta tarde",
      "explanation": "El interlocutor dice claramente 'finishing up the preliminary review now' y 'ready to discuss next steps this afternoon'."
    },
    "workbook": [
      {
        "id": "wb-B1-1-1",
        "category": "routine",
        "situationEs": "Situación #1 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-1-2",
        "category": "social",
        "situationEs": "Situación #2 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-1-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-1-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-1-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-1-6",
        "category": "routine",
        "situationEs": "Situación #6 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-1-7",
        "category": "social",
        "situationEs": "Situación #7 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-1-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-1-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-1-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-1-11",
        "category": "routine",
        "situationEs": "Situación #11 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-1-12",
        "category": "social",
        "situationEs": "Situación #12 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-1-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-1-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-1-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-1-16",
        "category": "routine",
        "situationEs": "Situación #16 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-1-17",
        "category": "social",
        "situationEs": "Situación #17 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-1-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-1-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-1-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      }
    ]
  },
  {
    "id": "lesson-b1-2",
    "level": "B1",
    "lessonNumber": 2,
    "title": "Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado",
    "tagline": "El error número uno que delata a los hispanohablantes resuelto de una vez por todas",
    "grammarFocus": "Contraste definitivo: Tiempo indefinido (Present Perfect) vs Tiempo cerrado (Past Simple)",
    "practicalGoal": "Manejar entrevistas de trabajo y reportes con fluidez impecable alternando entre ambos tiempos.",
    "theory": {
      "title": "Present Perfect vs Past Simple",
      "overviewEs": "La diferencia es simple pero crucial: ¿El periodo de tiempo está TERMINADO? (yesterday, last month, in 2020) ➔ Usa Past Simple. ¿El periodo de tiempo sigue ABIERTO o es indefinido? (today, this week, so far, ever) ➔ Usa Present Perfect.",
      "grammarChart": {
        "title": "Contraste: Tiempo Abierto vs Tiempo Cerrado",
        "structureFormula": "Indefinido / Abierto (have + participle) VS Momento Cerrado (past simple)",
        "rows": [
          {
            "subject": "Tiempo Cerrado (Past Simple)",
            "affirmative": "I lived in Paris in 2018 (ya no vivo allí).",
            "negative": "I didn't travel last year.",
            "question": "When did you buy that?",
            "shortAnswer": "Two days ago."
          },
          {
            "subject": "Tiempo Abierto (Present Perfect)",
            "affirmative": "I have lived in Paris since 2018 (sigo allí).",
            "negative": "I haven't traveled this year.",
            "question": "How long have you worked here?",
            "shortAnswer": "For 3 years."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "For vs Since",
            "description": "'For' indica duración (for five years). 'Since' indica el punto de partida (since 2019).",
            "example": "I have known him for a decade / since high school."
          },
          {
            "ruleTitle": "La Pregunta 'When?' pide Past Simple",
            "description": "Siempre que preguntes 'When did you...?' la respuesta va en pasado simple.",
            "example": "When did you arrive? - I arrived at 6 PM."
          }
        ]
      },
      "signalWords": [
        "for vs since",
        "this week vs last week",
        "ever vs yesterday",
        "already vs ago"
      ],
      "commonMistakes": [
        {
          "wrong": "I live here since 2015",
          "correct": "I have lived here since 2015",
          "explanation": "En inglés una acción que empezó en el pasado y sigue vigente hoy requiere Present Perfect con 'since', no presente simple."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-B1-2-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-B1-2-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-B1-2-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-B1-2-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-B1-2-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-B1-2-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-B1-2-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-B1-2-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-B1-2-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-B1-2-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-B1-2-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-B1-2-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-B1-2-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-B1-2-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-B1-2-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-B1-2-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-B1-2-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-B1-2-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-B1-2-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-B1-2-20",
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
        "id": "c-B1-2-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-B1-2-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-B1-2-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-B1-2-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-B1-2-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-B1-2-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-B1-2-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-B1-2-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-B1-2-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-B1-2-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "clarificationTools": [
      {
        "id": "cf-B1-2-1",
        "triggerSituation": "No escuchaste bien una frase rápida",
        "phrase": "Could you say that one more time, please?",
        "meaningEs": "Podrías decir eso una vez más, por favor?",
        "audioSample": "Could you say that one more time, please?",
        "whyItWorks": "Es la fórmula estándar más educada en inglés."
      },
      {
        "id": "cf-B1-2-2",
        "triggerSituation": "La persona habla muy acelerada",
        "phrase": "Could you speak a little slower, please?",
        "meaningEs": "Podrías hablar un poco más despacio, por favor?",
        "audioSample": "Could you speak a little slower, please?",
        "whyItWorks": "Pide ajuste de velocidad de forma asertiva."
      },
      {
        "id": "cf-B1-2-3",
        "triggerSituation": "No entendiste una palabra técnica o sigla",
        "phrase": "What does that acronym stand for?",
        "meaningEs": "Qué significan esas siglas?",
        "audioSample": "What does that acronym stand for?",
        "whyItWorks": "Pregunta directa para aclarar términos."
      },
      {
        "id": "cf-B1-2-4",
        "triggerSituation": "Quieres saber cómo se dice algo en inglés",
        "phrase": "How do you say that in English?",
        "meaningEs": "Cómo se dice eso en inglés?",
        "audioSample": "How do you say that in English?",
        "whyItWorks": "Permite aprender señalando objetos o gestos."
      },
      {
        "id": "cf-B1-2-5",
        "triggerSituation": "Quieres verificar si entendiste bien",
        "phrase": "Just to make sure we're on the same page, did you mean...?",
        "meaningEs": "Solo para estar en sintonía, querías decir...?",
        "audioSample": "Just to make sure we're on the same page, did you mean...?",
        "whyItWorks": "Sincroniza acuerdos en reuniones."
      },
      {
        "id": "cf-B1-2-6",
        "triggerSituation": "Te perdiste en una explicación larga",
        "phrase": "Sorry, I lost my train of thought for a second. Could you clarify that last point?",
        "meaningEs": "Disculpa, se me fue el hilo un segundo. Podrías aclarar ese punto?",
        "audioSample": "Sorry, I lost my train of thought for a second. Could you clarify that last point?",
        "whyItWorks": "Recupera la atención con naturalidad nativa."
      }
    ],
    "listening": {
      "id": "ml-B1-2",
      "audioScript": "Hello! Quick update on our present perfect vs past simple: la regla de oro del tiempo cerrado: we are finishing up the preliminary review now, and we'll be ready to discuss next steps this afternoon. Let me know if that works for you.",
      "spanishContext": "Un colega te manda un mensaje de voz rápido para darte un reporte sobre present perfect vs past simple: la regla de oro del tiempo cerrado.",
      "comprehensionQuestion": "¿Cuál es el estado del proyecto y qué propone el colega para esta tarde?",
      "options": [
        "Cancelaron el proyecto por falta de tiempo",
        "Terminan la revisión preliminar ahora y discutirán los siguientes pasos esta tarde",
        "Piden reprogramar todo para el próximo mes"
      ],
      "correctAnswer": "Terminan la revisión preliminar ahora y discutirán los siguientes pasos esta tarde",
      "explanation": "El interlocutor dice claramente 'finishing up the preliminary review now' y 'ready to discuss next steps this afternoon'."
    },
    "workbook": [
      {
        "id": "wb-B1-2-1",
        "category": "routine",
        "situationEs": "Situación #1 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-2-2",
        "category": "social",
        "situationEs": "Situación #2 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect vs Past Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-2-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-2-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect vs Past Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-2-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-2-6",
        "category": "routine",
        "situationEs": "Situación #6 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect vs Past Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-2-7",
        "category": "social",
        "situationEs": "Situación #7 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-2-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect vs Past Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-2-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-2-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect vs Past Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-2-11",
        "category": "routine",
        "situationEs": "Situación #11 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-2-12",
        "category": "social",
        "situationEs": "Situación #12 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect vs Past Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-2-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-2-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect vs Past Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-2-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-2-16",
        "category": "routine",
        "situationEs": "Situación #16 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect vs Past Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-2-17",
        "category": "social",
        "situationEs": "Situación #17 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-2-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect vs Past Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-2-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-2-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect vs Past Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      }
    ]
  },
  {
    "id": "lesson-b1-3",
    "level": "B1",
    "lessonNumber": 3,
    "title": "Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes",
    "tagline": "Aprende a enfatizar la duración de tu esfuerzo: 'Llevo 3 horas trabajando en esto'",
    "grammarFocus": "Present Perfect Continuous (have/has been + verb-ing) con for y since",
    "practicalGoal": "Explicar cuánto tiempo llevas haciendo una actividad y justificar estados de cansancio o progreso.",
    "theory": {
      "title": "Present Perfect Continuous (have been + -ing)",
      "overviewEs": "En español solemos decir 'Llevo dos horas esperando'. En inglés esa idea exacta se expresa con el Present Perfect Continuous: 'I have been waiting for two hours'. Enfatiza el proceso, la duración y el desgaste o esfuerzo continuado.",
      "grammarChart": {
        "title": "Present Perfect Continuous",
        "structureFormula": "Subject + have / has + been + Verb-ing",
        "rows": [
          {
            "subject": "I / You / We / They",
            "affirmative": "I have ('ve) been studying all morning.",
            "negative": "I haven't been sleeping well lately.",
            "question": "How long have you been waiting?",
            "shortAnswer": "For thirty minutes."
          },
          {
            "subject": "He / She / It",
            "affirmative": "It has ('s) been raining for hours.",
            "negative": "He hasn't been working today.",
            "question": "Has she been exercising?",
            "shortAnswer": "Yes, she has."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Resultado Visible en el Presente",
            "description": "La actividad acaba de parar pero su efecto es evidente.",
            "example": "My hands are dirty because I have been fixing my bike."
          },
          {
            "ruleTitle": "Simple vs Continuous",
            "description": "Simple enfatiza el RESULTADO (I have read 3 books). Continuous enfatiza la DURACIÓN (I have been reading for 3 hours).",
            "example": "I've painted the wall (terminado) vs I've been painting (en proceso)."
          }
        ]
      },
      "signalWords": [
        "how long",
        "for hours",
        "all day",
        "recently",
        "lately"
      ],
      "commonMistakes": [
        {
          "wrong": "I am working here since 2 years",
          "correct": "I have been working here for 2 years",
          "explanation": "Usa 'have been working' + 'for' para la duración acumulada."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-B1-3-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-B1-3-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-B1-3-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-B1-3-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-B1-3-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-B1-3-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-B1-3-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-B1-3-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-B1-3-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-B1-3-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-B1-3-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-B1-3-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-B1-3-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-B1-3-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-B1-3-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-B1-3-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-B1-3-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-B1-3-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-B1-3-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-B1-3-20",
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
        "id": "c-B1-3-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-B1-3-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-B1-3-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-B1-3-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-B1-3-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-B1-3-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-B1-3-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-B1-3-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-B1-3-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-B1-3-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "clarificationTools": [
      {
        "id": "cf-B1-3-1",
        "triggerSituation": "No escuchaste bien una frase rápida",
        "phrase": "Could you say that one more time, please?",
        "meaningEs": "Podrías decir eso una vez más, por favor?",
        "audioSample": "Could you say that one more time, please?",
        "whyItWorks": "Es la fórmula estándar más educada en inglés."
      },
      {
        "id": "cf-B1-3-2",
        "triggerSituation": "La persona habla muy acelerada",
        "phrase": "Could you speak a little slower, please?",
        "meaningEs": "Podrías hablar un poco más despacio, por favor?",
        "audioSample": "Could you speak a little slower, please?",
        "whyItWorks": "Pide ajuste de velocidad de forma asertiva."
      },
      {
        "id": "cf-B1-3-3",
        "triggerSituation": "No entendiste una palabra técnica o sigla",
        "phrase": "What does that acronym stand for?",
        "meaningEs": "Qué significan esas siglas?",
        "audioSample": "What does that acronym stand for?",
        "whyItWorks": "Pregunta directa para aclarar términos."
      },
      {
        "id": "cf-B1-3-4",
        "triggerSituation": "Quieres saber cómo se dice algo en inglés",
        "phrase": "How do you say that in English?",
        "meaningEs": "Cómo se dice eso en inglés?",
        "audioSample": "How do you say that in English?",
        "whyItWorks": "Permite aprender señalando objetos o gestos."
      },
      {
        "id": "cf-B1-3-5",
        "triggerSituation": "Quieres verificar si entendiste bien",
        "phrase": "Just to make sure we're on the same page, did you mean...?",
        "meaningEs": "Solo para estar en sintonía, querías decir...?",
        "audioSample": "Just to make sure we're on the same page, did you mean...?",
        "whyItWorks": "Sincroniza acuerdos en reuniones."
      },
      {
        "id": "cf-B1-3-6",
        "triggerSituation": "Te perdiste en una explicación larga",
        "phrase": "Sorry, I lost my train of thought for a second. Could you clarify that last point?",
        "meaningEs": "Disculpa, se me fue el hilo un segundo. Podrías aclarar ese punto?",
        "audioSample": "Sorry, I lost my train of thought for a second. Could you clarify that last point?",
        "whyItWorks": "Recupera la atención con naturalidad nativa."
      }
    ],
    "listening": {
      "id": "ml-B1-3",
      "audioScript": "Hello! Quick update on our present perfect continuous: acciones continuas y consecuencias evidentes: we are finishing up the preliminary review now, and we'll be ready to discuss next steps this afternoon. Let me know if that works for you.",
      "spanishContext": "Un colega te manda un mensaje de voz rápido para darte un reporte sobre present perfect continuous: acciones continuas y consecuencias evidentes.",
      "comprehensionQuestion": "¿Cuál es el estado del proyecto y qué propone el colega para esta tarde?",
      "options": [
        "Cancelaron el proyecto por falta de tiempo",
        "Terminan la revisión preliminar ahora y discutirán los siguientes pasos esta tarde",
        "Piden reprogramar todo para el próximo mes"
      ],
      "correctAnswer": "Terminan la revisión preliminar ahora y discutirán los siguientes pasos esta tarde",
      "explanation": "El interlocutor dice claramente 'finishing up the preliminary review now' y 'ready to discuss next steps this afternoon'."
    },
    "workbook": [
      {
        "id": "wb-B1-3-1",
        "category": "routine",
        "situationEs": "Situación #1 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-3-2",
        "category": "social",
        "situationEs": "Situación #2 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-3-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-3-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-3-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-3-6",
        "category": "routine",
        "situationEs": "Situación #6 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-3-7",
        "category": "social",
        "situationEs": "Situación #7 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-3-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-3-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-3-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-3-11",
        "category": "routine",
        "situationEs": "Situación #11 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-3-12",
        "category": "social",
        "situationEs": "Situación #12 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-3-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-3-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-3-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-3-16",
        "category": "routine",
        "situationEs": "Situación #16 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-3-17",
        "category": "social",
        "situationEs": "Situación #17 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-3-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-3-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-3-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Perfect Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      }
    ]
  },
  {
    "id": "lesson-b1-4",
    "level": "B1",
    "lessonNumber": 4,
    "title": "Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético",
    "tagline": "Aprende a plantear escenarios: 'Si tengo tiempo...' vs 'Si yo fuera tú...'",
    "grammarFocus": "First Conditional (if + present, will) vs Second Conditional (if + past, would)",
    "practicalGoal": "Negociar opciones realistas y dar consejos profesionales poniéndote en el lugar de otro.",
    "theory": {
      "title": "Condicionales: Tipo 1 (Real) y Tipo 2 (Hipotético)",
      "overviewEs": "El Primer Condicional habla de situaciones reales y muy probables en el futuro ('Si llueve, me quedo en casa'). El Segundo Condicional habla de escenarios imaginarios o hipotéticos en el presente ('Si me ganara la lotería, viajaría por el mundo').",
      "grammarChart": {
        "title": "Tabla de Condicionales 1 y 2",
        "structureFormula": "Tipo 1: If + present, will + base | Tipo 2: If + past, would + base",
        "rows": [
          {
            "subject": "Tipo 1: Posibilidad Real",
            "affirmative": "If it rains tomorrow, I will stay home.",
            "negative": "If you don't hurry, you will miss the flight.",
            "question": "What will you do if they cancel it?",
            "shortAnswer": "I'll take the bus."
          },
          {
            "subject": "Tipo 2: Escenario Hipotético",
            "affirmative": "If I had more time, I would learn German.",
            "negative": "If I were you, I wouldn't worry about it.",
            "question": "Where would you go if you could fly?",
            "shortAnswer": "I'd go to Tokyo."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "If I were you (Consejo de oro)",
            "description": "En el segundo condicional formal, se prefiere 'were' para todas las personas.",
            "example": "If I were you, I would accept the job offer."
          },
          {
            "ruleTitle": "Nunca 'will' ni 'would' dentro de la cláusula IF",
            "description": "El modal va en la cláusula de consecuencia, nunca pegado al 'if'.",
            "example": "If I have money (NO: If I will have money)."
          }
        ]
      },
      "signalWords": [
        "if",
        "unless (a menos que)",
        "provided that",
        "as long as",
        "supposing"
      ],
      "commonMistakes": [
        {
          "wrong": "If I will see him, I will tell him",
          "correct": "If I see him, I will tell him",
          "explanation": "Dentro de la cláusula 'if' en el primer condicional se usa presente simple."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-B1-4-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-B1-4-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-B1-4-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-B1-4-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-B1-4-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-B1-4-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-B1-4-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-B1-4-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-B1-4-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-B1-4-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-B1-4-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-B1-4-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-B1-4-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-B1-4-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-B1-4-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-B1-4-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-B1-4-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-B1-4-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-B1-4-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-B1-4-20",
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
        "id": "c-B1-4-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-B1-4-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-B1-4-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-B1-4-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-B1-4-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-B1-4-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-B1-4-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-B1-4-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-B1-4-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-B1-4-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "clarificationTools": [
      {
        "id": "cf-B1-4-1",
        "triggerSituation": "No escuchaste bien una frase rápida",
        "phrase": "Could you say that one more time, please?",
        "meaningEs": "Podrías decir eso una vez más, por favor?",
        "audioSample": "Could you say that one more time, please?",
        "whyItWorks": "Es la fórmula estándar más educada en inglés."
      },
      {
        "id": "cf-B1-4-2",
        "triggerSituation": "La persona habla muy acelerada",
        "phrase": "Could you speak a little slower, please?",
        "meaningEs": "Podrías hablar un poco más despacio, por favor?",
        "audioSample": "Could you speak a little slower, please?",
        "whyItWorks": "Pide ajuste de velocidad de forma asertiva."
      },
      {
        "id": "cf-B1-4-3",
        "triggerSituation": "No entendiste una palabra técnica o sigla",
        "phrase": "What does that acronym stand for?",
        "meaningEs": "Qué significan esas siglas?",
        "audioSample": "What does that acronym stand for?",
        "whyItWorks": "Pregunta directa para aclarar términos."
      },
      {
        "id": "cf-B1-4-4",
        "triggerSituation": "Quieres saber cómo se dice algo en inglés",
        "phrase": "How do you say that in English?",
        "meaningEs": "Cómo se dice eso en inglés?",
        "audioSample": "How do you say that in English?",
        "whyItWorks": "Permite aprender señalando objetos o gestos."
      },
      {
        "id": "cf-B1-4-5",
        "triggerSituation": "Quieres verificar si entendiste bien",
        "phrase": "Just to make sure we're on the same page, did you mean...?",
        "meaningEs": "Solo para estar en sintonía, querías decir...?",
        "audioSample": "Just to make sure we're on the same page, did you mean...?",
        "whyItWorks": "Sincroniza acuerdos en reuniones."
      },
      {
        "id": "cf-B1-4-6",
        "triggerSituation": "Te perdiste en una explicación larga",
        "phrase": "Sorry, I lost my train of thought for a second. Could you clarify that last point?",
        "meaningEs": "Disculpa, se me fue el hilo un segundo. Podrías aclarar ese punto?",
        "audioSample": "Sorry, I lost my train of thought for a second. Could you clarify that last point?",
        "whyItWorks": "Recupera la atención con naturalidad nativa."
      }
    ],
    "listening": {
      "id": "ml-B1-4",
      "audioScript": "Hello! Quick update on our primer y segundo condicional: de la posibilidad real al sueño hipotético: we are finishing up the preliminary review now, and we'll be ready to discuss next steps this afternoon. Let me know if that works for you.",
      "spanishContext": "Un colega te manda un mensaje de voz rápido para darte un reporte sobre primer y segundo condicional: de la posibilidad real al sueño hipotético.",
      "comprehensionQuestion": "¿Cuál es el estado del proyecto y qué propone el colega para esta tarde?",
      "options": [
        "Cancelaron el proyecto por falta de tiempo",
        "Terminan la revisión preliminar ahora y discutirán los siguientes pasos esta tarde",
        "Piden reprogramar todo para el próximo mes"
      ],
      "correctAnswer": "Terminan la revisión preliminar ahora y discutirán los siguientes pasos esta tarde",
      "explanation": "El interlocutor dice claramente 'finishing up the preliminary review now' y 'ready to discuss next steps this afternoon'."
    },
    "workbook": [
      {
        "id": "wb-B1-4-1",
        "category": "routine",
        "situationEs": "Situación #1 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-4-2",
        "category": "social",
        "situationEs": "Situación #2 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Primer y Segundo Condicional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-4-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-4-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Primer y Segundo Condicional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-4-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-4-6",
        "category": "routine",
        "situationEs": "Situación #6 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Primer y Segundo Condicional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-4-7",
        "category": "social",
        "situationEs": "Situación #7 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-4-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Primer y Segundo Condicional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-4-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-4-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Primer y Segundo Condicional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-4-11",
        "category": "routine",
        "situationEs": "Situación #11 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-4-12",
        "category": "social",
        "situationEs": "Situación #12 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Primer y Segundo Condicional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-4-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-4-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Primer y Segundo Condicional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-4-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-4-16",
        "category": "routine",
        "situationEs": "Situación #16 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Primer y Segundo Condicional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-4-17",
        "category": "social",
        "situationEs": "Situación #17 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-4-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Primer y Segundo Condicional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-4-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-4-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Primer y Segundo Condicional when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      }
    ]
  },
  {
    "id": "lesson-b1-5",
    "level": "B1",
    "lessonNumber": 5,
    "title": "Modales de Deducción y Probabilidad (must, might, can't)",
    "tagline": "Aprende a especular con lógica: 'Debe ser verdad', 'Podría ser', 'Es imposible'",
    "grammarFocus": "Modales de deducción lógica en presente (must be, might be, can't be)",
    "practicalGoal": "Analizar situaciones de misterio, emitir juicios profesionales fundamentados y resolver hipótesis.",
    "theory": {
      "title": "Deducción Lógica con Modales",
      "overviewEs": "Cuando no tenemos el 100% de certeza pero queremos deducir algo basándonos en la evidencia disponible, usamos modales de deducción. 'Must' significa que estás 99% seguro de que sí es cierto; 'Might / Could' significa que es posible (50%); y 'Can't' significa que estás 99% seguro de que es imposible.",
      "grammarChart": {
        "title": "Escala de Certeza Lógica",
        "structureFormula": "Subject + must / might / can't + Verb base",
        "rows": [
          {
            "subject": "99% Seguro que SÍ (Must)",
            "affirmative": "He worked 14 hours today; he must be exhausted.",
            "negative": "N/A (la negación lógica usa can't)",
            "question": "Must he be right?",
            "shortAnswer": "He must be."
          },
          {
            "subject": "50% Posible (Might / Could)",
            "affirmative": "The keys might be in your coat pocket.",
            "negative": "They might not come to the party.",
            "question": "Could that be true?",
            "shortAnswer": "It might."
          },
          {
            "subject": "99% Seguro que NO (Can't)",
            "affirmative": "N/A",
            "negative": "That can't be true! He was with me all day.",
            "question": "Can it be a mistake?",
            "shortAnswer": "It can't be."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Can't es lo opuesto de Must",
            "description": "Para decir 'es imposible que sea él', decimos 'It can't be him' (NO: It mustn't be him).",
            "example": "She is in Tokyo; that can't be her."
          }
        ]
      },
      "signalWords": [
        "surely",
        "probably",
        "perhaps",
        "impossible",
        "evidence shows"
      ],
      "commonMistakes": [
        {
          "wrong": "He mustn't be at home (para decir que es imposible que esté)",
          "correct": "He can't be at home",
          "explanation": "'Mustn't' significa prohibición. Para deducción de imposibilidad usamos siempre 'can't be'."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-B1-5-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-B1-5-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-B1-5-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-B1-5-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-B1-5-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-B1-5-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-B1-5-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-B1-5-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-B1-5-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-B1-5-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-B1-5-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-B1-5-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-B1-5-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-B1-5-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-B1-5-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-B1-5-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-B1-5-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-B1-5-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-B1-5-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-B1-5-20",
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
        "id": "c-B1-5-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-B1-5-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-B1-5-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-B1-5-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-B1-5-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-B1-5-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-B1-5-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-B1-5-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-B1-5-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-B1-5-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "clarificationTools": [
      {
        "id": "cf-B1-5-1",
        "triggerSituation": "No escuchaste bien una frase rápida",
        "phrase": "Could you say that one more time, please?",
        "meaningEs": "Podrías decir eso una vez más, por favor?",
        "audioSample": "Could you say that one more time, please?",
        "whyItWorks": "Es la fórmula estándar más educada en inglés."
      },
      {
        "id": "cf-B1-5-2",
        "triggerSituation": "La persona habla muy acelerada",
        "phrase": "Could you speak a little slower, please?",
        "meaningEs": "Podrías hablar un poco más despacio, por favor?",
        "audioSample": "Could you speak a little slower, please?",
        "whyItWorks": "Pide ajuste de velocidad de forma asertiva."
      },
      {
        "id": "cf-B1-5-3",
        "triggerSituation": "No entendiste una palabra técnica o sigla",
        "phrase": "What does that acronym stand for?",
        "meaningEs": "Qué significan esas siglas?",
        "audioSample": "What does that acronym stand for?",
        "whyItWorks": "Pregunta directa para aclarar términos."
      },
      {
        "id": "cf-B1-5-4",
        "triggerSituation": "Quieres saber cómo se dice algo en inglés",
        "phrase": "How do you say that in English?",
        "meaningEs": "Cómo se dice eso en inglés?",
        "audioSample": "How do you say that in English?",
        "whyItWorks": "Permite aprender señalando objetos o gestos."
      },
      {
        "id": "cf-B1-5-5",
        "triggerSituation": "Quieres verificar si entendiste bien",
        "phrase": "Just to make sure we're on the same page, did you mean...?",
        "meaningEs": "Solo para estar en sintonía, querías decir...?",
        "audioSample": "Just to make sure we're on the same page, did you mean...?",
        "whyItWorks": "Sincroniza acuerdos en reuniones."
      },
      {
        "id": "cf-B1-5-6",
        "triggerSituation": "Te perdiste en una explicación larga",
        "phrase": "Sorry, I lost my train of thought for a second. Could you clarify that last point?",
        "meaningEs": "Disculpa, se me fue el hilo un segundo. Podrías aclarar ese punto?",
        "audioSample": "Sorry, I lost my train of thought for a second. Could you clarify that last point?",
        "whyItWorks": "Recupera la atención con naturalidad nativa."
      }
    ],
    "listening": {
      "id": "ml-B1-5",
      "audioScript": "Hello! Quick update on our modales de deducción y probabilidad (must, might, can't): we are finishing up the preliminary review now, and we'll be ready to discuss next steps this afternoon. Let me know if that works for you.",
      "spanishContext": "Un colega te manda un mensaje de voz rápido para darte un reporte sobre modales de deducción y probabilidad (must, might, can't).",
      "comprehensionQuestion": "¿Cuál es el estado del proyecto y qué propone el colega para esta tarde?",
      "options": [
        "Cancelaron el proyecto por falta de tiempo",
        "Terminan la revisión preliminar ahora y discutirán los siguientes pasos esta tarde",
        "Piden reprogramar todo para el próximo mes"
      ],
      "correctAnswer": "Terminan la revisión preliminar ahora y discutirán los siguientes pasos esta tarde",
      "explanation": "El interlocutor dice claramente 'finishing up the preliminary review now' y 'ready to discuss next steps this afternoon'."
    },
    "workbook": [
      {
        "id": "wb-B1-5-1",
        "category": "routine",
        "situationEs": "Situación #1 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-5-2",
        "category": "social",
        "situationEs": "Situación #2 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Modales de Deducción y Probabilidad (must, might, can't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-5-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-5-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Modales de Deducción y Probabilidad (must, might, can't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-5-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-5-6",
        "category": "routine",
        "situationEs": "Situación #6 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Modales de Deducción y Probabilidad (must, might, can't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-5-7",
        "category": "social",
        "situationEs": "Situación #7 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-5-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Modales de Deducción y Probabilidad (must, might, can't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-5-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-5-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Modales de Deducción y Probabilidad (must, might, can't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-5-11",
        "category": "routine",
        "situationEs": "Situación #11 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-5-12",
        "category": "social",
        "situationEs": "Situación #12 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Modales de Deducción y Probabilidad (must, might, can't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-5-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-5-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Modales de Deducción y Probabilidad (must, might, can't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-5-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-5-16",
        "category": "routine",
        "situationEs": "Situación #16 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Modales de Deducción y Probabilidad (must, might, can't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-5-17",
        "category": "social",
        "situationEs": "Situación #17 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-5-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Modales de Deducción y Probabilidad (must, might, can't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-B1-5-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-B1-5-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Modales de Deducción y Probabilidad (must, might, can't): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Modales de Deducción y Probabilidad (must, might, can't) when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      }
    ]
  }
];
