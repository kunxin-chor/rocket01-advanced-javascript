// functions in JavaScript is a value
// primitives: string, booleans and numbers
// reference types: arrays, objects, functions

// 1. functions are reference values
function foobar(x,y) {
    return x + y;
}
let g = foobar;
// g will be referring the same function that foobar is referring to
console.log(g(3,6));  // ==> 9

// functions in JavaScript can be annoymous, or no names
(function (x,y) {
    return x + y;
});

// 2. since functions are values
// you can pass a function as a parameter
// you can return a function from a function (rarely for junior developers)
// you can assign a function to a variable

let numbers = [1, 21, 11, 34, 3, 5, 55, 71];
// by default sort will arrange the elements as if they are strings
// but we can pass a sorting function to .sort() to change how it works
numbers.sort(function(a,b){
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});
console.log(numbers);

let fruits =["apples", "bananas", "pears", "figs", "durians", "pineapples"];
// sort the array by the length of each string
fruits.sort(function(a,b){
   return a.length - b.length;
})
console.log(fruits);

// arrow functions
// just think of arrow functions as normal annoymous functions
// but in short form
// Start:
// let foobar = function (x, y) {
//     return x + y;
// }

// remove the word function and put an arrow between
// the round brackets and the braces
// let foobar =  (x, y) => {
//     return x + y;
// }

// if the function only contains one line then we
// remove the curly braces and the return (if any)
let foobar =  (x, y) =>  x + y;

// if the function only contains one parameter, we can remove
// the ()
let calculateAreaOfCircle =  r =>  22/7 * r **2;

fruits.sort((a,b)=> a.length - b.length);
console.log(fruits);
