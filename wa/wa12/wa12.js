const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer); // Change setAppColor to displayAnswer
const authorImage = document.getElementById('js-author-image');
const app = document.getElementById('app');

const questionTxt = document.querySelector('#js-quote-text');
let answerTxt = document.querySelector('#js-answer-text');

let answer = '';

//Quotable API
const endpoint = 'https://api.quotable.io/random';

async function getQuote() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw Error(response.statusText);
    const { content: question, author: newAnswer } = await response.json();

    displayQuote(question, newAnswer);
    answer = newAnswer;
    answerTxt.textContent = '';

    // Wipe allows the text animation to happen
    app.classList.add('wipe');
    app.classList.remove('twitter-selected');

    setTimeout(() => {
      displayQuote(question, newAnswer);
      answer = newAnswer;
      answerTxt.textContent = '';

      setTimeout(() => {
        app.classList.remove('wipe');
      }, 500);
    }, 50);

  } catch (err) {
    console.log(err);
    alert('Failed to fetch new quote');
  }
}

function displayQuote(question, author) {
  questionTxt.textContent = question;
  const authorImageURL = getProfileImageURL(author);
  authorImage.src = authorImageURL;
}

function displayAnswer() { 
  answerTxt.textContent = answer;
  app.classList.add('twitter-selected'); 
}

// Example function provided by the Quotable API so I can add a new feature where the image is displayed as a hint 
const getProfileImageURL = (author, size = 200) => {
  const IMAGE_BASE = 'https://images.quotable.dev/profile';
  return `${IMAGE_BASE}/${size}/${author.slug}.jpg`;
};

getQuote();
