// Calculator.js

// Calculator object having basic mathematical operations

var calculator = {
  add: (val1, val2) => val1 + val2, // to add two numbers
  subtract: (val1, val2) => val1 - val2, // to subtract two numbers
  multiply: (val1, val2) => val1 * val2, // to multiply two numbers
  divide: (val1, val2) => val1 / val2, // to divide two numbers
  get_remainder: (val1, val2) => val1 % val2, // to get remainder
};

// Creating references
var print = console.log;
var calc = calculator;

// Input values
let number1 = 10;
let number2 = 10;

print(number1 + " + " + number2 + " = " + calc.add(number1, number2));
print(number1 + " - " + number2 + " = " + calc.subtract(number1, number2));
print(number1 + " * " + number2 + " = " + calc.multiply(number1, number2));
print(number1 + " / " + number2 + " = " + calc.divide(number1, number2));
print(number1 + " % " + number2 + " = " + calc.get_remainder(number1, number2));
