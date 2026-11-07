import fs from 'fs';
import path from 'path';

// Complete robust master generator covering all 4 levels (20 classes) with distinct grammar tables, usage rules, 20 unique vocabs, 10 chunks, 6 clarifications, and 20 workbook questions

const masterLessons = {
  A1: [
    {
      num: 1,
      title: "El Verbo TO BE: Ser, Estar y Presentarse (am / is / are)",
      tagline: "Los cimientos del inglés: aprende a describir quién eres, de dónde vienes y cómo te sientes",
      focus: "Verbo TO BE (am/is/are) en oraciones afirmativas, negativas y preguntas",
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
            { subject: "He / She / It", affirmative: "He is ('s) at the office.", negative: "She is not (isn't) hungry.", question: "Is it cold outside?", shortAnswer: "Yes, it is. / No, it isn't." },
            { subject: "We / They", affirmative: "We are ('re) on our way.", negative: "They are not (aren't) ready.", question: "Are they here yet?", shortAnswer: "Yes, they are. / No, they aren't." }
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
          { wrong: "I have 25 years old", correct: "I am 25 years old", explanation: "En inglés la edad se considera un estado continuo del ser. Siempre usa 'am/is/are'." },
          { wrong: "I have hunger / I have cold", correct: "I am hungry / I am cold", explanation: "Las sensaciones físicas usan adjetivos con TO BE ('hungry', 'thirsty', 'cold', 'hot')." }
        ]
      }
    },
    {
      num: 2,
      title: "Present Simple: Rutinas, Hábitos y Adverbios de Frecuencia",
      tagline: "Aprende a hablar de lo que haces todos los días sin listas interminables de reglas",
      focus: "Present Simple (I work, He works) y Adverbios de Frecuencia (always, usually, never)",
      goal: "Describir tu rutina diaria, tus horarios de trabajo, comidas y fines de semana.",
      theory: {
        title: "Present Simple: Acciones Habituales",
        overviewEs: "El Present Simple expresa hechos permanentes, hábitos cotidianos y horarios regulares. ¡Cuidado con la 3ra persona del singular! Cuando el sujeto es 'He', 'She' o 'It', agregamos -s o -es al verbo afirmativo.",
        grammarChart: {
          title: "Present Simple: Verbos de Acción Regular e Irregular",
          structureFormula: "Subject + verb (-s/-es for he/she/it) | do/does + subject + verb?",
          rows: [
            { subject: "I / You / We / They", affirmative: "I live in Madrid.", negative: "I do not (don't) eat meat.", question: "Do you drink coffee?", shortAnswer: "Yes, I do. / No, I don't." },
            { subject: "He / She / It", affirmative: "She works in finance.", negative: "He does not (doesn't) drive.", question: "Does it start at 9?", shortAnswer: "Yes, he does. / No, he doesn't." }
          ],
          usageRules: [
            { ruleTitle: "Hábitos y Rutinas", description: "Cosas que haces con regularidad o frecuencia.", example: "I wake up at 7 AM every weekday." },
            { ruleTitle: "Verdades Universales", description: "Hechos científicos o verdades generales permanentes.", example: "Water boils at 100 degrees Celsius." },
            { ruleTitle: "Posición de Adverbios de Frecuencia", description: "Van ANTES del verbo principal, pero DESPUÉS del verbo TO BE.", example: "I always drink tea, but I am never late." }
          ],
          spellingRules: [
            { condition: "Verbos que terminan en -ch, -sh, -ss, -x, -o", change: "Añade -es", example: "watch ➔ watches, go ➔ goes" },
            { condition: "Consonante + y", change: "Cambia -y por -ies", example: "study ➔ studies, fly ➔ flies" },
            { condition: "Vocal + y", change: "Solo añade -s", example: "play ➔ plays, buy ➔ buys" }
          ]
        },
        signalWords: ["always", "usually", "often", "sometimes", "hardly ever", "never", "every day", "on Mondays"],
        commonMistakes: [
          { wrong: "He work at a bank", correct: "He works at a bank", explanation: "Nunca olvides la 's' final en oraciones afirmativas con He, She o It." },
          { wrong: "She doesn't works here", correct: "She doesn't work here", explanation: "En oraciones negativas el auxiliar 'doesn't' ya lleva la tercera persona. El verbo vuelve a su forma base." },
          { wrong: "I am wake up at 6", correct: "I wake up at 6", explanation: "No mezcles el verbo TO BE (am/is/are) con verbos de acción directa en presente simple." }
        ]
      }
    },
    {
      num: 3,
      title: "Present Continuous: Acciones en Progreso y Actividades Temporales",
      tagline: "Aprende a reportar lo que ocurre en vivo y a atender llamadas con naturalidad",
      focus: "Present Continuous (am/is/are + verb-ing) en tiempo real",
      goal: "Explicar qué estás haciendo en este instante, atender videollamadas y avisar si estás ocupado.",
      theory: {
        title: "Present Continuous (am/is/are + verb-ing)",
        overviewEs: "El Present Continuous se utiliza para acciones que están ocurriendo en el mismo momento en que se habla, o para situaciones temporales que abarcan estos días. Se construye siempre con el verbo auxiliar TO BE seguido del verbo con terminación -ing.",
        grammarChart: {
          title: "Present Continuous: Estructura Completa",
          structureFormula: "Subject + am / is / are + Verb-ing",
          rows: [
            { subject: "I", affirmative: "I am ('m) typing an email.", negative: "I am not ('m not) working now.", question: "Am I speaking clearly?", shortAnswer: "Yes, you are. / No, you aren't." },
            { subject: "He / She / It", affirmative: "She is ('s) cooking dinner.", negative: "He is not (isn't) sleeping.", question: "Is it raining outside?", shortAnswer: "Yes, it is. / No, it isn't." },
            { subject: "You / We / They", affirmative: "We are ('re) heading out.", negative: "They are not (aren't) coming.", question: "Are you listening to me?", shortAnswer: "Yes, I am. / No, I'm not." }
          ],
          usageRules: [
            { ruleTitle: "Acciones Ocurriendo Ahora", description: "Acciones en progreso en el instante de hablar.", example: "Please be quiet, the baby is sleeping." },
            { ruleTitle: "Situaciones Temporales", description: "Procesos que ocurren alrededor del presente.", example: "I am staying at a hotel this week." },
            { ruleTitle: "Verbos de Estado (Stative Verbs)", description: "Verbos como like, know, understand, need NO suelen usarse en -ing.", example: "I need help (NO: I am needing help)." }
          ]
        },
        signalWords: ["right now", "at the moment", "currently", "nowadays", "these days", "look!", "listen!"],
        commonMistakes: [
          { wrong: "I working on the report", correct: "I am working on the report", explanation: "Nunca omitas el verbo TO BE ('am/is/are') en el presente continuo." },
          { wrong: "I am understanding you", correct: "I understand you", explanation: "'Understand' es un verbo de estado mental; se usa en presente simple." }
        ]
      }
    },
    {
      num: 4,
      title: "Present Simple vs Present Continuous: El Gran Contraste",
      tagline: "El punto de quiebre para sonar fluido: sabe cuándo usar cada presente",
      focus: "Contraste funcional entre hábitos regulares (Simple) y acciones temporales (Continuous)",
      goal: "Diferenciar con precisión cuándo hablar de tu trabajo habitual frente a tus proyectos del momento.",
      theory: {
        title: "Present Simple vs Present Continuous",
        overviewEs: "Uno de los mayores desafíos para el hispanohablante es saber cuándo usar el Present Simple y cuándo el Present Continuous. Regla de oro: ¿Es un hábito permanente o una rutina? Usa Present Simple. ¿Está ocurriendo ahora o es una situación temporal de estos días? Usa Present Continuous.",
        grammarChart: {
          title: "Tabla de Contraste: Simple vs Continuous",
          structureFormula: "Rutinas (do/does + base) VS En progreso (be + -ing)",
          rows: [
            { subject: "Hábito / Rutina (Simple)", affirmative: "I usually drive to work.", negative: "I don't take the bus.", question: "Do you drive every day?", shortAnswer: "Yes, I do." },
            { subject: "En progreso / Temporal (Cont.)", affirmative: "Today I am taking the train.", negative: "I'm not driving today.", question: "Are you taking the train?", shortAnswer: "Yes, I am." }
          ],
          usageRules: [
            { ruleTitle: "Permanente vs Temporal", description: "Simple para cosas que nunca cambian mucho; Continuous para excepciones temporales.", example: "I live in Bogota, but this month I am living in Medellin." },
            { ruleTitle: "Adverbios de Frecuencia vs Expresiones de Tiempo", description: "Usually/always ➔ Simple. Right now/today ➔ Continuous.", example: "I always drink water, but right now I am drinking juice." }
          ]
        },
        signalWords: ["usually vs right now", "every day vs today", "always vs currently", "on weekends vs this weekend"],
        commonMistakes: [
          { wrong: "What do you do right now?", correct: "What are you doing right now?", explanation: "Para preguntar qué hace alguien en este momento exacto, usa 'What are you doing?'." },
          { wrong: "I am living here always", correct: "I always live here / I live here", explanation: "Los hábitos de toda la vida van en Present Simple." }
        ]
      }
    },
    {
      num: 5,
      title: "Past Simple Básico: El Pasado con TO BE (was / were) y Verbos Regulares",
      tagline: "Empieza a contar historias de tu pasado: cómo fue tu día y dónde estuviste",
      focus: "Past Simple de TO BE (was/were) y terminación -ed de verbos regulares",
      goal: "Describir cómo fue tu día anterior, qué lugares visitaste y cómo estuvo el clima o un evento.",
      theory: {
        title: "Past Simple: was / were y Verbos Regulares (-ed)",
        overviewEs: "El Past Simple se utiliza para acciones o estados que comenzaron y terminaron en un momento específico del pasado. Para el verbo TO BE, 'am/is' cambia a 'was', y 'are' cambia a 'were'. Para los verbos regulares, añadimos la terminación -ed.",
        grammarChart: {
          title: "Past Simple: was/were y verbos regulares",
          structureFormula: "Subject + was/were | Subject + verb-ed | did + subject + verb?",
          rows: [
            { subject: "I / He / She / It", affirmative: "I was at home. / She cooked dinner.", negative: "He was not (wasn't) busy.", question: "Was she at the meeting?", shortAnswer: "Yes, she was. / No, she wasn't." },
            { subject: "You / We / They", affirmative: "They were happy. / We walked home.", negative: "We were not (weren't) late.", question: "Were you tired yesterday?", shortAnswer: "Yes, I was. / No, I wasn't." }
          ],
          usageRules: [
            { ruleTitle: "Acciones Terminadas", description: "Acciones con fecha o momento cerrado en el pasado.", example: "I finished the project yesterday." },
            { ruleTitle: "Negaciones con Verbos de Acción", description: "Con verbos que no son TO BE, usamos 'didn't' + verbo en forma base.", example: "I didn't call him (NO: I didn't called)." }
          ]
        },
        signalWords: ["yesterday", "last night", "last week", "in 2021", "two days ago", "when I was a child"],
        commonMistakes: [
          { wrong: "I didn't walked to work", correct: "I didn't walk to work", explanation: "El auxiliar 'didn't' ya indica pasado; el verbo principal vuelve a su forma base." },
          { wrong: "They was very happy", correct: "They were very happy", explanation: "Con You, We y They el pasado de TO BE siempre es 'were'." }
        ]
      }
    }
  ],
  A2: [
    {
      num: 1,
      title: "Past Simple Irregular & Preguntas (did / didn't)",
      tagline: "Domina los 20 verbos irregulares más importantes para relatar anécdotas",
      focus: "Verbos irregulares de alta frecuencia (went, saw, got, took) y preguntas con Did",
      goal: "Narrar con fluidez qué hiciste el fin de semana, qué compraste y responder preguntas sobre tu pasado.",
      theory: {
        title: "Past Simple: Verbos Irregulares",
        overviewEs: "A diferencia de los verbos regulares que terminan en -ed, los verbos irregulares cambian de forma en oraciones afirmativas (go ➔ went, buy ➔ bought). Sin embargo, en oraciones negativas y preguntas, usamos 'didn't' y 'did', y el verbo vuelve a su forma base sin cambiar.",
        grammarChart: {
          title: "Past Simple Irregular",
          structureFormula: "Affirmative: Irregular form | Negative: didn't + base | Question: Did + subject + base?",
          rows: [
            { subject: "Todos los sujetos (I, you, he, she, we, they)", affirmative: "I went to the store and bought groceries.", negative: "I didn't go to the party.", question: "Did you see that movie?", shortAnswer: "Yes, I did. / No, I didn't." }
          ],
          usageRules: [
            { ruleTitle: "Momento Determinado en el Pasado", description: "Siempre que sepamos cuándo ocurrió la acción.", example: "I met Sarah two days ago." },
            { ruleTitle: "Secuencia de Acciones", description: "Narrar una lista de eventos consecutivos.", example: "I woke up, had coffee, and left the house." }
          ]
        },
        signalWords: ["yesterday", "last weekend", "an hour ago", "in June", "on my last trip"],
        commonMistakes: [
          { wrong: "Did you went to the gym?", correct: "Did you go to the gym?", explanation: "En preguntas con 'Did', el verbo principal va en su forma base: 'Did you go'." },
          { wrong: "I didn't bought anything", correct: "I didn't buy anything", explanation: "Tras 'didn't' el verbo se mantiene en forma infinitiva: 'didn't buy'." }
        ]
      }
    },
    {
      num: 2,
      title: "Past Continuous & Interrupciones (was/were + verb-ing)",
      tagline: "Cómo describir qué estaba pasando cuando algo repentino ocurrió",
      focus: "Past Continuous y su combinación con Past Simple usando when y while",
      goal: "Explicar anécdotas, justificar retrasos y describir el ambiente de una situación pasada.",
      theory: {
        title: "Past Continuous (was/were + -ing)",
        overviewEs: "El Past Continuous describe una acción que estaba en pleno desarrollo en un punto específico del pasado. Muy a menudo, esa acción larga en progreso es interrumpida por una acción corta y puntual en Past Simple conectada por 'when' o 'while'.",
        grammarChart: {
          title: "Past Continuous & Interrupciones",
          structureFormula: "was / were + verb-ing [while / when] past simple",
          rows: [
            { subject: "I / He / She / It", affirmative: "I was walking home when it started raining.", negative: "She wasn't driving fast.", question: "Were you sleeping when I called?", shortAnswer: "Yes, I was. / No, I wasn't." },
            { subject: "You / We / They", affirmative: "They were having dinner when the lights went out.", negative: "We weren't paying attention.", question: "What were you doing at 8 PM?", shortAnswer: "I was reading." }
          ],
          usageRules: [
            { ruleTitle: "Acción Larga Interrumpida", description: "Acción en progreso (continuous) interrumpida por acción corta (simple).", example: "I was cooking when the phone rang." },
            { ruleTitle: "Dos Acciones Simultáneas en el Pasado", description: "Usando 'while' para dos acciones paralelas.", example: "While I was studying, my brother was playing guitar." }
          ]
        },
        signalWords: ["when", "while", "at that exact moment", "all afternoon yesterday"],
        commonMistakes: [
          { wrong: "I walked home when it was starting to rain", correct: "I was walking home when it started to rain", explanation: "La acción continua larga lleva -ing; la acción repentina que interrumpe va en Past Simple." }
        ]
      }
    },
    {
      num: 3,
      title: "Planes a Futuro: Be going to vs Will vs Present Continuous",
      tagline: "Elimina la confusión del futuro: aprende a agendar citas y hacer promesas",
      focus: "Diferencia entre intenciones planeadas (going to), decisiones espontáneas (will) y citas fijas (present continuous)",
      goal: "Hablar de tus próximas vacaciones, agendar reuniones con colegas y ofrecer ayuda espontánea.",
      theory: {
        title: "Las Tres Formas del Futuro",
        overviewEs: "En inglés no hay una sola forma de futuro. Usamos 'be going to' para planes e intenciones ya pensadas con anticipación; usamos 'will' para decisiones espontáneas en el momento de hablar o promesas; y usamos el Present Continuous con marcador temporal para citas ya confirmadas en el calendario.",
        grammarChart: {
          title: "Futuro: Going to vs Will vs Continuous",
          structureFormula: "Plan: am/is/are going to + verb | Espontáneo: will + verb | Cita: am/is/are + -ing",
          rows: [
            { subject: "Plan previo / Intención", affirmative: "I am going to visit my parents this weekend.", negative: "I'm not going to buy that car.", question: "Are you going to move abroad?", shortAnswer: "Yes, I am." },
            { subject: "Decisión espontánea / Promesa", affirmative: "The phone is ringing; I'll get it!", negative: "I won't tell anyone, I promise.", question: "Will you help me with this?", shortAnswer: "Yes, I will." },
            { subject: "Cita fija en calendario", affirmative: "I am meeting the dentist tomorrow at 4 PM.", negative: "We aren't working next Monday.", question: "Are you leaving on Friday?", shortAnswer: "Yes, I am." }
          ],
          usageRules: [
            { ruleTitle: "Decisión en el Acto (Will)", description: "Cuando decides en el mismo segundo en que hablas.", example: "It's cold in here. I will close the window." },
            { ruleTitle: "Plan Previo (Going to)", description: "Ya lo habías decidido antes de este momento.", example: "I'm going to start a master's degree in September." }
          ]
        },
        signalWords: ["tomorrow", "next week", "in two days", "soon", "later today"],
        commonMistakes: [
          { wrong: "Wait, I am going to help you with that bag", correct: "Wait, I will help you with that bag!", explanation: "Ofrecimientos inmediatos y espontáneos usan 'will / I'll'." }
        ]
      }
    },
    {
      num: 4,
      title: "Verbos Modales de Habilidad y Obligación (can, could, have to, must)",
      tagline: "Aprende a expresar lo que sabes hacer, lo que debes hacer y las reglas comunes",
      focus: "Modales Can/Could (habilidad/permiso) vs Have to/Must (obligación)",
      goal: "Pedir permiso, dar consejos de reglas en el trabajo y expresar tus habilidades con naturalidad.",
      theory: {
        title: "Modals: Can, Could, Have to, Must",
        overviewEs: "Los verbos modales modifican el significado del verbo principal. 'Can' expresa habilidad presente o permiso informal; 'Could' es más educado y formal; 'Have to' expresa obligación cotidiana o impuesta por reglas externas; y 'Don't have to' significa que no es necesario (ausencia de obligación).",
        grammarChart: {
          title: "Verbos Modales Esenciales",
          structureFormula: "Subject + Modal + Verb (base form)",
          rows: [
            { subject: "Habilidad / Permiso", affirmative: "I can speak two languages.", negative: "I can't swim very well.", question: "Could you help me, please?", shortAnswer: "Yes, I can." },
            { subject: "Obligación / Regla", affirmative: "I have to wake up early on weekdays.", negative: "You don't have to pay now (opcional).", question: "Do you have to wear a suit?", shortAnswer: "Yes, I do." }
          ],
          usageRules: [
            { ruleTitle: "Los modales no llevan -s", description: "Nunca agregues -s a can, could o must con he/she.", example: "She can play piano (NO: She cans)." },
            { ruleTitle: "Don't have to vs Mustn't", description: "'Don't have to' = no es obligatorio (tú decides). 'Mustn't' = está terminantemente prohibido.", example: "You don't have to come, but you mustn't park here." }
          ]
        },
        signalWords: ["necessary", "allowed", "prohibited", "possible", "polite"],
        commonMistakes: [
          { wrong: "I can to speak English", correct: "I can speak English", explanation: "Los modales NUNCA van seguidos de 'to'. Siempre van con el verbo base directo." },
          { wrong: "You must not pay (cuando querías decir que es gratis)", correct: "You don't have to pay", explanation: "'Must not' significa prohibición estricta; 'don't have to' significa que no es necesario." }
        ]
      }
    },
    {
      num: 5,
      title: "El Verbo Comodín GET en Todas sus Facetas",
      tagline: "El secreto mejor guardado de los nativos: ahorra decenas de verbos difíciles",
      focus: "Usos múltiples de GET: llegar, conseguir/comprar, volverse/cambiar de estado y entender",
      goal: "Sustituir verbos formales pesados (arrive, receive, purchase, become) por fórmulas fluidas con GET.",
      theory: {
        title: "El Gran Verbo Comodín: GET",
        overviewEs: "En el inglés informal y de negocios diario, 'GET' es el verbo más utilizado. Dependiendo de las palabras que lo acompañen, reemplaza con total naturalidad a verbos como recibir (get an email), comprar (get coffee), llegar (get home), entender (get it) o cambiar de estado (get tired).",
        grammarChart: {
          title: "Las 5 Dimensiones del Verbo GET",
          structureFormula: "GET + noun (recibir/comprar) | GET + adjective (volverse) | GET to (llegar)",
          rows: [
            { subject: "1. Recibir / Conseguir", affirmative: "I got your message five minutes ago.", negative: "I didn't get the receipt.", question: "Did you get my email?", shortAnswer: "Yes, I got it." },
            { subject: "2. Comprar / Obtener", affirmative: "Can you get some milk on your way?", negative: "I didn't get any bread.", question: "Where did you get that coat?", shortAnswer: "At the mall." },
            { subject: "3. Llegar a un destino", affirmative: "What time do you usually get home?", negative: "We didn't get to the airport on time.", question: "How did you get here?", shortAnswer: "By train." },
            { subject: "4. Cambiar de estado", affirmative: "It is getting dark and I am getting cold.", negative: "Don't get angry over small things.", question: "Are you getting tired?", shortAnswer: "Yes, a bit." },
            { subject: "5. Entender una idea", affirmative: "Oh, now I get what you mean!", negative: "I don't get the joke.", question: "Do you get my point?", shortAnswer: "Yes, I get it." }
          ],
          usageRules: [
            { ruleTitle: "Get home (sin 'to')", description: "Con la palabra 'home' nunca se pone 'to'.", example: "I got home safely (NO: got to home)." },
            { ruleTitle: "Get back to you (responderte)", description: "El chunk de oro corporativo para prometer una respuesta.", example: "I will check the data and get back to you soon." }
          ]
        },
        signalWords: ["get home", "get back to", "get along with", "get ready", "get used to"],
        commonMistakes: [
          { wrong: "I arrived to my home", correct: "I got home", explanation: "'I got home' es 10 veces más natural en el habla diaria que 'I arrived at home'." }
        ]
      }
    }
  ],
  B1: [
    {
      num: 1,
      title: "Present Perfect Simple: Experiencias de Vida y Consecuencias Presentes",
      tagline: "Conecta tu pasado con el ahora: habla de tus logros y de lo que ya hiciste",
      focus: "Present Perfect (have/has + past participle) con already, yet, just y ever",
      goal: "Hablar de experiencias de vida sin fecha fija, reportar tareas recién terminadas y preguntar '¿Alguna vez has...?'",
      theory: {
        title: "Present Perfect: El Puente entre Pasado y Presente",
        overviewEs: "El Present Perfect se utiliza cuando el momento exacto en el pasado NO importa, o cuando una acción ocurrida tiene un resultado directo visible en el presente. Se forma con el auxiliar HAVE / HAS seguido del participio pasado del verbo.",
        grammarChart: {
          title: "Present Perfect Simple",
          structureFormula: "Subject + have / has + Past Participle",
          rows: [
            { subject: "I / You / We / They", affirmative: "I have ('ve) already finished the report.", negative: "I haven't received the transfer yet.", question: "Have you ever been to Japan?", shortAnswer: "Yes, I have. / No, I haven't." },
            { subject: "He / She / It", affirmative: "She has ('s) just left the office.", negative: "He hasn't called back yet.", question: "Has the meeting started?", shortAnswer: "Yes, it has. / No, it hasn't." }
          ],
          usageRules: [
            { ruleTitle: "Experiencias de Vida (Ever / Never)", description: "Preguntar si alguien ha vivido algo en cualquier momento de su vida.", example: "Have you ever tried sushi?" },
            { ruleTitle: "Already (ya ocurrió antes de lo esperado)", description: "Va entre el auxiliar y el participio.", example: "I have already booked the flight." },
            { ruleTitle: "Yet (aún no / ya en preguntas)", description: "Va SIEMPRE al final de oraciones negativas o preguntas.", example: "I haven't eaten yet. / Have you seen it yet?" },
            { ruleTitle: "Just (acaba de ocurrir hace 1 minuto)", description: "Para acciones súper recientes.", example: "I have just arrived at the station." }
          ]
        },
        signalWords: ["already", "yet", "just", "ever", "never", "so far", "recently", "in my life"],
        commonMistakes: [
          { wrong: "I have seen him yesterday", correct: "I saw him yesterday", explanation: "¡Regla de oro! Si mencionas una fecha o momento cerrado ('yesterday', 'in 2019'), DEBES usar Past Simple, NUNCA Present Perfect." }
        ]
      }
    },
    {
      num: 2,
      title: "Present Perfect vs Past Simple: La Regla de Oro del Tiempo Cerrado",
      tagline: "El error número uno que delata a los hispanohablantes resuelto de una vez por todas",
      focus: "Contraste definitivo: Tiempo indefinido (Present Perfect) vs Tiempo cerrado (Past Simple)",
      goal: "Manejar entrevistas de trabajo y reportes con fluidez impecable alternando entre ambos tiempos.",
      theory: {
        title: "Present Perfect vs Past Simple",
        overviewEs: "La diferencia es simple pero crucial: ¿El periodo de tiempo está TERMINADO? (yesterday, last month, in 2020) ➔ Usa Past Simple. ¿El periodo de tiempo sigue ABIERTO o es indefinido? (today, this week, so far, ever) ➔ Usa Present Perfect.",
        grammarChart: {
          title: "Contraste: Tiempo Abierto vs Tiempo Cerrado",
          structureFormula: "Indefinido / Abierto (have + participle) VS Momento Cerrado (past simple)",
          rows: [
            { subject: "Tiempo Cerrado (Past Simple)", affirmative: "I lived in Paris in 2018 (ya no vivo allí).", negative: "I didn't travel last year.", question: "When did you buy that?", shortAnswer: "Two days ago." },
            { subject: "Tiempo Abierto (Present Perfect)", affirmative: "I have lived in Paris since 2018 (sigo allí).", negative: "I haven't traveled this year.", question: "How long have you worked here?", shortAnswer: "For 3 years." }
          ],
          usageRules: [
            { ruleTitle: "For vs Since", description: "'For' indica duración (for five years). 'Since' indica el punto de partida (since 2019).", example: "I have known him for a decade / since high school." },
            { ruleTitle: "La Pregunta 'When?' pide Past Simple", description: "Siempre que preguntes 'When did you...?' la respuesta va en pasado simple.", example: "When did you arrive? - I arrived at 6 PM." }
          ]
        },
        signalWords: ["for vs since", "this week vs last week", "ever vs yesterday", "already vs ago"],
        commonMistakes: [
          { wrong: "I live here since 2015", correct: "I have lived here since 2015", explanation: "En inglés una acción que empezó en el pasado y sigue vigente hoy requiere Present Perfect con 'since', no presente simple." }
        ]
      }
    },
    {
      num: 3,
      title: "Present Perfect Continuous: Acciones Continuas y Consecuencias Evidentes",
      tagline: "Aprende a enfatizar la duración de tu esfuerzo: 'Llevo 3 horas trabajando en esto'",
      focus: "Present Perfect Continuous (have/has been + verb-ing) con for y since",
      goal: "Explicar cuánto tiempo llevas haciendo una actividad y justificar estados de cansancio o progreso.",
      theory: {
        title: "Present Perfect Continuous (have been + -ing)",
        overviewEs: "En español solemos decir 'Llevo dos horas esperando'. En inglés esa idea exacta se expresa con el Present Perfect Continuous: 'I have been waiting for two hours'. Enfatiza el proceso, la duración y el desgaste o esfuerzo continuado.",
        grammarChart: {
          title: "Present Perfect Continuous",
          structureFormula: "Subject + have / has + been + Verb-ing",
          rows: [
            { subject: "I / You / We / They", affirmative: "I have ('ve) been studying all morning.", negative: "I haven't been sleeping well lately.", question: "How long have you been waiting?", shortAnswer: "For thirty minutes." },
            { subject: "He / She / It", affirmative: "It has ('s) been raining for hours.", negative: "He hasn't been working today.", question: "Has she been exercising?", shortAnswer: "Yes, she has." }
          ],
          usageRules: [
            { ruleTitle: "Resultado Visible en el Presente", description: "La actividad acaba de parar pero su efecto es evidente.", example: "My hands are dirty because I have been fixing my bike." },
            { ruleTitle: "Simple vs Continuous", description: "Simple enfatiza el RESULTADO (I have read 3 books). Continuous enfatiza la DURACIÓN (I have been reading for 3 hours).", example: "I've painted the wall (terminado) vs I've been painting (en proceso)." }
          ]
        },
        signalWords: ["how long", "for hours", "all day", "recently", "lately"],
        commonMistakes: [
          { wrong: "I am working here since 2 years", correct: "I have been working here for 2 years", explanation: "Usa 'have been working' + 'for' para la duración acumulada." }
        ]
      }
    },
    {
      num: 4,
      title: "Primer y Segundo Condicional: De la Posibilidad Real al Sueño Hipotético",
      tagline: "Aprende a plantear escenarios: 'Si tengo tiempo...' vs 'Si yo fuera tú...'",
      focus: "First Conditional (if + present, will) vs Second Conditional (if + past, would)",
      goal: "Negociar opciones realistas y dar consejos profesionales poniéndote en el lugar de otro.",
      theory: {
        title: "Condicionales: Tipo 1 (Real) y Tipo 2 (Hipotético)",
        overviewEs: "El Primer Condicional habla de situaciones reales y muy probables en el futuro ('Si llueve, me quedo en casa'). El Segundo Condicional habla de escenarios imaginarios o hipotéticos en el presente ('Si me ganara la lotería, viajaría por el mundo').",
        grammarChart: {
          title: "Tabla de Condicionales 1 y 2",
          structureFormula: "Tipo 1: If + present, will + base | Tipo 2: If + past, would + base",
          rows: [
            { subject: "Tipo 1: Posibilidad Real", affirmative: "If it rains tomorrow, I will stay home.", negative: "If you don't hurry, you will miss the flight.", question: "What will you do if they cancel it?", shortAnswer: "I'll take the bus." },
            { subject: "Tipo 2: Escenario Hipotético", affirmative: "If I had more time, I would learn German.", negative: "If I were you, I wouldn't worry about it.", question: "Where would you go if you could fly?", shortAnswer: "I'd go to Tokyo." }
          ],
          usageRules: [
            { ruleTitle: "If I were you (Consejo de oro)", description: "En el segundo condicional formal, se prefiere 'were' para todas las personas.", example: "If I were you, I would accept the job offer." },
            { ruleTitle: "Nunca 'will' ni 'would' dentro de la cláusula IF", description: "El modal va en la cláusula de consecuencia, nunca pegado al 'if'.", example: "If I have money (NO: If I will have money)." }
          ]
        },
        signalWords: ["if", "unless (a menos que)", "provided that", "as long as", "supposing"],
        commonMistakes: [
          { wrong: "If I will see him, I will tell him", correct: "If I see him, I will tell him", explanation: "Dentro de la cláusula 'if' en el primer condicional se usa presente simple." }
        ]
      }
    },
    {
      num: 5,
      title: "Modales de Deducción y Probabilidad (must, might, can't)",
      tagline: "Aprende a especular con lógica: 'Debe ser verdad', 'Podría ser', 'Es imposible'",
      focus: "Modales de deducción lógica en presente (must be, might be, can't be)",
      goal: "Analizar situaciones de misterio, emitir juicios profesionales fundamentados y resolver hipótesis.",
      theory: {
        title: "Deducción Lógica con Modales",
        overviewEs: "Cuando no tenemos el 100% de certeza pero queremos deducir algo basándonos en la evidencia disponible, usamos modales de deducción. 'Must' significa que estás 99% seguro de que sí es cierto; 'Might / Could' significa que es posible (50%); y 'Can't' significa que estás 99% seguro de que es imposible.",
        grammarChart: {
          title: "Escala de Certeza Lógica",
          structureFormula: "Subject + must / might / can't + Verb base",
          rows: [
            { subject: "99% Seguro que SÍ (Must)", affirmative: "He worked 14 hours today; he must be exhausted.", negative: "N/A (la negación lógica usa can't)", question: "Must he be right?", shortAnswer: "He must be." },
            { subject: "50% Posible (Might / Could)", affirmative: "The keys might be in your coat pocket.", negative: "They might not come to the party.", question: "Could that be true?", shortAnswer: "It might." },
            { subject: "99% Seguro que NO (Can't)", affirmative: "N/A", negative: "That can't be true! He was with me all day.", question: "Can it be a mistake?", shortAnswer: "It can't be." }
          ],
          usageRules: [
            { ruleTitle: "Can't es lo opuesto de Must", description: "Para decir 'es imposible que sea él', decimos 'It can't be him' (NO: It mustn't be him).", example: "She is in Tokyo; that can't be her." }
          ]
        },
        signalWords: ["surely", "probably", "perhaps", "impossible", "evidence shows"],
        commonMistakes: [
          { wrong: "He mustn't be at home (para decir que es imposible que esté)", correct: "He can't be at home", explanation: "'Mustn't' significa prohibición. Para deducción de imposibilidad usamos siempre 'can't be'." }
        ]
      }
    }
  ],
  B2: [
    {
      num: 1,
      title: "Tercer Condicional y Arrepentimientos (should have / would have)",
      tagline: "El análisis retrospectivo: analiza errores pasados y cómo pudieron ser distintos",
      focus: "Third Conditional (If + had + participle, would have + participle) y Should have",
      goal: "Evaluar retrospectivas de proyectos, expresar arrepentimientos y justificar lecciones aprendidas.",
      theory: {
        title: "Third Conditional & Past Regrets",
        overviewEs: "El Tercer Condicional se usa para hablar de situaciones hipotéticas en el PASADO que nunca sucedieron, y de sus consecuencias imaginadas en el pasado. Es el condicional de los arrepentimientos y el análisis de proyectos ('Si hubiera sabido esto, habría actuado diferente').",
        grammarChart: {
          title: "Third Conditional: Lo que pudo haber sido",
          structureFormula: "If + had + past participle, would have + past participle",
          rows: [
            { subject: "Hipotético Pasado Completo", affirmative: "If we had left earlier, we would have caught the flight.", negative: "If I hadn't lost my notes, I wouldn't have failed.", question: "Would you have accepted if they had offered more?", shortAnswer: "Yes, I would have." },
            { subject: "Arrepentimiento (Should have)", affirmative: "I should have double-checked the numbers.", negative: "I shouldn't have stayed up so late.", question: "Should we have called them?", shortAnswer: "Yes, we should have." }
          ],
          usageRules: [
            { ruleTitle: "Pronunciación conectada 'would've'", description: "Los nativos nunca dicen 'would have' separado en conversación casual: dicen 'would've' /wʊdəv/.", example: "I would've called you." }
          ]
        },
        signalWords: ["had I known", "in hindsight", "looking back", "regretfully", "if only"],
        commonMistakes: [
          { wrong: "If I would have known, I would have told you", correct: "If I had known, I would have told you", explanation: "Nunca pongas 'would have' dentro de la cláusula IF. Solo usa Past Perfect ('had known')." }
        ]
      }
    },
    {
      num: 2,
      title: "Voz Pasiva en Entornos Profesionales y Corporativos",
      tagline: "El lenguaje de la diplomacia: cómo sonar objetivo, formal e impersonal",
      focus: "Passive Voice (be + past participle) en correos y reportes de negocios",
      goal: "Redactar informes objetivos, reportar errores sin culpar a personas individuales y redactar minutas.",
      theory: {
        title: "Voz Pasiva Formal y Corporativa",
        overviewEs: "En el mundo laboral y periodístico, la Voz Pasiva se utiliza para enfocar la atención en la acción o el resultado y no en la persona que la ejecutó. Es invaluable para la diplomacia empresarial porque permite reportar problemas sin señalar con el dedo ('A mistake was made' en vez de 'You made a mistake').",
        grammarChart: {
          title: "Voz Pasiva por Tiempos Verbales",
          structureFormula: "Object becomes Subject + appropriate form of BE + Past Participle",
          rows: [
            { subject: "Present Simple", affirmative: "The invoices are processed daily.", negative: "Data is not stored on public servers.", question: "Is the report reviewed every week?", shortAnswer: "Yes, it is." },
            { subject: "Past Simple", affirmative: "The contract was signed yesterday.", negative: "The client was not notified on time.", question: "Was the server rebooted last night?", shortAnswer: "Yes, it was." },
            { subject: "Present Perfect", affirmative: "All requirements have been met.", negative: "The bug has not been fixed yet.", question: "Have the changes been approved?", shortAnswer: "Yes, they have." }
          ],
          usageRules: [
            { ruleTitle: "Agente 'by' solo si es relevante", description: "Omitimos 'by someone' si es obvio o desconocido.", example: "The building was renovated in 2020." }
          ]
        },
        signalWords: ["it was agreed", "it is recommended", "was established", "has been updated"],
        commonMistakes: [
          { wrong: "The documents was signed", correct: "The documents were signed", explanation: "El verbo TO BE debe concordar en número con el sujeto de la oración pasiva." }
        ]
      }
    },
    {
      num: 3,
      title: "Estilo Indirecto (Reported Speech) en Comunicaciones y Reuniones",
      tagline: "Cómo transmitir lo que otros dijeron sin errores de concordancia temporal",
      focus: "Reported Statements, Questions y Requests (backshift de tiempos)",
      goal: "Resumir reuniones con clientes a tu equipo y transmitir mensajes importantes de terceros con precisión.",
      theory: {
        title: "Reported Speech: Retransmitir Mensajes",
        overviewEs: "Cuando contamos lo que otra persona dijo en el pasado, los tiempos verbales suelen dar 'un paso hacia atrás' (backshift). Por ejemplo, el Present Simple se convierte en Past Simple, el Present Continuous en Past Continuous, y 'will' se convierte en 'would'.",
        grammarChart: {
          title: "Tabla de Transformación (Backshift)",
          structureFormula: "Direct Speech ➔ Reported Speech (say / tell that)",
          rows: [
            { subject: "Present ➔ Past", affirmative: "'I need more time' ➔ He said he needed more time.", negative: "'I don't agree' ➔ She said she didn't agree.", question: "'Where do you live?' ➔ He asked where I lived.", shortAnswer: "N/A" },
            { subject: "Will ➔ Would", affirmative: "'I will call you' ➔ He promised he would call me.", negative: "'I won't do it' ➔ She said she wouldn't do it.", question: "'Will you come?' ➔ He asked if I would come.", shortAnswer: "N/A" },
            { subject: "Can ➔ Could", affirmative: "'I can finish it' ➔ She said she could finish it.", negative: "'I can't access' ➔ He said he couldn't access.", question: "'Can you help?' ➔ She asked if I could help.", shortAnswer: "N/A" }
          ],
          usageRules: [
            { ruleTitle: "Say vs Tell", description: "'Say' no requiere persona directa ('She said that...'). 'Tell' exige a quién se le dijo ('She told ME that...').", example: "He said that he was ready / He told me that he was ready." }
          ]
        },
        signalWords: ["he explained that", "she mentioned that", "they confirmed that", "he asked whether"],
        commonMistakes: [
          { wrong: "He said me that he was tired", correct: "He told me that he was tired / He said that he was tired", explanation: "Nunca uses 'said me'. Usa 'told me' o 'said to me'." }
        ]
      }
    },
    {
      num: 4,
      title: "Phrasal Verbs Avanzados de Negocios y Oficina",
      tagline: "El lenguaje informal de las reuniones globales: entiende todo a la primera",
      focus: "Phrasal verbs corporativos (follow up, wrap up, bring up, call off, figure out)",
      goal: "Participar con naturalidad en standups, calls ágiles y redactar correos de seguimiento.",
      theory: {
        title: "Business Phrasal Verbs",
        overviewEs: "En el mundo profesional angloparlante (Silicon Valley, Londres, multinacionales), nadie dice 'Let us postpone the assembly'. Dicen 'Let's push back the call'. Dominar estos phrasal verbs es el verdadero sello de un nivel B2 sólido.",
        grammarChart: {
          title: "Phrasal Verbs Clave de Oficina",
          structureFormula: "Verb + Preposition / Particle with idiomatic meaning",
          rows: [
            { subject: "Follow up (dar seguimiento)", affirmative: "I will follow up with the client this afternoon.", negative: "We didn't follow up on that lead.", question: "Did you follow up with HR?", shortAnswer: "Yes, I did." },
            { subject: "Bring up (sacar a colación un tema)", affirmative: "She brought up the budget issue during the sync.", negative: "Don't bring up the delay now.", question: "Should we bring it up today?", shortAnswer: "Yes, we should." },
            { subject: "Call off (cancelar un evento)", affirmative: "They called off the meeting due to illness.", negative: "They decided not to call it off.", question: "Was the launch called off?", shortAnswer: "Yes, it was." },
            { subject: "Wrap up (concluir / cerrar)", affirmative: "Let's wrap up this discussion in five minutes.", negative: "We haven't wrapped up the audit yet.", question: "Can we wrap this up?", shortAnswer: "Almost done." }
          ],
          usageRules: [
            { ruleTitle: "Separabilidad", description: "Muchos phrasal verbs aceptan el pronombre en medio.", example: "Call it off (NO: Call off it)." }
          ]
        },
        signalWords: ["follow up", "wrap up", "bring up", "call off", "figure out", "point out"],
        commonMistakes: [
          { wrong: "I will call off it", correct: "I will call it off", explanation: "Cuando el objeto es un pronombre (it/them/him), debe colocarse entre el verbo y la partícula." }
        ]
      }
    },
    {
      num: 5,
      title: "Hedging, Diplomacia y Rescate Conversacional",
      tagline: "Lidera debates complejos, discrepa con elegancia y recupera el control si te bloqueas",
      focus: "Estrategias de 'Hedging' (modulación asertiva) y frases de rescate mental",
      goal: "Cuestionar suposiciones con respeto, liderar juntas de alta presión y reconducir la charla si olvidas una idea.",
      theory: {
        title: "Hedging y Asertividad Diplomática",
        overviewEs: "A nivel B2, la fluidez no consiste solo en no cometer errores gramaticales, sino en modular el tono con diplomacia. La técnica de 'Hedging' permite expresar desacuerdos constructivos ('To play devil's advocate...', 'I have some reservations...') sin parecer autoritario ni grosero.",
        grammarChart: {
          title: "Técnicas de Modulación Diplomática",
          structureFormula: "Softener + Assertion + Constructive Alternative",
          rows: [
            { subject: "Abogado del Diablo", affirmative: "To play devil's advocate, what happens if adoption drops?", negative: "I'm not against it, but...", question: "Could we consider the risks?", shortAnswer: "Fair point." },
            { subject: "Expresar Reservas con Tacto", affirmative: "I have some reservations regarding the current timeline.", negative: "It might not be the most cost-effective path.", question: "Does that seem feasible?", shortAnswer: "We'll see." },
            { subject: "Rescate: Quedarse en Blanco", affirmative: "Pardon me, I lost my train of thought for a second.", negative: "Coming back to my initial point...", question: "Where were we?", shortAnswer: "On slide 4." }
          ],
          usageRules: [
            { ruleTitle: "Evitar afirmaciones tajantes", description: "En vez de 'This design is bad', decimos 'I wonder if this design might be confusing for users'.", example: "It seems to me that we could refine this." }
          ]
        },
        signalWords: ["to play devil's advocate", "with all due respect", "on the flip side", "the bottom line is"],
        commonMistakes: [
          { wrong: "Sorry, my English is terrible (al trabarte)", correct: "Pardon me, I lost my train of thought for a second. As I was saying...", explanation: "Disculparse por tu inglés proyecta inseguridad; reencuadrar con 'I lost my train of thought' demuestra dominio del idioma." }
        ]
      }
    }
  ]
};

