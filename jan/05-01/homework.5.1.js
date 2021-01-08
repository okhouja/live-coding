// 1. Minimum and maximum
// a. Lowest Number
// Print out the lowest number between -1 and 4.
console.log(Math.min(-1, 4));

// b. Highest Number
// Print out the highest number between -1 and 4.
console.log(Math.max(-1, 4));

// //2. Rounding
// a. Round up
// Round up each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 43.342.

// console.log(Math.floor(3321.32321));
// console.log(Math.floor(326.76, 76788.7, -9.78, 43.342))

function roundup(rUp) {
    console.log(Math.ceil(rUp));
}


roundup(3321.32321);
roundup(326.76);
roundup(76788.7);
roundup(-9.78);
roundup(43.342);
rounddown(53.500);
rounddown(0.5);


// b. Round down
// Round down each of the following numbers to the nearest integer: 3321.32321, 326.76, 76788.7, -9.78, 28.329.

function rounddown(rDown) {
    console.log(Math.floor(rDown));
}


rounddown(3321.32321);
rounddown(326.76);
rounddown(76788.7);
rounddown(-9.78);
rounddown(28.329);
rounddown(53.500);
rounddown(0.5);

// Strings and Numbers
// 1. Concatenation.
// Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
// let introSentence = "Hi, my name is Nancy and I am";
// let age = 25;
// Expected Output:
// "Hi, my name is Nancy and I am 25"
// In this case, what is the + operator doing? Comment your answer in the js file.
let introSentence = "Nancy";
let age = 25;
console.log ("Hi my name is" + '',introSentence,"and I am" +'',age);
console.log (`Hi my name is ${introSentence} and I am ${age}`);
// + is continue the sentence or The addition assignment operator 


// 2. Converting
// Create a variable with the value of “1005”. Convert it to a number.
// Create a variable with the value of “10.05". Convert it to a number.

let r = parseInt(1005);
let t = parseInt(10.05);

console.log (r);
console.log (t);
