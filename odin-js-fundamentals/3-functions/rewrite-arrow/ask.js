/* 
Exercise based on https://javascript.info/task/rewrite-arrow.
Given the following code in reference.js, rewrite the code so that
it utilizes arrow functions.
*/

function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);