import type { MicroListeningDrill, ReflexDrill, SafetyBeltItem, RoleplayScenario } from '../types';

export const SAFETY_BELTS: SafetyBeltItem[] = [
  {
    id: 'sb-1',
    category: 'buying_time',
    chunk: 'Let me think for a second...',
    spanishMeaning: 'Déjame pensar un segundo... (ganar 2-3 seg sin silencio incómodo)',
    audioSample: 'Let me think for a second...',
    exampleContext: 'When asked a sudden complex question.'
  },
  {
    id: 'sb-2',
    category: 'buying_time',
    chunk: "That's a good question...",
    spanishMeaning: 'Esa es una buena pregunta... (comprar tiempo natural)',
    audioSample: "That's a good question...",
    exampleContext: 'Use this to start your answer while thinking of the verb.'
  },
  {
    id: 'sb-3',
    category: 'rephrasing',
    chunk: 'What I mean is...',
    spanishMeaning: 'Lo que quiero decir es... (reencauzar la idea)',
    audioSample: 'What I mean is...',
    exampleContext: 'When you get stuck with an awkward grammar structure.'
  },
  {
    id: 'sb-4',
    category: 'rephrasing',
    chunk: 'How can I put this...',
    spanishMeaning: '¿Cómo puedo decir esto?... (muy natural)',
    audioSample: 'How can I put this...',
    exampleContext: 'When searching for specific vocabulary.'
  },
  {
    id: 'sb-5',
    category: 'clarifying',
    chunk: 'What do you mean by that?',
    spanishMeaning: '¿A qué te refieres con eso?',
    audioSample: 'What do you mean by that?',
    exampleContext: 'When you didn’t catch the speaker’s slang or intent.'
  },
  {
    id: 'sb-6',
    category: 'softening',
    chunk: 'I would say that...',
    spanishMeaning: 'Yo diría que... (suaviza y da fluidez en vez de frases cortadas)',
    audioSample: 'I would say that...',
    exampleContext: 'Expressing your opinion without sounding blunt.'
  }
];

export const MICRO_LISTENING_DRILLS: MicroListeningDrill[] = [
  {
    id: 'ml-1',
    audioPrompt: "I'm about to take off. Can you take care of the report?",
    script: "I'm about to take off. Can you take care of the report?",
    chunkFocus: "take off (irse / marcharse) + take care of (encargarse de)",
    spanishContext: "El interlocutor tiene prisa y te deja una tarea pendiente.",
    challengeQuestion: "¿Qué va a hacer la persona y qué te pide?",
    options: [
      "Va a almorzar y te pide fotocopias",
      "Está a punto de irse y te pide encargarte del reporte",
      "Va a despegar en avión y necesita tu pasaporte"
    ],
    correctAnswer: "Está a punto de irse y te pide encargarte del reporte",
    safetyBeltHint: "Sure thing, I'll take care of it right now."
  },
  {
    id: 'ml-2',
    audioPrompt: "I didn't mean to make you feel bad. Let's get down to business.",
    script: "I didn't mean to make you feel bad. Let's get down to business.",
    chunkFocus: "didn't mean to (no quise...) + get down to business (ir al grano / trabajar)",
    spanishContext: "Conversación de trabajo tras un malentendido.",
    challengeQuestion: "¿Cuál es la intención del hablante?",
    options: [
      "Disculparse por un malentendido y ponerse a trabajar",
      "Hacer negocios y venderte una franquicia",
      "Quejarse de su mal día laboral"
    ],
    correctAnswer: "Disculparse por un malentendido y ponerse a trabajar",
    safetyBeltHint: "Don't worry about it, let's focus on the plan."
  },
  {
    id: 'ml-3',
    audioPrompt: "Could you get back to me as soon as you make up your mind?",
    script: "Could you get back to me as soon as you make up your mind?",
    chunkFocus: "get back to me (responderme / volver a contactarme) + make up your mind (decidirte)",
    spanishContext: "Alguien te pide una respuesta cuando tomes una decisión.",
    challengeQuestion: "¿Qué solicita la persona?",
    options: [
      "Que regreses a su oficina inmediatamente",
      "Que le respondas en cuanto tomes una decisión",
      "Que le recuerdes su propia cita"
    ],
    correctAnswer: "Que le respondas en cuanto tomes una decisión",
    safetyBeltHint: "I'll let you know by tomorrow."
  }
];

export const REFLEX_DRILLS: ReflexDrill[] = [
  {
    id: 'rf-1',
    promptEs: "Un colega te ofrece café, pero tú prefieres agua con gas con amabilidad.",
    targetChunk: "I'd rather have / Could I get...",
    promptEn: "Would you like some coffee?",
    timeLimitSec: 10,
    acceptableAnswers: [
      "I'd rather have sparkling water, please.",
      "Could I get water instead?",
      "I prefer water, thanks.",
      "Actually, could I get some water?"
    ],
    explanation: "Evita decir 'I want...'. El chunk de oro para pedir cortésmente es 'I'd rather have...' o 'Could I get...'.",
    safetyBelt: "Well, actually, could I get..."
  },
  {
    id: 'rf-2',
    promptEs: "Alguien te pregunta si tienes tiempo para hablar ahora mismo, pero estás ocupado.",
    targetChunk: "I'm in the middle of... / Can I get back to you...?",
    promptEn: "Do you have five minutes to chat?",
    timeLimitSec: 10,
    acceptableAnswers: [
      "I'm in the middle of something right now. Can I get back to you?",
      "I'm kind of busy right now.",
      "Can I call you back in a bit?"
    ],
    explanation: "El chunk 'I'm in the middle of...' suena 100% natural y no brusco.",
    safetyBelt: "To be honest, I'm in the middle of something..."
  },
  {
    id: 'rf-3',
    promptEs: "Te preguntan tu opinión sobre un proyecto y quieres ganar tiempo antes de opinar.",
    targetChunk: "To be honest / As far as I can tell...",
    promptEn: "What do you think about our new launch date?",
    timeLimitSec: 10,
    acceptableAnswers: [
      "To be honest, I think it's doable.",
      "As far as I can tell, it looks great.",
      "Let me think... it seems reasonable."
    ],
    explanation: "Arrancar con 'To be honest' o 'As far as I can tell' activa el modo reflexivo en inglés.",
    safetyBelt: "Let me think for a second... I would say..."
  }
];

export const ROLEPLAY_SCENARIOS: RoleplayScenario[] = [
  {
    id: 'rp-coffee-shop',
    title: 'Ordering at a Fast-Paced Café',
    description: 'Pide tu desayuno evitando dudar o traducir en tu mente.',
    partnerRole: 'Barista (friendly & busy)',
    userRole: 'Customer in a hurry',
    recommendedChunks: ["Could I get a...", "To go, please", "Keep the change", "Do you happen to have..."],
    starterPrompt: "Hi there! Welcome to Brew & Co. What can I get started for you today?",
    aiFirstMessage: "Hey! What can I get started for you today? For here or to go?"
  },
  {
    id: 'rp-work-update',
    title: 'Quick Standup Update',
    description: 'Explica qué estás haciendo sin enredarte con tiempos verbales complicados.',
    partnerRole: 'Project Manager',
    userRole: 'Team Member',
    recommendedChunks: ["I'm currently working on...", "I'm running into an issue with...", "I should be done by..."],
    starterPrompt: "Morning! How are things coming along with the onboarding module?",
    aiFirstMessage: "Morning! Quick check-in: how are things coming along with the client deck?"
  }
];
