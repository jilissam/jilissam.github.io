const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside and a beautiful day in Candyland, so :insertx: went for a walk. When they got to :inserty:, they stared in awe for a few moments when they saw :insertz:. Ginger Snap saw the whole thing too and was just as amazed. They weigh 300 pounds, and it was a warm day.";

var insertX = [
  "Strawberry Shortcake",
  "Orange Blossom",
  "Plum Pudding"
];

var insertY = [
  "Candy Castle",
  "Gumdrop Hills",
  "Peanut Acres"
];

var insertZ = [
  "fluffy marshmallow clouds scattering the sherbet colored sky",
  "cotton candy colored fireflies fluttering around them",
  "sugar coated mountains stand before them"
];

var newStory = storyText;

randomize.addEventListener('click', result);

function result() {
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Ginger Snap', name);
   }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature = Math.round(94);

    const weightInStones = Math.round(weight / 14);
    const temperatureInCelsius = Math.round((temperature - 32) * (5 / 9));

    newStory = newStory.replace('94 fahrenheit', temperatureInCelsius + ' centigrade');
    newStory = newStory.replace('300 pounds', weightInStones + ' stone');
  }

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
