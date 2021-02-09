console.log("========1st Assignment====test===");
/* #### 1. Los or New?
 * Create a function named "_nameOfCity_". If a string begins with "_Los_" or "_New_", then print the full string. If not, print "_The city name does not begin with Los or New_". Be careful of case sensitivity.*/
//Name of City

function nameOfCity(cityName) {
  const firstThreeChr = cityName.substring(0, 3).toLowerCase();
  if (firstThreeChr == "new" || firstThreeChr == "los") {
    return cityName;
  } else {
    return `the city name it's not `;
  }
}
console.log(nameOfCity("Valletta"));

console.log("========2nd Assignment====test===");
/* #### 2. isDivisible?
 * Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. **Examples**: _1 ➞ false_, _1000 ➞ true_, _100 ➞ true_.*/
// Is Divisible
const isDivisible = (num) => num % 100 == 0;
console.log(isDivisible(1000));

console.log("========3rd Assignment====test===");
/*
#### 4. What's the weather?
* Use a ternary operator to complete this task. Create a function named "_isRaining_". If true, print "_wet day - you need an umbrella_". If false, print "_dry day - leave your umbrella at home_".*/
// Ternary Operator
const isRaining = (bool) =>
  bool
    ? "wet day - you need an umbrella!"
    : "dry day - leave your umbrella at home!";

console.log(isRaining(true));

console.log("========4th Assignment====test===");

/*
#### 1. Sequence
* Create a function named "_geometricalSequence_" and use a loop to print the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string.*/
// Loop Sequence

const geometricalSequence = () => {
  let str = "";
  for (let i = 1; i <= 256; ) {
    // if (i == 1) {
    //   str += i;
    //   i += i;
    //   continue;
    // }
    str += `${i} `;
    i += i;
    // i+= i -> i + i
  }
  return str.trim();
};
console.log(geometricalSequence());

console.log("========5th Assignment====test===");
/* #### 2. Multiples
 * Create a function named "_multiplesOfThree_" and use a loop to print the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.*/
// Multiples of Three
function multiplesOfThree() {
  let str = "";
  for (let i = 1; i <= 15; i++) {
    if (i % 3 == 0) {
      str += `${i} `;
    }
  }
  return str.trim();
}

console.log(multiplesOfThree());

console.log("========6th Assignment====test===");

/*#### 1. You've got the power
* Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should use a Math Object to make the calculation.
    > **Examples**:
    - ```javascript 
        powerOf(3) //27
        ```

    - ```javascript 
        powerOf(4) //256
        ``` */
// powerOf
function powerOf(integer) {
  return Math.pow(integer, integer);
  // return integer ** integer
}

console.log(powerOf(5));

console.log("========7th Assignment====test===");
/*### Problem Solving

#### 1. How many?

- Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels the string contains, if any. Return the vowel count of the string.
  > **Examples**:
  - ```javascript
    vowelCount("hello"); // 2
    ```
  - ```javascript
    vowelCount("test"); // 1
    ```
  - ```javascript
    vowelCount("fbw"); // 0
    ``` */
// Problem Solving: Number of vowels
function vowelCount(string) {
  const vo = "aeiou";
  const str = string.toLowerCase();
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < vo.length; j++) {
      if (str[i] == vo[j]) {
        count++;
      }
    }
  }
  return count;
}

console.log(vowelCount("test"));

// Objects
const obj1 = {};
obj1["name"] = "Olga";
console.log(obj1);
const obj2 = {
  userName: "Hadi",
};
console.log(obj2);
const obj3 = new Object();
const person = {
  userName: "Zain",
  age: 22,
  add: "Berlin",
};
const arr = Object.entries(person);
console.log(arr);
// [[],[],[],[]]
const arrOfArr = [
  [33, 2],
  [22, 3],
  [44, 11],
  [51, 55],
];

console.log(arrOfArr[2][1]);
//

const objects = [
  { name: "Nancy", lasName: "Zo" },
  {
    name: "Olga",
    lastName: "do",
    printOut: function () {
      console.log("Hi");
    },
  },
];

//objects[1].printOut();
// other way to acc
objects[1]["printOut"]();

// Clones vs. References

// Primitive  (Simple values are always clones)
// String, Number, Boolean
let x = 3;
let z = x; // clone coz it's simple
console.log(z);
z = 55;
console.log(x);
let strLong = "Hi, I am here";
let cloneStr = strLong; // clone coz it's simple
cloneStr = "Noooooooooo";
console.log(strLong);

// Object
const car = {
  name: "Ford",
  year: "2020",
  color: "Red",
};
// Objects are references by default: Array and object literals

const newCar = car; // ref

newCar.name = "BMW";
console.log(car);
const names = ["Olga", "Zain", "Jack", "Nancy"];
//  1
const namesClone = [...names];
namesClone[0] = "Hadi";
console.log(names);

// 2
const newCloneArr = [].concat(names);
console.log(newCloneArr);
// 3
const lastWay = names.slice(0);
lastWay[0] = "cool";
console.log(lastWay);

/* Convert keys and values into an array. Create a function that converts an object into an array of keys and values.
Examples:
objectToArray({
  A: 1,
  B: 2,
  C: 3
}) 
Expected output:
[["A", 1], ["B", 2], ["C", 3]]
objectToArray({
  cats: 1,
  dogs: 2, 
  turtles: 4
}) 
Expected output:
[["cats", 1], ["dogs", 2], ["turtles", 4]] 
14:22 Uhr
List Properties. Create a function that returns an array of properties of a javascript object.
Example
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
Expected output:
["name", "class", "course"]
Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
Example
let first = {firstName: "John"}
let last = {lastName: "Smith"}
Expected output:
{firstName: "John", lastName: "Smith"} */
