import type { CourseLesson } from '../../types/curriculum';

export const A1_LESSONS: CourseLesson[] = [
  {
    "id": "lesson-a1-1",
    "level": "A1",
    "lessonNumber": 1,
    "title": "El Verbo TO BE: Ser, Estar y Presentarse (am / is / are)",
    "tagline": "Los cimientos del inglés: aprende a describir quién eres, de dónde vienes y cómo te sientes",
    "grammarFocus": "Verbo TO BE (am/is/are) en oraciones afirmativas, negativas y preguntas",
    "practicalGoal": "Presentarte con soltura, decir tu origen, profesión, sensaciones físicas (hambre, frío) y estado de ánimo sin traducir literal.",
    "theory": {
      "title": "El Verbo TO BE (am / is / are)",
      "overviewEs": "El verbo TO BE es el más importante y versátil del inglés. Significa tanto 'SER' como 'ESTAR'. Además, en inglés se utiliza obligatoriamente para expresar la edad ('I am 25 years old') y sensaciones corporales ('I am hungry', 'I am cold'), donde en español usaríamos 'tener'.",
      "grammarChart": {
        "title": "Present Simple: Verbo TO BE",
        "structureFormula": "Subject + am / is / are + Complement",
        "rows": [
          {
            "subject": "I (Yo)",
            "affirmative": "I am ('m) from Mexico.",
            "negative": "I am not ('m not) tired.",
            "question": "Am I on the guest list?",
            "shortAnswer": "Yes, I am. / No, I'm not."
          },
          {
            "subject": "You (Tú / Ustedes)",
            "affirmative": "You are ('re) very kind.",
            "negative": "You are not (aren't) late.",
            "question": "Are you ready to order?",
            "shortAnswer": "Yes, you are. / No, you aren't."
          },
          {
            "subject": "He / She / It",
            "affirmative": "He is ('s) at the office.",
            "negative": "She is not (isn't) hungry.",
            "question": "Is it cold outside?",
            "shortAnswer": "Yes, it is. / No, it isn't."
          },
          {
            "subject": "We / They",
            "affirmative": "We are ('re) on our way.",
            "negative": "They are not (aren't) ready.",
            "question": "Are they here yet?",
            "shortAnswer": "Yes, they are. / No, they aren't."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Identidad y Profesión",
            "description": "Úsalo para decir quién eres y qué haces.",
            "example": "I am Carlos and she is an engineer."
          },
          {
            "ruleTitle": "Ubicación Geográfica y Física",
            "description": "Para indicar dónde estás tú o un objeto.",
            "example": "They are in London right now."
          },
          {
            "ruleTitle": "Estados y Sensaciones Corporales",
            "description": "En inglés NO 'tienes' edad ni hambre: ERES esa condición.",
            "example": "I am 28 years old and I am very thirsty."
          },
          {
            "ruleTitle": "Preguntas Invirtiendo el Orden",
            "description": "Para preguntar, simplemente coloca Am / Is / Are ANTES del sujeto.",
            "example": "Are you free this afternoon?"
          }
        ]
      },
      "signalWords": [
        "right now",
        "today",
        "at the moment",
        "always",
        "here",
        "there"
      ],
      "commonMistakes": [
        {
          "wrong": "I have 25 years old",
          "correct": "I am 25 years old",
          "explanation": "En inglés la edad se considera un estado continuo del ser. Siempre usa 'am/is/are'."
        },
        {
          "wrong": "I have hunger / I have cold",
          "correct": "I am hungry / I am cold",
          "explanation": "Las sensaciones físicas usan adjetivos con TO BE ('hungry', 'thirsty', 'cold', 'hot')."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-A1-1-1",
        "word": "hungry",
        "phonetic": "/ˈhʌŋɡri/",
        "partOfSpeech": "adjective",
        "meaningEs": "hambriento (tener hambre)",
        "exampleEn": "I am hungry, let's grab lunch.",
        "exampleEs": "Tengo hambre, almorcemos."
      },
      {
        "id": "v-A1-1-2",
        "word": "thirsty",
        "phonetic": "/ˈθɜːrsti/",
        "partOfSpeech": "adjective",
        "meaningEs": "sediento (tener sed)",
        "exampleEn": "I am thirsty; could I get some water?",
        "exampleEs": "Tengo sed; ¿me das agua?"
      },
      {
        "id": "v-A1-1-3",
        "word": "sleepy",
        "phonetic": "/ˈsliːpi/",
        "partOfSpeech": "adjective",
        "meaningEs": "somnoliento (tener sueño)",
        "exampleEn": "It is late and I am getting sleepy.",
        "exampleEs": "Es tarde y me está dando sueño."
      },
      {
        "id": "v-A1-1-4",
        "word": "cold",
        "phonetic": "/koʊld/",
        "partOfSpeech": "adjective",
        "meaningEs": "tener frío / frío",
        "exampleEn": "Can you close the window? I am cold.",
        "exampleEs": "¿Cierras la ventana? Tengo frío."
      },
      {
        "id": "v-A1-1-5",
        "word": "warm",
        "phonetic": "/wɔːrm/",
        "partOfSpeech": "adjective",
        "meaningEs": "tener calor / cálido",
        "exampleEn": "I am warm; let's turn on the AC.",
        "exampleEs": "Tengo calor; prendamos el aire."
      },
      {
        "id": "v-A1-1-6",
        "word": "tired",
        "phonetic": "/ˈtaɪərd/",
        "partOfSpeech": "adjective",
        "meaningEs": "cansado / agotado",
        "exampleEn": "We are exhausted after the flight.",
        "exampleEs": "Estamos agotados tras el vuelo."
      },
      {
        "id": "v-A1-1-7",
        "word": "busy",
        "phonetic": "/ˈbɪzi/",
        "partOfSpeech": "adjective",
        "meaningEs": "ocupado con tareas",
        "exampleEn": "I am busy with a client right now.",
        "exampleEs": "Estoy ocupado con un cliente."
      },
      {
        "id": "v-A1-1-8",
        "word": "ready",
        "phonetic": "/ˈrɛdi/",
        "partOfSpeech": "adjective",
        "meaningEs": "listo / preparado",
        "exampleEn": "Are you ready to leave?",
        "exampleEs": "¿Estás listo para salir?"
      },
      {
        "id": "v-A1-1-9",
        "word": "late",
        "phonetic": "/leɪt/",
        "partOfSpeech": "adjective",
        "meaningEs": "llegar tarde / retrasado",
        "exampleEn": "Sorry I am late; traffic was terrible.",
        "exampleEs": "Perdón por llegar tarde."
      },
      {
        "id": "v-A1-1-10",
        "word": "on time",
        "phonetic": "/ɒn taɪm/",
        "partOfSpeech": "phrase",
        "meaningEs": "puntual / a tiempo",
        "exampleEn": "The train is on time today.",
        "exampleEs": "El tren viene a tiempo hoy."
      },
      {
        "id": "v-A1-1-11",
        "word": "worried",
        "phonetic": "/ˈwʌrid/",
        "partOfSpeech": "adjective",
        "meaningEs": "preocupado",
        "exampleEn": "She is worried about the exam.",
        "exampleEs": "Ella está preocupada por el examen."
      },
      {
        "id": "v-A1-1-12",
        "word": "scared of",
        "phonetic": "/skɛərd/",
        "partOfSpeech": "adjective",
        "meaningEs": "tener miedo a",
        "exampleEn": "I am scared of heights.",
        "exampleEs": "Le tengo miedo a las alturas."
      },
      {
        "id": "v-A1-1-13",
        "word": "proud of",
        "phonetic": "/praʊd/",
        "partOfSpeech": "adjective",
        "meaningEs": "orgulloso de",
        "exampleEn": "We are very proud of your progress.",
        "exampleEs": "Estamos orgullosos de tu avance."
      },
      {
        "id": "v-A1-1-14",
        "word": "in a hurry",
        "phonetic": "/ˈhʌri/",
        "partOfSpeech": "phrase",
        "meaningEs": "con prisa / apresurado",
        "exampleEn": "I am in a hurry; can we talk later?",
        "exampleEs": "Voy con prisa; ¿hablamos luego?"
      },
      {
        "id": "v-A1-1-15",
        "word": "available",
        "phonetic": "/əˈveɪləbəl/",
        "partOfSpeech": "adjective",
        "meaningEs": "disponible / libre",
        "exampleEn": "Is Dr. Smith available this morning?",
        "exampleEs": "¿El Dr. Smith está libre?"
      },
      {
        "id": "v-A1-1-16",
        "word": "excited about",
        "phonetic": "/ɪkˈsaɪtɪd/",
        "partOfSpeech": "adjective",
        "meaningEs": "emocionado por",
        "exampleEn": "I am excited about the new project.",
        "exampleEs": "Estoy entusiasmado por el proyecto."
      },
      {
        "id": "v-A1-1-17",
        "word": "lucky",
        "phonetic": "/ˈlʌki/",
        "partOfSpeech": "adjective",
        "meaningEs": "tener suerte",
        "exampleEn": "You are very lucky to have that mentor.",
        "exampleEs": "Tienes suerte de tener ese mentor."
      },
      {
        "id": "v-A1-1-18",
        "word": "right",
        "phonetic": "/raɪt/",
        "partOfSpeech": "adjective",
        "meaningEs": "tener razón",
        "exampleEn": "You are totally right about the deadline.",
        "exampleEs": "Tienes razón en la fecha límite."
      },
      {
        "id": "v-A1-1-19",
        "word": "wrong",
        "phonetic": "/rɔːŋ/",
        "partOfSpeech": "adjective",
        "meaningEs": "estar equivocado",
        "exampleEn": "I think he is wrong about the price.",
        "exampleEs": "Creo que está equivocado en el precio."
      },
      {
        "id": "v-A1-1-20",
        "word": "alone",
        "phonetic": "/əˈloʊn/",
        "partOfSpeech": "adjective",
        "meaningEs": "solo / sin compañía",
        "exampleEn": "Are you here alone or with family?",
        "exampleEs": "¿Estás aquí solo o con familia?"
      }
    ],
    "coreChunks": [
      {
        "id": "c-A1-1-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-A1-1-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-A1-1-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-A1-1-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-A1-1-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-A1-1-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-A1-1-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-A1-1-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-A1-1-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-A1-1-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-A1-1-1",
        "category": "routine",
        "situationEs": "Situación #1 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-1-2",
        "category": "social",
        "situationEs": "Situación #2 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo TO BE when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-1-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-1-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo TO BE when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-1-5",
        "category": "opinion",
        "situationEs": "Situación #5 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-1-6",
        "category": "routine",
        "situationEs": "Situación #6 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo TO BE when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-1-7",
        "category": "social",
        "situationEs": "Situación #7 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-1-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo TO BE when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-1-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-1-10",
        "category": "opinion",
        "situationEs": "Situación #10 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo TO BE when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-1-11",
        "category": "routine",
        "situationEs": "Situación #11 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-1-12",
        "category": "social",
        "situationEs": "Situación #12 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo TO BE when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-1-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-1-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo TO BE when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-1-15",
        "category": "opinion",
        "situationEs": "Situación #15 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-1-16",
        "category": "routine",
        "situationEs": "Situación #16 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo TO BE when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-1-17",
        "category": "social",
        "situationEs": "Situación #17 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-1-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo TO BE when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-1-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-1-20",
        "category": "opinion",
        "situationEs": "Situación #20 de El Verbo TO BE: Ser, Estar y Presentarse (am / is / are): Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on El Verbo TO BE when you have a moment?",
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
        "id": "ml-lesson-a1-1-1",
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
        "id": "ml-lesson-a1-1-2",
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
        "id": "ml-lesson-a1-1-3",
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
    "id": "lesson-a1-2",
    "level": "A1",
    "lessonNumber": 2,
    "title": "Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia",
    "tagline": "Aprende a hablar de lo que haces todos los días sin listas interminables de reglas",
    "grammarFocus": "Present Simple (I work, He works) y Adverbios de Frecuencia (always, usually, never)",
    "practicalGoal": "Describir tu rutina diaria, tus horarios de trabajo, comidas y fines de semana.",
    "theory": {
      "title": "Present Simple: Acciones Habituales",
      "overviewEs": "El Present Simple expresa hechos permanentes, hábitos cotidianos y horarios regulares. ¡Cuidado con la 3ra persona del singular! Cuando el sujeto es 'He', 'She' o 'It', agregamos -s o -es al verbo afirmativo.",
      "grammarChart": {
        "title": "Present Simple: Verbos de Acción Regular e Irregular",
        "structureFormula": "Subject + verb (-s/-es for he/she/it) | do/does + subject + verb?",
        "rows": [
          {
            "subject": "I / You / We / They",
            "affirmative": "I live in Madrid.",
            "negative": "I do not (don't) eat meat.",
            "question": "Do you drink coffee?",
            "shortAnswer": "Yes, I do. / No, I don't."
          },
          {
            "subject": "He / She / It",
            "affirmative": "She works in finance.",
            "negative": "He does not (doesn't) drive.",
            "question": "Does it start at 9?",
            "shortAnswer": "Yes, he does. / No, he doesn't."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Hábitos y Rutinas",
            "description": "Cosas que haces con regularidad o frecuencia.",
            "example": "I wake up at 7 AM every weekday."
          },
          {
            "ruleTitle": "Verdades Universales",
            "description": "Hechos científicos o verdades generales permanentes.",
            "example": "Water boils at 100 degrees Celsius."
          },
          {
            "ruleTitle": "Posición de Adverbios de Frecuencia",
            "description": "Van ANTES del verbo principal, pero DESPUÉS del verbo TO BE.",
            "example": "I always drink tea, but I am never late."
          }
        ],
        "spellingRules": [
          {
            "condition": "Verbos que terminan en -ch, -sh, -ss, -x, -o",
            "change": "Añade -es",
            "example": "watch ➔ watches, go ➔ goes"
          },
          {
            "condition": "Consonante + y",
            "change": "Cambia -y por -ies",
            "example": "study ➔ studies, fly ➔ flies"
          },
          {
            "condition": "Vocal + y",
            "change": "Solo añade -s",
            "example": "play ➔ plays, buy ➔ buys"
          }
        ]
      },
      "signalWords": [
        "always",
        "usually",
        "often",
        "sometimes",
        "hardly ever",
        "never",
        "every day",
        "on Mondays"
      ],
      "commonMistakes": [
        {
          "wrong": "He work at a bank",
          "correct": "He works at a bank",
          "explanation": "Nunca olvides la 's' final en oraciones afirmativas con He, She o It."
        },
        {
          "wrong": "She doesn't works here",
          "correct": "She doesn't work here",
          "explanation": "En oraciones negativas el auxiliar 'doesn't' ya lleva la tercera persona. El verbo vuelve a su forma base."
        },
        {
          "wrong": "I am wake up at 6",
          "correct": "I wake up at 6",
          "explanation": "No mezcles el verbo TO BE (am/is/are) con verbos de acción directa en presente simple."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-A1-2-1",
        "word": "wake up",
        "phonetic": "/weɪk ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "despertarse",
        "exampleEn": "I wake up at 6:30 AM every day.",
        "exampleEs": "Me despierto a las 6:30 AM."
      },
      {
        "id": "v-A1-2-2",
        "word": "get up",
        "phonetic": "/ɡɛt ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "levantarse de la cama",
        "exampleEn": "I get up right after waking up.",
        "exampleEs": "Me levanto justo tras despertar."
      },
      {
        "id": "v-A1-2-3",
        "word": "commute",
        "phonetic": "/kəˈmjuːt/",
        "partOfSpeech": "verb",
        "meaningEs": "trasladarse al trabajo",
        "exampleEn": "I commute by subway every morning.",
        "exampleEs": "Me traslado en metro."
      },
      {
        "id": "v-A1-2-4",
        "word": "grab a coffee",
        "phonetic": "/ɡræb/",
        "partOfSpeech": "phrase",
        "meaningEs": "tomar un café rápido",
        "exampleEn": "I grab a coffee on my way to work.",
        "exampleEs": "Tomo un café de camino al trabajo."
      },
      {
        "id": "v-A1-2-5",
        "word": "skip breakfast",
        "phonetic": "/skɪp/",
        "partOfSpeech": "phrase",
        "meaningEs": "saltarse el desayuno",
        "exampleEn": "I rarely skip breakfast.",
        "exampleEs": "Rara vez me salto el desayuno."
      },
      {
        "id": "v-A1-2-6",
        "word": "head out",
        "phonetic": "/hɛd aʊt/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "salir de casa",
        "exampleEn": "I head out around 8 AM.",
        "exampleEs": "Salgo sobre las 8 AM."
      },
      {
        "id": "v-A1-2-7",
        "word": "check emails",
        "phonetic": "/tʃɛk/",
        "partOfSpeech": "phrase",
        "meaningEs": "revisar correos",
        "exampleEn": "The first thing I do is check emails.",
        "exampleEs": "Lo primero que hago es revisar correos."
      },
      {
        "id": "v-A1-2-8",
        "word": "take a break",
        "phonetic": "/breɪk/",
        "partOfSpeech": "phrase",
        "meaningEs": "tomar un descanso",
        "exampleEn": "We take a break at noon.",
        "exampleEs": "Tomamos un descanso al mediodía."
      },
      {
        "id": "v-A1-2-9",
        "word": "groceries",
        "phonetic": "/ˈɡroʊsəriz/",
        "partOfSpeech": "noun",
        "meaningEs": "compras del súper",
        "exampleEn": "I buy groceries on Tuesday.",
        "exampleEs": "Compro víveres los martes."
      },
      {
        "id": "v-A1-2-10",
        "word": "work out",
        "phonetic": "/wɜːrk aʊt/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "hacer ejercicio",
        "exampleEn": "Do you work out after work?",
        "exampleEs": "¿Entrenas tras el trabajo?"
      },
      {
        "id": "v-A1-2-11",
        "word": "cook dinner",
        "phonetic": "/kʊk/",
        "partOfSpeech": "phrase",
        "meaningEs": "cocinar la cena",
        "exampleEn": "My partner and I cook dinner together.",
        "exampleEs": "Cocinamos la cena juntos."
      },
      {
        "id": "v-A1-2-12",
        "word": "unwind",
        "phonetic": "/ʌnˈwaɪnd/",
        "partOfSpeech": "verb",
        "meaningEs": "desconectarse del estrés",
        "exampleEn": "I read a novel to unwind.",
        "exampleEs": "Leo una novela para desconectarme."
      },
      {
        "id": "v-A1-2-13",
        "word": "go to bed",
        "phonetic": "/ɡoʊ/",
        "partOfSpeech": "phrase",
        "meaningEs": "acostarse a dormir",
        "exampleEn": "I go to bed around 11 PM.",
        "exampleEs": "Me acuesto sobre las 11 PM."
      },
      {
        "id": "v-A1-2-14",
        "word": "alarm goes off",
        "phonetic": "/əˈlɑːrm/",
        "partOfSpeech": "phrase",
        "meaningEs": "sonar la alarma",
        "exampleEn": "My alarm goes off at 6:00 sharp.",
        "exampleEs": "Mi alarma suena a las 6 en punto."
      },
      {
        "id": "v-A1-2-15",
        "word": "weekday",
        "phonetic": "/ˈwiːkdeɪ/",
        "partOfSpeech": "noun",
        "meaningEs": "día entre semana",
        "exampleEn": "On weekdays I am very busy.",
        "exampleEs": "Entre semana estoy muy ocupado."
      },
      {
        "id": "v-A1-2-16",
        "word": "weekend",
        "phonetic": "/ˈwiːkɛnd/",
        "partOfSpeech": "noun",
        "meaningEs": "fin de semana",
        "exampleEn": "What do you do on weekends?",
        "exampleEs": "¿Qué haces los fines de semana?"
      },
      {
        "id": "v-A1-2-17",
        "word": "tidy up",
        "phonetic": "/ˈtaɪdi/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "recoger la casa",
        "exampleEn": "I tidy up the kitchen after eating.",
        "exampleEs": "Recojo la cocina tras comer."
      },
      {
        "id": "v-A1-2-18",
        "word": "traffic jam",
        "phonetic": "/træfɪk/",
        "partOfSpeech": "noun",
        "meaningEs": "atasco de tráfico",
        "exampleEn": "I hate getting stuck in a traffic jam.",
        "exampleEs": "Odio quedarme en un atasco."
      },
      {
        "id": "v-A1-2-19",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "I have a flexible schedule.",
        "exampleEs": "Tengo un horario flexible."
      },
      {
        "id": "v-A1-2-20",
        "word": "stay up late",
        "phonetic": "/steɪ ʌp/",
        "partOfSpeech": "phrase",
        "meaningEs": "desvelarse",
        "exampleEn": "I try not to stay up late.",
        "exampleEs": "Intento no desvelarme."
      }
    ],
    "coreChunks": [
      {
        "id": "c-A1-2-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-A1-2-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-A1-2-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-A1-2-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-A1-2-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-A1-2-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-A1-2-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-A1-2-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-A1-2-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-A1-2-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-A1-2-1",
        "category": "routine",
        "situationEs": "Situación #1 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-2-2",
        "category": "social",
        "situationEs": "Situación #2 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-2-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-2-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-2-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-2-6",
        "category": "routine",
        "situationEs": "Situación #6 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-2-7",
        "category": "social",
        "situationEs": "Situación #7 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-2-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-2-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-2-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-2-11",
        "category": "routine",
        "situationEs": "Situación #11 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-2-12",
        "category": "social",
        "situationEs": "Situación #12 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-2-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-2-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-2-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-2-16",
        "category": "routine",
        "situationEs": "Situación #16 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-2-17",
        "category": "social",
        "situationEs": "Situación #17 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-2-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-2-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-2-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple when you have a moment?",
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
        "id": "ml-lesson-a1-2-1",
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
        "id": "ml-lesson-a1-2-2",
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
        "id": "ml-lesson-a1-2-3",
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
    "id": "lesson-a1-3",
    "level": "A1",
    "lessonNumber": 3,
    "title": "Present Continuous: Acciones en Progreso y Actividades Temporales",
    "tagline": "Aprende a reportar lo que ocurre en vivo y a atender llamadas con naturalidad",
    "grammarFocus": "Present Continuous (am/is/are + verb-ing) en tiempo real",
    "practicalGoal": "Explicar qué estás haciendo en este instante, atender videollamadas y avisar si estás ocupado.",
    "theory": {
      "title": "Present Continuous (am/is/are + verb-ing)",
      "overviewEs": "El Present Continuous se utiliza para acciones que están ocurriendo en el mismo momento en que se habla, o para situaciones temporales que abarcan estos días. Se construye siempre con el verbo auxiliar TO BE seguido del verbo con terminación -ing.",
      "grammarChart": {
        "title": "Present Continuous: Estructura Completa",
        "structureFormula": "Subject + am / is / are + Verb-ing",
        "rows": [
          {
            "subject": "I",
            "affirmative": "I am ('m) typing an email.",
            "negative": "I am not ('m not) working now.",
            "question": "Am I speaking clearly?",
            "shortAnswer": "Yes, you are. / No, you aren't."
          },
          {
            "subject": "He / She / It",
            "affirmative": "She is ('s) cooking dinner.",
            "negative": "He is not (isn't) sleeping.",
            "question": "Is it raining outside?",
            "shortAnswer": "Yes, it is. / No, it isn't."
          },
          {
            "subject": "You / We / They",
            "affirmative": "We are ('re) heading out.",
            "negative": "They are not (aren't) coming.",
            "question": "Are you listening to me?",
            "shortAnswer": "Yes, I am. / No, I'm not."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Acciones Ocurriendo Ahora",
            "description": "Acciones en progreso en el instante de hablar.",
            "example": "Please be quiet, the baby is sleeping."
          },
          {
            "ruleTitle": "Situaciones Temporales",
            "description": "Procesos que ocurren alrededor del presente.",
            "example": "I am staying at a hotel this week."
          },
          {
            "ruleTitle": "Verbos de Estado (Stative Verbs)",
            "description": "Verbos como like, know, understand, need NO suelen usarse en -ing.",
            "example": "I need help (NO: I am needing help)."
          }
        ]
      },
      "signalWords": [
        "right now",
        "at the moment",
        "currently",
        "nowadays",
        "these days",
        "look!",
        "listen!"
      ],
      "commonMistakes": [
        {
          "wrong": "I working on the report",
          "correct": "I am working on the report",
          "explanation": "Nunca omitas el verbo TO BE ('am/is/are') en el presente continuo."
        },
        {
          "wrong": "I am understanding you",
          "correct": "I understand you",
          "explanation": "'Understand' es un verbo de estado mental; se usa en presente simple."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-A1-3-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-A1-3-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-A1-3-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-A1-3-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-A1-3-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-A1-3-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-A1-3-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-A1-3-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-A1-3-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-A1-3-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-A1-3-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-A1-3-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-A1-3-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-A1-3-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-A1-3-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-A1-3-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-A1-3-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-A1-3-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-A1-3-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-A1-3-20",
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
        "id": "c-A1-3-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-A1-3-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-A1-3-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-A1-3-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-A1-3-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-A1-3-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-A1-3-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-A1-3-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-A1-3-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-A1-3-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-A1-3-1",
        "category": "routine",
        "situationEs": "Situación #1 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-3-2",
        "category": "social",
        "situationEs": "Situación #2 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-3-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-3-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-3-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-3-6",
        "category": "routine",
        "situationEs": "Situación #6 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-3-7",
        "category": "social",
        "situationEs": "Situación #7 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-3-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-3-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-3-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-3-11",
        "category": "routine",
        "situationEs": "Situación #11 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-3-12",
        "category": "social",
        "situationEs": "Situación #12 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-3-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-3-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-3-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-3-16",
        "category": "routine",
        "situationEs": "Situación #16 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-3-17",
        "category": "social",
        "situationEs": "Situación #17 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-3-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-3-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-3-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Present Continuous: Acciones en Progreso y Actividades Temporales: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Continuous when you have a moment?",
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
        "id": "ml-lesson-a1-3-1",
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
        "id": "ml-lesson-a1-3-2",
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
        "id": "ml-lesson-a1-3-3",
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
    "id": "lesson-a1-4",
    "level": "A1",
    "lessonNumber": 4,
    "title": "Present Simple vs Present Continuous: El Gran Contraste",
    "tagline": "El punto de quiebre para sonar fluido: sabe cuándo usar cada presente",
    "grammarFocus": "Contraste funcional entre hábitos regulares (Simple) y acciones temporales (Continuous)",
    "practicalGoal": "Diferenciar con precisión cuándo hablar de tu trabajo habitual frente a tus proyectos del momento.",
    "theory": {
      "title": "Present Simple vs Present Continuous",
      "overviewEs": "Uno de los mayores desafíos para el hispanohablante es saber cuándo usar el Present Simple y cuándo el Present Continuous. Regla de oro: ¿Es un hábito permanente o una rutina? Usa Present Simple. ¿Está ocurriendo ahora o es una situación temporal de estos días? Usa Present Continuous.",
      "grammarChart": {
        "title": "Tabla de Contraste: Simple vs Continuous",
        "structureFormula": "Rutinas (do/does + base) VS En progreso (be + -ing)",
        "rows": [
          {
            "subject": "Hábito / Rutina (Simple)",
            "affirmative": "I usually drive to work.",
            "negative": "I don't take the bus.",
            "question": "Do you drive every day?",
            "shortAnswer": "Yes, I do."
          },
          {
            "subject": "En progreso / Temporal (Cont.)",
            "affirmative": "Today I am taking the train.",
            "negative": "I'm not driving today.",
            "question": "Are you taking the train?",
            "shortAnswer": "Yes, I am."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Permanente vs Temporal",
            "description": "Simple para cosas que nunca cambian mucho; Continuous para excepciones temporales.",
            "example": "I live in Bogota, but this month I am living in Medellin."
          },
          {
            "ruleTitle": "Adverbios de Frecuencia vs Expresiones de Tiempo",
            "description": "Usually/always ➔ Simple. Right now/today ➔ Continuous.",
            "example": "I always drink water, but right now I am drinking juice."
          }
        ]
      },
      "signalWords": [
        "usually vs right now",
        "every day vs today",
        "always vs currently",
        "on weekends vs this weekend"
      ],
      "commonMistakes": [
        {
          "wrong": "What do you do right now?",
          "correct": "What are you doing right now?",
          "explanation": "Para preguntar qué hace alguien en este momento exacto, usa 'What are you doing?'."
        },
        {
          "wrong": "I am living here always",
          "correct": "I always live here / I live here",
          "explanation": "Los hábitos de toda la vida van en Present Simple."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-A1-4-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-A1-4-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-A1-4-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-A1-4-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-A1-4-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-A1-4-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-A1-4-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-A1-4-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-A1-4-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-A1-4-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-A1-4-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-A1-4-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-A1-4-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-A1-4-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-A1-4-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-A1-4-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-A1-4-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-A1-4-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-A1-4-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-A1-4-20",
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
        "id": "c-A1-4-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-A1-4-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-A1-4-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-A1-4-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-A1-4-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-A1-4-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-A1-4-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-A1-4-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-A1-4-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-A1-4-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-A1-4-1",
        "category": "routine",
        "situationEs": "Situación #1 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-4-2",
        "category": "social",
        "situationEs": "Situación #2 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple vs Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-4-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-4-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple vs Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-4-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-4-6",
        "category": "routine",
        "situationEs": "Situación #6 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple vs Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-4-7",
        "category": "social",
        "situationEs": "Situación #7 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-4-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple vs Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-4-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-4-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple vs Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-4-11",
        "category": "routine",
        "situationEs": "Situación #11 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-4-12",
        "category": "social",
        "situationEs": "Situación #12 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple vs Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-4-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-4-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple vs Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-4-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-4-16",
        "category": "routine",
        "situationEs": "Situación #16 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple vs Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-4-17",
        "category": "social",
        "situationEs": "Situación #17 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-4-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple vs Present Continuous when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-4-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-4-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Present Simple vs Present Continuous: El Gran Contraste: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Present Simple vs Present Continuous when you have a moment?",
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
        "id": "ml-lesson-a1-4-1",
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
        "id": "ml-lesson-a1-4-2",
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
        "id": "ml-lesson-a1-4-3",
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
    "id": "lesson-a1-5",
    "level": "A1",
    "lessonNumber": 5,
    "title": "Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares",
    "tagline": "Empieza a contar historias de tu pasado: cómo fue tu día y dónde estuviste",
    "grammarFocus": "Past Simple de TO BE (was/were) y terminación -ed de verbos regulares",
    "practicalGoal": "Describir cómo fue tu día anterior, qué lugares visitaste y cómo estuvo el clima o un evento.",
    "theory": {
      "title": "Past Simple: was / were y Verbos Regulares (-ed)",
      "overviewEs": "El Past Simple se utiliza para acciones o estados que comenzaron y terminaron en un momento específico del pasado. Para el verbo TO BE, 'am/is' cambia a 'was', y 'are' cambia a 'were'. Para los verbos regulares, añadimos la terminación -ed.",
      "grammarChart": {
        "title": "Past Simple: was/were y verbos regulares",
        "structureFormula": "Subject + was/were | Subject + verb-ed | did + subject + verb?",
        "rows": [
          {
            "subject": "I / He / She / It",
            "affirmative": "I was at home. / She cooked dinner.",
            "negative": "He was not (wasn't) busy.",
            "question": "Was she at the meeting?",
            "shortAnswer": "Yes, she was. / No, she wasn't."
          },
          {
            "subject": "You / We / They",
            "affirmative": "They were happy. / We walked home.",
            "negative": "We were not (weren't) late.",
            "question": "Were you tired yesterday?",
            "shortAnswer": "Yes, I was. / No, I wasn't."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Acciones Terminadas",
            "description": "Acciones con fecha o momento cerrado en el pasado.",
            "example": "I finished the project yesterday."
          },
          {
            "ruleTitle": "Negaciones con Verbos de Acción",
            "description": "Con verbos que no son TO BE, usamos 'didn't' + verbo en forma base.",
            "example": "I didn't call him (NO: I didn't called)."
          }
        ]
      },
      "signalWords": [
        "yesterday",
        "last night",
        "last week",
        "in 2021",
        "two days ago",
        "when I was a child"
      ],
      "commonMistakes": [
        {
          "wrong": "I didn't walked to work",
          "correct": "I didn't walk to work",
          "explanation": "El auxiliar 'didn't' ya indica pasado; el verbo principal vuelve a su forma base."
        },
        {
          "wrong": "They was very happy",
          "correct": "They were very happy",
          "explanation": "Con You, We y They el pasado de TO BE siempre es 'were'."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-A1-5-1",
        "word": "schedule",
        "phonetic": "/ˈskɛdʒuːl/",
        "partOfSpeech": "noun",
        "meaningEs": "horario / agenda",
        "exampleEn": "We need to adjust the schedule.",
        "exampleEs": "Debemos ajustar la agenda."
      },
      {
        "id": "v-A1-5-2",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha límite de entrega",
        "exampleEn": "The deadline is this Friday at 5 PM.",
        "exampleEs": "La fecha límite es el viernes."
      },
      {
        "id": "v-A1-5-3",
        "word": "budget",
        "phonetic": "/ˈbʌdʒɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "presupuesto asignado",
        "exampleEn": "We must respect the project budget.",
        "exampleEs": "Debemos respetar el presupuesto."
      },
      {
        "id": "v-A1-5-4",
        "word": "feedback",
        "phonetic": "/ˈfiːdbæk/",
        "partOfSpeech": "noun",
        "meaningEs": "retroalimentación útil",
        "exampleEn": "Thank you for the constructive feedback.",
        "exampleEs": "Gracias por los comentarios."
      },
      {
        "id": "v-A1-5-5",
        "word": "issue",
        "phonetic": "/ˈɪʃuː/",
        "partOfSpeech": "noun",
        "meaningEs": "problema o dificultad",
        "exampleEn": "We are solving the technical issue.",
        "exampleEs": "Resolvemos el problema técnico."
      },
      {
        "id": "v-A1-5-6",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno o cómodo",
        "exampleEn": "Is 3 PM convenient for our call?",
        "exampleEs": "¿Te queda cómodo a las 3 PM?"
      },
      {
        "id": "v-A1-5-7",
        "word": "follow up",
        "phonetic": "/ˈfɒloʊ ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "dar seguimiento a algo",
        "exampleEn": "I will follow up with the vendor.",
        "exampleEs": "Daré seguimiento con el proveedor."
      },
      {
        "id": "v-A1-5-8",
        "word": "wrap up",
        "phonetic": "/ræp ʌp/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "concluir una sesión",
        "exampleEn": "Let's wrap up today's meeting.",
        "exampleEs": "Concluyamos la reunión de hoy."
      },
      {
        "id": "v-A1-5-9",
        "word": "workload",
        "phonetic": "/ˈwɜːrkloʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "carga de trabajo",
        "exampleEn": "My workload is heavy this week.",
        "exampleEs": "Mi carga de trabajo es pesada."
      },
      {
        "id": "v-A1-5-10",
        "word": "proposal",
        "phonetic": "/prəˈpoʊzəl/",
        "partOfSpeech": "noun",
        "meaningEs": "propuesta formal",
        "exampleEn": "The client accepted our proposal.",
        "exampleEs": "El cliente aceptó la propuesta."
      },
      {
        "id": "v-A1-5-11",
        "word": "deliverable",
        "phonetic": "/dɪˈlɪvərəbəl/",
        "partOfSpeech": "noun",
        "meaningEs": "entregable de proyecto",
        "exampleEn": "Here is the final deliverable.",
        "exampleEs": "Aquí está el entregable final."
      },
      {
        "id": "v-A1-5-12",
        "word": "priority",
        "phonetic": "/praɪˈɒrɪti/",
        "partOfSpeech": "noun",
        "meaningEs": "asunto prioritario",
        "exampleEn": "Client support is our top priority.",
        "exampleEs": "Soporte es nuestra prioridad."
      },
      {
        "id": "v-A1-5-13",
        "word": "clarify",
        "phonetic": "/ˈklærɪfaɪ/",
        "partOfSpeech": "verb",
        "meaningEs": "aclarar un punto",
        "exampleEn": "Could you clarify the third bullet?",
        "exampleEs": "¿Podrías aclarar el tercer punto?"
      },
      {
        "id": "v-A1-5-14",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "Please confirm your attendance.",
        "exampleEs": "Por favor confirma tu asistencia."
      },
      {
        "id": "v-A1-5-15",
        "word": "update",
        "phonetic": "/ʌpˈdeɪt/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "actualización de estado",
        "exampleEn": "Could you send a quick update?",
        "exampleEs": "¿Podrías enviar una actualización?"
      },
      {
        "id": "v-A1-5-16",
        "word": "in advance",
        "phonetic": "/ədˈvæns/",
        "partOfSpeech": "phrase",
        "meaningEs": "con anticipación",
        "exampleEn": "Thanks in advance for your support.",
        "exampleEs": "Gracias de antemano por tu apoyo."
      },
      {
        "id": "v-A1-5-17",
        "word": "asap",
        "phonetic": "/ˈeɪsæp/",
        "partOfSpeech": "adverb",
        "meaningEs": "lo antes posible",
        "exampleEn": "Please review the document asap.",
        "exampleEs": "Revisa el documento cuanto antes."
      },
      {
        "id": "v-A1-5-18",
        "word": "look forward to",
        "phonetic": "/lʊk ˈfɔːrwərd/",
        "partOfSpeech": "phrase",
        "meaningEs": "esperar con agrado",
        "exampleEn": "I look forward to working with you.",
        "exampleEs": "Espero con gusto trabajar contigo."
      },
      {
        "id": "v-A1-5-19",
        "word": "deal with",
        "phonetic": "/diːl wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "gestionar un asunto",
        "exampleEn": "I am dealing with customer requests.",
        "exampleEs": "Gestiono solicitudes de clientes."
      },
      {
        "id": "v-A1-5-20",
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
        "id": "c-A1-5-1",
        "chunk": "Could I get a...",
        "meaningEs": "Me podrías dar / poner un...",
        "usageContext": "Restaurantes y cafés",
        "exampleSentence": "Could I get a black coffee to go, please?"
      },
      {
        "id": "c-A1-5-2",
        "chunk": "I'm in the middle of something",
        "meaningEs": "Estoy en medio de algo ahora",
        "usageContext": "Cuando te interrumpen",
        "exampleSentence": "Can you give me five minutes? I'm in the middle of something."
      },
      {
        "id": "c-A1-5-3",
        "chunk": "I'll get back to you soon",
        "meaningEs": "Te respondo pronto",
        "usageContext": "Consultas y correos",
        "exampleSentence": "Let me check the numbers and I'll get back to you soon."
      },
      {
        "id": "c-A1-5-4",
        "chunk": "Let me think for a second...",
        "meaningEs": "Déjame pensar un segundo...",
        "usageContext": "Ganar tiempo natural",
        "exampleSentence": "That's a good question, let me think for a second..."
      },
      {
        "id": "c-A1-5-5",
        "chunk": "What I mean is...",
        "meaningEs": "Lo que quiero decir es...",
        "usageContext": "Reencauzar la idea",
        "exampleSentence": "What I mean is that we should start with a small pilot."
      },
      {
        "id": "c-A1-5-6",
        "chunk": "It depends on the day",
        "meaningEs": "Depende del día (nunca depend of)",
        "usageContext": "Hábitos con variación",
        "exampleSentence": "Sometimes I cook, but it depends on the day."
      },
      {
        "id": "c-A1-5-7",
        "chunk": "Can I take a rain check?",
        "meaningEs": "¿Lo dejamos para otra ocasión?",
        "usageContext": "Posponer un plan con cortesía",
        "exampleSentence": "I have an exam tomorrow; can I take a rain check?"
      },
      {
        "id": "c-A1-5-8",
        "chunk": "Would it be possible to...",
        "meaningEs": "¿Sería posible...",
        "usageContext": "Negociar plazos",
        "exampleSentence": "Would it be possible to extend the deadline until Monday?"
      },
      {
        "id": "c-A1-5-9",
        "chunk": "To be honest with you...",
        "meaningEs": "Para ser sincero contigo...",
        "usageContext": "Dar opiniones francas",
        "exampleSentence": "To be honest with you, I think we need more time."
      },
      {
        "id": "c-A1-5-10",
        "chunk": "As far as I know...",
        "meaningEs": "Hasta donde yo sé...",
        "usageContext": "Compartir información sin ser tajante",
        "exampleSentence": "As far as I know, the flight is still on schedule."
      }
    ],
    "workbook": [
      {
        "id": "wb-A1-5-1",
        "category": "routine",
        "situationEs": "Situación #1 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-5-2",
        "category": "social",
        "situationEs": "Situación #2 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Básico when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-5-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-5-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Básico when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-5-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-5-6",
        "category": "routine",
        "situationEs": "Situación #6 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Básico when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-5-7",
        "category": "social",
        "situationEs": "Situación #7 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-5-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Básico when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-5-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-5-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Básico when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-5-11",
        "category": "routine",
        "situationEs": "Situación #11 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-5-12",
        "category": "social",
        "situationEs": "Situación #12 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Básico when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-5-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-5-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Básico when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-5-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-5-16",
        "category": "routine",
        "situationEs": "Situación #16 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Básico when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-5-17",
        "category": "social",
        "situationEs": "Situación #17 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-5-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Básico when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-A1-5-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-A1-5-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Básico when you have a moment?",
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
        "id": "ml-lesson-a1-5-1",
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
        "id": "ml-lesson-a1-5-2",
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
        "id": "ml-lesson-a1-5-3",
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
