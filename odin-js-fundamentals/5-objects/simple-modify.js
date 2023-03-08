/*
Exercise based on https://javascript.info/task/hello-object
A simple task introducing objects and how to modify one
*/

let user = [];

user.name = "John";
user.surname = "Smith";

alert(user.name);
alert(user.surname);

user.name = "Pete";

alert(user.name);

delete user.name;

let count = 0;

for (let key in user) {
	alert(user[key]);
  count++;
}

alert( `Number of properties in user: ${count}`);