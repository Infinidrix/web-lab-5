/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 

Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/

// Answers to the questions in order of appearance
const LOCATION = [location.href, location.protocol, location.host,
    location.port, location.hostname
];
const BROWSER = [navigator.appName, navigator.appVersion, navigator.platform,
    navigator.language, navigator.cookieEnabled
];
const SCREEN = [screen.height, screen.width, screen.pixelDepth];
const BROWSING = [history.length, history.state];

const order = { LOCATION, BROWSER, SCREEN, BROWSING };

// Define UI Variables  here 
const quizRoot = document.querySelectorAll(".collection");
quizRoot.forEach(section => {
    // gets the title's first word
    let part = section.previousSibling.previousSibling.textContent.split(" ")[0].toUpperCase();
    placeAnswers(section, order[part]);
});

// Display the BOM Information on the innerHTML of the elements

function placeAnswers(section, answers) {
    Array.from(section.children).forEach((question, index) => {
        question.querySelector(".badge").innerHTML = answers[index];
    });
}