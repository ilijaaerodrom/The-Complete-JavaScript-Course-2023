

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI ${bmiMark} is higher than John's ${bmiJohn}!`);
} else {
  console.log(`John's BMI ${bmiJohn} is higher than Mark's ${bmiMark}!`);
}


const massMark1 = 95;
const heightMark1 = 1.88;
const massJohn1 = 85;
const heightJohn1 = 1.76;

const bmiMark1 = massMark1 / heightMark1 ** 2;
console.log(bmiMark1);
const bmiJohn1 = massJohn1 / heightJohn1 ** 2;
console.log(bmiJohn1);

if (bmiMark1 > bmiJohn1) {
  console.log(`Mark's BMI ${bmiMark1} is higher than John's ${bmiJohn}!`);
} else {
  console.log(`John's BMI ${bmiJohn1} is higher than Mark's! ${bmiMark1}`);
}