// we use strings for text or textual information
let name = "Mary Sue";
let favoriteFood = 'Chicken Rice';  // each string consists of many characters
                                    // a character is one symbol that you can see in the string
console.log(name.length);  // .length will gives back how many characters are in the string
console.log("My favorite food is " + favoriteFood); // strings can be concatenated together

// escape sequences
// are for two kind of characters
// 1. characters that we are cannot type normally
// 2. characters that have special meaning to the programming language
// when a character begins with a forward slash \, it is an escape sequence

// case 1: character we cannot type normally
// \n = newline
// \t = tab
console.log("Dear sir,\n\n\tYour bill is due");

// case 2: characters that have special meaning to the programming language
console.log("I don't know anything");  /// <-- ok

// when we use \" we are telling JavaScript to treat the " as part of the string, not as part of the programming
console.log("She said,\"I don't know anything\"");
console.log('I said,"I don\'t know anything"');

// string literal
// we can put code in the ${} but it must simplify to a result (i.e return a value or evaluate to a value)
// we cannot put if, while etc in ${} because those don't return a value
let s = `Dear ${name},
    Today is ${new Date().toDateString()}
    Your bill is due. Please don't delay payment.`

console.log(s);