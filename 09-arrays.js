let s = "Welcome to Singapore"; 
console.log(s[0]); // --> "W"
let fruits = ["apples", "pieapples", "bananas"];
console.log(fruits[0]); // --> "apples"

// arrays can be sliced like strings
console.log(fruits.slice(0,2));

// includes also work with arrays
console.log(fruits.includes("bananas"));

// find the length of array
console.log(fruits.length); // ==> 3, because there are three items in the array