let numbers = [1, -5, 10, 11, 21, -7];
// create a new array which only contain positive numbers
// from the `numbers` array

let posOnly = numbers.filter(function(n){
    return n > 0;
});
console.log(posOnly);