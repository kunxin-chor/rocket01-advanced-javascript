const prompt = require('prompt-sync')();

const date = prompt("Enter the date: ");
// Date format is YYYY-MM-DD
const year = date.slice(0, 4);
const month = date.slice(5, 7);
const day = date.slice(-2);
console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);