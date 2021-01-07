// printing out
console.log("Omar");
// var
let x = 3;
let str = "Hamburg";
let old = true;
// ternary op
let kid = 18;
kid > 16 
    ? console.log("Yay Ican Drive")
    : console.log("No my Mom will drive me");
// typeof
console.log(typeof x);
console.log(typeof old);
console.log(typeof str);
// length

let firstName = "Omar";
console.log(firstName.length);
console.log(firstName[0]);

let something = 1234;
something = 4567;
console.log(something);
const fatherName = "John"
console.log(fatherName);
var global = "Hi I am global";
{
    let local = 22;
    global = "Hi"
    var localGlob = "Hi It'me "
}
console.log(localGlob);

// function
function print(str){
    console.log(str);
}
print ("Omar");
print(33);
console.log(lastName);
var lastName ="Khouja";
console.log(lastName);
function sum (x,y) {
    let z = 0;
    z = x + y;
    return z;
}

console.log(sum(2, 3));
let sumRe = sum(2,44);
console.log(sumRe);

// ------ option 1
console.log(5);
// ----- option 2
let num = 5;
console.log(num)
// ----- option 3
let a = 2;
let b = 3;
console.log(a +b);
// substring
let oString = "Hi My Name is Omar, I'm 39 y.";
print(oString.length);
let str1 = oString.substring(5);
console.log(str1);
let str2 =oString.substring(6, 10);
console.log(str2);
// toUpperCase
let str3 = oString.toLocaleUpperCase();
console.log (str3);
// toLowerCase
let str4 = oString.toLowerCase();
console.log (str4);

let firstName2 = "oMaR";
// Omar
let firstChr = firstName2[0];
console.log(firstChr);
let restChr = firstName2.substring(1).toLocaleUpperCase();
console.log(restChr);
let FinalFirstName = firstChr + restChr;
console.log(FinalFirstName);

let shortForm = 
    firstName2[0].toLocaleUpperCase() +firstName2.substring(1).toLowerCase();
console.log(shortForm);

// shortForm = O + mar
// comment one line

/*

This is many lines
comment

*/

// camelCase
let show = "I can walk in the Park all day";
print(show.substring(18, 22));

let hello = "Hello World";
let hello2 = hello.toUpperCase();
console.log(hello2);

let earth = "Earthing";
let earth2 = earth.toLowerCase();
console.log(earth2);

let Js = " JavaScript";
print(Js.substring(4, 7));

let strExfive = "nice schoes";
let lIsThere = strExfive.includes("l");
console.log(lIsThere);

let strExSix = "JavaScript";
let strExSix_1 = "JJavaScript";

//let Mostr = "J" + strExSix + "J"

console.log("J" + strExSix + "J")
//let ModStr = strExSix[0] + strExSix + strExSix[0];
let firstStrExSix =  strExSix[0];
console.log(firstStrExSix + strExSix + firstStrExSix);

// .length - num
let longText = "This is a long text";
let subStr = longText.substring(longText.length - 4);
console.log(subStr);

// slice
let sliceStr = longText.slice(5);
console.log(sliceStr);

// ` `
let firstUserName = "John";
let lastUserName = "something";
let add = "xxx str, 1234 Hamburg";
// console.log(
//     "Hi I am"+firstUserName + 
//     ",I Live in " +
//     add + 
//     ". My Last name") +
//     "."
//     ;
//  );
console.log(
    `Hi Iam ${firstUserName}, I live in ${add}. My last name is ${lastUserName}`
);

var globalVar = "This is global";
console.log(globalVar);
globalVar = "This is global plus";

function sub(x, y) {
    let local = "This is local";
    console.log(local);
    console.log(globalVar);
    globalVar = "This is global plus ++";
    return y - x;
}
console.log(sub(10, 4));

// ++ += -- -=
let num1 = 1 ;
// num 1 = num1 +1;
num1 += 1;
console.log(num1);

let num2 = 1 ;
// num2 = num2 +1;
num2 -= 1;
console.log(num2);
// Increment
let w = 10;
w++;
++w;
console.log(w);

// dexrement
let q = 10;
q--;
--q;
console.log(q);

// 7.  Create a new string from a given string, taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more.
// eg. of output: javascript => iptJavaScriptipt
let js2 = "JavaScript";
let js3 = js2.slice(7);
console.log(js3);
console.log(js3 + js2);

// 8. Create a variable and assign a string value to it. Then, convert the value to upper case and print the converted value to the console and check whether it includes “Java”.
let newStr = "Hi how Are You";
let upperNewStr = newStr.toUpperCase();
console.log(upperNewStr);
console.log(upperNewStr.includes("Java"));

// 9.Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 1. eg. of output JavaScript => tavaScripJ
let modJsStr = Js.substring(1) + Js[0];
console.log(modJsStr);
let firstJsChr = Js[0]
// Javascript
let lastJsChr = Js[Js.length -1];
let midJsStr = Js.substring(1, Js.length -1);
let newLongJsStr = lastJsChr +midJsStr + firstJsChr;
console.log(newLongJsStr);

// 10. Create 3 different variables about yourself using strings as values e.g. let firstName = “Maria”. Print the sentence to the console using string interpolation e.g. “My name is Maria. I live in Berlin and I am a teacher”.
let myName = "Nancy";
let myAdd = "Berlin";
let myJob = "Teacher";
let aboutMeStr = `My name is ${myName}, I live in ${myAdd}, and I am a ${myJob}. `;
console.log(aboutMeStr);

// 11.Declare a variable and assign the value “the quick brown fox” (all in lower case). Capitalize the first letter of that string. Print the result to the console
let foxStr = "the quick brown fox";
let foxUpper = foxStr[0].toUpperCase() + foxStr.substring(1);
console.log(foxUpper);