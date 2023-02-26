// Exercise based on https://javascript.info/task/pow
// Write a function pow(x,n) that returns x in power n.
// Or, in other words, multiplies x by itself n times and returns the result.
// For example, calls to pow() should return these results
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// This is a light exercise on using return values
// Math.pow() exists!

function pow(x, n) {
    return x**n;
}

alert(pow(3,2));
alert(pow(3,3));
alert(pow(1,100));
