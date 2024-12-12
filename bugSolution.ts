function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let num1:number = 5;
let num2:number = 3;

let result = add(num1, num2); // result is 8
let result2 = subtract(num1, num2); // result2 is 2

console.log(result);
console.log(result2); 
//Corrected the code by explicitly defining the data type for the number variables to remove the error.