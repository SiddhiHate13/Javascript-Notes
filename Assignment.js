let a = 13;
let b = 19;
console.log("Addition Assignment : " + (a += 5));
console.log("Substraction Assignment : " + (a -= 5));
console.log("Multiplication Assignment : " + (a *= 5));
console.log("Division Assignment : " + (a /= 5));
console.log("Exponentiation Assignment : " + (a **= 5));
console.log("Remainder Assignment : " + (a %= 5));


//Shift Assignment Operators
console.log("Left Shift: " + (b <<= 5));
console.log("Right Shift: " + (b >>= 5));
console.log("Unsigned Right Shift :" + (b >>>= 5));


// Bitwise Operators
console.log("Bitwise AND:  " , (a &= 5));
console.log("Bitwise OR:  " , (a |= 5));
console.log("Bitwise XOR:  " , (a ^= 5));


// Logical operators 
console.log("Logical AND:  " , (b &&= 5));
console.log("Logical OR:  " , (b ||= 5));
const s = true;
console.log("Logical NOT : " , (!s));

// Type operators 
const message = 'hello!';
console.log(typeof message); 

class Pet {
    constructor(name) {
      this.name = name;
    }
  }
  
  const myPet = new Pet('Siddhi');
  myPet instanceof Pet; //true
  const plainPet = { name: 'Divya' };
plainPet instanceof Pet;  // false

// Comparison Operators 
const x = 5, y = 2, z = 'hello';

// equal to operator
console.log(x == 5);     
console.log(y == '2');   
console.log(z == 'Hello');  

// not equal operator
console.log(x != 2); 
console.log(y != 'Hello'); 

// strict equal operator
console.log(x === 2);
console.log(x === '2'); 

// strict not equal operator
console.log(x !== 2); 
console.log(x !== '2'); 
console.log(y !== 'Hello'); 

// greater than operator
console.log(y > 2); 

// greater than or equal operator
console.log(y >= 3);

// less than operator
console.log(y < 2); 
console.log(x < 3);

// less than or equal operator
console.log(x <= 3) 
console.log(y <= 2);

// ternary operator

let marks = 40;
let result = (marks >= 35) ? 'pass' : 'fail';
console.log(`You ${result} the exam.`);





