// Write the code which asks for a login with prompt
// Based on https://javascript.info/task/check-login

// If the visitor enters "Admin", then prompt for a password. 
// If the input is an empty line or Esc – show “Canceled”.
// If it’s another string – then show “I don’t know you”.

let username = prompt("Please enter your name");

if (username === "Admin") {
    let password = prompt("Please enter your password");
    if (password === "TheMaster") {
        alert("Welcome!")
    } else {
        alert("Incorrect password.")
    }
} else if (username !== "Admin" && username !== null && username !== "") {
    alert("Unknown user.")
} else if (username === "") {
    alert("Username empty.")
} else {
    alert("Login canceled.")
}