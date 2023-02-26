// Exercise based on https://javascript.info/task/rewrite-function-question-or
// The following function returns true if the parameter age is greater than 18.
// Otherwise it asks for a confirmation and returns its result.
// Rewrite checkAge() to return the same without using an if statement

function checkAge(age) {
	return age > 18 || confirm("Did your parent allow you?");
}

checkAge(age);