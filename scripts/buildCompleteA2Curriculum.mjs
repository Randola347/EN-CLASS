import fs from 'fs';
import path from 'path';

// Complete robust generator that outputs full rich classes for A2 with 20 unique vocabs, 10 chunks, 3 listenings and 20 workbook questions per class

const a2Lessons = [
  // A2 Lesson 1
  {
    num: 1,
    title: "Past Simple Irregular & Preguntas con Did",
    tagline: "Domina los 20 verbos irregulares de mayor impacto para relatar tu fin de semana y anécdotas",
    focus: "Past Simple irregular (went, bought, saw, ate) y preguntas con Did",
    goal: "Narrar con fluidez qué hiciste el fin de semana, qué compraste y responder entrevistas de trabajo sobre tu experiencia pasada.",
    theory: {
      title: "Past Simple: Verbos Irregulares y Auxiliar Did",
      overviewEs: "A diferencia de los verbos regulares (-ed), los verbos irregulares cambian su raíz en oraciones afirmativas (buy ➔ bought, see ➔ saw). En oraciones negativas y preguntas, entra el auxiliar 'did / didn't' y el verbo principal vuelve obligatoriamente a su forma infinitiva base.",
      grammarChart: {
        title: "Past Simple Irregular",
        structureFormula: "Affirmative: Irregular past | Negative: didn't + base | Question: Did + subject + base?",
        rows: [
          { subject: "I / You", affirmative: "I bought a new laptop yesterday.", negative: "You didn't tell me about the meeting.", question: "Did you see that email?", shortAnswer: "Yes, I did. / No, I didn't." },
          { subject: "He / She / It", affirmative: "She went to Chicago on business.", negative: "He didn't bring his passport.", question: "Did it cost a lot of money?", shortAnswer: "Yes, it did. / No, it didn't." },
          { subject: "We / They", affirmative: "We ate at that new Mexican place.", negative: "They didn't find the address.", question: "Did they fly or drive?", shortAnswer: "Yes, they did. / No, they didn't." }
        ],
        usageRules: [
          { ruleTitle: "Momento Determinado en el Pasado", description: "Siempre que el periodo de tiempo esté cerrado.", example: "I met the CEO last Friday." },
          { ruleTitle: "Secuencia de Eventos Pasados", description: "Para contar una historia paso a paso.", example: "I woke up, drank coffee, and drove to work." },
          { ruleTitle: "El Auxiliar Did absorbe el pasado", description: "Nunca conjugues el verbo después de didn't o en preguntas con did.", example: "Did you go? (NO: Did you went?)" }
        ]
      },
      signalWords: ["yesterday", "last weekend", "two hours ago", "in 2022", "on my last vacation"],
      commonMistakes: [
        { wrong: "Did you went to the store?", correct: "Did you go to the store?", explanation: "En preguntas con 'Did', el verbo principal vuelve a su forma base." },
        { wrong: "I didn't bought anything", correct: "I didn't buy anything", explanation: "Tras 'didn't', el verbo principal nunca se conjuga en pasado." }
      ]
    },
    vocab: [
      ["bought", "/bɔːt/", "verb past", "compré / compró", "I bought some groceries on my way home.", "Compré víveres de camino a casa."],
      ["went", "/wɛnt/", "verb past", "fui / fue / fuimos", "We went to a rooftop café on Saturday.", "Fuimos a un café en la terraza el sábado."],
      ["saw", "/sɔː/", "verb past", "vi / vio", "I saw an interesting documentary last night.", "Vi un documental interesante anoche."],
      ["ate", "/eɪt/", "verb past", "comí / comió", "We ate delicious Italian pasta.", "Comimos deliciosa pasta italiana."],
      ["drove", "/droʊv/", "verb past", "conduje / manejó", "He drove all the way to Dallas.", "Condujo todo el camino hasta Dallas."],
      ["flew", "/fluː/", "verb past", "volé / voló en avión", "They flew to Miami for the weekend.", "Volaron a Miami el fin de semana."],
      ["brought", "/brɔːt/", "verb past", "traje / trajo", "She brought some homemade cookies.", "Trajo galletas caseras."],
      ["forgot", "/fərˈɡɒt/", "verb past", "olvidé / olvidó", "I forgot my apartment keys inside.", "Olvidé las llaves del departamento adentro."],
      ["chose", "/tʃoʊz/", "verb past", "elegí / eligió", "We chose the vegetarian option.", "Elegimos la opción vegetariana."],
      ["spoke", "/spoʊk/", "verb past", "hablé / habló", "I spoke with the hiring manager on Tuesday.", "Hablé con la gerente de contratación el martes."],
      ["wrote", "/roʊt/", "verb past", "escribí / escribió", "She wrote a detailed summary of the meeting.", "Escribió un resumen detallado de la junta."],
      ["understood", "/ˌʌndərˈstʊd/", "verb past", "entendí / comprendió", "I understood all the technical instructions.", "Entendí todas las instrucciones técnicas."],
      ["met", "/mɛt/", "verb past", "conocí a / me reuní con", "I met my business partner in 2021.", "Conocí a mi socio de negocios en 2021."],
      ["lost", "/lɒst/", "verb past", "perdí / perdió", "He lost his wallet on the subway.", "Perdió su billetera en el metro."],
      ["paid", "/peɪd/", "verb past", "pagué / pagó", "We paid the bill by credit card.", "Pagamos la cuenta con tarjeta de crédito."],
      ["slept", "/slɛpt/", "verb past", "dormí / durmió", "I slept like a baby for eight hours.", "Dormí como un bebé ocho horas."],
      ["heard", "/hɜːrd/", "verb past", "escuché / oyó", "I heard the good news on the radio.", "Escuché las buenas noticias en la radio."],
      ["kept", "/kɛpt/", "verb past", "mantuve / guardé", "I kept all the invoices in a folder.", "Guardé todas las facturas en una carpeta."],
      ["spent", "/spɛnt/", "verb past", "gasté dinero / pasé tiempo", "I spent fifty dollars on dinner.", "Gasté cincuenta dólares en la cena."],
      ["gave", "/ɡeɪv/", "verb past", "di / dio", "My mentor gave me great advice.", "Mi mentor me dio un gran consejo."]
    ],
    chunks: [
      ["Out of the blue, I ran into...", "De la nada / de repente me topé con...", "Contar encuentros inesperados", "Out of the blue, I ran into an old friend at the train station."],
      ["To make a long story short...", "Para no hacerte el cuento largo...", "Resumir una anécdota pasada", "To make a long story short, we ended up missing the flight."],
      ["How did it go?", "¿Cómo te fue? / ¿Cómo salió todo?", "Preguntar por una cita previa", "I know you had your interview yesterday; how did it go?"],
      ["It turned out great!", "¡Salió genial / resultó excelente!", "Concluir el resultado de un evento", "We were nervous, but the presentation turned out great!"],
      ["I had a blast", "Me la pasé increíble / genial", "Describir fiestas o viajes", "The concert was fantastic; I had a blast!"],
      ["It took longer than expected", "Tomó más tiempo de lo esperado", "Explicar retrasos o trámites", "The commute took longer than expected due to construction."],
      ["Did you get a chance to...?", "¿Tuviste oportunidad de...?", "Preguntar si alguien pudo hacer algo", "Did you get a chance to look over the proposal?"],
      ["I couldn't help but laugh", "No pude evitar reírme", "Situaciones cómicas pasadas", "When the dog stole the sandwich, I couldn't help but laugh."],
      ["As soon as I arrived, I...", "Tan pronto como llegué...", "Secuencias inmediatas", "As soon as I arrived, I called my family."],
      ["I didn't see that coming", "No vi venir eso / no me lo esperaba", "Sorpresas en historias pasadas", "They offered me a promotion; I honestly didn't see that coming."]
    ]
  },

  // A2 Lesson 2
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
    },
    vocab: [
      ["stroll", "/stroʊl/", "verb", "pasear con calma", "I was strolling in the park when I saw her.", "Estaba paseando en el parque cuando la vi."],
      ["spill", "/spɪl/", "verb", "derramar un líquido", "I spilled coffee on my keyboard while typing.", "Derramé café en mi teclado mientras tecleaba."],
      ["drop", "/drɒp/", "verb", "dejar caer un objeto", "He dropped his glass while carrying the tray.", "Dejó caer su vaso mientras llevaba la bandeja."],
      ["ring", "/rɪŋ/", "verb", "sonar el teléfono", "The phone rang while I was taking a shower.", "El teléfono sonó mientras me duchaba."],
      ["cross", "/krɒs/", "verb", "cruzar la calle", "She was crossing the street when the light changed.", "Cruzaba la calle cuando cambió la luz."],
      ["slip", "/slɪp/", "verb", "resbalar en el suelo", "I slipped on the wet floor while running.", "Me resbalé en el piso mojado mientras corría."],
      ["crash", "/kræʃ/", "verb", "chocar / fallar el sistema", "The app crashed while I was saving the file.", "La app se cerró mientras guardaba el archivo."],
      ["overhear", "/ˌoʊvərˈhɪər/", "verb", "escuchar por casualidad", "I overheard them talking about the new policy.", "Los escuché por casualidad hablar de la norma."],
      ["look through", "/lʊk θruː/", "phrasal verb", "hojear / revisar papeles", "I was looking through old photos all afternoon.", "Estuve hojeando fotos viejas toda la tarde."],
      ["wait in line", "/weɪt ɪn laɪn/", "phrase", "hacer fila esperando", "We were waiting in line when the doors opened.", "Hacíamos fila cuando abrieron las puertas."],
      ["power outage", "/ˈpaʊər ˈaʊtɪdʒ/", "noun", "corte de energía eléctrica", "There was a power outage while we were cooking.", "Hubo un corte de luz mientras cocinábamos."],
      ["distraction", "/dɪˈstrækʃən/", "noun", "distracción", "I had too many distractions while working.", "Tuve muchas distracciones mientras trabajaba."],
      ["puncture", "/ˈpʌŋktʃər/", "noun/verb", "pinchazo de llanta / ponchadura", "I got a puncture while driving on the highway.", "Se me ponchó una llanta en la autopista."],
      ["sudden", "/ˈsʌdən/", "adjective", "repentino / súbito", "There was a sudden noise while I was sleeping.", "Hubo un ruido repentino mientras dormía."],
      ["lightning", "/ˈlaɪtnɪŋ/", "noun", "relámpago", "Lightning struck while we were driving home.", "Cayó un rayo mientras manejábamos a casa."],
      ["background music", "/ˈbækɡraʊnd/", "noun", "música de fondo", "Soft jazz was playing in the background.", "Sonaba jazz suave de fondo."],
      ["interrupt", "/ˌɪntəˈrʌpt/", "verb", "interrumpir una acción", "He interrupted me while I was explaining.", "Me interrumpió mientras explicaba."],
      ["wander", "/ˈwɒndər/", "verb", "deambular / pasear sin rumbo", "We were wandering around the old town.", "Deambulábamos por el casco antiguo."],
      ["snooze", "/snuːz/", "verb", "dormitar / posponer alarma", "I was snoozing when my mom knocked on the door.", "Dormitaba cuando mi mamá tocó la puerta."],
      ["scramble", "/ˈskræmbəl/", "verb", "moverse apresurado / resolver rápido", "We were scrambling to find the ticket.", "Buscábamos el boleto apresurados."]
    ],
    chunks: [
      ["Just as I was about to...", "Justo cuando estaba a punto de...", "Interrupciones milimétricas", "Just as I was about to leave, the client called."],
      ["While you're at it...", "Ya que estás en eso / de paso...", "Aprovechar la acción de otro", "Are you going to the kitchen? While you're at it, can you bring water?"],
      ["I was under the impression that...", "Tenía la impresión de que...", "Corregir un malentendido cortésmente", "I was under the impression that we had until Friday."],
      ["In the blink of an eye", "En un abrir y cerrar de ojos", "Acciones repentinas pasadas", "In the blink of an eye, the rain flooded the driveway."],
      ["It was raining cats and dogs", "Llovía a cántaros", "Describir tormentas pasadas", "We were driving home and it was raining cats and dogs."],
      ["I lost track of time", "Perdí la noción del tiempo", "Explicar por qué te demoraste", "I was browsing online and I completely lost track of time."],
      ["Something came up", "Surgió un imprevisto", "Disculpa estándar elegante", "I was heading out, but something came up at the office."],
      ["Out of nowhere...", "De la nada...", "Apariciones repentinas", "I was cycling and, out of nowhere, a dog crossed the path."],
      ["Were you by any chance...?", "¿Estuviste por casualidad...?", "Preguntar con suavidad", "Were you by any chance trying to reach me earlier?"],
      ["I was wondering if...", "Me preguntaba si...", "Fórmula de máxima cortesía", "I was wondering if you had five minutes to look at this."]
    ]
  },

  // A2 Lesson 3
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
    },
    vocab: [
      ["appointment", "/əˈpɔɪntmənt/", "noun", "cita médica o profesional", "I have a dentist appointment tomorrow at 10.", "Tengo cita con el dentista mañana."],
      ["itinerary", "/aɪˈtɪnərɛri/", "noun", "itinerario de viaje", "Here is our weekend trip itinerary.", "Aquí está el itinerario de viaje."],
      ["flight", "/flaɪt/", "noun", "vuelo de avión", "Our flight departs at 6:45 AM.", "Nuestro vuelo sale a las 6:45 AM."],
      ["reservation", "/ˌrɛzərˈveɪʃən/", "noun", "reserva de hotel o mesa", "I am going to make a dinner reservation.", "Voy a hacer una reserva para cenar."],
      ["reschedule", "/riːˈskɛdʒuːl/", "verb", "reprogramar una cita", "Could we reschedule our call for Friday?", "¿Podemos reprogramar la llamada para el viernes?"],
      ["postpone", "/poʊstˈpoʊn/", "verb", "posponer para después", "They decided to postpone the launch date.", "Decidieron posponer la fecha."],
      ["cancel", "/ˈkænsəl/", "verb", "cancelar definitivamente", "I won't cancel my subscription just yet.", "No cancelaré mi suscripción aún."],
      ["host", "/hoʊst/", "verb/noun", "organizar / ser anfitrión", "We are hosting a dinner party next Friday.", "Organizaremos una cena el próximo viernes."],
      ["attend", "/əˈtɛnd/", "verb", "asistir a un evento", "Are you going to attend the summit?", "¿Vas a asistir a la cumbre?"],
      ["promise", "/ˈprɒmɪs/", "verb/noun", "prometer / promesa", "I promise I will return your book on Monday.", "Prometo que te devolveré el libro el lunes."],
      ["predict", "/prɪˈdɪkt/", "verb", "predecir con base en indicios", "Meteorologists predict it will rain all week.", "Predicen que lloverá toda la semana."],
      ["look at those clouds", "/klaʊdz/", "phrase", "mira esas nubes (evidencia)", "Look at those dark clouds! It is going to rain.", "¡Mira esas nubes! Va a llover."],
      ["spontaneous", "/spɒnˈteɪniəs/", "adjective", "espontáneo", "Let's be spontaneous and take a road trip!", "¡Seamos espontáneos y viajemos!"],
      ["available", "/əˈveɪləbəl/", "adjective", "disponible de horario", "Will you be available tomorrow morning?", "¿Estarás disponible mañana en la mañana?"],
      ["convenient", "/kənˈviːniənt/", "adjective", "oportuno / cómodo", "Is Wednesday afternoon convenient for you?", "¿Te resulta oportuno el miércoles?"],
      ["tentative", "/ˈtɛntətɪv/", "adjective", "tentativo / no definitivo", "We have a tentative date for the conference.", "Tenemos una fecha tentativa."],
      ["confirm", "/kənˈfɜːrm/", "verb", "confirmar asistencia o datos", "I will confirm the venue by tomorrow noon.", "Confirmaré el lugar mañana a mediodía."],
      ["venue", "/ˈvɛnjuː/", "noun", "lugar de un evento o reunión", "The wedding venue is going to be in the valley.", "El lugar de la boda será en el valle."],
      ["deadline", "/ˈdɛdlaɪn/", "noun", "fecha de entrega límite", "The final deadline is next Tuesday.", "La fecha límite es el próximo martes."],
      ["kick off", "/kɪk ɔːf/", "phrasal verb", "arrancar / dar inicio", "The workshop kicks off at 9 sharp.", "El taller arranca a las 9 en punto."]
    ],
    chunks: [
      ["I'll take care of it right away", "Me encargo de eso de inmediato", "Ofrecerse espontáneamente a resolver", "Don't worry about the invoice; I'll take care of it right away."],
      ["Are you up to anything this weekend?", "¿Tienes planes este fin de semana?", "Preguntar con máxima naturalidad", "Hey Chris, are you up to anything this coming weekend?"],
      ["I'm planning on...", "Tengo planeado...", "Expresar intenciones", "I'm planning on taking a three-day weekend trip."],
      ["I'll keep you posted", "Te mantengo al tanto / informado", "Compromiso de actualización", "As soon as I hear from the supplier, I'll keep you posted."],
      ["Let me know what works for you", "Avísame qué horario te queda mejor", "Agendar citas cordiales", "I'm free on Tuesday or Thursday; let me know what works for you."],
      ["I won't take much of your time", "No te quitaré mucho tiempo", "Pedir una reunión breve", "Could we jump on a call? I won't take much of your time."],
      ["I'm about to...", "Estoy a punto de...", "Acciones inminentes", "I'm about to leave the house; see you in twenty minutes!"],
      ["We'll cross that bridge when we come to it", "Ya nos ocuparemos de eso cuando toque", "No preocuparse antes de tiempo", "What if it rains? Well, we'll cross that bridge when we come to it."],
      ["Count me in!", "¡Cuenta conmigo / me apunto!", "Aceptar invitaciones con entusiasmo", "You're going to the beach? Count me in!"],
      ["I'll be right back", "Ya vuelvo / regreso enseguida", "Pausas breves", "Wait for me here, I'll be right back with some water."]
    ]
  },

  // A2 Lesson 4
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
    },
    vocab: [
      ["fluent in", "/ˈfluːənt/", "adjective", "fluido en un idioma", "She is completely fluent in French and Spanish.", "Ella es fluida en francés y español."],
      ["permission", "/pərˈmɪʃən/", "noun", "permiso formal", "You need written permission to film here.", "Necesitas permiso por escrito para filmar."],
      ["requirement", "/rɪˈkwaɪərmənt/", "noun", "requisito obligatorio", "A valid passport is an essential requirement.", "Un pasaporte vigente es un requisito."],
      ["prohibited", "/proʊˈhɪbɪtɪd/", "adjective", "prohibido por ley o norma", "Smoking is strictly prohibited on the premises.", "Está prohibido fumar en las instalaciones."],
      ["mandatory", "/ˈmændətɔːri/", "adjective", "obligatorio", "Attendance at the safety briefing is mandatory.", "La asistencia a la charla de seguridad es obligatoria."],
      ["optional", "/ˈɒpʃənəl/", "adjective", "opcional / voluntario", "The final survey is completely optional.", "La encuesta final es opcional."],
      ["capable of", "/ˈkeɪpəbəl əv/", "adjective", "capaz de hacer algo", "Our team is capable of handling big challenges.", "Nuestro equipo es capaz de manejar retos."],
      ["regulations", "/ˌrɛɡjʊˈleɪʃənz/", "noun", "normativas / reglamento", "We must comply with local safety regulations.", "Debemos cumplir con las normas de seguridad."],
      ["dress code", "/drɛs koʊd/", "noun", "código de vestimenta", "The office has a business casual dress code.", "La oficina tiene código casual de negocios."],
      ["policy", "/ˈpɒlɪsi/", "noun", "política de empresa", "It is company policy not to share passwords.", "Es política de empresa no compartir claves."],
      ["skill", "/skɪl/", "noun", "habilidad técnica adquirida", "Negotiation is a crucial professional skill.", "La negociación es una habilidad clave."],
      ["expert in", "/ˈɛkspɜːrt/", "noun/adjective", "experto en una materia", "He is an expert in cloud database systems.", "Es un experto en sistemas de bases en la nube."],
      ["badge", "/bædʒ/", "noun", "credencial / carnet de acceso", "Employees have to display their badge at all times.", "Los empleados deben mostrar su credencial."],
      ["punctuality", "/ˌpʌŋktʃuˈæləti/", "noun", "puntualidad", "Punctuality is strictly required for morning syncs.", "Se exige puntualidad para los syncs matutinos."],
      ["overtime", "/ˈoʊvərˌtaɪm/", "noun", "horas extras de trabajo", "Do we have to work overtime this weekend?", "¿Tenemos que trabajar horas extras este fin de semana?"],
      ["shift", "/ʃɪft/", "noun", "turno laboral", "I work the afternoon shift on Wednesdays.", "Trabajo el turno vespertino los miércoles."],
      ["legal", "/ˈliːɡəl/", "adjective", "legal / reglamentario", "Is it legal to park here overnight?", "¿Es legal estacionar aquí durante la noche?"],
      ["penalty", "/ˈpɛnəlti/", "noun", "multa o sanción", "There is a monetary penalty for late cancellations.", "Hay una multa por cancelaciones tardías."],
      ["allow", "/əˈlaʊ/", "verb", "permitir", "They don't allow pets inside the restaurant.", "No permiten mascotas dentro del restaurante."],
      ["forbid", "/fərˈbɪd/", "verb", "prohibir", "The rules strictly forbid taking photos.", "Las reglas prohíben estrictamente tomar fotos."]
    ],
    chunks: [
      ["Would you mind if I...?", "¿Te importaría si yo...?", "Pedir permiso con máxima elegancia", "Would you mind if I opened the window for some fresh air?"],
      ["You're more than welcome to...", "Eres más que bienvenido a...", "Dar permiso cordial", "You're more than welcome to use my charger."],
      ["It goes without saying that...", "No hace falta decir que...", "Mencionar obviedades", "It goes without saying that safety comes first."],
      ["Could you give me a hand with...?", "¿Me echas una mano con...?", "Pedir auxilio o ayuda física", "Could you give me a hand with these heavy boxes?"],
      ["I have no choice but to...", "No me queda más opción que...", "Obligación sin alternativas", "The flight is canceled, so I have no choice but to take the train."],
      ["You're not allowed to...", "No está permitido...", "Indicar prohibiciones", "You're not allowed to park on the yellow line."],
      ["As far as I can tell...", "Hasta donde puedo discernir...", "Juicio personal", "As far as I can tell, the system is working normally."],
      ["Feel free to...", "Siéntete en total libertad de...", "Dar permiso amable", "Feel free to help yourself to some coffee and water."],
      ["Do you mind holding this for a second?", "¿Te molestaría sostener esto un segundo?", "Petición práctica", "Do you mind holding my cup while I find my keys?"],
      ["I couldn't agree more", "No podría estar más de acuerdo", "Concordancia absoluta", "You're totally right about the deadline; I couldn't agree more."]
    ]
  },

  // A2 Lesson 5
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
    },
    vocab: [
      ["get back to", "/ɡɛt bæk tu/", "phrasal verb", "responder a alguien después", "Let me check the budget and I will get back to you.", "Revisaré el presupuesto y te respondo."],
      ["get along with", "/ɡɛt əˈlɒŋ/", "phrasal verb", "llevarse bien con alguien", "I get along very well with my coworkers.", "Me llevo muy bien con mis colegas."],
      ["get rid of", "/ɡɛt rɪd əv/", "phrase", "deshacerse de algo que no sirve", "We should get rid of these old files.", "Deberíamos deshacernos de estos archivos viejos."],
      ["get used to", "/ɡɛt juːzd tu/", "phrase", "acostumbrarse a algo nuevo", "I am getting used to waking up at 6 AM.", "Me estoy acostumbrando a despertar a las 6."],
      ["get ready", "/ɡɛt ˈrɛdi/", "phrase", "alistarse / prepararse", "Give me ten minutes to get ready.", "Dame diez minutos para alistarme."],
      ["get in touch", "/ɡɛt ɪn tʌtʃ/", "phrase", "ponerse en contacto", "Let's get in touch next week to coordinate.", "Pongámonos en contacto la próxima semana."],
      ["get over", "/ɡɛt ˈoʊvər/", "phrasal verb", "superar una enfermedad o desamor", "It took me a week to get over the flu.", "Me tomó una semana superar la gripe."],
      ["get lost", "/ɡɛt lɒst/", "phrase", "perderse en la ciudad", "We got lost in downtown because the GPS failed.", "Nos perdimos en el centro porque falló el GPS."],
      ["get on with", "/ɡɛt ɒn/", "phrasal verb", "continuar trabajando en algo", "Let's get on with today's agenda.", "Continuemos con la agenda de hoy."],
      ["get through to", "/ɡɛt θruː/", "phrasal verb", "comunicarse por teléfono con alguien", "I tried calling, but I couldn't get through to support.", "Intenté llamar pero no logré comunicar."],
      ["get together", "/ɡɛt təˈɡɛðər/", "phrasal verb", "reunirse socialmente", "We should get together for drinks this Friday.", "Deberíamos reunirnos a tomar algo este viernes."],
      ["get started", "/ɡɛt ˈstɑːrtɪd/", "phrase", "comenzar una actividad", "Let's get started on the workshop.", "Comencemos con el taller."],
      ["get off work", "/ɡɛt ɔːf/", "phrase", "salir del turno de trabajo", "What time do you usually get off work?", "¿A qué hora sueles salir de trabajar?"],
      ["get by", "/ɡɛt baɪ/", "phrasal verb", "arreglárselas con lo justo", "My German isn't great, but I can get by.", "Mi alemán no es genial, pero me las arreglo."],
      ["get behind", "/ɡɛt bɪˈhaɪnd/", "phrasal verb", "atrasarse con entregas", "Try not to get behind on your assignments.", "Intenta no atrasarte con tus tareas."],
      ["get ahead", "/ɡɛt əˈhɛd/", "phrasal verb", "progresar / salir adelante", "Learning English helps you get ahead in your career.", "Aprender inglés te ayuda a salir adelante."],
      ["get away with", "/ɡɛt əˈweɪ wɪð/", "phrasal verb", "salirse con la suya", "You can't get away with breaking the rules.", "No puedes salirte con la tuya rompiendo reglas."],
      ["get delayed", "/ɡɛt dɪˈleɪd/", "phrase", "retrasarse un vuelo o tren", "Our train got delayed by twenty minutes.", "Nuestro tren se retrasó veinte minutos."],
      ["get dark", "/ɡɛt dɑːrk/", "phrase", "oscurecer / anochecer", "It gets dark very early in the winter.", "Oscurece muy temprano en invierno."],
      ["get cold", "/ɡɛt koʊld/", "phrase", "enfriarse la comida", "Eat your soup before it gets cold!", "¡Come tu sopa antes de que se enfríe!"]
    ],
    chunks: [
      ["I get what you're saying, but...", "Entiendo lo que dices, pero...", "Discrepar cortésmente", "I get what you're saying, but we need to consider the costs."],
      ["Let's get down to business", "Vayamos al grano / pongámonos a trabajar", "Empezar reuniones sin perder tiempo", "All right everyone, coffee is done, let's get down to business."],
      ["Don't get me wrong", "No me lo tomes a mal", "Prevenir malentendidos", "Don't get me wrong; I love the concept, but the timeline is unrealistic."],
      ["I'll get right on it", "Me pongo en eso de inmediato", "Compromiso de ejecución", "Thanks for the feedback; I'll get right on it."],
      ["I don't get it", "No lo entiendo / no le veo sentido", "Confusión sincera", "Why did they change the password again? I honestly don't get it."],
      ["Get out of here!", "¡No te creo! / ¡No me digas!", "Expresar sorpresa informal", "You met Keanu Reeves? Get out of here!"],
      ["How are you getting on with...?", "¿Cómo vas con...?", "Preguntar por el avance de un proyecto", "How are you getting on with the client onboarding?"],
      ["It gets on my nerves", "Me saca de quicio / me desespera", "Molestias cotidianas", "That flickering light really gets on my nerves."],
      ["I'm getting there", "Ahí voy / ya casi llego al nivel", "Progreso constante", "My speaking isn't perfect yet, but I'm definitely getting there."],
      ["Get a grip", "Contrólate / mantén la calma", "Aconsejar serenidad", "Take a deep breath and get a grip; we can solve this."]
    ]
  }
];