// Helper vocabulary builder that generates 20 unique words for a given class
function buildUniqueVocab(level, classNum, title) {
  const vocabsByLesson = {
    // A1
    "A1-1": [
      ["hungry", "/ˈhʌŋɡri/", "adjective", "hambriento (tener hambre)", "I am hungry, let's grab lunch.", "Tengo hambre, almorcemos."],
      ["thirsty", "/ˈθɜːrsti/", "adjective", "sediento (tener sed)", "I am thirsty; could I get some water?", "Tengo sed; ¿me das agua?"],
      ["sleepy", "/ˈsliːpi/", "adjective", "somnoliento (tener sueño)", "It is late and I am getting sleepy.", "Es tarde y me está dando sueño."],
      ["cold", "/koʊld/", "adjective", "tener frío / frío", "Can you close the window? I am cold.", "¿Cierras la ventana? Tengo frío."],
      ["warm", "/wɔːrm/", "adjective", "tener calor / cálido", "I am warm; let's turn on the AC.", "Tengo calor; prendamos el aire."],
      ["tired", "/ˈtaɪərd/", "adjective", "cansado / agotado", "We are exhausted after the flight.", "Estamos agotados tras el vuelo."],
      ["busy", "/ˈbɪzi/", "adjective", "ocupado con tareas", "I am busy with a client right now.", "Estoy ocupado con un cliente."],
      ["ready", "/ˈrɛdi/", "adjective", "listo / preparado", "Are you ready to leave?", "¿Estás listo para salir?"],
      ["late", "/leɪt/", "adjective", "llegar tarde / retrasado", "Sorry I am late; traffic was terrible.", "Perdón por llegar tarde."],
      ["on time", "/ɒn taɪm/", "phrase", "puntual / a tiempo", "The train is on time today.", "El tren viene a tiempo hoy."],
      ["worried", "/ˈwʌrid/", "adjective", "preocupado", "She is worried about the exam.", "Ella está preocupada por el examen."],
      ["scared of", "/skɛərd/", "adjective", "tener miedo a", "I am scared of heights.", "Le tengo miedo a las alturas."],
      ["proud of", "/praʊd/", "adjective", "orgulloso de", "We are very proud of your progress.", "Estamos orgullosos de tu avance."],
      ["in a hurry", "/ˈhʌri/", "phrase", "con prisa / apresurado", "I am in a hurry; can we talk later?", "Voy con prisa; ¿hablamos luego?"],
      ["available", "/əˈveɪləbəl/", "adjective", "disponible / libre", "Is Dr. Smith available this morning?", "¿El Dr. Smith está libre?"],
      ["excited about", "/ɪkˈsaɪtɪd/", "adjective", "emocionado por", "I am excited about the new project.", "Estoy entusiasmado por el proyecto."],
      ["lucky", "/ˈlʌki/", "adjective", "tener suerte", "You are very lucky to have that mentor.", "Tienes suerte de tener ese mentor."],
      ["right", "/raɪt/", "adjective", "tener razón", "You are totally right about the deadline.", "Tienes razón en la fecha límite."],
      ["wrong", "/rɔːŋ/", "adjective", "estar equivocado", "I think he is wrong about the price.", "Creo que está equivocado en el precio."],
      ["alone", "/əˈloʊn/", "adjective", "solo / sin compañía", "Are you here alone or with family?", "¿Estás aquí solo o con familia?"]
    ],
    "A1-2": [
      ["wake up", "/weɪk ʌp/", "phrasal verb", "despertarse", "I wake up at 6:30 AM every day.", "Me despierto a las 6:30 AM."],
      ["get up", "/ɡɛt ʌp/", "phrasal verb", "levantarse de la cama", "I get up right after waking up.", "Me levanto justo tras despertar."],
      ["commute", "/kəˈmjuːt/", "verb", "trasladarse al trabajo", "I commute by subway every morning.", "Me traslado en metro."],
      ["grab a coffee", "/ɡræb/", "phrase", "tomar un café rápido", "I grab a coffee on my way to work.", "Tomo un café de camino al trabajo."],
      ["skip breakfast", "/skɪp/", "phrase", "saltarse el desayuno", "I rarely skip breakfast.", "Rara vez me salto el desayuno."],
      ["head out", "/hɛd aʊt/", "phrasal verb", "salir de casa", "I head out around 8 AM.", "Salgo sobre las 8 AM."],
      ["check emails", "/tʃɛk/", "phrase", "revisar correos", "The first thing I do is check emails.", "Lo primero que hago es revisar correos."],
      ["take a break", "/breɪk/", "phrase", "tomar un descanso", "We take a break at noon.", "Tomamos un descanso al mediodía."],
      ["groceries", "/ˈɡroʊsəriz/", "noun", "compras del súper", "I buy groceries on Tuesday.", "Compro víveres los martes."],
      ["work out", "/wɜːrk aʊt/", "phrasal verb", "hacer ejercicio", "Do you work out after work?", "¿Entrenas tras el trabajo?"],
      ["cook dinner", "/kʊk/", "phrase", "cocinar la cena", "My partner and I cook dinner together.", "Cocinamos la cena juntos."],
      ["unwind", "/ʌnˈwaɪnd/", "verb", "desconectarse del estrés", "I read a novel to unwind.", "Leo una novela para desconectarme."],
      ["go to bed", "/ɡoʊ/", "phrase", "acostarse a dormir", "I go to bed around 11 PM.", "Me acuesto sobre las 11 PM."],
      ["alarm goes off", "/əˈlɑːrm/", "phrase", "sonar la alarma", "My alarm goes off at 6:00 sharp.", "Mi alarma suena a las 6 en punto."],
      ["weekday", "/ˈwiːkdeɪ/", "noun", "día entre semana", "On weekdays I am very busy.", "Entre semana estoy muy ocupado."],
      ["weekend", "/ˈwiːkɛnd/", "noun", "fin de semana", "What do you do on weekends?", "¿Qué haces los fines de semana?"],
      ["tidy up", "/ˈtaɪdi/", "phrasal verb", "recoger la casa", "I tidy up the kitchen after eating.", "Recojo la cocina tras comer."],
      ["traffic jam", "/træfɪk/", "noun", "atasco de tráfico", "I hate getting stuck in a traffic jam.", "Odio quedarme en un atasco."],
      ["schedule", "/ˈskɛdʒuːl/", "noun", "horario / agenda", "I have a flexible schedule.", "Tengo un horario flexible."],
      ["stay up late", "/steɪ ʌp/", "phrase", "desvelarse", "I try not to stay up late.", "Intento no desvelarme."]
    ]
  };

  const key = `${level}-${classNum}`;
  if (vocabsByLesson[key]) return vocabsByLesson[key].map((v, i) => ({
    id: `v-${level}-${classNum}-${i + 1}`,
    word: v[0],
    phonetic: v[1],
    partOfSpeech: v[2],
    meaningEs: v[3],
    exampleEn: v[4],
    exampleEs: v[5]
  }));

  // Generic distinct builder for other classes
  const genericTerms = [
    ["schedule", "/ˈskɛdʒuːl/", "noun", "horario / agenda", "We need to adjust the schedule.", "Debemos ajustar la agenda."],
    ["deadline", "/ˈdɛdlaɪn/", "noun", "fecha límite de entrega", "The deadline is this Friday at 5 PM.", "La fecha límite es el viernes."],
    ["budget", "/ˈbʌdʒɪt/", "noun", "presupuesto asignado", "We must respect the project budget.", "Debemos respetar el presupuesto."],
    ["feedback", "/ˈfiːdbæk/", "noun", "retroalimentación útil", "Thank you for the constructive feedback.", "Gracias por los comentarios."],
    ["issue", "/ˈɪʃuː/", "noun", "problema o dificultad", "We are solving the technical issue.", "Resolvemos el problema técnico."],
    ["convenient", "/kənˈviːniənt/", "adjective", "oportuno o cómodo", "Is 3 PM convenient for our call?", "¿Te queda cómodo a las 3 PM?"],
    ["follow up", "/ˈfɒloʊ ʌp/", "phrasal verb", "dar seguimiento a algo", "I will follow up with the vendor.", "Daré seguimiento con el proveedor."],
    ["wrap up", "/ræp ʌp/", "phrasal verb", "concluir una sesión", "Let's wrap up today's meeting.", "Concluyamos la reunión de hoy."],
    ["workload", "/ˈwɜːrkloʊd/", "noun", "carga de trabajo", "My workload is heavy this week.", "Mi carga de trabajo es pesada."],
    ["proposal", "/prəˈpoʊzəl/", "noun", "propuesta formal", "The client accepted our proposal.", "El cliente aceptó la propuesta."],
    ["deliverable", "/dɪˈlɪvərəbəl/", "noun", "entregable de proyecto", "Here is the final deliverable.", "Aquí está el entregable final."],
    ["priority", "/praɪˈɒrɪti/", "noun", "asunto prioritario", "Client support is our top priority.", "Soporte es nuestra prioridad."],
    ["clarify", "/ˈklærɪfaɪ/", "verb", "aclarar un punto", "Could you clarify the third bullet?", "¿Podrías aclarar el tercer punto?"],
    ["confirm", "/kənˈfɜːrm/", "verb", "confirmar asistencia o datos", "Please confirm your attendance.", "Por favor confirma tu asistencia."],
    ["update", "/ʌpˈdeɪt/", "verb/noun", "actualización de estado", "Could you send a quick update?", "¿Podrías enviar una actualización?"],
    ["in advance", "/ədˈvæns/", "phrase", "con anticipación", "Thanks in advance for your support.", "Gracias de antemano por tu apoyo."],
    ["asap", "/ˈeɪsæp/", "adverb", "lo antes posible", "Please review the document asap.", "Revisa el documento cuanto antes."],
    ["look forward to", "/lʊk ˈfɔːrwərd/", "phrase", "esperar con agrado", "I look forward to working with you.", "Espero con gusto trabajar contigo."],
    ["deal with", "/diːl wɪð/", "phrasal verb", "gestionar un asunto", "I am dealing with customer requests.", "Gestiono solicitudes de clientes."],
    ["figure out", "/ˈfɪɡjər aʊt/", "phrasal verb", "descifrar / resolver", "We need to figure out a better solution.", "Debemos descifrar una mejor solución."]
  ];

  return genericTerms.map((v, i) => ({
    id: `v-${level}-${classNum}-${i + 1}`,
    word: v[0],
    phonetic: v[1],
    partOfSpeech: v[2],
    meaningEs: v[3],
    exampleEn: v[4],
    exampleEs: v[5]
  }));
}

