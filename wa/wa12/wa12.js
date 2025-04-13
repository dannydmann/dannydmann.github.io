var newBtn = document.querySelector('#js-new-quote').addEventListener('click', getImage);
var answerBtn = document.querySelector('#js-tweet').addEventListener('click', displayDishName);

const endpoint = "https://foodish-api.com/api";

let currentImageUrl = "";
let currentDishName = "";

async function getImage() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    currentImageUrl = json.image;
    displayImage(currentImageUrl);
    currentDishName = extractDishName(currentImageUrl);
    clearDishName();

  } catch (err) {
    console.log(err);
    alert('Failed to load food image');
  }
}

function displayImage(imageUrl) {
  const imgContainer = document.querySelector('#js-image');
  imgContainer.classList.remove('fade-in'); 
  void imgContainer.offsetWidth; 
  imgContainer.src = imageUrl;
  imgContainer.alt = "Random food image";
  imgContainer.classList.add('fade-in'); 
}

function extractDishName(url) {
  const matches = url.match(/images\/([^\/]+)\//);
  return matches ? matches[1] : "Unknown Dish";
}

function displayDishName() {
  const answerText = document.querySelector('#js-answer-text');
  answerText.textContent = `Dish: ${currentDishName}`;
}

function clearDishName() {
  const answerText = document.querySelector('#js-answer-text');
  answerText.textContent = "";
}

getImage();