"use strict"; // must be always at the top of the code to work

// FUNCTIONS
// Function declaration
function calcAge1(birthYear) {
  return 65 - birthYear;
}

// Function expression
const calcAge2 = function (birthYear) {
  return 65 - birthYear;
};

// Arrow function
const calcAge3 = (birthYear) => 65 - birthYear;

const calcAverage = (firstScore, secondScore, thirdScore) => {
  const average = (firstScore + secondScore + thirdScore) / 3;
  return average;
};

// Challenge #1 my answer
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
}

// ARRAYS
// Different ways of creating an array
const friends = ["Michael", "Steven", "Peter"];
const years = new Array(1991, 1984, 2008, 2020);

// Calling elements in an array
console.log(friends[0]); // will output Michael
console.log(friends[2]); // will output Peter
console.log(friends[friends.length - 1]); // will also output Peter
console.log(friends.length); // will output the number of elements in an array which is 3

// Changing the value of elements in an array
friends[2] = "Jay"; // Peter is now replaced with Jay

// Arrays can store different types of variables
const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

// BASIC ARRAY METHODS
// Add Elements
friends.push("Lea"); // adds the element to the end of the array
friends.unshift("John"); // adds the element at the beginning of the array

// Remove elements
friends.pop(); // remove the last element of the array
friends.shift(); // remove the first element of the array

const popped = friends.pop(); // returns the popped elements

// The following returns the length of the array
const newLength = friends.push("Lea");
const newLength2 = friends.unshift("Lea");

friends.indexOf("Steven"); // returns the index of the element
friends.includes("Steven"); // returns true if the input is an element of the array

// Challenge #2 my answer
function calcTip(bill) {
  let tip;
  if (bill > 50 && bill < 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  return tip;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// OBJECTS
// Creating an object
const jonasObject = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// Different ways in accessing the value of a key in an object
// Dot notation
jonasObject.lastName;
// Bracket notation
jonasObject["lastName"];

// Sample use of bracket notation
const nameKey = "Name";
jonasObject["first" + nameKey];
jonasObject["last" + nameKey];

// Sample case
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
console.log(jonasObject.interestedIn); // won't work because there is no key interestedIn in the object
console.log(jonasObject[interestedIn]); // will work because interestedIn is a variable

// Adding new properties in the object
// Through dot notation
jonasObject.location = "Portugal";
// Through bracket notation
jonasObject["twitter"] = "@jonasschmedtman";

console.log(
  `${jonasObject.firstName} has ${jonasObject.friends.length} friends, and his best friend is called ${jonasObject.friends[0]}`
);

// Object Methods
// Including functions in an object
const jonas3 = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // normal function
  calcAge: function (birthYear) {
    return 2037 - birthYear;
  },

  // function while accessing the value of the object that called the function
  calcAge4: function () {
    console.log(this); // will return the whole object
    return 20237 - this.birthYear; // thus 'this' points to the birthYear value of 'this' object which is the object that called the function which is jonas3
  },

  // Using this to create new properties and assign values to them
  calcAge5: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

// accessing the function in an object
jonas3.calcAge(); // dot notation
jonas3["calcAge"](); // bracket notation

// now age can be called
jonas3.age;

// TYPE CONVERSION
const inputYear = "1991";
// string to number
Number(inputYear);
// number to string
String(23);

// TYPE COERCION
"I am " + 23 + " years old";
"23" - "10" - 3; // 10
"23" + "10" + 3; // 23103
"23" * "2"; // 46
"23" / "2"; // 11.5

// TRUTHY AND FALSY
// 5 falsy values: 0, '', undefined, null, NaN

// STRICTLY AND LOOSELY EQUAL
const age = "18";
if (age === 18) console.log("You just became an adult"); // strict; false
if (age == 18) console.log("You just became an adult"); // loose; true

// === do not do type coercion
// == do type coercion

// that means
18 === 18; // true
18 == 18; // true
"18" === 18; // false
"18" == 18; // true
18 === 19; // false
18 == 19; // false

// JavaScript Releases
