
// Variables
let firstName = `Ilija`;
console.log(firstName);

// Assigment 1
let country = `Macedonia`;
let continent = `Europe`;
let population = 2;
console.log(country);
console.log(continent);
console.log(population);

// Data Types
let age = 23; // number
let name = `Ilija`; // string
let fullAge = true; // boolean
console.log(typeof fullAge);
let children; // undefined
let thirdChild = null; // null

// let, const, var
let myAge = 36;
myAge = 39;
console.log(myAge);

const birthYear = 1986;
//birthYear = 2000; 
console.log(birthYear);

// Opeators

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName1 = `Ilija`;
const lastName = `Trajkovski`;
console.log(firstName + " " + lastName);

// Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25;
x *= 4; // x = x * 4 = 100;
x++; // x = x + 1;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); 
console.log(ageSarah >= 18);

const isFullAge = ageSarah <= 18;
console.log(isFullAge);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

// if / else
const age1 = 19;
if (age1 >= 18) {
  console.log(`You can drive`);
} else {
  console.log(`You can't drive`);
};

const birthYear1 = 2001;
let century;
if (birthYear1 <= 2000) {
  century = 20;
} else {
  century = 21;
};
console.log(century);

// type conversion
const inputYear = `1991`;
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number(`Jonas`));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log(`I am ` + 23 + ` years old`);
console.log(`23` - `10` - 3);
console.log(`23` / `2`);

// falsy values: 0, "", undefined, null, NaN

