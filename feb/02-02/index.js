// old life with no objects

// let firstname = "zain";
// let lastName = "xx";
// let userAge = 33;

// Objects
// const <namespace> = { <key 1>: <value 1>, <key 2>: <value 2>, ... }
// keys, properties : value
// Object Literal
const obj = {
  name1: "Hadi",
  name2: "Olga",
  name3: "Zain",
};
const userObj = {
  name: "Nancy",
  lastName: "Sad",
  age: 33,
  add: "xxx str",
  act: ["draw", "sleep", "eat"],
  fat: true,
};
console.log(userObj.name);
console.log(typeof console);
console.log(userObj.act[1]);

// Accessing properties
// 1- with (bracket notation)
console.log(userObj["act"][2]);
// 2- with (dot notation)
console.log(userObj.act[1]);
const obj2 = {};
console.log(typeof obj2);

// Assignment using dot notation, more used to access a property value
obj2.name = "Hadi";
// Assigning using bracket notation, more used for an empty object
obj2["age"] = 31;

obj2.age = 33;

console.log(obj2);

const save = new Object();
console.log(save);
const arr = new Array();
console.log(arr);
// cool for 😎
for (let prop in userObj) {
  console.log(`${prop} : ${userObj[prop]}`);
}

// Tell me more about you
const person = {
  name: "Hadi",
  age: 31,
  birthYear: 1989,
  gender: "Male",
  hight: 176,
  print: function () {
    console.log(
      `I am ${this.name}, my age is ${this.age} I was born in ${this.birthYear}`
    );
  },
  old: function () {
    let currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  },
};

person.print();
console.log(person.old());
// Object.keys
let keysArr = Object.keys(person);
console.log(keysArr);

// Object.values
console.log(Object.values(person));

// Object.assign
const obj3 = { kids: 2, cars: 400 };
const obj4 = { colors: ["Red", "Gray", "Black"], pet: "fish" };
const totalObjects = Object.assign({ name: "Hadi" }, obj3, obj4);
console.log(totalObjects);
// Object.defineProperty()

const newPersonObject = {};
Object.defineProperty(newPersonObject, "bike", {
  value: 22,
  writable: false,
});
console.log(newPersonObject.bike);
newPersonObject.bike = 33;
console.log(newPersonObject.bike);
// Object.defineProperties()
Object.defineProperties(newPersonObject, {
  p1: {
    value: "cool",
    writable: true,
  },
  p2: {
    value: "nice",
    writable: false,
  },
  p3: {
    value: 102,
    writable: false,
  },
});
console.log(newPersonObject.p1);
// Object yourPersonObj. Create an object named person2. Loop through the object and print both the property and value of the object.
// const yourPersonObj = {
//   person2: "Omar",
// };
// for (let prop in yourPersonObj) {
//   console.log(`${prop} : ${yourPersonObj[prop]}`);
// }

const person2 = {
  name: "Omar",
  age: 39,
  city: "Hamburg",
};
for (let prop in person2) {
  console.log(`${prop} : ${person2[prop]}`);
}

// Create a function that returns an array of the properties of a javascript object.
//   Example
// let student = {
//   name: "Mike",
//   class: "4A"
//   course: "English"
// }
// Expected output:
//   ["name", "class", "course"]

const objPro = (obj) => {
  return Object.keys(obj);
};

console.log(objPro(person2));

console.log(objPro(person));
// Given the following object
const student = {
  firstName: "Zain",
  lastName: "Oil",
  class: 48,
  print: function () {
    console.log(
      `${this.firstName} ${this.lastName} a student in class ${this.class}`
    );
  },
};
student.print();
// Create a method that prints the following: "Zain Oil a student in class 48"

// Get Values. Create a function that returns an array of all values of an object’s properties.
//   Examples:
const getObjectValues = {
  choice1: "tea",
  choice2: "coffee",
  choice3: "milk",
};
// Expected output:
//   ["tea", "coffee", "milk"]

const objVal = (obj) => {
  return Object.values(obj);
};
console.log(objVal(getObjectValues));

const objectToArray = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};
//   Expected output:
//   [["cats", 1], ["dogs", 2], ["turtles", 4]]

function getKeysAndValues(obj) {
  return Object.entries(obj);
}

console.log(getKeysAndValues(objectToArray));
// delete

delete objectToArray.cats;
console.log(objectToArray);

/* Create a function that returns an array of the properties of a javascript object.

Given the following object
const student = { 
firstName: "Zain", 
lastName: "Oil", 
class: 48 }; */
// const student = {
//   firstName: "Zain",
//   LastName: "Oil",
//   class: 48,
// };
// console.log(Object.values(student));
// console.log(
//   `${student.firstName} ${student.LastName} a Student in Class ${student.class}`
// );

console.log("========1st Assignment=======");

/*
# objects-extra-work1.


> Check if a number is within a given range. Write a program that checks if a number is within the range of an object's min and max properties. Assume min <= max is always true.

Examples:

4, { min: 0, max: 5 }) ➞ true

4, { min: 4, max: 5 }) ➞ true

4, { min: 6, max: 10 }) ➞ false

5, { min: 5, max: 5 }) ➞ true */

const checkN = (num, obj) => {
  return num >= obj.min && num <= obj.max;
};
console.log(checkN(4, { min: 0, max: 5 }));
console.log(checkN(4, { min: 4, max: 5 }));
console.log(checkN(4, { min: 6, max: 10 }));
console.log(checkN(5, { min: 5, max: 5 }));

console.log("========2nd Assignment=======");
/* > Scrabble. 
Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example: [ { tile: "N", score: 1 }, { tile: "K", score: 5 }, { tile: "Z", score: 10 }, { tile: "X", score: 8 }, { tile: "D", score: 2 }, { tile: "A", score: 1 }, { tile: "E", score: 1 } ]


The player's maximum score: 1 + 5 + 10 + 8 + 2 + 1 + 1 = 28 */
const scrabble = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

function sumTotalScrabble(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]["score"]; // 1  5   10  8  2  1  1 = 28
  }
  return total;
}
// other way soon
console.log(sumTotalScrabble(scrabble));

console.log("========3rd Assignment=======");

/*> Is it an empty object? 
Write a program that returns true if an object is empty, and false if otherwise.

Examples:

{} ➞ true

{a: 1} ➞ false*/

function emptyObj(obj) {
  return Object.keys(obj).length == 0;
}
console.log(emptyObj({}));
console.log(emptyObj({ a: 1 }));

// Create a function that returns an object has following output.
// ABC  -> { A: 1, B: 1, C: 1 }
