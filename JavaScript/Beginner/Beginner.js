// IF ELSE
const response = prompt("books vs movies?");
if (response === "books") {
  console.log("📚");
} else {
  console.log("🍿🍿🍿");
}

// ELSE IF
const NEWresponse = prompt("books vs movies?");
if (NEWresponse === "books" || NEWresponse === "Books") {
  console.log("📚");
} 
else if (NEWresponse === "movies" || NEWresponse === "Movies"){
  console.log("🍿🍿🍿");}
  else {
  console.log("HUH");
}

let isScary = true;
let hasPillow = true;
if (isScary && hasPillow){
  console.log("I will watch the scary movie")
}
else if(isScary && !hasPillow){
  console.log("I will watch a romance instead")
}
else {
console.log("i will watch something else ")
}

//Functions
function banner(words)
{
  console.log("----------------")
  console.log(words)
  console.log("----------------")
}
banner("Well")
banner("not well")

const name = prompt("what is your nameeee??? ")

function makeStart(name)
{
  return "Hello there " + name
}

function makeEnd(name){
  return "Goodbye " + name
}

const well = makeStart(name)
banner(well)

//PUSH AND POP
let fruit = ["apple", "plum", "banana", "kiwi"];
console.log(fruit);
 
fruit.push("berry");
console.log(fruit);
 
fruit.pop();
console.log(fruit);

//SPLICE
let weather = ["sunny", "cloudy", "rainy"];
 
weather.splice(1, 1);
weather.splice(1, 0, "windy", "foggy");
console.log(weather);

//SLICE
input_str = "practice"
reversed_str = input_str[::-1] //reverse
print(reversed_str[3:8:2]) //slice

//UNSHIFT AND SHIFT
weather.unshift("dark");
console.log(weather);
 
weather.shift();
console.log(weather);

//FOR LOOP
let scoobyGang = ["fred", "shaggy", "velma", "scooby"];
//prints single index of the array until end of array
for (let index = 0; index < scoobyGang.length; index++) {
  console.log(scoobyGang[index]);
}

//WHILE LOOP
let countdown = 3;
 
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
 
console.log("💩");

