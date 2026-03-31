let i = 3;
i++; //(post-increment) i = i + i only happens after javascript finishes this line
console.log("a:", i);
console.log("b:", i++);
console.log("c:", i);

console.log("");
let j = 3;
j++;
console.log("d:", j);
console.log("e:", ++j);
console.log("f:", j);

// always write ++j or i++ in its own line

let m = 3;
console.log(m++ + ++m);