/*
Exercise from https://javascript.info/task/sum-object
Given the following object and its properties, write code
to sum all salaries and store in the variable sum.
If salaries is empty, then the result must be 0.
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for (let prop in salaries) {
    sum += salaries[prop];
}

console.log(sum);