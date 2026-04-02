console.log("Hello world");
console.error("Something went wrong");
console.table([
    [
        "A", "B", "C"
    ],
    [
        1,2,3
    ]
]);

// string in JavaScript is also an object
let s = "The quick brown fox";
console(s.slice(0, 3));

const numbers = [2,4,6,8,10];
if(numbers.includes(2)) {
    console.log("yes, 2 is there");
}