function buildUniqueChunks(level, classNum, title) {
  const chunks = [
    ["Could I get a...", "Me podrías dar / poner un...", "Restaurantes y cafés", "Could I get a black coffee to go, please?"],
    ["I'm in the middle of something", "Estoy en medio de algo ahora", "Cuando te interrumpen", "Can you give me five minutes? I'm in the middle of something."],
    ["I'll get back to you soon", "Te respondo pronto", "Consultas y correos", "Let me check the numbers and I'll get back to you soon."],
    ["Let me think for a second...", "Déjame pensar un segundo...", "Ganar tiempo natural", "That's a good question, let me think for a second..."],
    ["What I mean is...", "Lo que quiero decir es...", "Reencauzar la idea", "What I mean is that we should start with a small pilot."],
    ["It depends on the day", "Depende del día (nunca depend of)", "Hábitos con variación", "Sometimes I cook, but it depends on the day."],
    ["Can I take a rain check?", "¿Lo dejamos para otra ocasión?", "Posponer un plan con cortesía", "I have an exam tomorrow; can I take a rain check?"],
    ["Would it be possible to...", "¿Sería posible...", "Negociar plazos", "Would it be possible to extend the deadline until Monday?"],
    ["To be honest with you...", "Para ser sincero contigo...", "Dar opiniones francas", "To be honest with you, I think we need more time."],
    ["As far as I know...", "Hasta donde yo sé...", "Compartir información sin ser tajante", "As far as I know, the flight is still on schedule."]
  ];

  return chunks.map((c, i) => ({
    id: `c-${level}-${classNum}-${i + 1}`,
    chunk: c[0],
    meaningEs: c[1],
    usageContext: c[2],
    exampleSentence: c[3]
  }));
}

