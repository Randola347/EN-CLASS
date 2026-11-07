import type { CourseLesson } from '../types/curriculum';

export const COMPREHENSIVE_CURRICULUM: CourseLesson[] = [
  // ================= A1 LEVEL =================
  {
    id: 'lesson-a1-1',
    level: 'A1',
    lessonNumber: 1,
    title: 'Presentaciones & Romper el Hielo Real',
    tagline: 'Cómo presentarte sin sonar como libro de texto de primaria',
    practicalGoal: 'Presentarte a ti mismo, decir de dónde eres, a qué te dedicas y saber cómo preguntar si no escuchaste su nombre.',
    theory: {
      title: 'Menos "Fine, thank you, and you?", más "Good, how are you doing?"',
      explanationEs: 'En la vida diaria casi nadie responde "I am fine, thank you, and you?". Los nativos usan fórmulas automáticas breves y devuelven la pregunta con fluidez.',
      practicalFormula: 'Pretty good, thanks! How about yourself?',
      comparisonSpanish: 'En español solemos traducir literal "¿Y tú?", pero en inglés suena mucho más natural "How about you?" o "How about yourself?".'
    },
    coreChunks: [
      {
        chunk: "I'm based in...",
        meaningEs: "Vivo / estoy radicado en... (más natural que solo 'I live in')",
        usageContext: "Trabajo remoto o viajes",
        exampleSentence: "I'm originally from Colombia, but I'm based in Madrid."
      },
      {
        chunk: "I work as a / I do...",
        meaningEs: "Trabajo como / me dedico a...",
        usageContext: "Hablar de ocupación sin decir 'My profession is...'",
        exampleSentence: "I work as a software engineer at a logistics company."
      },
      {
        chunk: "Nice to finally meet you!",
        meaningEs: "¡Qué gusto finalmente conocerte! (ideal cuando ya se habían hablado por chat o email)",
        usageContext: "Reuniones de trabajo o videollamadas",
        exampleSentence: "Nice to finally meet you, Sarah! I've heard a lot about your team."
      }
    ],
    clarificationTools: [
      {
        triggerSituation: "No escuchaste bien el nombre de la persona",
        phrase: "Sorry, I didn't quite catch your name?",
        audioText: "Sorry, I didn't quite catch your name?",
        meaningEs: "Perdón, no alcancé a captar tu nombre."
      },
      {
        triggerSituation: "Hablan muy rápido en el saludo",
        phrase: "Could you say that one more time, please?",
        audioText: "Could you say that one more time, please?",
        meaningEs: "¿Podrías repetirlo una vez más, por favor?"
      }
    ],
    exercises: [
      {
        id: 'ex-a1-1-1',
        type: 'reflex_reply',
        promptEs: 'Un colega internacional te saluda: "Hey! How is everything going?" Responde con soltura y devuélvele la pregunta.',
        promptEn: 'Hey! How is everything going?',
        options: [
          'Pretty good, thanks! How about yourself?',
          'I am fine, thank you, and you?',
          'Yes, everything is going.'
        ],
        correctAnswer: 'Pretty good, thanks! How about yourself?',
        explanation: '"Pretty good, thanks! How about yourself?" es la fórmula conversacional estándar de oficina y vida diaria.'
      },
      {
        id: 'ex-a1-1-2',
        type: 'ask_clarification',
        promptEs: 'La otra persona dijo su nombre demasiado rápido y no entendiste nada. ¿Qué frase de salvavidas usas?',
        options: [
          'What is your name again quickly?',
          "Sorry, I didn't quite catch your name?",
          'Repeat name, please.'
        ],
        correctAnswer: "Sorry, I didn't quite catch your name?",
        explanation: '"I didn\'t quite catch your name" es ultra educado y común en todo el mundo angloparlante.'
      }
    ]
  },
  {
    id: 'lesson-a1-2',
    level: 'A1',
    lessonNumber: 2,
    title: 'Pedir Cosas Sin Decir "I Want"',
    tagline: 'La fórmula de cortesía que abre puertas en cafeterías, tiendas y oficinas',
    practicalGoal: 'Aprender a ordenar café, comida o pedir favores con "Could I get..." y "Would you mind..." sin sonar descortés.',
    theory: {
      title: 'El peligro de traducir "Quiero" como "I want"',
      explanationEs: 'En español decir "Quiero un café" es normal. En inglés, "I want coffee" suena demandante o como un niño enojado. Los adultos en inglés usan chunks de cortesía como "Could I get..." o "Can I have...".',
      practicalFormula: 'Could I get + [objeto] + , please?',
      comparisonSpanish: 'En vez de "I want a water", decimos siempre "Could I get a bottle of water, please?".'
    },
    coreChunks: [
      {
        chunk: "Could I get a...",
        meaningEs: "¿Me podrías dar / poner un...?",
        usageContext: "Restaurantes, cafés, tiendas",
        exampleSentence: "Could I get a black coffee to go, please?"
      },
      {
        chunk: "Do you happen to have...?",
        meaningEs: "¿Por casualidad tienes...?",
        usageContext: "Buscar algo específico en una tienda o preguntar a un colega",
        exampleSentence: "Do you happen to have a charger I could borrow?"
      },
      {
        chunk: "I'd rather have...",
        meaningEs: "Preferiría / prefiero...",
        usageContext: "Cuando te ofrecen opciones y prefieres otra",
        exampleSentence: "I'd rather have tea instead of coffee, if that's okay."
      }
    ],
    clarificationTools: [
      {
        triggerSituation: "No sabes cómo se llama un objeto en la vitrina o menú",
        phrase: "What is this called in English?",
        audioText: "What is this called in English?",
        meaningEs: "¿Cómo se llama esto en inglés?"
      },
      {
        triggerSituation: "Te preguntaron algo del pedido que no entendiste",
        phrase: "What do you mean by that?",
        audioText: "What do you mean by that?",
        meaningEs: "¿A qué te refieres con eso?"
      }
    ],
    exercises: [
      {
        id: 'ex-a1-2-1',
        type: 'fill_chunk',
        promptEs: 'Quieres pedir un sándwich tostado para llevar en una cafetería.',
        options: [
          'I want a toasted sandwich to go.',
          'Could I get a toasted sandwich to go, please?',
          'Give me one sandwich toasted now.'
        ],
        correctAnswer: 'Could I get a toasted sandwich to go, please?',
        explanation: '"Could I get... to go, please?" es la estructura reina de pedidos en inglés.'
      }
    ]
  },

  // ================= A2 LEVEL =================
  {
    id: 'lesson-a2-1',
    level: 'A2',
    lessonNumber: 1,
    title: 'El Verbo Mágico: GET sin complicaciones',
    tagline: 'Cómo usar GET para ahorrarte decenas de verbos difíciles',
    practicalGoal: 'Usar GET para "recibir", "llegar", "entender" y "comprar" sin enredarte con listas gramaticales.',
    theory: {
      title: 'GET es el comodín de la conversación real',
      explanationEs: 'Los hispanohablantes suelen memorizar "receive, arrive, understand, purchase". Pero en el habla diaria, el 80% de las veces se usa GET.',
      practicalFormula: 'I get it (lo entiendo) | I got here (llegué aquí) | Can you get me... (me compras/consigues...)',
      comparisonSpanish: 'No necesitas pensar en 4 verbos distintos; "GET" se adapta al contexto.'
    },
    coreChunks: [
      {
        chunk: "I get what you're saying",
        meaningEs: "Entiendo lo que estás diciendo",
        usageContext: "Confirmar que estás siguiendo la conversación",
        exampleSentence: "I get what you're saying, but we should double check with the boss."
      },
      {
        chunk: "I'll get back to you soon",
        meaningEs: "Te respondo / te contacto pronto",
        usageContext: "Correos, chats o cuando necesitas consultar algo antes de responder",
        exampleSentence: "Let me check the numbers and I'll get back to you soon."
      },
      {
        chunk: "Let's get down to business",
        meaningEs: "Vayamos al grano / pongámonos a trabajar",
        usageContext: "Iniciar una reunión tras unos minutos de charla informal",
        exampleSentence: "All right guys, let's get down to business."
      }
    ],
    clarificationTools: [
      {
        triggerSituation: "No entendiste la idea o el punto de alguien",
        phrase: "I'm not sure I get your point, could you explain?",
        audioText: "I'm not sure I get your point, could you explain?",
        meaningEs: "No estoy seguro de entender tu punto, ¿podrías explicarlo?"
      }
    ],
    exercises: [
      {
        id: 'ex-a2-1-1',
        type: 'reflex_reply',
        promptEs: 'Un cliente te pide un presupuesto que no tienes a mano. Dices con profesionalismo que le responderás más tarde.',
        options: [
          "I will call you because I don't know.",
          "Let me review the details and I'll get back to you shortly.",
          "I have to get the money and give you."
        ],
        correctAnswer: "Let me review the details and I'll get back to you shortly.",
        explanation: '"I\'ll get back to you" es el chunk corporativo e interpersonal indispensable.'
      }
    ]
  },
  {
    id: 'lesson-a2-2',
    level: 'A2',
    lessonNumber: 2,
    title: 'Explicar Problemas y Decir que NO con Elegancia',
    tagline: 'Cómo rechazar invitaciones o tareas sin sonar grosero',
    practicalGoal: 'Decir que no tienes tiempo o que no puedes asistir usando "I wish I could, but..." y "I\'m in the middle of...".',
    theory: {
      title: 'El "Softening" (Suavizar el rechazo)',
      explanationEs: 'En inglés, responder simplemente "No, I cannot" suena seco y casi molesto. La cultura angloparlante usa un sandwich: agradecimiento/deseo + motivo + alternativa.',
      practicalFormula: "I'd love to, but I'm [motivo]... Can we take a rain check?",
      comparisonSpanish: 'En español a veces decimos "No puedo, tengo trabajo". En inglés suavizamos con "I wish I could, but I\'m tied up right now".'
    },
    coreChunks: [
      {
        chunk: "I wish I could, but...",
        meaningEs: "Ojalá pudiera, pero...",
        usageContext: "Rechazar invitaciones a comer, eventos o reuniones no urgentes",
        exampleSentence: "I wish I could, but I have a deadline at 5 PM."
      },
      {
        chunk: "I'm in the middle of something",
        meaningEs: "Estoy a mitad de algo / ocupado ahora mismo",
        usageContext: "Cuando alguien te interrumpe en el trabajo",
        exampleSentence: "Could you give me ten minutes? I'm in the middle of something."
      },
      {
        chunk: "Can I take a rain check?",
        meaningEs: "¿Lo dejamos para otra ocasión?",
        usageContext: "Posponer una salida para después con amabilidad",
        exampleSentence: "I'm pretty beat tonight. Can I take a rain check?"
      }
    ],
    clarificationTools: [
      {
        triggerSituation: "Te dieron una instrucción que entra en conflicto con otra",
        phrase: "Could you clarify what the top priority is right now?",
        audioText: "Could you clarify what the top priority is right now?",
        meaningEs: "¿Podrías aclararme cuál es la prioridad principal ahora mismo?"
      }
    ],
    exercises: [
      {
        id: 'ex-a2-2-1',
        type: 'reflex_reply',
        promptEs: 'Un amigo te invita a cenar hoy pero tienes que estudiar para un examen.',
        options: [
          "I wish I could, but I have an exam tomorrow. Can I take a rain check?",
          "No, I cannot go because study.",
          "I don't want to eat dinner today."
        ],
        correctAnswer: "I wish I could, but I have an exam tomorrow. Can I take a rain check?",
        explanation: 'Combina el deseo sincero ("I wish I could") con la propuesta para después ("take a rain check").'
      }
    ]
  },

  // ================= B1 LEVEL =================
  {
    id: 'lesson-b1-1',
    level: 'B1',
    lessonNumber: 1,
    title: 'Ganar Tiempo en Discusiones (Safety Belts Pro)',
    tagline: 'Cómo pensar tu respuesta en inglés sin quedarte mudo ni un solo segundo',
    practicalGoal: 'Aprender las frases que los nativos usan para pensar mientras hablan y conectar ideas.',
    theory: {
      title: 'Por qué los nativos nunca sufren por pensar la palabra',
      explanationEs: 'Cuando un nativo busca una palabra, no se queda callado 5 segundos. Dice: "Well, that\'s an interesting point, let me think..." o "What I\'m trying to say is...". Estas frases le dan al cerebro el tiempo necesario para armar la idea.',
      practicalFormula: "That's a valid point + however, from my perspective...",
      comparisonSpanish: 'El estudiante hispanohablante suele decir "ehhh..." o quedarse callado traduciendo. Con estos conectores ganas fluidez inmediata.'
    },
    coreChunks: [
      {
        chunk: "As far as I'm concerned...",
        meaningEs: "En lo que a mí respecta / según mi punto de vista...",
        usageContext: "Dar opiniones en debates o juntas",
        exampleSentence: "As far as I'm concerned, we should launch the test version first."
      },
      {
        chunk: "What I'm trying to say is...",
        meaningEs: "Lo que intento decir es... (para corregirte si te trabaste)",
        usageContext: "Cuando la gramática se complicó y quieres reiniciar la idea limpiamente",
        exampleSentence: "What I'm trying to say is that we need more realistic timelines."
      },
      {
        chunk: "Don't get me wrong, but...",
        meaningEs: "No me lo tomes a mal, pero...",
        usageContext: "Dar una crítica constructiva o desacuerdo educado",
        exampleSentence: "Don't get me wrong, the design is great, but it might be confusing for users."
      }
    ],
    clarificationTools: [
      {
        triggerSituation: "Alguien usó una palabra o acrónimo técnico que desconoces",
        phrase: "What does that acronym stand for?",
        audioText: "What does that acronym stand for?",
        meaningEs: "¿Qué significan esas siglas?"
      },
      {
        triggerSituation: "Quieres que la otra persona confirme si te entendió",
        phrase: "Does that make sense, or should I rephrase it?",
        audioText: "Does that make sense, or should I rephrase it?",
        meaningEs: "¿Tiene sentido o debería reformularlo?"
      }
    ],
    exercises: [
      {
        id: 'ex-b1-1-1',
        type: 'reflex_reply',
        promptEs: 'En una reunión te piden tu opinión sobre un plan arriesgado. Quieres advertir un riesgo sin sonar negativo.',
        options: [
          "Don't get me wrong, the idea is bold, but we should consider the budget.",
          "I think the idea is bad and expensive.",
          "It is not good for the company."
        ],
        correctAnswer: "Don't get me wrong, the idea is bold, but we should consider the budget.",
        explanation: '"Don\'t get me wrong" prepara al oyente para recibir una observación crítica sin ponerse a la defensiva.'
      }
    ]
  },
  {
    id: 'lesson-b1-2',
    level: 'B1',
    lessonNumber: 2,
    title: 'Manejo de Situaciones Imprevistas y Negociación',
    tagline: 'Cómo resolver malentendidos y pedir cambios de fechas o condiciones',
    practicalGoal: 'Proponer alternativas cuando algo sale mal y negociar plazos con confianza.',
    theory: {
      title: 'El condicional suave (Would / Could en lugar de Will / Must)',
      explanationEs: 'En negociaciones, decir "You must change this" genera rechazo. Decir "Would it be possible to adjust..." abre la puerta a un acuerdo cordial.',
      practicalFormula: 'Would it be possible to + [verbo base]...?',
      comparisonSpanish: 'En vez de "Tienen que cambiar la fecha", usamos "¿Sería posible ajustar la fecha?".'
    },
    coreChunks: [
      {
        chunk: "Would it be possible to...",
        meaningEs: "¿Sería posible...?",
        usageContext: "Pedir cambios de fechas, descuentos o ajustes",
        exampleSentence: "Would it be possible to push the deadline back to Friday?"
      },
      {
        chunk: "I was wondering if you could...",
        meaningEs: "Me preguntaba si podrías...",
        usageContext: "Favores especiales con máxima cortesía",
        exampleSentence: "I was wondering if you could look over this presentation before the call."
      },
      {
        chunk: "Let's find a middle ground",
        meaningEs: "Encontremos un punto medio",
        usageContext: "Cuando dos partes tienen posturas diferentes",
        exampleSentence: "I understand your budget constraints; let's find a middle ground."
      }
    ],
    clarificationTools: [
      {
        triggerSituation: "No estás seguro de si se llegó a un acuerdo claro",
        phrase: "Just to make sure we're on the same page, what are the next steps?",
        audioText: "Just to make sure we're on the same page, what are the next steps?",
        meaningEs: "Solo para asegurarnos de que estamos en la misma sintonía, ¿cuáles son los siguientes pasos?"
      }
    ],
    exercises: [
      {
        id: 'ex-b1-2-1',
        type: 'fill_chunk',
        promptEs: 'Quieres pedirle a tu contraparte posponer una entrega al lunes.',
        options: [
          "Would it be possible to extend the deadline until Monday?",
          "Give me until Monday because I have no time.",
          "I will deliver Monday yes or yes."
        ],
        correctAnswer: "Would it be possible to extend the deadline until Monday?",
        explanation: '"Would it be possible to..." es la forma más profesional y persuasiva de solicitar flexibilidad.'
      }
    ]
  },

  // ================= B2 LEVEL =================
  {
    id: 'lesson-b2-1',
    level: 'B2',
    lessonNumber: 1,
    title: 'Matices Avanzados y Diplomacia Profesional',
    tagline: 'Cómo sonar persuasivo, sofisticado y asertivo en cualquier entorno global',
    practicalGoal: 'Exponer argumentos complejos, cuestionar suposiciones con diplomacia y liderar conversaciones.',
    theory: {
      title: 'Asertividad sin agresividad (Hedging)',
      explanationEs: 'A nivel B2, la fluidez no es solo hablar rápido, sino elegir el tono exacto. Los profesionales usan "hedging" (moduladores) para no sonar autoritarios ni inseguros.',
      practicalFormula: 'It seems to me that + [observación] + although we might want to consider...',
      comparisonSpanish: 'Evitamos afirmaciones categóricas como "This is wrong" y adoptamos "I have some reservations regarding this approach".'
    },
    coreChunks: [
      {
        chunk: "I have some reservations about...",
        meaningEs: "Tengo ciertas reservas / dudas respecto a...",
        usageContext: "Expresar escepticismo profesional fundamentado",
        exampleSentence: "I have some reservations about switching providers right in the middle of Q4."
      },
      {
        chunk: "To play devil's advocate for a moment...",
        meaningEs: "Haciendo de abogado del diablo por un momento...",
        usageContext: "Plantear un escenario negativo para poner a prueba una idea sin que parezca que estás en contra",
        exampleSentence: "To play devil's advocate, what happens if the server load triples during launch?"
      },
      {
        chunk: "On the flip side...",
        meaningEs: "Por otra parte / viendo el otro lado de la moneda...",
        usageContext: "Sopesar pros y contras con naturalidad",
        exampleSentence: "The upfront cost is steep; on the flip side, the long-term ROI is huge."
      }
    ],
    clarificationTools: [
      {
        triggerSituation: "La otra persona está siendo vaga o evasiva en su respuesta",
        phrase: "Could you walk me through the specific rationale behind that decision?",
        audioText: "Could you walk me through the specific rationale behind that decision?",
        meaningEs: "¿Podrías guiarme a través de la razón específica detrás de esa decisión?"
      },
      {
        triggerSituation: "Quieres indagar más a fondo en un concepto complejo",
        phrase: "Could you elaborate on how this impacts our current timeline?",
        audioText: "Could you elaborate on how this impacts our current timeline?",
        meaningEs: "¿Podrías profundizar en cómo esto impacta nuestro cronograma actual?"
      }
    ],
    exercises: [
      {
        id: 'ex-b2-1-1',
        type: 'reflex_reply',
        promptEs: 'En una sesión de estrategia quieres plantear un riesgo potencial sin que piensen que eres pesimista.',
        options: [
          "To play devil's advocate for a moment, what if user adoption is slower than expected?",
          "Your strategy will fail if users don't adopt it.",
          "I don't like this idea at all."
        ],
        correctAnswer: "To play devil's advocate for a moment, what if user adoption is slower than expected?",
        explanation: 'El modismo "To play devil\'s advocate" te permite auditar cualquier idea con total elegancia profesional.'
      }
    ]
  },
  {
    id: 'lesson-b2-2',
    level: 'B2',
    lessonNumber: 2,
    title: 'Recuperar el Control si te Quedas en Blanco',
    tagline: 'Mecanismos de rescate para debates de alta presión y entrevistas',
    practicalGoal: 'Aprender las frases para reconducir la conversación si olvidas un dato o te pierdes en una idea larga.',
    theory: {
      title: 'La técnica del "Reframe" (Reencuadre instantáneo)',
      explanationEs: 'Incluso los oradores nativos se pierden a veces. La clave está en no disculparse en exceso ni sonrojarse, sino reencuadrar con calma hacia el núcleo del mensaje.',
      practicalFormula: "Sorry, I lost my train of thought for a second. Coming back to the core issue...",
      comparisonSpanish: 'En vez de decir "Sorry, my English is bad", dices "I lost my train of thought for a moment", lo cual denota dominio del idioma.'
    },
    coreChunks: [
      {
        chunk: "I lost my train of thought for a second",
        meaningEs: "Se me fue el hilo del pensamiento por un segundo",
        usageContext: "Cuando te distraes o te trabas en una frase larga",
        exampleSentence: "Excuse me, I lost my train of thought. As I was saying, customer retention is up 15%."
      },
      {
        chunk: "Coming back to my initial point...",
        meaningEs: "Volviendo a mi punto inicial...",
        usageContext: "Retomar el control después de una digresión",
        exampleSentence: "Coming back to my initial point, we shouldn't overlook security."
      },
      {
        chunk: "The bottom line is that...",
        meaningEs: "La conclusión fundamental / en resumidas cuentas es que...",
        usageContext: "Cerrar tu intervención con un mensaje contundente",
        exampleSentence: "The bottom line is that we need to act before our competitors do."
      }
    ],
    clarificationTools: [
      {
        triggerSituation: "Te hicieron una pregunta tan enredada que no sabes qué contestar",
        phrase: "That's quite a multi-layered question; which aspect would you like me to address first?",
        audioText: "That's quite a multi-layered question; which aspect would you like me to address first?",
        meaningEs: "Es una pregunta con bastantes aristas; ¿qué aspecto te gustaría que aborde primero?"
      }
    ],
    exercises: [
      {
        id: 'ex-b2-2-1',
        type: 'reflex_reply',
        promptEs: 'Estabas explicando una idea en una entrevista de trabajo y te desconcentraste por un segundo. ¿Cómo retomas el control?',
        options: [
          "Sorry, my English is very bad today, let me think in Spanish.",
          "Pardon me, I lost my train of thought for a second. Coming back to the core question...",
          "I forgot everything, please ask something else."
        ],
        correctAnswer: "Pardon me, I lost my train of thought for a second. Coming back to the core question...",
        explanation: 'Demuestra aplomo, naturalidad y vocabulario idiomático de nivel avanzado.'
      }
    ]
  }
];

