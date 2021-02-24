// Create a command-line node application that takes in parameters like this:
// * `node calculator.js add 1 2` ... and outputs 3
// * `node calculator.js subtract 5 2` ... and outputs 3
// * `node calculator.js multiply 3 2` ... and outputs 6
// * `node calculator.js divide 8 2` ... and outputs 4
// * `node calculator.js remainder 7 2`... and outputs 1

var cal = require("./results")
var a= 9;
var b=3;

console.log('Add result ' + cal.add(a,b));
console.log('Sub result ' + cal.sub(a,b));
console.log('Mul result ' + cal.mul(a,b));
console.log('Div result ' + cal.div(a,b));
