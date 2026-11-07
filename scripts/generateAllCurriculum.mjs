import fs from 'fs';
import path from 'path';

// Let's create complete rich curriculum data generator for A1, A2, B1, B2
const levels = ['A1', 'A2', 'B1', 'B2'];

const curriculumPlans = {
  A1: [
    {
      num: 1,
      title: "Rutina Diaria y Hábitos Reales (Present Simple)",
      tagline: "Aprende a describir tu día a día con soltura y sin listas infinitas de reglas",
      focus: "Present Simple para rutinas (I wake up, I commute, I don't skip)",
      goal: "Describir tu jornada diaria y preguntar a otros por sus horarios habituales.",
      theory: {
        title: "El Presente Simple en la Vida Real",
        explanationEs: "El Present Simple NO se usa para lo que estás haciendo en este segundo, sino para tus hábitos y verdades cotidianas. A las personas 'He, She, It' les agregamos -s (He works, She drives). Para negar o preguntar usamos 'do / does'.",
        practicalFormula: "I / You / We / They + [Verbo base] | He / She + [Verbo + s] | Do you + [Verbo]?",
        timeExpressions: ["every morning", "on weekdays", "around 7 AM", "usually", "hardly ever", "at night"],
        commonMistakeEs: "Decir 'I am wake up at 7' en lugar de 'I wake up at 7'. ¡No mezcles el verbo TO BE (am/is/are) con verbos de acción en presente simple!"
      },
      topicVocab: [
        ["wake up", "/weɪk ʌp/", "phrasal verb", "despertarse", "I usually wake up at 6:30 AM.", "Normalmente me despierto a las 6:30 AM."],
        ["get out of bed", "/ɡɛt aʊt/", "phrase", "levantarse de la cama", "It takes me ten minutes to get out of bed.", "Me toma 10 minutos levantarme."],
        ["commute", "/kəˈmjuːt/", "verb", "trasladarse al trabajo", "I commute by subway every morning.", "Me traslado en metro cada mañana."],
        ["grab a coffee", "/ɡræb/", "phrase", "tomar un café rápido", "I always grab a coffee on my way to work.", "Siempre tomo un café de camino al trabajo."],
        ["skip breakfast", "/skɪp/", "phrase", "saltarse el desayuno", "I rarely skip breakfast.", "Rara vez me salto el desayuno."],
        ["head out", "/hɛd aʊt/", "phrasal verb", "salir de casa", "I head out around 8 AM.", "Salgo alrededor de las 8 AM."],
        ["check emails", "/tʃɛk/", "phrase", "revisar correos", "The first thing I do is check emails.", "Lo primero que hago es revisar correos."],
        ["take a break", "/breɪk/", "phrase", "tomar un descanso", "We take a break at noon.", "Tomamos un descanso al mediodía."],
        ["groceries", "/ˈɡroʊsəriz/", "noun", "compras de comida", "I buy groceries on Tuesday.", "Compro víveres los martes."],
        ["work out", "/wɜːrk aʊt/", "phrasal verb", "hacer ejercicio", "Do you work out after work?", "¿Haces ejercicio después de trabajar?"],
        ["cook dinner", "/kʊk/", "phrase", "cocinar la cena", "My partner and I cook dinner together.", "Cocinamos la cena juntos."],
        ["unwind", "/ʌnˈwaɪnd/", "verb", "desconectarse del estrés", "I read a novel to unwind.", "Leo una novela para desconectarme."],
        ["go to bed", "/ɡoʊ/", "phrase", "acostarse a dormir", "I go to bed around 11 PM.", "Me acuesto sobre las 11 PM."],
        ["alarm goes off", "/əˈlɑːrm/", "phrase", "sonar la alarma", "My alarm goes off at 6:00 sharp.", "Mi alarma suena a las 6 en punto."],
        ["weekday", "/ˈwiːkdeɪ/", "noun", "día entre semana", "On weekdays I am very busy.", "Entre semana estoy muy ocupado."],
        ["weekend", "/ˈwiːkɛnd/", "noun", "fin de semana", "What do you do on weekends?", "¿Qué haces los fines de semana?"],
        ["tidy up", "/ˈtaɪdi/", "phrasal verb", "recoger la casa", "I tidy up the kitchen after eating.", "Recojo la cocina tras comer."],
        ["traffic jam", "/træfɪk/", "noun", "atasco de tráfico", "I hate getting stuck in a traffic jam.", "Odio quedarme en un atasco."],
        ["schedule", "/ˈskɛdʒuːl/", "noun", "horario / agenda", "I have a flexible schedule.", "Tengo un horario flexible."],
        ["stay up late", "/steɪ ʌp/", "phrase", "desvelarse / trasnochar", "I try not to stay up late.", "Intento no desvelarme."]
      ]
    },
    {
      num: 2,
      title: "Lo que Ocurre Ahora Mismo (Present Continuous)",
      tagline: "Aprende a reportar lo que estás haciendo en vivo sin enredarte con el gerundio",
      focus: "Present Continuous (am/is/are + verb-ing) para actividades en progreso y llamadas",
      goal: "Explicar qué estás haciendo en este momento, atender llamadas de trabajo y avisar que estás ocupado.",
      theory: {
        title: "El Presente Continuo en la Conversación Real",
        explanationEs: "Usamos el Present Continuous cuando la acción está ocurriendo AHORA MISMO, o cuando estás 'en medio de un proceso' temporal. Se forma obligatoriamente con el verbo TO BE (am/is/are) seguido del verbo con -ing.",
        practicalFormula: "Subject + am/is/are + [Verbo-ing] | Are you + [Verbo-ing]?",
        timeExpressions: ["right now", "at the moment", "currently", "these days", "this week"],
        commonMistakeEs: "Olvidar el verbo 'to be' y decir 'I working' en vez de 'I AM working'. O usarlo para hábitos permanentes: NO digas 'I am living here always', di 'I live here'."
      },
      topicVocab: [
        ["head out", "/hɛd aʊt/", "phrasal verb", "estar saliendo ya", "I am heading out right now.", "Estoy saliendo justo ahora."],
        ["work on", "/wɜːrk ɒn/", "phrasal verb", "trabajar en una tarea", "I am working on the budget.", "Estoy trabajando en el presupuesto."],
        ["attend", "/əˈtɛnd/", "verb", "asistir a reunión", "She is attending a webinar.", "Ella está asistiendo a un webinar."],
        ["deal with", "/diːl wɪð/", "phrasal verb", "lidiar con un problema", "I am dealing with a client issue.", "Estoy gestionando un problema de cliente."],
        ["look for", "/lʊk fɔːr/", "phrasal verb", "estar buscando algo", "I am looking for my keys.", "Estoy buscando mis llaves."],
        ["wait for", "/weɪt/", "phrasal verb", "esperar a alguien", "We are waiting for the manager.", "Estamos esperando al gerente."],
        ["catch up", "/kætʃ/", "phrasal verb", "ponerse al día", "We are catching up over coffee.", "Nos estamos poniendo al día."],
        ["run out of", "/rʌn aʊt/", "phrase", "quedarse sin algo", "My phone is running out of battery.", "Mi celular se queda sin batería."],
        ["troubleshoot", "/ˈtrʌbəl/", "verb", "resolver falla técnica", "The IT team is troubleshooting.", "El equipo resuelve la falla."],
        ["on my way", "/ɒn maɪ/", "phrase", "en camino", "I am on my way to the meeting.", "Voy en camino a la reunión."],
        ["hurry up", "/ˈhʌri/", "phrasal verb", "darse prisa", "We are hurrying up to finish.", "Nos damos prisa para terminar."],
        ["stream", "/striːm/", "verb", "ver en streaming", "I am streaming the soccer match.", "Veo el partido en streaming."],
        ["take care of", "/teɪk/", "phrase", "encargarse de algo", "I am taking care of the reservations.", "Me encargo de las reservas."],
        ["prep", "/prɛp/", "verb", "preparar material", "She is prepping the slides.", "Prepara las diapositivas."],
        ["pack", "/pæk/", "verb", "empacar maleta", "I am packing my bag for tomorrow.", "Empaco mi maleta para mañana."],
        ["recharge", "/riːˈtʃɑːrdʒ/", "verb", "recargar energía", "I am resting to recharge.", "Descanso para recargar."],
        ["stroll", "/stroʊl/", "verb", "pasear tranquilo", "They are strolling downtown.", "Pasean por el centro."],
        ["brainstorm", "/ˈbreɪn/", "verb", "lluvia de ideas", "We are brainstorming ideas.", "Hacemos lluvia de ideas."],
        ["update", "/ʌpˈdeɪt/", "verb", "actualizar datos", "I am updating the spreadsheet.", "Actualizo la hoja de cálculo."],
        ["wrap up", "/ræp ʌp/", "phrasal verb", "concluir una tarea", "I am wrapping up the report now.", "Concluyo el reporte justo ahora."]
      ]
    },
    {
      num: 3,
      title: "Pedir y Preguntar con Cortesía (Could I get / Would you mind)",
      tagline: "La fórmula de cortesía que abre puertas en cafeterías, tiendas y oficinas",
      focus: "Modal verbs para peticiones amables (Could I have, Can you, Would you mind)",
      goal: "Aprender a ordenar café, comida o pedir favores sin sonar descortés ni usar 'I want'.",
      theory: {
        title: "El peligro de traducir 'Quiero' como 'I want'",
        explanationEs: "En español decir 'Quiero un café' es normal. En inglés, 'I want coffee' suena demandante o agresivo. Los adultos angloparlantes usan fórmulas suaves como 'Could I get...' o 'May I have...'.",
        practicalFormula: "Could I get + [objeto] + , please? | Would you mind + [Verbo-ing]?",
        timeExpressions: ["right now", "if possible", "when you have a second", "whenever you can"],
        commonMistakeEs: "Decir 'I want one tea' en la cafetería. ¡Siempre usa 'Could I get a tea, please?'!"
      },
      topicVocab: [
        ["to go", "/tu ɡoʊ/", "phrase", "para llevar (comida)", "Could I get this to go, please?", "¿Me da esto para llevar, por favor?"],
        ["for here", "/fɔːr hɪər/", "phrase", "para comer aquí", "Is this for here or to go?", "¿Es para aquí o para llevar?"],
        ["receipt", "/rɪˈsiːt/", "noun", "recibo / ticket", "Do you need the receipt?", "¿Necesita el recibo?"],
        ["tap", "/tæp/", "verb", "pagar sin contacto (contactless)", "You can tap your card here.", "Puede acercar su tarjeta aquí."],
        ["napkin", "/ˈnæpkɪn/", "noun", "servilleta", "Could I grab a couple of napkins?", "¿Puedo tomar unas servilletas?"],
        ["sparkling water", "/ˈspɑːrklɪŋ/", "noun", "agua con gas", "I'd prefer sparkling water.", "Preferiría agua con gas."],
        ["bill / check", "/tʃɛk/", "noun", "la cuenta del restaurante", "Could we get the check, please?", "¿Nos trae la cuenta, por favor?"],
        ["split the bill", "/splɪt/", "phrase", "dividir la cuenta", "Can we split the bill in two?", "¿Podemos dividir la cuenta en dos?"],
        ["keep the change", "/tʃeɪndʒ/", "phrase", "quédese con el cambio", "Keep the change, thanks!", "¡Quédese con el cambio, gracias!"],
        ["on the house", "/haʊs/", "phrase", "cortesía de la casa (gratis)", "The dessert is on the house.", "El postre es cortesía de la casa."],
        ["borrow", "/ˈbɒroʊ/", "verb", "pedir prestado", "Can I borrow your pen for a second?", "¿Me prestas tu bolígrafo un segundo?"],
        ["lend", "/lɛnd/", "verb", "prestar a alguien", "Could you lend me your charger?", "¿Podrías prestarme tu cargador?"],
        ["favor", "/ˈfeɪvər/", "noun", "favor", "Could you do me a quick favor?", "¿Podrías hacerme un favor rápido?"],
        ["recommend", "/ˌrɛkəˈmɛnd/", "verb", "recomendar", "What do you recommend here?", "¿Qué recomiendas de aquí?"],
        ["dietary restriction", "/ˈdaɪəˌtɛri/", "noun", "restricción alimentaria", "Do you have any dietary restrictions?", "¿Tiene alguna restricción alimentaria?"],
        ["dairy-free", "/ˈdɛəri/", "adj", "sin lácteos", "Do you have dairy-free milk?", "¿Tiene leche sin lácteos?"],
        ["extra charge", "/tʃɑːrdʒ/", "noun", "cobro adicional", "Is there an extra charge for oat milk?", "¿Hay cobro adicional por leche de avena?"],
        ["refill", "/ˈriːfɪl/", "noun/verb", "rellenar la bebida", "Can I get a refill on water?", "¿Me puede rellenar el agua?"],
        ["restroom", "/ˈrɛstruːm/", "noun", "baño / servicio público", "Where is the restroom located?", "¿Dónde queda el baño?"],
        ["tip", "/tɪp/", "noun/verb", "propina", "Is the tip included?", "¿La propina está incluida?"]
      ]
    },
    {
      num: 4,
      title: "Verbo TO BE vs TO HAVE: Evita los 'False Friends'",
      tagline: "Aprende a expresar edad, sensaciones físicas y estados sin traducir del español",
      focus: "Ser/Estar (Am/Is/Are) vs Tener (Have/Has) en sensaciones físicas",
      goal: "Eliminar errores como 'I have 25 years' o 'I have hunger' y dominar la descripción personal.",
      theory: {
        title: "En inglés NO 'tienes' edad ni hambre: ERES esa sensación",
        explanationEs: "En español decimos 'Tengo 30 años', 'Tengo hambre', 'Tengo frío', 'Tengo miedo'. En inglés TODAS estas expresiones usan el verbo TO BE (am/is/are). 'Have' se reserva exclusivamente para posesión física o relaciones familiares.",
        practicalFormula: "I am + [edad / adjetivo de sensación] | Do you have + [objeto físico]?",
        timeExpressions: ["right now", "always", "sometimes", "after running"],
        commonMistakeEs: "Decir 'I have cold' (suena a 'tengo un resfriado'). Para la sensación di 'I am cold'!"
      },
      topicVocab: [
        ["hungry", "/ˈhʌŋɡri/", "adj", "hambriento (I am hungry)", "I am really hungry, let's eat.", "Tengo mucha hambre, comamos."],
        ["thirsty", "/ˈθɜːrsti/", "adj", "sediento (I am thirsty)", "I am thirsty after that run.", "Tengo sed tras correr."],
        ["cold", "/koʊld/", "adj", "con frío (I am cold)", "Can you close the window? I am cold.", "¿Cierras la ventana? Tengo frío."],
        ["hot / warm", "/hɒt/", "adj", "con calor (I am hot)", "I am hot; let's turn on the AC.", "Tengo calor; prendamos el aire."],
        ["sleepy", "/ˈsliːpi/", "adj", "con sueño / somnoliento", "I am getting sleepy.", "Me está dando sueño."],
        ["scared of", "/skɛərd/", "adj", "con miedo a (I am scared)", "I am scared of heights.", "Tengo miedo a las alturas."],
        ["in a hurry", "/ˈhʌri/", "phrase", "con prisa (I am in a hurry)", "Sorry, I am in a bit of a hurry.", "Disculpa, voy con algo de prisa."],
        ["right", "/raɪt/", "adj", "tener razón (You are right)", "You are totally right about that.", "Tienes toda la razón en eso."],
        ["wrong", "/rɔːŋ/", "adj", "estar equivocado", "I think he is wrong about the price.", "Creo que está equivocado en el precio."],
        ["lucky", "/ˈlʌki/", "adj", "tener suerte (I am lucky)", "We are very lucky today.", "Tenemos mucha suerte hoy."],
        ["ashamed", "/əˈʃeɪmd/", "adj", "avergonzado / con pena", "She was ashamed of the mistake.", "Tenía vergüenza del error."],
        ["jealous", "/ˈdʒɛləs/", "adj", "celoso (I am jealous)", "Are you jealous of his success?", "¿Tienes celos de su éxito?"],
        ["proud of", "/praʊd/", "adj", "orgulloso de", "I am very proud of you.", "Estoy muy orgulloso de ti."],
        ["fond of", "/fɒnd/", "adj", "tener cariño / gustar mucho", "I am fond of jazz music.", "Le tengo mucho cariño al jazz."],
        ["sick of", "/sɪk/", "adj", "harto de algo", "I am sick of this bad weather.", "Estoy harto de este mal tiempo."],
        ["aware of", "/əˈwɛər/", "adj", "estar consciente / al tanto", "Are you aware of the new rules?", "¿Estás al tanto de las reglas?"],
        ["keen on", "/kiːn/", "adj", "entusiasmado con algo", "I am very keen on learning English.", "Tengo mucho entusiasmo por aprender."],
        ["used to", "/juːzd tu/", "adj", "acostumbrado a", "I am used to the city noise.", "Estoy acostumbrado al ruido."],
        ["sure / certain", "/ʃʊər/", "adj", "estar seguro de algo", "Are you sure about that time?", "¿Estás seguro de esa hora?"],
        ["late / on time", "/leɪt/", "adj", "llegar tarde / puntual", "I am running late; don't wait for me.", "Voy tarde; no me esperes."]
      ]
    },
    {
      num: 5,
      title: "Contar lo que Hiciste Ayer (Past Simple Esencial)",
      tagline: "Domina los 20 verbos irregulares de mayor uso para relatar tu día anterior sin trabarte",
      focus: "Past Simple afirmativo, negativo (didn't) y preguntas (Did you...?)",
      goal: "Contar anécdotas de tu fin de semana, qué hiciste ayer y responder entrevistas con fluidez.",
      theory: {
        title: "El Pasado Simple en la Práctica Cotidiana",
        explanationEs: "En inglés, cuando especificas cuándo ocurrió la acción (yesterday, last week, two days ago), usamos siempre el Past Simple. Para negar usamos 'didn't' + VERBO BASE (¡el verbo ya no cambia!). Para preguntar usamos 'Did you' + VERBO BASE.",
        practicalFormula: "Subject + [Verbo Pasado] | I didn't + [Verbo Base] | Did you + [Verbo Base]?",
        timeExpressions: ["yesterday", "last night", "last weekend", "two hours ago", "in 2022"],
        commonMistakeEs: "Decir 'I didn't went' en vez de 'I didn't go'. Recuerda: el auxiliar 'didn't' ya absorbe el pasado, el verbo vuelve a su forma base."
      },
      topicVocab: [
        ["went", "/wɛnt/", "verb past", "fui / fuiste (pasado de go)", "I went to the store yesterday.", "Fui a la tienda ayer."],
        ["got", "/ɡɒt/", "verb past", "conseguí / llegué (pasado de get)", "I got home around 8 PM.", "Llegué a casa sobre las 8 PM."],
        ["had", "/hæd/", "verb past", "tuve / tomé (pasado de have)", "We had a great conversation.", "Tuvimos una gran charla."],
        ["did", "/dɪd/", "verb past", "hice / hizo (pasado de do)", "I did all my chores yesterday.", "Hice todos mis quehaceres ayer."],
        ["saw", "/sɔː/", "verb past", "vi / vio (pasado de see)", "I saw an old friend downtown.", "Vi a un viejo amigo en el centro."],
        ["made", "/meɪd/", "verb past", "hice / preparé (pasado de make)", "I made a homemade pizza.", "Hice una pizza casera."],
        ["took", "/tʊk/", "verb past", "tomé / tardé (pasado de take)", "It took me an hour to finish.", "Me tomó una hora terminar."],
        ["said", "/sɛd/", "verb past", "dije / dijo (pasado de say)", "She said the meeting was canceled.", "Dijo que la reunión se canceló."],
        ["told", "/toʊld/", "verb past", "conté / le dije a (pasado de tell)", "He told me the good news.", "Me contó las buenas noticias."],
        ["bought", "/bɔːt/", "verb past", "compré (pasado de buy)", "I bought a new pair of shoes.", "Compré unos zapatos nuevos."],
        ["found", "/faʊnd/", "verb past", "encontré (pasado de find)", "I found my lost keys under the sofa.", "Encontré mis llaves bajo el sofá."],
        ["felt", "/fɛlt/", "verb past", "me sentí (pasado de feel)", "I felt a bit exhausted last night.", "Me sentí un poco exhausto anoche."],
        ["knew", "/njuː/", "verb past", "sabía / conocía (pasado de know)", "I knew the answer immediately.", "Supe la respuesta de inmediato."],
        ["thought", "/θɔːt/", "verb past", "pensé / creí (pasado de think)", "I thought you were in Madrid.", "Pensé que estabas en Madrid."],
        ["came", "/keɪm/", "verb past", "vine / vino (pasado de come)", "They came to visit us on Sunday.", "Vinieron a visitarnos el domingo."],
        ["gave", "/ɡeɪv/", "verb past", "di / dio (pasado de give)", "My boss gave me positive feedback.", "Mi jefe me dio retroalimentación."],
        ["spent", "/spɛnt/", "verb past", "gasté / pasé tiempo (pasado de spend)", "I spent the afternoon reading.", "Pasé la tarde leyendo."],
        ["left", "/lɛft/", "verb past", "salí / dejé (pasado de leave)", "I left work early yesterday.", "Salí temprano del trabajo ayer."],
        ["met", "/mɛt/", "verb past", "conocí / me reuní con (pasado de meet)", "I met a really interesting client.", "Me reuní con un cliente interesante."],
        ["slept", "/slɛpt/", "verb past", "dormí (pasado de sleep)", "I slept for nine hours straight.", "Dormí nueve horas seguidas."]
      ]
    }
  ]
};

console.log("A1 curriculum plans ready.");
