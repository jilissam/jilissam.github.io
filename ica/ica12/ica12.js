// Select the new quote button using a querySelector. Assign it to a new variable.
// Write an event listener to check if the button is clicked. When the button is clicked, run a function called "getQuote".
const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);

const questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-answer-text');

let answer = '';

//Add a new variable that holds the API endpoint: 
const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

//Change the getQuote function to use the fetch method to get a random quote from that endpoint.
//If successful, output the quote to the console
//If it fails, output an error message to the console AND via alert
async function getQuote() {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw Error(response.statusText);
        const { question, answer: newAnswer } = await response.json();
        
        displayQuote(question);
        answer = newAnswer;
        answerTxt.textContent = '';
    } catch(err) {
        console.log(err);
        alert('Failed to fetch new quote');
    }
}

//Write a second function called "displayQuote" that will display the text of a fetched quote in the HTML element with an id of js-quote-text.
function displayQuote(question) {
    questionTxt.textContent = question;
}

function displayAnswer() {
    answerTxt.textContent = answer;
}

getQuote();
