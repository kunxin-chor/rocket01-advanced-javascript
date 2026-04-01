console.log("While loop");
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
console.log();

// A for loop is a more concise while loop
// let i = 0 : loop initialization, before the loop begins
// i < 10: loop condition, if true, the loop contiunes
// i++: post increment, happens after one round of the loop
console.log("For loop");
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let primes =[1,3,5,7,11,13];
for (let i =0; i < primes.length; i++) {
    console.log(primes[i]);
}

let numbers = [-1, 30, 45, 17, 90, 8];
let largestNumber = numbers[0];
// usually we use the `for` loop if we can
// determine how many times the loop will run
// the `for` loop is not designed for non-deterministic loops
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
        largestNumber = i;
    }
}
console.log("Largest number =", largestNumber);

