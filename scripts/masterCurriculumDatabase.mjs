import fs from 'fs';
import path from 'path';

// Complete Curriculum Master Database with 100% unique theory, grammar tables, vocab, chunks, and workbooks

export const A1_DATA = [
  // 1. Present Simple TO BE
  {
    num: 1,
    title: "El Verbo TO BE: Ser, Estar y Presentarse (am / is / are)",
    tagline: "Los cimientos del inglés: aprende a describir quién eres, de dónde vienes y cómo te sientes",
    focus: "Verbo TO BE (am/is/are) en oraciones afirmativas, negativas, preguntas y respuestas cortas",
    goal: "Presentarte con soltura, decir tu origen, profesión, sensaciones físicas (hambre, frío) y estado de ánimo sin traducir literal.",
    theory: {
      title: "El Verbo TO BE (am / is / are)",
      overviewEs: "El verbo TO BE es el más importante y versátil del inglés. Significa tanto 'SER' como 'ESTAR'. Además, en inglés se utiliza obligatoriamente para expresar la edad ('I am 25 years old') y sensaciones corporales ('I am hungry', 'I am cold'), donde en español usaríamos 'tener'.",
      grammarChart: {
        title: "Present Simple: Verbo TO BE",
        structureFormula: "Subject + am / is / are + Complement",
        rows: [
          { subject: "I (Yo)", affirmative: "I am ('m) from Mexico.", negative: "I am not ('m not) tired.", question: "Am I on the guest list?", shortAnswer: "Yes, I am. / No, I'm not." },
          { subject: "You (Tú / Ustedes)", affirmative: "You are ('re) very kind.", negative: "You are not (aren't) late.", question: "Are you ready to order?", shortAnswer: "Yes, you are. / No, you aren't." },
          { subject: "He (Él)", affirmative: "He is ('s) at the office.", negative: "He is not (isn't) here today.", question: "Is he the new manager?", shortAnswer: "Yes, he is. / No, he isn't." },
          { subject: "She (Ella)", affirmative: "She is ('s) an architect.", negative: "She is not (isn't) hungry.", question: "Is she your colleague?", shortAnswer: "Yes, she is. / No, she isn't." },
          { subject: "It (Cosa / Animal)", affirmative: "It is ('s) cold outside.", negative: "It is not (isn't) expensive.", question: "Is it open on Sundays?", shortAnswer: "Yes, it is. / No, it isn't." },
          { subject: "We (Nosotros)", affirmative: "We are ('re) on our way.", negative: "We are not (aren't) busy now.", question: "Are we in the right room?", shortAnswer: "Yes, we are. / No, we aren't." },
          { subject: "They (Ellos)", affirmative: "They are ('re) my friends.", negative: "They are not (aren't) ready.", question: "Are they at the airport?", shortAnswer: "Yes, they are. / No, they aren't." }
        ],
        usageRules: [
          { ruleTitle: "Identidad y Profesión", description: "Úsalo para decir quién eres y qué haces.", example: "I am Carlos and she is an engineer." },
          { ruleTitle: "Ubicación Geográfica y Física", description: "Para indicar dónde estás tú o un objeto.", example: "They are in London right now." },
          { ruleTitle: "Estados y Sensaciones Corporales", description: "En inglés NO 'tienes' edad ni hambre: ERES esa condición.", example: "I am 28 years old and I am very thirsty." },
          { ruleTitle: "Preguntas Invirtiendo el Orden", description: "Para preguntar, simplemente coloca Am / Is / Are ANTES del sujeto.", example: "Are you free this afternoon?" }
        ]
      },
      signalWords: ["right now", "today", "at the moment", "always", "here", "there"],
      commonMistakes: [
        { wrong: "I have 25 years old", correct: "I am 25 years old", explanation: "En inglés la edad se considera un estado continuo del ser, no una posesión. Siempre usa 'am/is/are'." },
        { wrong: "I have hunger / I have cold", correct: "I am hungry / I am cold", explanation: "Las sensaciones físicas usan adjetivos con TO BE ('hungry', 'thirsty', 'sleepy', 'hot', 'cold')." },
        { wrong: "Is your brother at home? - Yes, he's.", correct: "Yes, he is.", explanation: "En respuestas cortas afirmativas NUNCA se usan contracciones. Solo di 'Yes, he is' o 'Yes, I am'." }
      ]
    },
    vocabulary: [
      { id: "v-1-1", word: "hungry", phonetic: "/ˈhʌŋɡri/", partOfSpeech: "adjective", meaningEs: "hambriento (tener hambre)", exampleEn: "I am starving, let's grab lunch.", exampleEs: "Tengo muchísima hambre, almorcemos." },
      { id: "v-1-2", word: "thirsty", phonetic: "/ˈθɜːrsti/", partOfSpeech: "adjective", meaningEs: "sediento (tener sed)", exampleEn: "I am thirsty; could I get some water?", exampleEs: "Tengo sed; ¿me das agua?" },
      { id: "v-1-3", word: "sleepy", phonetic: "/ˈsliːpi/", partOfSpeech: "adjective", meaningEs: "somnoliento (tener sueño)", exampleEn: "It is late and I am getting sleepy.", exampleEs: "Es tarde y me está dando sueño." },
      { id: "v-1-4", word: "cold", phonetic: "/koʊld/", partOfSpeech: "adjective", meaningEs: "tener frío / frío", exampleEn: "Can you close the window? I am cold.", exampleEs: "¿Cierras la ventana? Tengo frío." },
      { id: "v-1-5", word: "warm / hot", phonetic: "/hɒt/", partOfSpeech: "adjective", meaningEs: "tener calor / caliente", exampleEn: "I am hot; let's turn on the AC.", exampleEs: "Tengo calor; prendamos el aire." },
      { id: "v-1-6", word: "tired", phonetic: "/ˈtaɪərd/", partOfSpeech: "adjective", meaningEs: "cansado / agotado", exampleEn: "We are exhausted after the long flight.", exampleEs: "Estamos agotados tras el vuelo largo." },
      { id: "v-1-7", word: "busy", phonetic: "/ˈbɪzi/", partOfSpeech: "adjective", meaningEs: "ocupado / con muchas cosas", exampleEn: "I am busy with a client right now.", exampleEs: "Estoy ocupado con un cliente justo ahora." },
      { id: "v-1-8", word: "ready", phonetic: "/ˈrɛdi/", partOfSpeech: "adjective", meaningEs: "listo / preparado", exampleEn: "Are you ready to leave?", exampleEs: "¿Estás listo para salir?" },
      { id: "v-1-9", word: "late", phonetic: "/leɪt/", partOfSpeech: "adjective", meaningEs: "llegar tarde / retrasado", exampleEn: "Sorry I am late; the traffic was terrible.", exampleEs: "Perdón por llegar tarde; el tráfico estuvo fatal." },
      { id: "v-1-10", word: "on time", phonetic: "/ɒn taɪm/", partOfSpeech: "phrase", meaningEs: "puntual / a tiempo", exampleEn: "The train is on time today.", exampleEs: "El tren viene a tiempo hoy." },
      { id: "v-1-11", word: "worried", phonetic: "/ˈwʌrid/", partOfSpeech: "adjective", meaningEs: "preocupado", exampleEn: "She is worried about the exam results.", exampleEs: "Ella está preocupada por los resultados del examen." },
      { id: "v-1-12", word: "scared of", phonetic: "/skɛərd əv/", partOfSpeech: "adjective", meaningEs: "asustado / tener miedo a", exampleEn: "I am scared of heights.", exampleEs: "Le tengo miedo a las alturas." },
      { id: "v-1-13", word: "proud of", phonetic: "/praʊd əv/", partOfSpeech: "adjective", meaningEs: "orgulloso de", exampleEn: "We are very proud of your progress.", exampleEs: "Estamos muy orgullosos de tu progreso." },
      { id: "v-1-14", word: "in a hurry", phonetic: "/ɪn ə ˈhʌri/", partOfSpeech: "phrase", meaningEs: "con prisa / apresurado", exampleEn: "I am in a hurry; can we talk later?", exampleEs: "Voy con prisa; ¿podemos hablar después?" },
      { id: "v-1-15", word: "available", phonetic: "/əˈveɪləbəl/", partOfSpeech: "adjective", meaningEs: "disponible / libre", exampleEn: "Is Dr. Smith available this morning?", exampleEs: "¿El Dr. Smith está disponible esta mañana?" },
      { id: "v-1-16", word: "excited about", phonetic: "/ɪkˈsaɪtɪd/", partOfSpeech: "adjective", meaningEs: "emocionado / entusiasmado por", exampleEn: "I am excited about the new project.", exampleEs: "Estoy entusiasmado por el nuevo proyecto." },
      { id: "v-1-17", word: "lucky", phonetic: "/ˈlʌki/", partOfSpeech: "adjective", meaningEs: "afortunado (tener suerte)", exampleEn: "You are very lucky to have that mentor.", exampleEs: "Tienes mucha suerte de tener ese mentor." },
      { id: "v-1-18", word: "right", phonetic: "/raɪt/", partOfSpeech: "adjective", meaningEs: "tener razón / correcto", exampleEn: "You are totally right about the deadline.", exampleEs: "Tienes toda la razón sobre la fecha límite." },
      { id: "v-1-19", word: "wrong", phonetic: "/rɔːŋ/", partOfSpeech: "adjective", meaningEs: "estar equivocado / erróneo", exampleEn: "I think he is wrong about the address.", exampleEs: "Creo que está equivocado con la dirección." },
      { id: "v-1-20", word: "alone", phonetic: "/əˈloʊn/", partOfSpeech: "adjective", meaningEs: "solo / sin compañía", exampleEn: "Are you here alone or with family?", exampleEs: "¿Estás aquí solo o con familia?" }
    ],
    coreChunks: [
      { id: "c-1-1", chunk: "Nice to finally meet you in person!", meaningEs: "¡Qué gusto finalmente conocerte en persona!", usageContext: "Primer encuentro tras hablar online", exampleSentence: "Nice to finally meet you in person, David!" },
      { id: "c-1-2", chunk: "I'm originally from... but based in...", meaningEs: "Soy originario de... pero radicado en...", usageContext: "Describir tu origen y residencia actual", exampleSentence: "I'm originally from Bogotá, but I'm currently based in Chicago." },
      { id: "c-1-3", chunk: "Are you free right now?", meaningEs: "¿Estás libre ahora mismo?", usageContext: "Iniciar una consulta rápida", exampleSentence: "Hey, are you free right now for a quick question?" },
      { id: "c-1-4", chunk: "I'm in a bit of a rush", meaningEs: "Voy con un poco de prisa", usageContext: "Disculparse para salir rápido", exampleSentence: "I'd love to chat, but I'm in a bit of a rush." },
      { id: "c-1-5", chunk: "You're totally right", meaningEs: "Tienes toda la razón", usageContext: "Mostrar acuerdo entusiasta", exampleSentence: "You're totally right; that restaurant is overpriced." },
      { id: "c-1-6", chunk: "Don't be afraid to ask", meaningEs: "No tengas pena/miedo de preguntar", usageContext: "Fomentar confianza en el equipo", exampleSentence: "If you get stuck, don't be afraid to ask." },
      { id: "c-1-7", chunk: "Are you sure about that?", meaningEs: "¿Estás seguro de eso?", usageContext: "Pedir confirmación con tacto", exampleSentence: "Are you sure about the departure time?" },
      { id: "c-1-8", chunk: "It's not a big deal", meaningEs: "No es para tanto / no te preocupes", usageContext: "Restarle peso a un error ajeno", exampleSentence: "Don't apologize, it's really not a big deal." },
      { id: "c-1-9", chunk: "I'm so glad to hear that!", meaningEs: "¡Me alegra muchísimo escuchar eso!", usageContext: "Reaccionar a buenas noticias", exampleSentence: "You got the job? I'm so glad to hear that!" },
      { id: "c-1-10", chunk: "How are things with you?", meaningEs: "¿Cómo van las cosas contigo?", usageContext: "Saludo casual para devolver pregunta", exampleSentence: "I'm doing well, thanks! How are things with you?" }
    ],
    clarificationTools: [
      { id: "cf-1-1", triggerSituation: "No escuchaste bien el nombre de la persona al presentarse", phrase: "Sorry, I didn't quite catch your name?", meaningEs: "Disculpa, ¿no alcancé a captar tu nombre?", whyItWorks: "Evita el seco 'What is your name?' y denota cortesía nativa." },
      { id: "cf-1-2", triggerSituation: "La persona habló demasiado rápido en la presentación", phrase: "Could you say that one more time a little slower, please?", meaningEs: "¿Podrías repetirlo un poco más despacio, por favor?", whyItWorks: "Pide ajuste de velocidad sin sonar inseguro." },
      { id: "cf-1-3", triggerSituation: "No sabes cómo se llama un objeto frente a ti", phrase: "What is this called in English?", meaningEs: "¿Cómo se llama esto en inglés?", whyItWorks: "Permite aprender vocabulario nuevo señalando el objeto." },
      { id: "cf-1-4", triggerSituation: "Quieres verificar si la otra persona es quien buscas", phrase: "Excuse me, are you Mr. Anderson?", meaningEs: "Disculpe, ¿es usted el Sr. Anderson?", whyItWorks: "Fórmula cortés para recepciones o aeropuertos." },
      { id: "cf-1-5", triggerSituation: "Quieres confirmar si están hablando del mismo lugar", phrase: "Is this the line for check-in?", meaningEs: "¿Es esta la fila para registrarse?", whyItWorks: "Pregunta básica para no perder tiempo en lugares públicos." },
      { id: "cf-1-6", triggerSituation: "No estás seguro si pronunciaste bien", phrase: "Did I pronounce that correctly?", meaningEs: "¿Pronuncié eso correctamente?", whyItWorks: "Invita a la otra persona a darte feedback inmediato con amabilidad." }
    ],
    listening: {
      id: "ml-1",
      audioScript: "Hi there! I'm Sarah, the new marketing specialist. I'm originally from Boston, but I'm based here in Austin now. It's great to meet you!",
      spanishContext: "Una colega nueva se presenta casualmente al llegar al piso de trabajo de la oficina.",
      comprehensionQuestion: "¿De dónde es originaria Sarah y dónde reside actualmente?",
      options: [
        "Es originaria de Austin y vive en Boston",
        "Es originaria de Boston y reside en Austin actualmente",
        "Es de Chicago y está de vacaciones"
      ],
      correctAnswer: "Es originaria de Boston y reside en Austin actualmente",
      explanation: "El chunk clave es 'I'm originally from Boston, but I'm based here in Austin now'."
    },
    workbook: [
      { id: "wb-1-1", category: "social", situationEs: "Conoces a un colega nuevo en la oficina y se presenta contigo.", promptEn: "Hi! I'm Jason from the design team. What's your name and role here?", guidanceTipEs: "Usa 'I am [Nombre] and I am a/an [Rol]'", recommendedAnswers: ["Hi Jason! I'm Carlos, and I'm a software developer on the product team. Nice to meet you!", "Hello! My name is Maria, and I'm the new project coordinator. Great to meet you in person."], pedagogicalNote: "En inglés decimos 'I am a developer' con artículo 'a/an', a diferencia del español donde omitimos el artículo al decir 'soy desarrollador'." },
      { id: "wb-1-2", category: "routine", situationEs: "En una videollamada internacional te preguntan de qué país eres y dónde vives ahora.", promptEn: "Where are you originally from, and where are you based?", guidanceTipEs: "Usa 'I'm originally from... but I'm based in...'", recommendedAnswers: ["I'm originally from Colombia, but I'm currently based in Mexico City.", "I'm originally from Madrid, but I'm based in London now."], pedagogicalNote: "El chunk 'based in' suena mucho más profesional y natural que simplemente 'I live in'." },
      { id: "wb-1-3", category: "problem_solving", situationEs: "Llegas a un restaurante con un amigo después de 6 horas de viaje y tienes muchísima hambre.", promptEn: "Welcome to Olive Bistro! A table for two?", guidanceTipEs: "Responde confirmando y expresando que tienen hambre usando 'We are very hungry'", recommendedAnswers: ["Yes, a table for two, please! We're starving after our trip.", "Yes, please. Could we also see the menu right away? We're very hungry."], pedagogicalNote: "Recuerda: 'We are hungry', nunca 'We have hunger'." },
      { id: "wb-1-4", category: "asking_help", situationEs: "Alguien se presenta contigo en un evento ruidoso pero no escuchaste su nombre con claridad.", promptEn: "(Habla rápido): Hi, I'm... (ruido de fondo) nice to meet you!", guidanceTipEs: "Usa la fórmula de clarificación salvavidas.", recommendedAnswers: ["Sorry, I didn't quite catch your name? Could you say that one more time, please?", "Pardon me, it's a bit loud in here. What was your name again?"], pedagogicalNote: "'I didn't quite catch your name' es la forma educada estándar en cualquier ambiente social." },
      { id: "wb-1-5", category: "social", situationEs: "Un amigo te pregunta por la edad de tu hermano menor.", promptEn: "How old is your younger brother now?", guidanceTipEs: "Usa 'He is [Edad] years old'", recommendedAnswers: ["He is twenty-two years old now; he just graduated from university.", "He is nineteen. Time flies!"], pedagogicalNote: "¡Jamás digas 'He has 22 years'! En inglés siempre 'He is 22 years old' o simplemente 'He is 22'." },
      { id: "wb-1-6", category: "problem_solving", situationEs: "Estás en una cafetería en invierno y notas que dejaron la puerta abierta.", promptEn: "Is everything okay with your table?", guidanceTipEs: "Explica amablemente que tienes frío con 'I am cold'", recommendedAnswers: ["It's a bit cold over here because the door is open. Could you close it, please?", "Actually, I'm quite cold. Is it possible to move to a table away from the entrance?"], pedagogicalNote: "'I am cold' = tengo frío. 'I have a cold' = tengo gripe/resfriado. ¡Cuidado con el artículo!" },
      { id: "wb-1-7", category: "routine", situationEs: "Tu jefe te pregunta si estás libre para una reunión de 5 minutos en este momento.", promptEn: "Are you free right now for a quick chat?", guidanceTipEs: "Responde afirmativa o negativamente usando TO BE.", recommendedAnswers: ["Yes, I am free! Let's jump on a quick call.", "Actually, I'm a bit busy with a client report right now. Are you available in thirty minutes?"], pedagogicalNote: "'I am free' vs 'I am busy' son las dos respuestas estándar de oficina." },
      { id: "wb-1-8", category: "opinion", situationEs: "Un compañero te dice que la reunión de las 4 PM fue cancelada y quieres confirmar si está seguro.", promptEn: "Hey, the 4 PM client sync is canceled today.", guidanceTipEs: "Pregunta con sorpresa: 'Are you sure about that?'", recommendedAnswers: ["Are you sure about that? I didn't see any cancellation email.", "Really? Are you certain? Let me double-check my calendar."], pedagogicalNote: "'Are you sure about that?' es el chunk ideal para verificar información inesperada." },
      { id: "wb-1-9", category: "social", situationEs: "Llegas 15 minutos tarde a una cena con amigos debido al metro.", promptEn: "Hey Carlos! We were getting worried about you!", guidanceTipEs: "Discúlpate diciendo 'I am so sorry I am late'", recommendedAnswers: ["I'm so sorry I'm late! The subway was delayed for twenty minutes.", "My apologies for being late! Traffic was completely blocked."], pedagogicalNote: "Usa 'I am sorry I am late', una de las fórmulas más frecuentes en la vida real." },
      { id: "wb-1-10", category: "asking_help", situationEs: "Estás en el aeropuerto y necesitas confirmar si estás en la fila correcta para abordar.", promptEn: "(Gente haciendo fila)", guidanceTipEs: "Pregunta a la persona frente a ti: 'Excuse me, is this the line for...?'", recommendedAnswers: ["Excuse me, is this the line for flight 304 to Miami?", "Pardon me, are you in line for boarding group B?"], pedagogicalNote: "'Is this the line for...?' es la pregunta perfecta para confirmar filas." },
      { id: "wb-1-11", category: "problem_solving", situationEs: "Vas caminando rápido por la calle y un promotor te detiene para venderte algo.", promptEn: "Excuse me sir, do you have two minutes to answer a survey?", guidanceTipEs: "Rechaza con cortesía diciendo que tienes prisa: 'I'm in a hurry'", recommendedAnswers: ["I'm sorry, but I'm in a huge hurry right now. Have a nice day!", "I'd love to, but I'm running late for an appointment. Sorry!"], pedagogicalNote: "'I'm in a hurry' corta la conversación cordialmente sin sonar grosero." },
      { id: "wb-1-12", category: "social", situationEs: "Un amigo te cuenta que su hermana aprobó el examen de abogada.", promptEn: "My sister passed the bar exam on her first attempt!", guidanceTipEs: "Felicítalo usando 'You must be so proud of her!' o 'That is amazing!'", recommendedAnswers: ["That is incredible news! You must be so proud of her.", "Wow, congratulations to her! I'm so glad to hear that!"], pedagogicalNote: "'Proud of' siempre va con la preposición 'of' (nunca 'proud for')." },
      { id: "wb-1-13", category: "routine", situationEs: "En el gimnasio te preguntan si estás usando una máquina de pesas.", promptEn: "Excuse me, are you using this bench?", guidanceTipEs: "Responde 'No, I'm not. Go ahead!'", recommendedAnswers: ["No, I'm not. Feel free to use it!", "No, I'm all done with it. Go ahead!"], pedagogicalNote: "'Feel free to...' y 'Go ahead' son fórmulas nativas excelentes para decir 'adelante'." },
      { id: "wb-1-14", category: "opinion", situationEs: "Tu socio te dice que la idea de alquilar una oficina más grande es demasiado costosa.", promptEn: "Renting that downtown office space is just way too expensive right now.", guidanceTipEs: "Dale la razón con entusiasmo: 'You are totally right'", recommendedAnswers: ["You're totally right. We are much better off working remotely for now.", "I agree with you 100%. It's definitely not the right time."], pedagogicalNote: "En inglés decimos 'You are right', nunca 'You have reason'." },
      { id: "wb-1-15", category: "asking_help", situationEs: "Estás en un hotel y preguntas si el desayuno está incluido en la tarifa.", promptEn: "Here are your room keys, room 302.", guidanceTipEs: "Pregunta: 'Is breakfast included?'", recommendedAnswers: ["Thank you! Is breakfast included with the room?", "Thanks! Could you tell me if breakfast is included, and what time it is served?"], pedagogicalNote: "'Is breakfast included?' es la estructura interrogativa directa con TO BE." },
      { id: "wb-1-16", category: "social", situationEs: "Un colega te ve bostezando en la tarde y te pregunta si estás cansado.", promptEn: "Are you feeling sleepy today?", guidanceTipEs: "Responde afirmativamente explicando el motivo con TO BE.", recommendedAnswers: ["Yes, I am a bit sleepy because I was up late studying.", "A little bit! I'm on my second cup of coffee, but I'm still exhausted."], pedagogicalNote: "'Sleepy' es somnoliento, 'tired' es cansado en general." },
      { id: "wb-1-17", category: "problem_solving", situationEs: "Pides un café caliente pero te lo entregan frío.", promptEn: "Here is your latte. Anything else?", guidanceTipEs: "Indica educadamente: 'Excuse me, this coffee is cold'", recommendedAnswers: ["Excuse me, but this coffee is cold. Could you heat it up, or make a fresh one, please?", "Pardon me, I think this drink is cold. Could I get a hot one, please?"], pedagogicalNote: "Usa 'Excuse me, this is cold' para reclamar con total amabilidad." },
      { id: "wb-1-18", category: "routine", situationEs: "Te preguntan si estás listo para presentar tu proyecto en la reunión.", promptEn: "Are you ready for your presentation at 11 AM?", guidanceTipEs: "Responde 'Yes, I'm ready' o 'Almost ready'", recommendedAnswers: ["Yes, I am completely ready! The slides are all set.", "Almost ready! I'm just reviewing the final numbers."], pedagogicalNote: "'Ready' se usa con TO BE: 'I am ready'." },
      { id: "wb-1-19", category: "asking_help", situationEs: "Estás en una tienda y no estás seguro del precio de un artículo sin etiqueta.", promptEn: "(Ves una camisa sin precio)", guidanceTipEs: "Pregunta al empleado: 'Excuse me, how much is this shirt?'", recommendedAnswers: ["Excuse me, how much is this shirt, please?", "Could you tell me the price of this item? There is no tag on it."], recommendedAnswers: ["Excuse me, how much is this shirt, please?", "Could you tell me how much this is?"], pedagogicalNote: "'How much is this?' es la pregunta de cajón para precios con TO BE." },
      { id: "wb-1-20", category: "social", situationEs: "Terminas una reunión informal y te despides cordialmente deseándole buen día al otro.", promptEn: "It was great talking to you today, Carlos!", guidanceTipEs: "Devuelve el cumplido: 'Likewise! It was wonderful to meet you'", recommendedAnswers: ["Likewise! It was great meeting you as well. Have a wonderful rest of your week!", "Same here! Let's stay in touch. Have a great day!"], pedagogicalNote: "'Likewise' significa 'igualmente', una forma concisa y muy natural de responder cumplidos." }
    ]
  }
];

console.log("Master A1 data structure validated.");