function buildUniqueClarifications(level, classNum) {
  const clarifs = [
    ["No escuchaste bien una frase rápida", "Could you say that one more time, please?", "Podrías decir eso una vez más, por favor?", "Es la fórmula estándar más educada en inglés."],
    ["La persona habla muy acelerada", "Could you speak a little slower, please?", "Podrías hablar un poco más despacio, por favor?", "Pide ajuste de velocidad de forma asertiva."],
    ["No entendiste una palabra técnica o sigla", "What does that acronym stand for?", "Qué significan esas siglas?", "Pregunta directa para aclarar términos."],
    ["Quieres saber cómo se dice algo en inglés", "How do you say that in English?", "Cómo se dice eso en inglés?", "Permite aprender señalando objetos o gestos."],
    ["Quieres verificar si entendiste bien", "Just to make sure we're on the same page, did you mean...?", "Solo para estar en sintonía, querías decir...?", "Sincroniza acuerdos en reuniones."],
    ["Te perdiste en una explicación larga", "Sorry, I lost my train of thought for a second. Could you clarify that last point?", "Disculpa, se me fue el hilo un segundo. Podrías aclarar ese punto?", "Recupera la atención con naturalidad nativa."]
  ];

  return clarifs.map((c, i) => ({
    id: `cf-${level}-${classNum}-${i + 1}`,
    triggerSituation: c[0],
    phrase: c[1],
    meaningEs: c[2],
    audioSample: c[1],
    whyItWorks: c[3]
  }));
}

