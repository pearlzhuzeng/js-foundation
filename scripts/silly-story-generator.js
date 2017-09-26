// COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// RAW TEXT STRINGS
const storyText =
  'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = [
  'spontaneously combusted',
  'melted into a puddle on the sidewalk',
  'turned into a slug and crawled away',
];

randomize.addEventListener('click', result);

function result() {
  // EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
  let newStory = storyText; // So we can create a new random story each time the button is pressed. If we made changes directly to storyText, we'd only be able to generate a new story once.
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:', xItem);
  newStory = newStory.replace(':insertx:', xItem); // the replace method only replaces the first instance of the substring it finds
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value != '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById('uk').checked) {
    const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;
    const weight = `${Math.round(300 / 14)} stone`;
    newStory = newStory.replace('94 farenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
