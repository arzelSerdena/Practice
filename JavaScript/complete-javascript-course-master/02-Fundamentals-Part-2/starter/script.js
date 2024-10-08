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
jonas.lastName;
// Bracket notation
jonas["lastName"];

// Sample use of bracket notation
const nameKey = "Name";
jonas["first" + nameKey];
jonas["last" + nameKey];

// Sample case
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
console.log(jonas.interestedIn); // won't work because there is no key interestedIn in the object
console.log(jonas[interestedIn]); // will work because interestedIn is a variable
