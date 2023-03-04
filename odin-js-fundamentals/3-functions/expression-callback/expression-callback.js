// Exercise based on https://javascript.info/function-expressions#callback-functions
// Given the code in reference.js, condense it down by rewriting it using function expressions

function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}

ask(
	"Do you agree?",
  	function() {alert("You agreed.")},
  	function() {alert("You canceled the execution.")}
)