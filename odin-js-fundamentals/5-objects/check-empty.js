/*
Exercise based on https://javascript.info/task/is-empty
Write the function isEmpty(obj) which returns true if the object has
no properties, false otherwise.
*/

function isEmpty(obj) {}

let schedule = {};

alert( isEmpty(schedule) );  // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );  // false