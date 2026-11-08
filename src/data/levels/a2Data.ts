import type { CourseLesson } from '../../types/curriculum';
import { A2_CONTENT } from '../curriculum/a2Content';

const BASE_A2_LESSONS: CourseLesson[] = [
  {
    "id": "lesson-a2-1",
    "level": "A2",
    "lessonNumber": 1,
    "title": "Past Simple Irregular & Preguntas con Did",
    "tagline": "Domina los 20 verbos irregulares de mayor impacto para relatar tu fin de semana y anécdotas",
    "grammarFocus": "Past Simple irregular (went, bought, saw, ate) y preguntas con Did",
    "practicalGoal": "Narrar con fluidez qué hiciste el fin de semana, qué compraste y responder entrevistas de trabajo sobre tu experiencia pasada.",
    "theory": {
      "title": "Past Simple: Verbos Irregulares y Auxiliar Did",
      "overviewEs": "A diferencia de los verbos regulares (-ed), los verbos irregulares cambian su raíz en oraciones afirmativas (buy ➔ bought, see ➔ saw). En oraciones negativas y preguntas, entra el auxiliar 'did / didn't' y el verbo principal vuelve obligatoriamente a su forma infinitiva base.",
      "grammarChart": {
        "title": "Past Simple Irregular",
        "structureFormula": "Affirmative: Irregular past | Negative: didn't + base | Question: Did + subject + base?",
        "rows": [
          {
            "subject": "I / You",
            "affirmative": "I bought a new laptop yesterday.",
            "negative": "You didn't tell me about the meeting.",
            "question": "Did you see that email?",
            "shortAnswer": "Yes, I did. / No, I didn't."
          },
          {
            "subject": "He / She / It",
            "affirmative": "She went to Chicago on business.",
            "negative": "He didn't bring his passport.",
            "question": "Did it cost a lot of money?",
            "shortAnswer": "Yes, it did. / No, it didn't."
          },
          {
            "subject": "We / They",
            "affirmative": "We ate at that new Mexican place.",
            "negative": "They didn't find the address.",
            "question": "Did they fly or drive?",
            "shortAnswer": "Yes, they did. / No, they didn't."
          }
        ],
        "usageRules": [
          {
            "ruleTitle": "Momento Determinado en el Pasado",
            "description": "Siempre que el periodo de tiempo esté cerrado.",
            "example": "I met the CEO last Friday."
          },
          {
            "ruleTitle": "Secuencia de Eventos Pasados",
            "description": "Para contar una historia paso a paso.",
            "example": "I woke up, drank coffee, and drove to work."
          },
          {
            "ruleTitle": "El Auxiliar Did absorbe el pasado",
            "description": "Nunca conjugues el verbo después de didn't o en preguntas con did.",
            "example": "Did you go? (NO: Did you went?)"
          }
        ]
      },
      "signalWords": [
        "yesterday",
        "last weekend",
        "two hours ago",
        "in 2022",
        "on my last vacation"
      ],
      "commonMistakes": [
        {
          "wrong": "Did you went to the store?",
          "correct": "Did you go to the store?",
          "explanation": "En preguntas con 'Did', el verbo principal vuelve a su forma base."
        },
        {
          "wrong": "I didn't bought anything",
          "correct": "I didn't buy anything",
          "explanation": "Tras 'didn't', el verbo principal nunca se conjuga en pasado."
        }
      ]
    },
    "vocabulary": [
      {
        "id": "v-a2-1-1",
        "word": "bought",
        "phonetic": "/bɔːt/",
        "partOfSpeech": "verb past",
        "meaningEs": "compré / compró",
        "exampleEn": "I bought some groceries on my way home.",
        "exampleEs": "Compré víveres de camino a casa."
      },
      {
        "id": "v-a2-1-2",
        "word": "went",
        "phonetic": "/wɛnt/",
        "partOfSpeech": "verb past",
        "meaningEs": "fui / fue / fuimos",
        "exampleEn": "We went to a rooftop café on Saturday.",
        "exampleEs": "Fuimos a un café en la terraza el sábado."
      },
      {
        "id": "v-a2-1-3",
        "word": "saw",
        "phonetic": "/sɔː/",
        "partOfSpeech": "verb past",
        "meaningEs": "vi / vio",
        "exampleEn": "I saw an interesting documentary last night.",
        "exampleEs": "Vi un documental interesante anoche."
      },
      {
        "id": "v-a2-1-4",
        "word": "ate",
        "phonetic": "/eɪt/",
        "partOfSpeech": "verb past",
        "meaningEs": "comí / comió",
        "exampleEn": "We ate delicious Italian pasta.",
        "exampleEs": "Comimos deliciosa pasta italiana."
      },
      {
        "id": "v-a2-1-5",
        "word": "drove",
        "phonetic": "/droʊv/",
        "partOfSpeech": "verb past",
        "meaningEs": "conduje / manejó",
        "exampleEn": "He drove all the way to Dallas.",
        "exampleEs": "Condujo todo el camino hasta Dallas."
      },
      {
        "id": "v-a2-1-6",
        "word": "flew",
        "phonetic": "/fluː/",
        "partOfSpeech": "verb past",
        "meaningEs": "volé / voló en avión",
        "exampleEn": "They flew to Miami for the weekend.",
        "exampleEs": "Volaron a Miami el fin de semana."
      },
      {
        "id": "v-a2-1-7",
        "word": "brought",
        "phonetic": "/brɔːt/",
        "partOfSpeech": "verb past",
        "meaningEs": "traje / trajo",
        "exampleEn": "She brought some homemade cookies.",
        "exampleEs": "Trajo galletas caseras."
      },
      {
        "id": "v-a2-1-8",
        "word": "forgot",
        "phonetic": "/fərˈɡɒt/",
        "partOfSpeech": "verb past",
        "meaningEs": "olvidé / olvidó",
        "exampleEn": "I forgot my apartment keys inside.",
        "exampleEs": "Olvidé las llaves del departamento adentro."
      },
      {
        "id": "v-a2-1-9",
        "word": "chose",
        "phonetic": "/tʃoʊz/",
        "partOfSpeech": "verb past",
        "meaningEs": "elegí / eligió",
        "exampleEn": "We chose the vegetarian option.",
        "exampleEs": "Elegimos la opción vegetariana."
      },
      {
        "id": "v-a2-1-10",
        "word": "spoke",
        "phonetic": "/spoʊk/",
        "partOfSpeech": "verb past",
        "meaningEs": "hablé / habló",
        "exampleEn": "I spoke with the hiring manager on Tuesday.",
        "exampleEs": "Hablé con la gerente de contratación el martes."
      },
      {
        "id": "v-a2-1-11",
        "word": "wrote",
        "phonetic": "/roʊt/",
        "partOfSpeech": "verb past",
        "meaningEs": "escribí / escribió",
        "exampleEn": "She wrote a detailed summary of the meeting.",
        "exampleEs": "Escribió un resumen detallado de la junta."
      },
      {
        "id": "v-a2-1-12",
        "word": "understood",
        "phonetic": "/ˌʌndərˈstʊd/",
        "partOfSpeech": "verb past",
        "meaningEs": "entendí / comprendió",
        "exampleEn": "I understood all the technical instructions.",
        "exampleEs": "Entendí todas las instrucciones técnicas."
      },
      {
        "id": "v-a2-1-13",
        "word": "met",
        "phonetic": "/mɛt/",
        "partOfSpeech": "verb past",
        "meaningEs": "conocí a / me reuní con",
        "exampleEn": "I met my business partner in 2021.",
        "exampleEs": "Conocí a mi socio de negocios en 2021."
      },
      {
        "id": "v-a2-1-14",
        "word": "lost",
        "phonetic": "/lɒst/",
        "partOfSpeech": "verb past",
        "meaningEs": "perdí / perdió",
        "exampleEn": "He lost his wallet on the subway.",
        "exampleEs": "Perdió su billetera en el metro."
      },
      {
        "id": "v-a2-1-15",
        "word": "paid",
        "phonetic": "/peɪd/",
        "partOfSpeech": "verb past",
        "meaningEs": "pagué / pagó",
        "exampleEn": "We paid the bill by credit card.",
        "exampleEs": "Pagamos la cuenta con tarjeta de crédito."
      },
      {
        "id": "v-a2-1-16",
        "word": "slept",
        "phonetic": "/slɛpt/",
        "partOfSpeech": "verb past",
        "meaningEs": "dormí / durmió",
        "exampleEn": "I slept like a baby for eight hours.",
        "exampleEs": "Dormí como un bebé ocho horas."
      },
      {
        "id": "v-a2-1-17",
        "word": "heard",
        "phonetic": "/hɜːrd/",
        "partOfSpeech": "verb past",
        "meaningEs": "escuché / oyó",
        "exampleEn": "I heard the good news on the radio.",
        "exampleEs": "Escuché las buenas noticias en la radio."
      },
      {
        "id": "v-a2-1-18",
        "word": "kept",
        "phonetic": "/kɛpt/",
        "partOfSpeech": "verb past",
        "meaningEs": "mantuve / guardé",
        "exampleEn": "I kept all the invoices in a folder.",
        "exampleEs": "Guardé todas las facturas en una carpeta."
      },
      {
        "id": "v-a2-1-19",
        "word": "spent",
        "phonetic": "/spɛnt/",
        "partOfSpeech": "verb past",
        "meaningEs": "gasté dinero / pasé tiempo",
        "exampleEn": "I spent fifty dollars on dinner.",
        "exampleEs": "Gasté cincuenta dólares en la cena."
      },
      {
        "id": "v-a2-1-20",
        "word": "gave",
        "phonetic": "/ɡeɪv/",
        "partOfSpeech": "verb past",
        "meaningEs": "di / dio",
        "exampleEn": "My mentor gave me great advice.",
        "exampleEs": "Mi mentor me dio un gran consejo."
      }
    ],
    "coreChunks": [
      {
        "id": "c-a2-1-1",
        "chunk": "Out of the blue, I ran into...",
        "meaningEs": "De la nada / de repente me topé con...",
        "usageContext": "Contar encuentros inesperados",
        "exampleSentence": "Out of the blue, I ran into an old friend at the train station."
      },
      {
        "id": "c-a2-1-2",
        "chunk": "To make a long story short...",
        "meaningEs": "Para no hacerte el cuento largo...",
        "usageContext": "Resumir una anécdota pasada",
        "exampleSentence": "To make a long story short, we ended up missing the flight."
      },
      {
        "id": "c-a2-1-3",
        "chunk": "How did it go?",
        "meaningEs": "¿Cómo te fue? / ¿Cómo salió todo?",
        "usageContext": "Preguntar por una cita previa",
        "exampleSentence": "I know you had your interview yesterday; how did it go?"
      },
      {
        "id": "c-a2-1-4",
        "chunk": "It turned out great!",
        "meaningEs": "¡Salió genial / resultó excelente!",
        "usageContext": "Concluir el resultado de un evento",
        "exampleSentence": "We were nervous, but the presentation turned out great!"
      },
      {
        "id": "c-a2-1-5",
        "chunk": "I had a blast",
        "meaningEs": "Me la pasé increíble / genial",
        "usageContext": "Describir fiestas o viajes",
        "exampleSentence": "The concert was fantastic; I had a blast!"
      },
      {
        "id": "c-a2-1-6",
        "chunk": "It took longer than expected",
        "meaningEs": "Tomó más tiempo de lo esperado",
        "usageContext": "Explicar retrasos o trámites",
        "exampleSentence": "The commute took longer than expected due to construction."
      },
      {
        "id": "c-a2-1-7",
        "chunk": "Did you get a chance to...?",
        "meaningEs": "¿Tuviste oportunidad de...?",
        "usageContext": "Preguntar si alguien pudo hacer algo",
        "exampleSentence": "Did you get a chance to look over the proposal?"
      },
      {
        "id": "c-a2-1-8",
        "chunk": "I couldn't help but laugh",
        "meaningEs": "No pude evitar reírme",
        "usageContext": "Situaciones cómicas pasadas",
        "exampleSentence": "When the dog stole the sandwich, I couldn't help but laugh."
      },
      {
        "id": "c-a2-1-9",
        "chunk": "As soon as I arrived, I...",
        "meaningEs": "Tan pronto como llegué...",
        "usageContext": "Secuencias inmediatas",
        "exampleSentence": "As soon as I arrived, I called my family."
      },
      {
        "id": "c-a2-1-10",
        "chunk": "I didn't see that coming",
        "meaningEs": "No vi venir eso / no me lo esperaba",
        "usageContext": "Sorpresas en historias pasadas",
        "exampleSentence": "They offered me a promotion; I honestly didn't see that coming."
      }
    ],
    "listenings": [
      {
        "id": "ml-undefined-1",
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
        "id": "ml-undefined-2",
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
        "id": "ml-undefined-3",
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
    ],
    "workbook": [
      {
        "id": "wb-undefined-1",
        "category": "routine",
        "situationEs": "Situación #1 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-undefined-2",
        "category": "social",
        "situationEs": "Situación #2 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas con Did when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-undefined-3",
        "category": "problem_solving",
        "situationEs": "Situación #3 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-undefined-4",
        "category": "asking_help",
        "situationEs": "Situación #4 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas con Did when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-undefined-5",
        "category": "opinion",
        "situationEs": "Situación #5 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-undefined-6",
        "category": "routine",
        "situationEs": "Situación #6 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas con Did when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-undefined-7",
        "category": "social",
        "situationEs": "Situación #7 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-undefined-8",
        "category": "problem_solving",
        "situationEs": "Situación #8 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas con Did when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-undefined-9",
        "category": "asking_help",
        "situationEs": "Situación #9 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-undefined-10",
        "category": "opinion",
        "situationEs": "Situación #10 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas con Did when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-undefined-11",
        "category": "routine",
        "situationEs": "Situación #11 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-undefined-12",
        "category": "social",
        "situationEs": "Situación #12 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas con Did when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-undefined-13",
        "category": "problem_solving",
        "situationEs": "Situación #13 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-undefined-14",
        "category": "asking_help",
        "situationEs": "Situación #14 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas con Did when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-undefined-15",
        "category": "opinion",
        "situationEs": "Situación #15 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-undefined-16",
        "category": "routine",
        "situationEs": "Situación #16 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas con Did when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-undefined-17",
        "category": "social",
        "situationEs": "Situación #17 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-undefined-18",
        "category": "problem_solving",
        "situationEs": "Situación #18 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas con Did when you have a moment?",
        "guidanceTipEs": "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
        "recommendedAnswers": [
          "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
          "I'd rather handle this first thing tomorrow morning, if that works on your end.",
          "Let me double-check the details and I'll confirm with you shortly."
        ],
        "pedagogicalNote": "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
      },
      {
        "id": "wb-undefined-19",
        "category": "asking_help",
        "situationEs": "Situación #19 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
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
        "id": "wb-undefined-20",
        "category": "opinion",
        "situationEs": "Situación #20 de Past Simple Irregular & Preguntas con Did: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.",
        "promptEn": "Could you give me your update on Past Simple Irregular & Preguntas con Did when you have a moment?",
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
        "id": "v-a2-2-1",
        "word": "stroll",
        "phonetic": "/stroʊl/",
        "partOfSpeech": "verb",
        "meaningEs": "pasear con calma",
        "exampleEn": "I was strolling in the park when I saw her.",
        "exampleEs": "Estaba paseando en el parque cuando la vi."
      },
      {
        "id": "v-a2-2-2",
        "word": "spill",
        "phonetic": "/spɪl/",
        "partOfSpeech": "verb",
        "meaningEs": "derramar un líquido",
        "exampleEn": "I spilled coffee on my keyboard while typing.",
        "exampleEs": "Derramé café en mi teclado mientras tecleaba."
      },
      {
        "id": "v-a2-2-3",
        "word": "drop",
        "phonetic": "/drɒp/",
        "partOfSpeech": "verb",
        "meaningEs": "dejar caer un objeto",
        "exampleEn": "He dropped his glass while carrying the tray.",
        "exampleEs": "Dejó caer su vaso mientras llevaba la bandeja."
      },
      {
        "id": "v-a2-2-4",
        "word": "ring",
        "phonetic": "/rɪŋ/",
        "partOfSpeech": "verb",
        "meaningEs": "sonar el teléfono",
        "exampleEn": "The phone rang while I was taking a shower.",
        "exampleEs": "El teléfono sonó mientras me duchaba."
      },
      {
        "id": "v-a2-2-5",
        "word": "cross",
        "phonetic": "/krɒs/",
        "partOfSpeech": "verb",
        "meaningEs": "cruzar la calle",
        "exampleEn": "She was crossing the street when the light changed.",
        "exampleEs": "Cruzaba la calle cuando cambió la luz."
      },
      {
        "id": "v-a2-2-6",
        "word": "slip",
        "phonetic": "/slɪp/",
        "partOfSpeech": "verb",
        "meaningEs": "resbalar en el suelo",
        "exampleEn": "I slipped on the wet floor while running.",
        "exampleEs": "Me resbalé en el piso mojado mientras corría."
      },
      {
        "id": "v-a2-2-7",
        "word": "crash",
        "phonetic": "/kræʃ/",
        "partOfSpeech": "verb",
        "meaningEs": "chocar / fallar el sistema",
        "exampleEn": "The app crashed while I was saving the file.",
        "exampleEs": "La app se cerró mientras guardaba el archivo."
      },
      {
        "id": "v-a2-2-8",
        "word": "overhear",
        "phonetic": "/ˌoʊvərˈhɪər/",
        "partOfSpeech": "verb",
        "meaningEs": "escuchar por casualidad",
        "exampleEn": "I overheard them talking about the new policy.",
        "exampleEs": "Los escuché por casualidad hablar de la norma."
      },
      {
        "id": "v-a2-2-9",
        "word": "look through",
        "phonetic": "/lʊk θruː/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "hojear / revisar papeles",
        "exampleEn": "I was looking through old photos all afternoon.",
        "exampleEs": "Estuve hojeando fotos viejas toda la tarde."
      },
      {
        "id": "v-a2-2-10",
        "word": "wait in line",
        "phonetic": "/weɪt ɪn laɪn/",
        "partOfSpeech": "phrase",
        "meaningEs": "hacer fila esperando",
        "exampleEn": "We were waiting in line when the doors opened.",
        "exampleEs": "Hacíamos fila cuando abrieron las puertas."
      },
      {
        "id": "v-a2-2-11",
        "word": "power outage",
        "phonetic": "/ˈpaʊər ˈaʊtɪdʒ/",
        "partOfSpeech": "noun",
        "meaningEs": "corte de energía eléctrica",
        "exampleEn": "There was a power outage while we were cooking.",
        "exampleEs": "Hubo un corte de luz mientras cocinábamos."
      },
      {
        "id": "v-a2-2-12",
        "word": "distraction",
        "phonetic": "/dɪˈstrækʃən/",
        "partOfSpeech": "noun",
        "meaningEs": "distracción",
        "exampleEn": "I had too many distractions while working.",
        "exampleEs": "Tuve muchas distracciones mientras trabajaba."
      },
      {
        "id": "v-a2-2-13",
        "word": "puncture",
        "phonetic": "/ˈpʌŋktʃər/",
        "partOfSpeech": "noun/verb",
        "meaningEs": "pinchazo de llanta / ponchadura",
        "exampleEn": "I got a puncture while driving on the highway.",
        "exampleEs": "Se me ponchó una llanta en la autopista."
      },
      {
        "id": "v-a2-2-14",
        "word": "sudden",
        "phonetic": "/ˈsʌdən/",
        "partOfSpeech": "adjective",
        "meaningEs": "repentino / súbito",
        "exampleEn": "There was a sudden noise while I was sleeping.",
        "exampleEs": "Hubo un ruido repentino mientras dormía."
      },
      {
        "id": "v-a2-2-15",
        "word": "lightning",
        "phonetic": "/ˈlaɪtnɪŋ/",
        "partOfSpeech": "noun",
        "meaningEs": "relámpago",
        "exampleEn": "Lightning struck while we were driving home.",
        "exampleEs": "Cayó un rayo mientras manejábamos a casa."
      },
      {
        "id": "v-a2-2-16",
        "word": "background music",
        "phonetic": "/ˈbækɡraʊnd/",
        "partOfSpeech": "noun",
        "meaningEs": "música de fondo",
        "exampleEn": "Soft jazz was playing in the background.",
        "exampleEs": "Sonaba jazz suave de fondo."
      },
      {
        "id": "v-a2-2-17",
        "word": "interrupt",
        "phonetic": "/ˌɪntəˈrʌpt/",
        "partOfSpeech": "verb",
        "meaningEs": "interrumpir una acción",
        "exampleEn": "He interrupted me while I was explaining.",
        "exampleEs": "Me interrumpió mientras explicaba."
      },
      {
        "id": "v-a2-2-18",
        "word": "wander",
        "phonetic": "/ˈwɒndər/",
        "partOfSpeech": "verb",
        "meaningEs": "deambular / pasear sin rumbo",
        "exampleEn": "We were wandering around the old town.",
        "exampleEs": "Deambulábamos por el casco antiguo."
      },
      {
        "id": "v-a2-2-19",
        "word": "snooze",
        "phonetic": "/snuːz/",
        "partOfSpeech": "verb",
        "meaningEs": "dormitar / posponer alarma",
        "exampleEn": "I was snoozing when my mom knocked on the door.",
        "exampleEs": "Dormitaba cuando mi mamá tocó la puerta."
      },
      {
        "id": "v-a2-2-20",
        "word": "scramble",
        "phonetic": "/ˈskræmbəl/",
        "partOfSpeech": "verb",
        "meaningEs": "moverse apresurado / resolver rápido",
        "exampleEn": "We were scrambling to find the ticket.",
        "exampleEs": "Buscábamos el boleto apresurados."
      }
    ],
    "coreChunks": [
      {
        "id": "c-a2-2-1",
        "chunk": "Just as I was about to...",
        "meaningEs": "Justo cuando estaba a punto de...",
        "usageContext": "Interrupciones milimétricas",
        "exampleSentence": "Just as I was about to leave, the client called."
      },
      {
        "id": "c-a2-2-2",
        "chunk": "While you're at it...",
        "meaningEs": "Ya que estás en eso / de paso...",
        "usageContext": "Aprovechar la acción de otro",
        "exampleSentence": "Are you going to the kitchen? While you're at it, can you bring water?"
      },
      {
        "id": "c-a2-2-3",
        "chunk": "I was under the impression that...",
        "meaningEs": "Tenía la impresión de que...",
        "usageContext": "Corregir un malentendido cortésmente",
        "exampleSentence": "I was under the impression that we had until Friday."
      },
      {
        "id": "c-a2-2-4",
        "chunk": "In the blink of an eye",
        "meaningEs": "En un abrir y cerrar de ojos",
        "usageContext": "Acciones repentinas pasadas",
        "exampleSentence": "In the blink of an eye, the rain flooded the driveway."
      },
      {
        "id": "c-a2-2-5",
        "chunk": "It was raining cats and dogs",
        "meaningEs": "Llovía a cántaros",
        "usageContext": "Describir tormentas pasadas",
        "exampleSentence": "We were driving home and it was raining cats and dogs."
      },
      {
        "id": "c-a2-2-6",
        "chunk": "I lost track of time",
        "meaningEs": "Perdí la noción del tiempo",
        "usageContext": "Explicar por qué te demoraste",
        "exampleSentence": "I was browsing online and I completely lost track of time."
      },
      {
        "id": "c-a2-2-7",
        "chunk": "Something came up",
        "meaningEs": "Surgió un imprevisto",
        "usageContext": "Disculpa estándar elegante",
        "exampleSentence": "I was heading out, but something came up at the office."
      },
      {
        "id": "c-a2-2-8",
        "chunk": "Out of nowhere...",
        "meaningEs": "De la nada...",
        "usageContext": "Apariciones repentinas",
        "exampleSentence": "I was cycling and, out of nowhere, a dog crossed the path."
      },
      {
        "id": "c-a2-2-9",
        "chunk": "Were you by any chance...?",
        "meaningEs": "¿Estuviste por casualidad...?",
        "usageContext": "Preguntar con suavidad",
        "exampleSentence": "Were you by any chance trying to reach me earlier?"
      },
      {
        "id": "c-a2-2-10",
        "chunk": "I was wondering if...",
        "meaningEs": "Me preguntaba si...",
        "usageContext": "Fórmula de máxima cortesía",
        "exampleSentence": "I was wondering if you had five minutes to look at this."
      }
    ],
    "listenings": [
      {
        "id": "ml-undefined-1",
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
        "id": "ml-undefined-2",
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
        "id": "ml-undefined-3",
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
    ],
    "workbook": [
      {
        "id": "wb-undefined-1",
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
        "id": "wb-undefined-2",
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
        "id": "wb-undefined-3",
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
        "id": "wb-undefined-4",
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
        "id": "wb-undefined-5",
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
        "id": "wb-undefined-6",
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
        "id": "wb-undefined-7",
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
        "id": "wb-undefined-8",
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
        "id": "wb-undefined-9",
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
        "id": "wb-undefined-10",
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
        "id": "wb-undefined-11",
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
        "id": "wb-undefined-12",
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
        "id": "wb-undefined-13",
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
        "id": "wb-undefined-14",
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
        "id": "wb-undefined-15",
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
        "id": "wb-undefined-16",
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
        "id": "wb-undefined-17",
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
        "id": "wb-undefined-18",
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
        "id": "wb-undefined-19",
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
        "id": "wb-undefined-20",
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
        "id": "v-a2-3-1",
        "word": "appointment",
        "phonetic": "/əˈpɔɪntmənt/",
        "partOfSpeech": "noun",
        "meaningEs": "cita médica o profesional",
        "exampleEn": "I have a dentist appointment tomorrow at 10.",
        "exampleEs": "Tengo cita con el dentista mañana."
      },
      {
        "id": "v-a2-3-2",
        "word": "itinerary",
        "phonetic": "/aɪˈtɪnərɛri/",
        "partOfSpeech": "noun",
        "meaningEs": "itinerario de viaje",
        "exampleEn": "Here is our weekend trip itinerary.",
        "exampleEs": "Aquí está el itinerario de viaje."
      },
      {
        "id": "v-a2-3-3",
        "word": "flight",
        "phonetic": "/flaɪt/",
        "partOfSpeech": "noun",
        "meaningEs": "vuelo de avión",
        "exampleEn": "Our flight departs at 6:45 AM.",
        "exampleEs": "Nuestro vuelo sale a las 6:45 AM."
      },
      {
        "id": "v-a2-3-4",
        "word": "reservation",
        "phonetic": "/ˌrɛzərˈveɪʃən/",
        "partOfSpeech": "noun",
        "meaningEs": "reserva de hotel o mesa",
        "exampleEn": "I am going to make a dinner reservation.",
        "exampleEs": "Voy a hacer una reserva para cenar."
      },
      {
        "id": "v-a2-3-5",
        "word": "reschedule",
        "phonetic": "/riːˈskɛdʒuːl/",
        "partOfSpeech": "verb",
        "meaningEs": "reprogramar una cita",
        "exampleEn": "Could we reschedule our call for Friday?",
        "exampleEs": "¿Podemos reprogramar la llamada para el viernes?"
      },
      {
        "id": "v-a2-3-6",
        "word": "postpone",
        "phonetic": "/poʊstˈpoʊn/",
        "partOfSpeech": "verb",
        "meaningEs": "posponer para después",
        "exampleEn": "They decided to postpone the launch date.",
        "exampleEs": "Decidieron posponer la fecha."
      },
      {
        "id": "v-a2-3-7",
        "word": "cancel",
        "phonetic": "/ˈkænsəl/",
        "partOfSpeech": "verb",
        "meaningEs": "cancelar definitivamente",
        "exampleEn": "I won't cancel my subscription just yet.",
        "exampleEs": "No cancelaré mi suscripción aún."
      },
      {
        "id": "v-a2-3-8",
        "word": "host",
        "phonetic": "/hoʊst/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "organizar / ser anfitrión",
        "exampleEn": "We are hosting a dinner party next Friday.",
        "exampleEs": "Organizaremos una cena el próximo viernes."
      },
      {
        "id": "v-a2-3-9",
        "word": "attend",
        "phonetic": "/əˈtɛnd/",
        "partOfSpeech": "verb",
        "meaningEs": "asistir a un evento",
        "exampleEn": "Are you going to attend the summit?",
        "exampleEs": "¿Vas a asistir a la cumbre?"
      },
      {
        "id": "v-a2-3-10",
        "word": "promise",
        "phonetic": "/ˈprɒmɪs/",
        "partOfSpeech": "verb/noun",
        "meaningEs": "prometer / promesa",
        "exampleEn": "I promise I will return your book on Monday.",
        "exampleEs": "Prometo que te devolveré el libro el lunes."
      },
      {
        "id": "v-a2-3-11",
        "word": "predict",
        "phonetic": "/prɪˈdɪkt/",
        "partOfSpeech": "verb",
        "meaningEs": "predecir con base en indicios",
        "exampleEn": "Meteorologists predict it will rain all week.",
        "exampleEs": "Predicen que lloverá toda la semana."
      },
      {
        "id": "v-a2-3-12",
        "word": "look at those clouds",
        "phonetic": "/klaʊdz/",
        "partOfSpeech": "phrase",
        "meaningEs": "mira esas nubes (evidencia)",
        "exampleEn": "Look at those dark clouds! It is going to rain.",
        "exampleEs": "¡Mira esas nubes! Va a llover."
      },
      {
        "id": "v-a2-3-13",
        "word": "spontaneous",
        "phonetic": "/spɒnˈteɪniəs/",
        "partOfSpeech": "adjective",
        "meaningEs": "espontáneo",
        "exampleEn": "Let's be spontaneous and take a road trip!",
        "exampleEs": "¡Seamos espontáneos y viajemos!"
      },
      {
        "id": "v-a2-3-14",
        "word": "available",
        "phonetic": "/əˈveɪləbəl/",
        "partOfSpeech": "adjective",
        "meaningEs": "disponible de horario",
        "exampleEn": "Will you be available tomorrow morning?",
        "exampleEs": "¿Estarás disponible mañana en la mañana?"
      },
      {
        "id": "v-a2-3-15",
        "word": "convenient",
        "phonetic": "/kənˈviːniənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "oportuno / cómodo",
        "exampleEn": "Is Wednesday afternoon convenient for you?",
        "exampleEs": "¿Te resulta oportuno el miércoles?"
      },
      {
        "id": "v-a2-3-16",
        "word": "tentative",
        "phonetic": "/ˈtɛntətɪv/",
        "partOfSpeech": "adjective",
        "meaningEs": "tentativo / no definitivo",
        "exampleEn": "We have a tentative date for the conference.",
        "exampleEs": "Tenemos una fecha tentativa."
      },
      {
        "id": "v-a2-3-17",
        "word": "confirm",
        "phonetic": "/kənˈfɜːrm/",
        "partOfSpeech": "verb",
        "meaningEs": "confirmar asistencia o datos",
        "exampleEn": "I will confirm the venue by tomorrow noon.",
        "exampleEs": "Confirmaré el lugar mañana a mediodía."
      },
      {
        "id": "v-a2-3-18",
        "word": "venue",
        "phonetic": "/ˈvɛnjuː/",
        "partOfSpeech": "noun",
        "meaningEs": "lugar de un evento o reunión",
        "exampleEn": "The wedding venue is going to be in the valley.",
        "exampleEs": "El lugar de la boda será en el valle."
      },
      {
        "id": "v-a2-3-19",
        "word": "deadline",
        "phonetic": "/ˈdɛdlaɪn/",
        "partOfSpeech": "noun",
        "meaningEs": "fecha de entrega límite",
        "exampleEn": "The final deadline is next Tuesday.",
        "exampleEs": "La fecha límite es el próximo martes."
      },
      {
        "id": "v-a2-3-20",
        "word": "kick off",
        "phonetic": "/kɪk ɔːf/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "arrancar / dar inicio",
        "exampleEn": "The workshop kicks off at 9 sharp.",
        "exampleEs": "El taller arranca a las 9 en punto."
      }
    ],
    "coreChunks": [
      {
        "id": "c-a2-3-1",
        "chunk": "I'll take care of it right away",
        "meaningEs": "Me encargo de eso de inmediato",
        "usageContext": "Ofrecerse espontáneamente a resolver",
        "exampleSentence": "Don't worry about the invoice; I'll take care of it right away."
      },
      {
        "id": "c-a2-3-2",
        "chunk": "Are you up to anything this weekend?",
        "meaningEs": "¿Tienes planes este fin de semana?",
        "usageContext": "Preguntar con máxima naturalidad",
        "exampleSentence": "Hey Chris, are you up to anything this coming weekend?"
      },
      {
        "id": "c-a2-3-3",
        "chunk": "I'm planning on...",
        "meaningEs": "Tengo planeado...",
        "usageContext": "Expresar intenciones",
        "exampleSentence": "I'm planning on taking a three-day weekend trip."
      },
      {
        "id": "c-a2-3-4",
        "chunk": "I'll keep you posted",
        "meaningEs": "Te mantengo al tanto / informado",
        "usageContext": "Compromiso de actualización",
        "exampleSentence": "As soon as I hear from the supplier, I'll keep you posted."
      },
      {
        "id": "c-a2-3-5",
        "chunk": "Let me know what works for you",
        "meaningEs": "Avísame qué horario te queda mejor",
        "usageContext": "Agendar citas cordiales",
        "exampleSentence": "I'm free on Tuesday or Thursday; let me know what works for you."
      },
      {
        "id": "c-a2-3-6",
        "chunk": "I won't take much of your time",
        "meaningEs": "No te quitaré mucho tiempo",
        "usageContext": "Pedir una reunión breve",
        "exampleSentence": "Could we jump on a call? I won't take much of your time."
      },
      {
        "id": "c-a2-3-7",
        "chunk": "I'm about to...",
        "meaningEs": "Estoy a punto de...",
        "usageContext": "Acciones inminentes",
        "exampleSentence": "I'm about to leave the house; see you in twenty minutes!"
      },
      {
        "id": "c-a2-3-8",
        "chunk": "We'll cross that bridge when we come to it",
        "meaningEs": "Ya nos ocuparemos de eso cuando toque",
        "usageContext": "No preocuparse antes de tiempo",
        "exampleSentence": "What if it rains? Well, we'll cross that bridge when we come to it."
      },
      {
        "id": "c-a2-3-9",
        "chunk": "Count me in!",
        "meaningEs": "¡Cuenta conmigo / me apunto!",
        "usageContext": "Aceptar invitaciones con entusiasmo",
        "exampleSentence": "You're going to the beach? Count me in!"
      },
      {
        "id": "c-a2-3-10",
        "chunk": "I'll be right back",
        "meaningEs": "Ya vuelvo / regreso enseguida",
        "usageContext": "Pausas breves",
        "exampleSentence": "Wait for me here, I'll be right back with some water."
      }
    ],
    "listenings": [
      {
        "id": "ml-undefined-1",
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
        "id": "ml-undefined-2",
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
        "id": "ml-undefined-3",
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
    ],
    "workbook": [
      {
        "id": "wb-undefined-1",
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
        "id": "wb-undefined-2",
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
        "id": "wb-undefined-3",
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
        "id": "wb-undefined-4",
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
        "id": "wb-undefined-5",
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
        "id": "wb-undefined-6",
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
        "id": "wb-undefined-7",
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
        "id": "wb-undefined-8",
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
        "id": "wb-undefined-9",
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
        "id": "wb-undefined-10",
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
        "id": "wb-undefined-11",
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
        "id": "wb-undefined-12",
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
        "id": "wb-undefined-13",
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
        "id": "wb-undefined-14",
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
        "id": "wb-undefined-15",
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
        "id": "wb-undefined-16",
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
        "id": "wb-undefined-17",
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
        "id": "wb-undefined-18",
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
        "id": "wb-undefined-19",
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
        "id": "wb-undefined-20",
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
        "id": "v-a2-4-1",
        "word": "fluent in",
        "phonetic": "/ˈfluːənt/",
        "partOfSpeech": "adjective",
        "meaningEs": "fluido en un idioma",
        "exampleEn": "She is completely fluent in French and Spanish.",
        "exampleEs": "Ella es fluida en francés y español."
      },
      {
        "id": "v-a2-4-2",
        "word": "permission",
        "phonetic": "/pərˈmɪʃən/",
        "partOfSpeech": "noun",
        "meaningEs": "permiso formal",
        "exampleEn": "You need written permission to film here.",
        "exampleEs": "Necesitas permiso por escrito para filmar."
      },
      {
        "id": "v-a2-4-3",
        "word": "requirement",
        "phonetic": "/rɪˈkwaɪərmənt/",
        "partOfSpeech": "noun",
        "meaningEs": "requisito obligatorio",
        "exampleEn": "A valid passport is an essential requirement.",
        "exampleEs": "Un pasaporte vigente es un requisito."
      },
      {
        "id": "v-a2-4-4",
        "word": "prohibited",
        "phonetic": "/proʊˈhɪbɪtɪd/",
        "partOfSpeech": "adjective",
        "meaningEs": "prohibido por ley o norma",
        "exampleEn": "Smoking is strictly prohibited on the premises.",
        "exampleEs": "Está prohibido fumar en las instalaciones."
      },
      {
        "id": "v-a2-4-5",
        "word": "mandatory",
        "phonetic": "/ˈmændətɔːri/",
        "partOfSpeech": "adjective",
        "meaningEs": "obligatorio",
        "exampleEn": "Attendance at the safety briefing is mandatory.",
        "exampleEs": "La asistencia a la charla de seguridad es obligatoria."
      },
      {
        "id": "v-a2-4-6",
        "word": "optional",
        "phonetic": "/ˈɒpʃənəl/",
        "partOfSpeech": "adjective",
        "meaningEs": "opcional / voluntario",
        "exampleEn": "The final survey is completely optional.",
        "exampleEs": "La encuesta final es opcional."
      },
      {
        "id": "v-a2-4-7",
        "word": "capable of",
        "phonetic": "/ˈkeɪpəbəl əv/",
        "partOfSpeech": "adjective",
        "meaningEs": "capaz de hacer algo",
        "exampleEn": "Our team is capable of handling big challenges.",
        "exampleEs": "Nuestro equipo es capaz de manejar retos."
      },
      {
        "id": "v-a2-4-8",
        "word": "regulations",
        "phonetic": "/ˌrɛɡjʊˈleɪʃənz/",
        "partOfSpeech": "noun",
        "meaningEs": "normativas / reglamento",
        "exampleEn": "We must comply with local safety regulations.",
        "exampleEs": "Debemos cumplir con las normas de seguridad."
      },
      {
        "id": "v-a2-4-9",
        "word": "dress code",
        "phonetic": "/drɛs koʊd/",
        "partOfSpeech": "noun",
        "meaningEs": "código de vestimenta",
        "exampleEn": "The office has a business casual dress code.",
        "exampleEs": "La oficina tiene código casual de negocios."
      },
      {
        "id": "v-a2-4-10",
        "word": "policy",
        "phonetic": "/ˈpɒlɪsi/",
        "partOfSpeech": "noun",
        "meaningEs": "política de empresa",
        "exampleEn": "It is company policy not to share passwords.",
        "exampleEs": "Es política de empresa no compartir claves."
      },
      {
        "id": "v-a2-4-11",
        "word": "skill",
        "phonetic": "/skɪl/",
        "partOfSpeech": "noun",
        "meaningEs": "habilidad técnica adquirida",
        "exampleEn": "Negotiation is a crucial professional skill.",
        "exampleEs": "La negociación es una habilidad clave."
      },
      {
        "id": "v-a2-4-12",
        "word": "expert in",
        "phonetic": "/ˈɛkspɜːrt/",
        "partOfSpeech": "noun/adjective",
        "meaningEs": "experto en una materia",
        "exampleEn": "He is an expert in cloud database systems.",
        "exampleEs": "Es un experto en sistemas de bases en la nube."
      },
      {
        "id": "v-a2-4-13",
        "word": "badge",
        "phonetic": "/bædʒ/",
        "partOfSpeech": "noun",
        "meaningEs": "credencial / carnet de acceso",
        "exampleEn": "Employees have to display their badge at all times.",
        "exampleEs": "Los empleados deben mostrar su credencial."
      },
      {
        "id": "v-a2-4-14",
        "word": "punctuality",
        "phonetic": "/ˌpʌŋktʃuˈæləti/",
        "partOfSpeech": "noun",
        "meaningEs": "puntualidad",
        "exampleEn": "Punctuality is strictly required for morning syncs.",
        "exampleEs": "Se exige puntualidad para los syncs matutinos."
      },
      {
        "id": "v-a2-4-15",
        "word": "overtime",
        "phonetic": "/ˈoʊvərˌtaɪm/",
        "partOfSpeech": "noun",
        "meaningEs": "horas extras de trabajo",
        "exampleEn": "Do we have to work overtime this weekend?",
        "exampleEs": "¿Tenemos que trabajar horas extras este fin de semana?"
      },
      {
        "id": "v-a2-4-16",
        "word": "shift",
        "phonetic": "/ʃɪft/",
        "partOfSpeech": "noun",
        "meaningEs": "turno laboral",
        "exampleEn": "I work the afternoon shift on Wednesdays.",
        "exampleEs": "Trabajo el turno vespertino los miércoles."
      },
      {
        "id": "v-a2-4-17",
        "word": "legal",
        "phonetic": "/ˈliːɡəl/",
        "partOfSpeech": "adjective",
        "meaningEs": "legal / reglamentario",
        "exampleEn": "Is it legal to park here overnight?",
        "exampleEs": "¿Es legal estacionar aquí durante la noche?"
      },
      {
        "id": "v-a2-4-18",
        "word": "penalty",
        "phonetic": "/ˈpɛnəlti/",
        "partOfSpeech": "noun",
        "meaningEs": "multa o sanción",
        "exampleEn": "There is a monetary penalty for late cancellations.",
        "exampleEs": "Hay una multa por cancelaciones tardías."
      },
      {
        "id": "v-a2-4-19",
        "word": "allow",
        "phonetic": "/əˈlaʊ/",
        "partOfSpeech": "verb",
        "meaningEs": "permitir",
        "exampleEn": "They don't allow pets inside the restaurant.",
        "exampleEs": "No permiten mascotas dentro del restaurante."
      },
      {
        "id": "v-a2-4-20",
        "word": "forbid",
        "phonetic": "/fərˈbɪd/",
        "partOfSpeech": "verb",
        "meaningEs": "prohibir",
        "exampleEn": "The rules strictly forbid taking photos.",
        "exampleEs": "Las reglas prohíben estrictamente tomar fotos."
      }
    ],
    "coreChunks": [
      {
        "id": "c-a2-4-1",
        "chunk": "Would you mind if I...?",
        "meaningEs": "¿Te importaría si yo...?",
        "usageContext": "Pedir permiso con máxima elegancia",
        "exampleSentence": "Would you mind if I opened the window for some fresh air?"
      },
      {
        "id": "c-a2-4-2",
        "chunk": "You're more than welcome to...",
        "meaningEs": "Eres más que bienvenido a...",
        "usageContext": "Dar permiso cordial",
        "exampleSentence": "You're more than welcome to use my charger."
      },
      {
        "id": "c-a2-4-3",
        "chunk": "It goes without saying that...",
        "meaningEs": "No hace falta decir que...",
        "usageContext": "Mencionar obviedades",
        "exampleSentence": "It goes without saying that safety comes first."
      },
      {
        "id": "c-a2-4-4",
        "chunk": "Could you give me a hand with...?",
        "meaningEs": "¿Me echas una mano con...?",
        "usageContext": "Pedir auxilio o ayuda física",
        "exampleSentence": "Could you give me a hand with these heavy boxes?"
      },
      {
        "id": "c-a2-4-5",
        "chunk": "I have no choice but to...",
        "meaningEs": "No me queda más opción que...",
        "usageContext": "Obligación sin alternativas",
        "exampleSentence": "The flight is canceled, so I have no choice but to take the train."
      },
      {
        "id": "c-a2-4-6",
        "chunk": "You're not allowed to...",
        "meaningEs": "No está permitido...",
        "usageContext": "Indicar prohibiciones",
        "exampleSentence": "You're not allowed to park on the yellow line."
      },
      {
        "id": "c-a2-4-7",
        "chunk": "As far as I can tell...",
        "meaningEs": "Hasta donde puedo discernir...",
        "usageContext": "Juicio personal",
        "exampleSentence": "As far as I can tell, the system is working normally."
      },
      {
        "id": "c-a2-4-8",
        "chunk": "Feel free to...",
        "meaningEs": "Siéntete en total libertad de...",
        "usageContext": "Dar permiso amable",
        "exampleSentence": "Feel free to help yourself to some coffee and water."
      },
      {
        "id": "c-a2-4-9",
        "chunk": "Do you mind holding this for a second?",
        "meaningEs": "¿Te molestaría sostener esto un segundo?",
        "usageContext": "Petición práctica",
        "exampleSentence": "Do you mind holding my cup while I find my keys?"
      },
      {
        "id": "c-a2-4-10",
        "chunk": "I couldn't agree more",
        "meaningEs": "No podría estar más de acuerdo",
        "usageContext": "Concordancia absoluta",
        "exampleSentence": "You're totally right about the deadline; I couldn't agree more."
      }
    ],
    "listenings": [
      {
        "id": "ml-undefined-1",
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
        "id": "ml-undefined-2",
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
        "id": "ml-undefined-3",
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
    ],
    "workbook": [
      {
        "id": "wb-undefined-1",
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
        "id": "wb-undefined-2",
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
        "id": "wb-undefined-3",
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
        "id": "wb-undefined-4",
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
        "id": "wb-undefined-5",
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
        "id": "wb-undefined-6",
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
        "id": "wb-undefined-7",
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
        "id": "wb-undefined-8",
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
        "id": "wb-undefined-9",
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
        "id": "wb-undefined-10",
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
        "id": "wb-undefined-11",
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
        "id": "wb-undefined-12",
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
        "id": "wb-undefined-13",
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
        "id": "wb-undefined-14",
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
        "id": "wb-undefined-15",
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
        "id": "wb-undefined-16",
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
        "id": "wb-undefined-17",
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
        "id": "wb-undefined-18",
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
        "id": "wb-undefined-19",
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
        "id": "wb-undefined-20",
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
        "id": "v-a2-5-1",
        "word": "get back to",
        "phonetic": "/ɡɛt bæk tu/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "responder a alguien después",
        "exampleEn": "Let me check the budget and I will get back to you.",
        "exampleEs": "Revisaré el presupuesto y te respondo."
      },
      {
        "id": "v-a2-5-2",
        "word": "get along with",
        "phonetic": "/ɡɛt əˈlɒŋ/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "llevarse bien con alguien",
        "exampleEn": "I get along very well with my coworkers.",
        "exampleEs": "Me llevo muy bien con mis colegas."
      },
      {
        "id": "v-a2-5-3",
        "word": "get rid of",
        "phonetic": "/ɡɛt rɪd əv/",
        "partOfSpeech": "phrase",
        "meaningEs": "deshacerse de algo que no sirve",
        "exampleEn": "We should get rid of these old files.",
        "exampleEs": "Deberíamos deshacernos de estos archivos viejos."
      },
      {
        "id": "v-a2-5-4",
        "word": "get used to",
        "phonetic": "/ɡɛt juːzd tu/",
        "partOfSpeech": "phrase",
        "meaningEs": "acostumbrarse a algo nuevo",
        "exampleEn": "I am getting used to waking up at 6 AM.",
        "exampleEs": "Me estoy acostumbrando a despertar a las 6."
      },
      {
        "id": "v-a2-5-5",
        "word": "get ready",
        "phonetic": "/ɡɛt ˈrɛdi/",
        "partOfSpeech": "phrase",
        "meaningEs": "alistarse / prepararse",
        "exampleEn": "Give me ten minutes to get ready.",
        "exampleEs": "Dame diez minutos para alistarme."
      },
      {
        "id": "v-a2-5-6",
        "word": "get in touch",
        "phonetic": "/ɡɛt ɪn tʌtʃ/",
        "partOfSpeech": "phrase",
        "meaningEs": "ponerse en contacto",
        "exampleEn": "Let's get in touch next week to coordinate.",
        "exampleEs": "Pongámonos en contacto la próxima semana."
      },
      {
        "id": "v-a2-5-7",
        "word": "get over",
        "phonetic": "/ɡɛt ˈoʊvər/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "superar una enfermedad o desamor",
        "exampleEn": "It took me a week to get over the flu.",
        "exampleEs": "Me tomó una semana superar la gripe."
      },
      {
        "id": "v-a2-5-8",
        "word": "get lost",
        "phonetic": "/ɡɛt lɒst/",
        "partOfSpeech": "phrase",
        "meaningEs": "perderse en la ciudad",
        "exampleEn": "We got lost in downtown because the GPS failed.",
        "exampleEs": "Nos perdimos en el centro porque falló el GPS."
      },
      {
        "id": "v-a2-5-9",
        "word": "get on with",
        "phonetic": "/ɡɛt ɒn/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "continuar trabajando en algo",
        "exampleEn": "Let's get on with today's agenda.",
        "exampleEs": "Continuemos con la agenda de hoy."
      },
      {
        "id": "v-a2-5-10",
        "word": "get through to",
        "phonetic": "/ɡɛt θruː/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "comunicarse por teléfono con alguien",
        "exampleEn": "I tried calling, but I couldn't get through to support.",
        "exampleEs": "Intenté llamar pero no logré comunicar."
      },
      {
        "id": "v-a2-5-11",
        "word": "get together",
        "phonetic": "/ɡɛt təˈɡɛðər/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "reunirse socialmente",
        "exampleEn": "We should get together for drinks this Friday.",
        "exampleEs": "Deberíamos reunirnos a tomar algo este viernes."
      },
      {
        "id": "v-a2-5-12",
        "word": "get started",
        "phonetic": "/ɡɛt ˈstɑːrtɪd/",
        "partOfSpeech": "phrase",
        "meaningEs": "comenzar una actividad",
        "exampleEn": "Let's get started on the workshop.",
        "exampleEs": "Comencemos con el taller."
      },
      {
        "id": "v-a2-5-13",
        "word": "get off work",
        "phonetic": "/ɡɛt ɔːf/",
        "partOfSpeech": "phrase",
        "meaningEs": "salir del turno de trabajo",
        "exampleEn": "What time do you usually get off work?",
        "exampleEs": "¿A qué hora sueles salir de trabajar?"
      },
      {
        "id": "v-a2-5-14",
        "word": "get by",
        "phonetic": "/ɡɛt baɪ/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "arreglárselas con lo justo",
        "exampleEn": "My German isn't great, but I can get by.",
        "exampleEs": "Mi alemán no es genial, pero me las arreglo."
      },
      {
        "id": "v-a2-5-15",
        "word": "get behind",
        "phonetic": "/ɡɛt bɪˈhaɪnd/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "atrasarse con entregas",
        "exampleEn": "Try not to get behind on your assignments.",
        "exampleEs": "Intenta no atrasarte con tus tareas."
      },
      {
        "id": "v-a2-5-16",
        "word": "get ahead",
        "phonetic": "/ɡɛt əˈhɛd/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "progresar / salir adelante",
        "exampleEn": "Learning English helps you get ahead in your career.",
        "exampleEs": "Aprender inglés te ayuda a salir adelante."
      },
      {
        "id": "v-a2-5-17",
        "word": "get away with",
        "phonetic": "/ɡɛt əˈweɪ wɪð/",
        "partOfSpeech": "phrasal verb",
        "meaningEs": "salirse con la suya",
        "exampleEn": "You can't get away with breaking the rules.",
        "exampleEs": "No puedes salirte con la tuya rompiendo reglas."
      },
      {
        "id": "v-a2-5-18",
        "word": "get delayed",
        "phonetic": "/ɡɛt dɪˈleɪd/",
        "partOfSpeech": "phrase",
        "meaningEs": "retrasarse un vuelo o tren",
        "exampleEn": "Our train got delayed by twenty minutes.",
        "exampleEs": "Nuestro tren se retrasó veinte minutos."
      },
      {
        "id": "v-a2-5-19",
        "word": "get dark",
        "phonetic": "/ɡɛt dɑːrk/",
        "partOfSpeech": "phrase",
        "meaningEs": "oscurecer / anochecer",
        "exampleEn": "It gets dark very early in the winter.",
        "exampleEs": "Oscurece muy temprano en invierno."
      },
      {
        "id": "v-a2-5-20",
        "word": "get cold",
        "phonetic": "/ɡɛt koʊld/",
        "partOfSpeech": "phrase",
        "meaningEs": "enfriarse la comida",
        "exampleEn": "Eat your soup before it gets cold!",
        "exampleEs": "¡Come tu sopa antes de que se enfríe!"
      }
    ],
    "coreChunks": [
      {
        "id": "c-a2-5-1",
        "chunk": "I get what you're saying, but...",
        "meaningEs": "Entiendo lo que dices, pero...",
        "usageContext": "Discrepar cortésmente",
        "exampleSentence": "I get what you're saying, but we need to consider the costs."
      },
      {
        "id": "c-a2-5-2",
        "chunk": "Let's get down to business",
        "meaningEs": "Vayamos al grano / pongámonos a trabajar",
        "usageContext": "Empezar reuniones sin perder tiempo",
        "exampleSentence": "All right everyone, coffee is done, let's get down to business."
      },
      {
        "id": "c-a2-5-3",
        "chunk": "Don't get me wrong",
        "meaningEs": "No me lo tomes a mal",
        "usageContext": "Prevenir malentendidos",
        "exampleSentence": "Don't get me wrong; I love the concept, but the timeline is unrealistic."
      },
      {
        "id": "c-a2-5-4",
        "chunk": "I'll get right on it",
        "meaningEs": "Me pongo en eso de inmediato",
        "usageContext": "Compromiso de ejecución",
        "exampleSentence": "Thanks for the feedback; I'll get right on it."
      },
      {
        "id": "c-a2-5-5",
        "chunk": "I don't get it",
        "meaningEs": "No lo entiendo / no le veo sentido",
        "usageContext": "Confusión sincera",
        "exampleSentence": "Why did they change the password again? I honestly don't get it."
      },
      {
        "id": "c-a2-5-6",
        "chunk": "Get out of here!",
        "meaningEs": "¡No te creo! / ¡No me digas!",
        "usageContext": "Expresar sorpresa informal",
        "exampleSentence": "You met Keanu Reeves? Get out of here!"
      },
      {
        "id": "c-a2-5-7",
        "chunk": "How are you getting on with...?",
        "meaningEs": "¿Cómo vas con...?",
        "usageContext": "Preguntar por el avance de un proyecto",
        "exampleSentence": "How are you getting on with the client onboarding?"
      },
      {
        "id": "c-a2-5-8",
        "chunk": "It gets on my nerves",
        "meaningEs": "Me saca de quicio / me desespera",
        "usageContext": "Molestias cotidianas",
        "exampleSentence": "That flickering light really gets on my nerves."
      },
      {
        "id": "c-a2-5-9",
        "chunk": "I'm getting there",
        "meaningEs": "Ahí voy / ya casi llego al nivel",
        "usageContext": "Progreso constante",
        "exampleSentence": "My speaking isn't perfect yet, but I'm definitely getting there."
      },
      {
        "id": "c-a2-5-10",
        "chunk": "Get a grip",
        "meaningEs": "Contrólate / mantén la calma",
        "usageContext": "Aconsejar serenidad",
        "exampleSentence": "Take a deep breath and get a grip; we can solve this."
      }
    ],
    "listenings": [
      {
        "id": "ml-undefined-1",
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
        "id": "ml-undefined-2",
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
        "id": "ml-undefined-3",
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
    ],
    "workbook": [
      {
        "id": "wb-undefined-1",
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
        "id": "wb-undefined-2",
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
        "id": "wb-undefined-3",
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
        "id": "wb-undefined-4",
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
        "id": "wb-undefined-5",
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
        "id": "wb-undefined-6",
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
        "id": "wb-undefined-7",
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
        "id": "wb-undefined-8",
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
        "id": "wb-undefined-9",
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
        "id": "wb-undefined-10",
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
        "id": "wb-undefined-11",
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
        "id": "wb-undefined-12",
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
        "id": "wb-undefined-13",
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
        "id": "wb-undefined-14",
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
        "id": "wb-undefined-15",
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
        "id": "wb-undefined-16",
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
        "id": "wb-undefined-17",
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
        "id": "wb-undefined-18",
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
        "id": "wb-undefined-19",
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
        "id": "wb-undefined-20",
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
    ]
  }
];

export const A2_LESSONS: CourseLesson[] = BASE_A2_LESSONS.map((lesson) => {
  const content = A2_CONTENT[lesson.id];
  if (!content) {
    return lesson;
  }
  return { ...lesson, ...content };
});
