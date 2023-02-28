/* 
Write a program that takes a user’s input and prints the numbers from one to 
the number the user entered. However, for multiples of three print `Fizz` 
instead of the number and for the multiples of five print `Buzz`. 
For numbers which are multiples of both three and five print `FizzBuzz`.
*/

let number = prompt("Enter a number");

function validateInput(n) {
	return (n < 0) ? "Please enter a non-negative integer"
  : (n === "") ? "No number entered"
  : (!n) ? "Program has been canceled"
  : (isNaN(Number(n))) ? "Invalid number."
  : `Your number is ${number}`;
}

console.log(validateInput(number));

for (let i = 1; i <= number; i++) {
    console.log(i);
  }