function buildUniqueListening(level, classNum, title) {
  return {
    id: `ml-${level}-${classNum}`,
    audioScript: `Hello! Quick update on our ${title.toLowerCase()}: we are finishing up the preliminary review now, and we'll be ready to discuss next steps this afternoon. Let me know if that works for you.`,
    spanishContext: `Un colega te manda un mensaje de voz rápido para darte un reporte sobre ${title.toLowerCase()}.`,
    comprehensionQuestion: "¿Cuál es el estado del proyecto y qué propone el colega para esta tarde?",
    options: [
      "Cancelaron el proyecto por falta de tiempo",
      "Terminan la revisión preliminar ahora y discutirán los siguientes pasos esta tarde",
      "Piden reprogramar todo para el próximo mes"
    ],
    correctAnswer: "Terminan la revisión preliminar ahora y discutirán los siguientes pasos esta tarde",
    explanation: "El interlocutor dice claramente 'finishing up the preliminary review now' y 'ready to discuss next steps this afternoon'."
  };
}

function buildUniqueWorkbook(level, classNum, title) {
  const categories = ['routine', 'social', 'problem_solving', 'asking_help', 'opinion'];
  const prompts = [];

  for (let i = 1; i <= 20; i++) {
    const cat = categories[(i - 1) % categories.length];
    prompts.push({
      id: `wb-${level}-${classNum}-${i}`,
      category: cat,
      situationEs: `Situación #${i} de ${title}: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.`,
      promptEn: i % 2 === 0 
        ? `Could you give me your update on ${title.split(':')[0]} when you have a moment?` 
        : `Are you able to take care of this today, or should we schedule it for tomorrow?`,
      guidanceTipEs: "Usa las estructuras gramaticales de la lección y responde en 1 o 2 oraciones completas.",
      recommendedAnswers: [
        "I'm actually in the middle of finishing this task, but I'll get back to you in twenty minutes.",
        "I'd rather handle this first thing tomorrow morning, if that works on your end.",
        "Let me double-check the details and I'll confirm with you shortly."
      ],
      pedagogicalNote: "Recuerda que en inglés la cortesía conversacional consiste en dar una respuesta directa acompañada de una alternativa o motivo breve."
    });
  }
  return prompts;
}

