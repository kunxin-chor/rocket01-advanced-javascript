// three types of string functions (aka methods)
// See references at https://www.w3schools.com/js/js_string_methods.asp

// first type of string functions: search and query functions
// .includes: check whether a smaller string (substring) inside a bigger string
let s = "singapore and new york and malaysia";
// does s have new york?
console.log(s.includes("new york"));
// .includes is case sensitive, so the following will return false
console.log(s.includes('NEW YORK'));

// indexOf: returns the index of the first occurence of a character
let m = "She slams the door! And switch off the lights!";
console.log(m.indexOf('!'));
console.log(m.lastIndexOf('!'));

// if the substring is not found, indexOF will return -1
let z ="Jack and Jill went up the hill";

// Which index is Mary in z?
console.log(z.indexOf("Mary")); // will return -1 because the string does not have Mary
console.log(z.indexOf("Jack")); // will return 0

// second type of string methods: transformation
// example: slice
// transformation will return a new string. The original string is unchanged
let favoriteFood = "sushi";
console.log(favoriteFood.toUpperCase());
console.log(favoriteFood);

let favoriteDrink = "MILO";
console.log(favoriteDrink.toLowerCase());

// remove white spaces
let myName = "     John Wick     ";
console.log(myName.trim() + "!");

// replace John with Derrick
console.log(myName.replace("John", "Derrick"));

console.log(myName.replaceAll(" ", ""));

// how then replace the original string
myName = myName.replace('John', 'Derrick').trim();
console.log(myName);

// very important: convert the string into a different type
// split can return an array from a string
let fruits = "apples,bananas,durians,pineapples";
let fruitArray = fruits.split(',');
console.log(fruitArray);

// from array to string
let cities = ["Singapore", "New York", "Kyoto", "Johor Bahru"];
let cityString = cities.join(",");
console.log(cityString);

const date = "1990-07-14";
const dateChunks = date.split('-');
console.log(dateChunks);

let rhyme = "she sells seashells at the seashores";
let words = rhyme.split(" ");
console.log(words);