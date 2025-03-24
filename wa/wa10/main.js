const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 32 fahrenheit in the fridge, so :insertx: was cold as heck, Then the fridge openened and a :inserty: stared right at em. Then it :insertz:. Bob saw, but were not surprised because :insertx: weighs 200 pounds, and tastes good as heck.';
const insertX = ['Carrot', 'Apple', 'Strawberry'];
const insertY = ['big old man', 'overweight movie star', 'slobbering dog'];
const insertZ = ['munched him to a pulp', 'ate him all at once', 'disintegrated him in its mouth'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('32 fahrenheit', temperature);
    newStory = newStory.replaceAll('200 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