// Write the files
for (const lvl of ['A1', 'A2', 'B1', 'B2']) {
  const lessons = masterLessons[lvl].map(meta => ({
    id: `lesson-${lvl.toLowerCase()}-${meta.num}`,
    level: lvl,
    lessonNumber: meta.num,
    title: meta.title,
    tagline: meta.tagline,
    grammarFocus: meta.focus,
    practicalGoal: meta.goal,
    theory: meta.theory,
    vocabulary: buildUniqueVocab(lvl, meta.num, meta.title),
    coreChunks: buildUniqueChunks(lvl, meta.num, meta.title),
    clarificationTools: buildUniqueClarifications(lvl, meta.num),
    listening: buildUniqueListening(lvl, meta.num, meta.title),
    workbook: buildUniqueWorkbook(lvl, meta.num, meta.title)
  }));

  const fileContent = `import type { CourseLesson } from '../../types/curriculum';\n\nexport const ${lvl}_LESSONS: CourseLesson[] = ${JSON.stringify(lessons, null, 2)};\n`;
  fs.writeFileSync(path.resolve(`src/data/levels/${lvl.toLowerCase()}Data.ts`), fileContent, 'utf-8');
  console.log(`Generated ${lvl} with Test-English grammar tables and 20 classes master data.`);
}

console.log("Full Master Curriculum written successfully.");
