// Concatenation and Converting Number Types
let x = 75;     // Number
let y = "5";    // String

let z = x + y;  // Result: 755
typeof z;       // z is a string

// NaN
function NaN_check(result) {
    let check = isNaN(result);
    console.log(result, check);
}

let a = 100 / "Orange";
let b = "10" * "5";

NaN_check(a);
NaN_check(b);