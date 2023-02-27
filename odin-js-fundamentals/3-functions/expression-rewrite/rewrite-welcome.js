// Exercise based on https://javascript.info/function-expressions#function-expression-vs-function-declaration
// This exercise highlights the importance of function scope when using
// function expression and function declaration.
// Given the following code in bugged-welcome.js, rewrite the code with function expression
// so that the call to welcome() does not return an error.
// welcome should contain the source code of either alert("Hello!") or alert("Greetings"). 
// To check, use alert or console.log without parentheses on welcome.

let age = prompt("What is your age?", 18);

if (age < 18) {
    welcome = function() {
        alert("Hello!");
    }
  } else {
    welcome = function() {
        alert("Greetings.");
    }
  }

  welcome();