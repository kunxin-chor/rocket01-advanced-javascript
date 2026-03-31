// any variables and functions that is in a  {} is a different scope
function foobar(a) {
    console.log("inside foobar: a =", a);
    a = -100;
}

// 1. any variables and functions that is not within {} is in the global scope

// 2. variables that are created in a scope is owned by that scope
// let and const 
// when it is the parameter (aka argument) of a function

// 3. when we refer to a variable name
// Javascript will find the corresponding variable created
// in the closest scope

// 4. an inner scope can access the variables from an outer scope
let a = 45;
foobar(33);
console.log("outside foobar: a=", a);