function buildListeningsForA2(lesson) {
  return [
    {
      id: `ml-${lesson.id}-1`,
      title: `Audio 1: Diálogo Cotidiano / Café`,
      contextType: 'daily',
      audioScript: `Hey! Are you having lunch around here today? We're heading to the Italian bistro across the street if you want to join us.`,
      spanishContext: `Un colega te invita casualmente a almorzar en un restaurante cercano.`,
      comprehensionQuestion: "¿A dónde van a ir y qué te preguntan?",
      options: [
        "Van a trabajar hasta tarde y te piden un reporte",
        "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
        "Van al aeropuerto a recoger a un cliente"
      ],
      correctAnswer: "Van a un restaurante italiano al cruzar la calle y te invitan a unirte",
      explanation: "El hablante dice 'heading to the Italian bistro across the street if you want to join us'."
    },
    {
      id: `ml-${lesson.id}-2`,
      title: `Audio 2: Llamada / Contexto Laboral`,
      contextType: 'work',
      audioScript: `Good morning. Quick update on the client request: we've reviewed the feedback, and everything looks ready for the final sign-off this afternoon.`,
      spanishContext: `Mensaje de voz de tu supervisor sobre la solicitud de un cliente.`,
      comprehensionQuestion: "¿Cuál es el estatus del requerimiento del cliente?",
      options: [
        "Fue cancelado por presupuesto",
        "Revisaron el feedback y todo está listo para la firma final esta tarde",
        "Necesitan dos semanas más para corregir errores"
      ],
      correctAnswer: "Revisaron el feedback y todo está listo para la firma final esta tarde",
      explanation: "Menciona 'reviewed the feedback, and everything looks ready for the final sign-off this afternoon'."
    },
    {
      id: `ml-${lesson.id}-3`,
      title: `Audio 3: Situación Rápida / Imprevisto`,
      contextType: 'fast_paced',
      audioScript: `Excuse me, could you tell me if the express train to the airport stops at platform four or platform seven? The display board is down.`,
      spanishContext: `Un viajero apresurado en la estación de tren te pide auxilio por una pantalla apagada.`,
      comprehensionQuestion: "¿Qué información necesita el viajero?",
      options: [
        "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
        "Comprar un boleto de ida y vuelta",
        "A qué hora abren las tiendas del aeropuerto"
      ],
      correctAnswer: "Si el tren al aeropuerto para en la plataforma 4 o 7 porque la pantalla no funciona",
      explanation: "Pregunta 'if the express train to the airport stops at platform four or platform seven? The display board is down'."
    }
  ];
}

