// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// // Value -  a piece of data; most fundamental unit of information
// console.log("Jonas");
// console.log(23);

// // value can be stored in variables to be able to use them repeatedly
// // let firstName = "Jonas";
// // console.log(firstName);

// // Conventions and rules for naming variables
// // use camelCase for variables with more than one words

// //Assignment
// let country = "Philippines";
// let continent = "Asia";
// let population = 154000000;

// console.log(
//   country +
//     " is a country in " +
//     continent +
//     " with " +
//     population +
//     " Filipinos."
// );
// /*Two types of data types in JS
// Object
// Primitive (everything else)
//     Number - floating point numbers
//         *always had decimals even if not shown
//         *used for decimals and integers
//     Strings - sequence of characters
//     Boolean - logical type; always true of false
//     Undefined - variable that is not yet defined
//     Null - empty value
//     Symbol - unique and cannot be changed
//     BigInt - large integers than the Number type can hold
// */

// //Boolean
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// //Dynamic typing
// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// //Undefined
// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// //Different ways of declaring variables
// let age = 30;
// age = 31; // reassigning value to the variable

// const birthYear = 1991; // cannot be changed or reassigned
// //*Declaring an undefined const variable is not allowed

// var job = "programmer"; // old way of declaring variable
// job = "teacher";

// //OPERATORS
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // ** means exponentiation

// // concatenation
// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// // assignment
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 =100

// x++; // increment
// x--; // decrement
// console.log(x);

// // comparison operators - used to produce boolean values
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

//STRINGS

const firstName = "Jonas";
const job = "teacher";
// const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

//template literals
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// back ticks can also be used in regular strings
console.log(jonasNew);
//multi-line strings
console.log(`String
multiple
lines`);

//IF/ELSE STATEMENTS

const age = 15;

if (age >= 18) {
  console.log("Srah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// else block is optional. If there is no else block, JS will move to the next line of code.

const birthYear = 1998;
let century;
if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
}
