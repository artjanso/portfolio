// Javascript feature
const welcomeArr = [
    "Albanian: I Mirëpritur",
    "Bosnian: Dobrodošli",
    "Croatian: Dobrodošli",
    "Czech: Vitejte",
    "Dutch: Welkom",
    "Estonian: Tere Tulemast",
    "Finnish: Tervetuloa",
    "French: Bienvenu",
    "German: Herzlich Willkommen",
    "Greek: Kalos Irthate",
    "Hungarian: Údvözöljük",
    "Icelandic: Velkominn",
    "Irish: Fáilte",
    "Italian: Benvenuta / Benvenuto",
    "Macedonian: Добредојден (Dobredojde)",
    "Maltese: Merhba",
    "Norwegian: Velkommen",
    "Polish: Witamy",
    "Portuguese: Bem-vinda",
    "Romanian: Bine ati venit",
    "Russian: Dобро Пожаловать",
    "Spanish: Bienvenidas / Bienvenidos",
    "Swedish: Välkommen",
    "Welsh: Croeso",
    "Yiddish: Hela"
];
/*
const randomElement = Math.floor(Math.random() * welcomeArr.length);

const randomWelcomeMessage = welcomeArr[randomElement];

console.log(randomElement);
console.log(welcomeArr.length);
console.log(welcomeArr[randomElement]);


const newElement = document.createElement("p");
const textOfNewElement = document.createTextNode(welcomeArr[randomElement]);
newElement.appendChild(textOfNewElement);
const element = document.getElementById("javascript");
element.appendChild(newElement);

*/


function randomWelcomeMessage () {
    const randomElement = Math.floor(Math.random() * welcomeArr.length);
    const randomWelcomeMessage = welcomeArr[randomElement];

    //const newElement = document.createElement("p");

    //const textOfNewElement = document.createTextNode(randomWelcomeMessage);
    
    //newElement.appendChild(textOfNewElement);
    
    const element = document.getElementById("javascript-logic");
    element.innerHTML = randomWelcomeMessage;
};

randomWelcomeMessage();


const interval = setInterval(function() {
    randomWelcomeMessage();
}, 5000);


