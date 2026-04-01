let fruits = ["pineapples", "durains", "oranges", "apples"];

// create a new array containing every fruit from the `fruits` array
// but all in uppercase
let upperCaseFruits = fruits.map(function(f){
    return f.toUpperCase();
});
console.log(upperCaseFruits);

