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

// var inputString = process.argv;

// var operand = inputString[2];
// var num1 = inputString[3];
// var num2 = inputString[4];

// var outputNum;


// if (operand === "add") {
// 	outputNum = parseFloat(num1) + parseFloat(num2);
// }

// else if(operand === "subtract") {
// 	outputNum = parseFloat(num1) - parseFloat(num2);
// }
// else if(operand === "multipy") {
// 	outputNum = parseFloat(num1) * parseFloat(num2);
// }
// else if(operand === "divide") {
// 	outputNum = parseFloat(num1) / parseFloat(num2);
// }
// else {
// 	outputNum = "Not a recognized command";