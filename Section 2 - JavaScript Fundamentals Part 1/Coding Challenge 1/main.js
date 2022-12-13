

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);


const massMark1 = 95;
const heightMark1 = 1.88;
const massJohn1 = 85;
const heightJohn1 = 1.76;

const bmiMark1 = massMark1 / heightMark1 ** 2;
console.log(bmiMark1);
const bmiJohn1 = massJohn1 / heightJohn1 ** 2;
console.log(bmiJohn1);

const markHigherBMI1 = bmiMark1 > bmiJohn1;
console.log(markHigherBMI1);

