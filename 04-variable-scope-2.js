const prompt = require('prompt-sync')();

let numOfTickets = parseInt(prompt("How many tickets: "));
let isWeekend = prompt("enter y if it is weekend: ");
let price;
if (isWeekend == "y") {
    price = numOfTickets * 15;
} else {
    price = numOfTickets * 9;
}

console.log(price);