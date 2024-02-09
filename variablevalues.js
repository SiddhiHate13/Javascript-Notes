let x = 5;  // does not allow the same variable name but allows 
let y = 12;
y = 14; //but will allow this  if we use "var" instead of "let"
let z = x + y;
console.log(z);


var a = 5;  // same variable names are allowed
var b = 2;
var c = a + b;
console.log(c);

const p = 13; // if the name of the const variable is same then it will throw and error
const q = 5;
const r = p + q;
console.log(r);