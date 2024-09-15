console.log("quiz.js chargé");
const questions = [
        {
        question: "Quels articles prévoient la légitime défense et la présomption de légitime défense ?",
        options: {
            a: "Articles 132-75 du code de procédure pénale",
            b: "Articles 122-5 et 122-6 du code pénal",
            c: "Articles 224-1 du code de procédure pénale",
            d: "Articles 122-6 et 122-7 du code de procédure pénale"
        },
        correct: "b"
    },
    {
        question: "Quelles activités sont mentionnées dans le livre VI - titre 1er du code de la sécurité intérieure ?",
        options: {
            a: "Conseil national des activités privées de sécurité",
            b: "Formation aux activités privées de sécurité",
            c: "Les activités des agences de recherche privées",
            d: "Les activités privées de surveillance et de gardiennage, de sécurité renforcée, de transport de fonds, de protection physique des personnes et de protection des navires"
        },
        correct: "d"
    },
    {
        question: "Le code de déontologie des activités privées de sécurité définit :",
        options: {
            a: "L'éthique de la profession",
            b: "Les droits des salariés",
            c: "Les règles de vie dans les entreprises de sécurité privée",
            d: "L'ensemble des valeurs morales et les règlements internes spécifiques à la profession"
        },
        correct: "d"
    },
    {
        question: "En vertu de l'article L613-1 du code de la sécurité intérieure, dans quel(s) lieu(x) les agents de sécurité privée peuvent-ils exercer à titre exceptionnel ?",
        options: {
            a: "Sur la voie publique",
            b: "Dans les aéroports",
            c: "Sur les sites, les bâtiments dont ils ont la garde et sur la voie publique",
            d: "Dans les gares ferroviaires"
        },
        correct: "a"
    },
    {
        question: "Dans quels codes figurent les critères discriminatoires prohibés par la loi du 27 mai 2008 ?",
        options: {
            a: "Code pénal et Code de sécurité sociale",
            b: "Code du travail",
            c: "Code de déontologie",
            d: "Code pénal et Code de l'action sociale des familles"
        },
        correct: "b"
    },
    {
        question: "En cas d'attaque terroriste extérieure à un site, que doit préciser la consigne de sécurité ?",
        options: {
            a: "Fermer les espaces et confiner les personnels et le public",
            b: "Appeler les forces de l'ordre",
            c: "L'évacuation du site et l'intervention pour confiner les lieux",
            d: "La sécurisation de la zone d'attaque"
        },
        correct: "a"
    },
    {
        question: "Face à une bousculade, quelle attitude devez-vous adopter ?",
        options: {
            a: "Vous montrez votre mécontentement",
            b: "Mettre en place un cordon de sécurité",
            c: "Vous tentez de calmer l'individu",
            d: "Vous vous mettez à l'abri"
        },
        correct: "b"
    },
    {
        question: "Vous faites face à un interlocuteur grossier et coléreux, comment devez-vous réagir ?",
        options: {
            a: "Rester calme, courtois tout en restant ferme",
            b: "Vous faites preuve de diplomatie en tentant de vous justifier",
            c: "Vous écoutez attentivement et reformulez ses propos",
            d: "Vous minimisez la situation et adoptez une attitude de fuite"
        },
        correct: "a"
    },
    {
        question: "Quels types d'alarmes peuvent déclencher un agent de sécurité privée équipé d'un TPI ?",
        options: {
            a: "Les alarmes automatiques",
            b: "Alerte manuelle",
            c: "Alerte générale",
            d: "Détecteur de mouvement"
        },
        correct: "b"
    },
    {
        question: "Quels peuvent être les symptômes du stress post-traumatique ?",
        options: {
            a: "La passion",
            b: "L'indifférence",
            c: "L'angoisse",
            d: "L'excitation"
        },
        correct: "c"
    },
    {
        question: "Par quel moyen organisationnel une société de sécurité privée peut-elle appliquer le concept de responsabilité sociale des entreprises ?",
        options: {
            a: "Lister les actions, recruter, budgéter, prévoir",
            b: "Par la priorité accordée au chiffre d'affaires",
            c: "Par le nombre d'employés",
            d: "Par la structure de l'entreprise"
        },
        correct: "a"
    },
    {
        question: "Quelle action peut effectuer un agent de sécurité privée lors d'une ronde aléatoire ?",
        options: {
            a: "Mettre en sécurité le site",
            b: "Prévenir des risques malveillants",
            c: "Remettre en état de fonctionnement les équipements de sécurité",
            d: "Boire, manger, écouter de la musique"
        },
        correct: "b"
    },
    {
        question: "Vous êtes témoin d'un affrontement entre deux collègues de travail. Selon vous, il s'agit de :",
        options: {
            a: "D'un conflit latent",
            b: "D'un conflit refoulé",
            c: "D'un conflit déclaré",
            d: "D'un conflit intrapersonnel"
        },
        correct: "c"
    },
    {
        question: "Vous assurez un filtrage de véhicules de transport à l'entrée d'un site industriel. Que doivent préciser les consignes ?",
        options: {
            a: "Le mode opératoire de la fouille d'un véhicule",
            b: "La liste des personnes interdites d'accès",
            c: "Le mode opératoire du contrôle visuel d'un véhicule",
            d: "Contrôler le nombre de points sur le permis de conduire"
        },
        correct: "c"
    },
    {
        question: "Quelle est la condition requise pour appréhender ?",
        options: {
            a: "Fouiller systématiquement la personne appréhendée",
            b: "Conduire la personne vers le local d'appréhension",
            c: "Neutraliser la personne appréhendée",
            d: "Appeler le directeur du magasin"
        },
        correct: "b"
    },
    {
        question: "Quels sont les différents types de conflits ?",
        options: {
            a: "Destructifs - d'intérêt - d'autorité - de concurrence - de génération - d'opinion - malentendu - affectif - de comportement",
            b: "D'autorité - d'égo - de concurrence - de génération",
            c: "D'autorité - de personnalité - de concurrence - de génération",
            d: "D'autorité - d'opinion - d'incompréhension - de personnalité"
        },
        correct: "a"
    },
    {
        question: "Quelle technique de communication appliquez-vous face à une personne mécontente ?",
        options: {
            a: "L'empathie",
            b: "L'assertivité",
            c: "L'écoute",
            d: "L'implication"
        },
        correct: "c"
    },
    {
        question: "Que permet l'exploitation d'une gestion numérique de consignes par les agents de sécurité privée ?",
        options: {
            a: "Les agents disposent d'un droit de modification sur toutes les consignes",
            b: "Les agents disposent d'un droit de suppression sur les consignes",
            c: "Un accès restreint aux personnes du service",
            d: "Donner l'alerte"
        },
        correct: "c"
    },
    {
        question: "Quel acteur peut être interpellé par l'agent de sécurité privée en cas de non-application de la convention collective nationale ?",
        options: {
            a: "L'inspection du travail",
            b: "L'inspecteur de police",
            c: "Le C.N.A.P.S",
            d: "La C.N.I.L"
        },
        correct: "a"
    },
    {
        question: "Sous quelles conditions le contrôle d'accès biométrique peut-il être autorisé sur site ?",
        options: {
            a: "S'il traite des données personnelles",
            b: "S'il permet le contrôle du temps de travail des salariés exposés",
            c: "S'il permet le contrôle d'accès limités aux personnels autorisés",
            d: "S'il répond à un besoin de confort"
        },
        correct: "c"
    },
    {
        question: "Quels sont les spécialistes en santé et sécurité au travail, externes à l'entreprise, pouvant être sollicités par l'employeur ?",
        options: {
            a: "La médecine du travail",
            b: "Les représentants du personnel",
            c: "L'inspection du travail",
            d: "Les intérimaires"
        },
        correct: "a"
    },
    {
        question: "Quel est l'objectif du référentiel MASE ?",
        options: {
            a: "Manuel amélioration sécurité santé environnement entreprise",
            b: "Est un système de management dont l'objectif est d'appliquer des directives",
            c: "Est un système de management dont l'objectif est de garantir la sécurité",
            d: "Garantir un niveau de prestations de services en adéquation avec les besoins"
        },
        correct: "a"
    },
    {
        question: "Quel équipement n'est pas obligatoire dans un système de vidéoprotection ?",
        options: {
            a: "Le logiciel d'analyse et de traitement d'image",
            b: "Un enregistreur",
            c: "Une ou plusieurs caméras",
            d: "Serveur de vidéoprotection"
        },
        correct: "a"
    },
    {
        question: "Quels sont les objectifs d'un dispositif d'enregistrement des images en vidéoprotection ?",
        options: {
            a: "Permettre le déclenchement d'alarme",
            b: "Permettre la mémorisation d'une quantité d'images supérieure",
            c: "La constatation des infractions par les services de police",
            d: "Permettre le signalement de défaillances du système d'enregistrement"
        },
        correct: "c"
    },
    {
        question: "Que doivent mentionner les étiquettes et les fiches de données de sécurité pour les substances dangereuses et les mélanges ?",
        options: {
            a: "Les conseils de prudence 'C'",
            b: "Les conseils de prudence 'P' + 3 chiffres",
            c: "Les phrases de risque 'R'",
            d: "Les phrases de sécurité 'S'"
        },
        correct: "b"
    },
    {
        question: "Qu'est-ce que le risque ?",
        options: {
            a: "Est une source réelle de dommage ou de préjudice",
            b: "Est une source possible de dommage ou de préjudice",
            c: "Est une source de danger imminent",
            d: "Est une source de danger avéré"
        },
        correct: "b"
    },
    {
        question: "Que signifie l'acronyme OIV ?",
        options: {
            a: "Opérateurs d’importance vitale",
            b: "Opérateur d'identité de valeur",
            c: "Opérateur identité vital",
            d: "Opérateur intégrateur en vidéoprotection"
        },
        correct: "a"
    },
    {
        question: "À quelle famille de détection appartient le détecteur intrusion infrarouge passif ?",
        options: {
            a: "Détection périmétrique",
            b: "Détection périphérique",
            c: "Détection ponctuelle",
            d: "Détection volumétrique"
        },
        correct: "d"
    },
    {
        question: "Quel procédé ne fait pas partie du principe d'extinction en sécurité incendie ?",
        options: {
            a: "L'inhibition",
            b: "L'obstruction",
            c: "L'étouffement",
            d: "Refroidissement"
        },
        correct: "b"
    },
    {
        question: "Quels sont les trois niveaux de déclinaison du plan ORSEC (Organisation de la réponse de sécurité civile) ?",
        options: {
            a: "Territorial - zonal - maritime",
            b: "National - zonal – départemental",
            c: "Maritime - zonal - départemental",
            d: "Intercommunal - zonal - maritime"
        },
        correct: "b"
    },
    {
        question: "Quelle est la graduation de l'échelle pour analyser les risques avant un événement ?",
        options: {
            a: "Risque faible - risque moyen - risque important",
            b: "Risque assez important - risque important - risque majeur",
            c: "Risque grave - risque très grave - risque mortel",
            d: "Risque moyen - risque important - risque très important"
        },
        correct: "b"
    },
    {
        question: "Qui est chargé de sécuriser un spectacle rassemblant plus de 1500 personnes ?",
        options: {
            a: "Le préfet du département",
            b: "Le maire de la commune",
            c: "Le producteur du spectacle",
            d: "L'organisateur du spectacle"
        },
        correct: "d"
    },
    {
        question: "Quel article définit les palpations de sécurité en sécurité événementielle ?",
        options: {
            a: "L'article 613-2 du C.S.I",
            b: "L'article 613-3 du C.S.I",
            c: "L'article 613-6 du C.S.I",
            d: "L'article 613-11 du C.S.I"
        },
        correct: "b"
    },
    {
        question: "Quelle définition englobe tous les aspects de la notion de terrorisme ?",
        options: {
            a: "Tout acte commis dans l'intention de causer la mort ou des blessures graves à des civils ou des non-combatants",
            b: "Tout acte commis de violences de nature à mettre en péril les institutions de la République",
            c: "Une action concertée visant le renversement du régime en place par des actes terroristes",
            d: "Une action concertée visant à combattre l'ennemi extérieur par des actes terroristes"
        },
        correct: "a"
    },
    {
        question: "Quel élément n'entre pas dans la conception d'un Engin Explosif Improvisé (EEI) ?",
        options: {
            a: "Un détonateur",
            b: "Une charge explosive",
            c: "Minuteur",
            d: "Une détente"
        },
        correct: "d"
    },
    {
        question: "Quelle sanction encoure tout étranger s'étant rendu coupable d'infractions, lors du déroulement de manifestations sur la voie publique ?",
        options: {
            a: "Une interdiction de séjour sur le territoire français pour une durée de 5 ans",
            b: "Une amende",
            c: "Travaux d'intérêt général",
            d: "1 an de prison"
        },
        correct: "a"
    },
    {
        question: "Quel facteur peut faire basculer une personne dans l'action terroriste ?",
        options: {
            a: "L'absence de réflexion",
            b: "Le sentiment de dévalorisation, l’isolement et le désir d'imposer ses idées",
            c: "L’éducation nationale"
        },
        correct: "b"
    },
    {
        question: "Combien d'intervenants du dispositif prévisionnel de secours doivent être mobilisés lors d'une manifestation accueillant plus de 100 000 personnes ?",
        options: {
            a: "76 intervenants secouristes minimum",
            b: "20 intervenants secouristes minimum",
            c: "4 intervenants secouristes minimum",
            d: "6 intervenants secouristes minimum"
        },
        correct: "a"
    },
    {
        question: "Comment sont désignés les grands événements exposés, par leur ampleur ou leurs circonstances particulières, à un risque particulier ?",
        options: {
            a: "Par arrêté",
            b: "Par décret",
            c: "Par ordonnance",
            d: "Par directive"
        },
        correct: "b"
    },
    {
        question: "Quelle posture Vigipirate est affichée face à une menace d'attaque terroriste imminente ?",
        options: {
            a: "Vigilance",
            b: "Vigipirate attentat",
            c: "Alerte attentat",
            d: "Urgence attentat"
        },
        correct: "d"
    },
    {
        question: "Quels sont les niveaux de classification ?",
        options: {
            a: "Confidentiel défense",
            b: "Secret défense et Confidentiel défense",
            c: "Confidentiel défense, Secret défense, Très secret défense",
            d: "Confidentiel défense, Très confidentiel, Secret défense"
        },
        correct: "c"
    },
    {
        question: "Quel est le point commun des sites dits 'sensibles' ?",
        options: {
            a: "Ils constituent des secteurs à forte valeur ajoutée",
            b: "Ils dépendent uniquement du secteur public",
            c: "Ils constituent des secteurs à fort potentiel",
            d: "Ils se dotent de technologies avancées pour prévenir tout type de risques"
        },
        correct: "d"
    },
    {
        question: "Qu'est-ce qu'un site classé SEVESO ?",
        options: {
            a: "Est un bâtiment d'état répertorié selon le danger de ses équipements",
            b: "Une directive mise en place dans l'Union Européenne pour identifier les sites industriels présentant des risques d'accidents majeurs",
            c: "Est une installation classée répertoriée générant des nuisances pour la population",
            d: "Une directive nationale mise en place pour identifier les sites industriels présentant des risques d'accidents majeurs"
        },
        correct: "b"
    },
    {
        question: "Quelles informations n'ont pas une obligation de classification ?",
        options: {
            a: "Les informations classifiées au niveau Très Secret Défense",
            b: "Les informations classifiées au niveau Secret Défense",
            c: "Les informations classifiées au niveau patrimonial",
            d: "Les informations classifiées au niveau Confidentiel Défense"
        },
        correct: "c"
    },
    {
        question: "Qu'est-ce que la protection périmétrique ?",
        options: {
            a: "Elle protège les limites de bâtiments",
            b: "Elle protège les limites de propriété",
            c: "Elle protège les limites d'une zone particulière",
            d: "Elle protège les limites d'un point précis"
        },
        correct: "a"
    },
    {
        question: "Définissez une 'posture VIGIPIRATE' :",
        options: {
            a: "Est une mesure opérationnelle pouvant être permanente ou...",
            b: "Est une mesure gouvernementale de vigilance, de prévention et protection face aux menaces terroristes",
            c: "Est la traduction opérationnelle anticipant les attaques terroristes sur...",
            d: "Est une mesure de sécurisation obligatoire dans tous les lieux ouverts..."
        },
        correct: "b"
    },
    {
        question: "Quel document doit être obligatoirement élaboré par l'opérateur d'importance vitale ?",
        options: {
            a: "Le plan de protection externe",
            b: "Le plan de sécurité des systèmes d'information à importance vitale",
            c: "Le plan de prévention",
            d: "Le plan particulier d'intervention"
        },
        correct: "b"
    },
    {
        question: "Quel est l'objectif d'un plan de prévention des risques technologiques (PPRT) ?",
        options: {
            a: "Limiter l’exposition de la population aux conséquences des accidents industriels",
            b: "Limiter ou interdire des constructions à proximité d'un site",
            c: "Instaurer des comités d'information et de concertation afin de limiter les risques",
            d: "Prévoir les moyens d'alerte et de gestion de sinistres susceptibles d'être engagés"
        },
        correct: "a"
    },
    {
        question: "Quels sont les trois niveaux de risque associés au terrorisme ?",
        options: {
            a: "Vigilance - Risque Attentat - Urgence Attentat",
            b: "Risque Attentat - Vigilance - Urgence Attentat",
            c: "Urgence Attentat - Vigilance - Risque Attentat",
            d: "Vigilance - Urgence Attentat - Risque Attentat"
        },
        correct: "a"
    },
    // Ajoute les autres questions ici...
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 45;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    console.log("Quiz démarré");
    shuffle(questions); // Mélange les questions
    showQuestion();
    startTimer();
}

function showQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${question.question}</p>
        ${Object.keys(question.options).map(key => `
            <button class="option" onclick="selectOption('${key}')">${question.options[key]}</button>
        `).join('')}
    `;
}

function startTimer() {
    timeLeft = 45;
    document.getElementById('time').innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function selectOption(selectedKey) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('selected');
    });
    const selectedOption = Array.from(options).find(option => option.textContent === questions[currentQuestionIndex].options[selectedKey]);
    selectedOption.classList.add('selected');
    selectedOption.dataset.selected = selectedKey;
}

function submitAnswer() {
    clearInterval(timer);
    const selectedOption = document.querySelector('.option.selected');
    const question = questions[currentQuestionIndex];
    const correctionDiv = document.createElement('div');
    correctionDiv.id = 'correction';
    
    if (selectedOption && selectedOption.dataset.selected === question.correct) {
        score++;
        correctionDiv.innerHTML = `<p>Bonne réponse !</p>`;
    } else {
        correctionDiv.innerHTML = `<p>Mauvaise réponse, il s'agissait de la réponse ${question.correct}. ${question.options[question.correct]}</p>`;
    }

    document.getElementById('questionContainer').appendChild(correctionDiv);
    document.getElementById('submitButton').disabled = true;

    setTimeout(() => {
        document.getElementById('correction').remove();
        document.getElementById('submitButton').disabled = false;
        nextQuestion();
    }, 3000); // Affiche la correction pendant 3 secondes avant de passer à la question suivante
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        startTimer();
    } else {
        showResult();
    }
}

function showResult() {
    const resultDiv = document.getElementById('result');
    const quizContainer = document.getElementById('quizContainer');
    const totalQuestions = questions.length;
    const note = (score / totalQuestions) * 20;
    quizContainer.style.display = 'none';
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `Votre score est : ${score}/${totalQuestions}<br>Votre note est : ${note}/20`;
}

window.onload = startQuiz;
