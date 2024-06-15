//DOM
let paragraphs = document.getElementsByTagName("p");
let headings = document.getElementsByTagName("h1");

//EVENTS
function clickAction() {
    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;

    if (isNaN(number1) || isNaN(number2)) {
        resultElement.textContent = "Please enter valid numbers!";

    } else {
        let result = number1 * number2;
        resultElement.textContent = "Answer: " + "✨" + result + "✨";
    }
}

calculateButton.addEventListener("click", clickAction);

const clearResult = document.getElementById("clearButton");

function clearContent() {
    resultElement.textContent = "";
}
clearResult.addEventListener("click", clearContent);


//Using getElementById, random generation, loops, functions
const ingredients = ["Basil", "Cumin", "Coriander",];
function generateRecipe() {
    const recipeList = document.getElementById("reciepe-list");
    recipeList.innerHTML = "";
    // Get random ingredients and protein
    const randomIngredients = getRandomIngredients(3);
    // Loop through all ingredients and create list items
    for (let i = 0; i < randomIngredients.length; i++) {
        const ingredient = randomIngredients[i];
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        recipeList.appendChild(listItem);
    }
    // Function to get random ingredients
    function getRandomIngredients(count) {
        const randomIngredients = [];
        const ingredientsCopy = ingredients.slice();
        // Pick random ingredients from the array
        while (randomIngredients.length < count) {
            const randomIndex = Math.floor(Math.random() * ingredientsCopy.length);
            const pickedIngredient = ingredientsCopy.splice(randomIndex, 1)[0];
            randomIngredients.push(pickedIngredient);
        }
        return randomIngredients;
    }
}
//https://codepen.io/Tara2805/pen/JjVpaaj?editors=1010


//Style personalisation
function applyBackgroundColor() {
  const selectedBgColor = document.getElementById("bg-color").value;
  document.body.style.backgroundColor = selectedBgColor;
}

function applyFontFamily() {
  const selectedFont = document.getElementById("font-family").value;
  document.body.style.fontFamily = selectedFont;
}

function applyFontColor() {
  const selectedFontColor = document.getElementById("font-color").value;
  document.body.style.color = selectedFontColor;
}
//https://codepen.io/Tara2805/pen/ZEZrMjV?editors=0010

const list = document.getElementById("fruits");
const items = list.getElementsByTagName("li");

const paragraph = document.getElementById("myParagraph");
function addEmoji() {
  paragraph.textContent = paragraph.textContent + "💅🏾";
}

// Find the index of the last item
let index = items.length - 1;

function showNextItem() {
  if (index >= 0) {
    if (index === 0) {
      setTimeout(addEmoji, 500);
    }
    items[index].style.visibility = "visible";
    index--; //count down
    //delay in miliseconds (one second)
    setTimeout(showNextItem, 1000);
  }
}

showNextItem();
//https://codepen.io/nk5/pen/NWmqpEb

//https://codepen.io/Tara2805/pen/wvZyExP?editors=1010
const love = document.getElementById("love");
const lovedItems = love.getElementsByTagName("li");

for (let i = 0; i < lovedItems.length; i++) {
  const loved = lovedItems[i];
  loved.textContent = loved.textContent + " 💖 💅🏾";
}

//NESTED ELEMENTS
const love = document.getElementById("love");
const lovedItems = love.getElementsByTagName("li");
 
const top = document.getElementById("top");
const topTopics = top.getElementsByClassName("topic");

//EVENT LISTENERS
//https://codepen.io/Tara2805/pen/VwNQGEj
// getting the elements from our HTML
const calculateButton = document.getElementById("calculateButton");
const resultElement = document.getElementById("restult");

function clickAction() {
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;

  // if / else statement to check whether either of the numbers entered is empty / isn't a number! This is what Nan means.
  if (isNaN(number1) || isNaN(number2)) {
    resultElement.textContent = "Please enter valid numbers!";
    // else, multiply the two numbers.
  } else {
    let result = number1 * number2;
    resultElement.textContent = "Answer: " + "✨" + result + "✨";
  }
}
// adding our event listener
// the button click triggers our function
calculateButton.addEventListener("click", clickAction);

const clearResult = document.getElementById("clearButton");

function clearContent() {
  resultElement.textContent = "";
}
clearResult.addEventListener("click", clearContent);

//TIMERS
//https://codepen.io/nk5/pen/NWmqpEb

//Fruit Accordion example
//https://codepen.io/Tara2805/pen/RwOQYqK

//To do list example
//https://codepen.io/Tara2805/pen/BaEYOGm?editors=1010

//Math.random
//https://codepen.io/AneteZepaCFG/pen/RwqWpEZ?editors=1012

// Data validation and operators
// https://codepen.io/AneteZepaCFG/pen/VwVwZmR?editors=0011

// Working with loops
// https://codepen.io/CFG-Programmes/pen/QWYjPqd?editors=1010
// https://codepen.io/CFG-Programmes/pen/QWYjPqd?editors=1012

// Events listeners doms 
// https://codepen.io/CFG-Programmes/pen/qBgOwXQ?editors=1010