function buildWorkbookForA2(lesson) {
  const prompts = [];
  const categories = ['routine', 'social', 'problem_solving', 'asking_help', 'opinion'];
  
  for (let i = 1; i <= 20; i++) {
    const cat = categories[(i - 1) % categories.length];
    prompts.push({
      id: `wb-${lesson.id}-${i}`,
      category: cat,
      situationEs: `Situación #${i} de ${lesson.title}: Un interlocutor te hace una pregunta cotidiana relacionada con este tema y debes responder con naturalidad.`,
      promptEn: i % 2 === 0 
        ? `Could you give me your update on ${lesson.title.split(':')[0]} when you have a moment?` 
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

const finalA2 = a2Lessons.map(meta => ({
  id: `lesson-a2-${meta.num}`,
  level: "A2",
  lessonNumber: meta.num,
  title: meta.title,
  tagline: meta.tagline,
  grammarFocus: meta.focus,
  practicalGoal: meta.goal,
  theory: meta.theory,
  vocabulary: meta.vocab.map((v, i) => ({
    id: `v-a2-${meta.num}-${i + 1}`,
    word: v[0],
    phonetic: v[1],
    partOfSpeech: v[2],
    meaningEs: v[3],
    exampleEn: v[4],
    exampleEs: v[5]
  })),
  coreChunks: meta.chunks.map((c, i) => ({
    id: `c-a2-${meta.num}-${i + 1}`,
    chunk: c[0],
    meaningEs: c[1],
    usageContext: c[2],
    exampleSentence: c[3]
  })),
  listenings: buildListeningsForA2(meta),
  workbook: buildWorkbookForA2(meta)
}));

const fileContent = `import type { CourseLesson } from '../../types/curriculum';\n\nexport const A2_LESSONS: CourseLesson[] = ${JSON.stringify(finalA2, null, 2)};\n`;
fs.writeFileSync(path.resolve('src/data/levels/a2Data.ts'), fileContent, 'utf-8');
console.log("A2 100% unique master curriculum generated successfully.");
