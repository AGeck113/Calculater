console.clear();

let operand1 = 0;
let operand2 = 0;
let result = null;
/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');
const showOperand1 = document.querySelector('[data-js="seeOperand1"]');
const showOperand2 = document.querySelector('[data-js="seeOperand2"]');
const seeResult = document.querySelector('[data-js="seeResult"]');

addButton.addEventListener("click", () => {
  result = operand1 + operand2;
  seeResult.innerHTML = "result: " + result;
  console.log("result: " + result);
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
});

subtractButton.addEventListener("click", () => {
  result = operand1 - operand2;
  seeResult.innerHTML = "result: " + result;
  console.log("result: " + result);
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
});

multiplyButton.addEventListener("click", () => {
  result = operand1 * operand2;
  seeResult.innerHTML = "result: " + result;
  console.log("result: " + result);

  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
});

divideButton.addEventListener("click", () => {
  result = operand1 / operand2;
  seeResult.innerHTML = "result: " + result;
  console.log("result: " + result);

  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
});

exponentButton.addEventListener("click", () => {
  result = operand1 ** operand2;
  seeResult.innerHTML = "result: " + result;
  console.log("result: " + result);

  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
});

moduloButton.addEventListener("click", () => {
  result = operand1 % operand2;
  seeResult.innerHTML = "result: " + result;
  console.log("result: " + result);

  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increaseByOneButton.addEventListener("click", () => {
  operand1++;
  console.log("operand1 = " + operand1 + ", operand2 = " + operand2);
  showOperand1.innerHTML = "operand 1: " + operand1;
  seeResult.innerHTML = null;

  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increaseByFiveButton.addEventListener("click", () => {
  operand1 += 5;
  console.log("operand1 = " + operand1 + ", operand2 = " + operand2);
  showOperand1.innerHTML = "operand 1: " + operand1;
  seeResult.innerHTML = null;

  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

decreaseByOneButton.addEventListener("click", () => {
  operand1--;
  console.log("operand1 = " + operand1 + ", operand2 = " + operand2);
  showOperand1.innerHTML = "operand 1: " + operand1;
  seeResult.innerHTML = null;

  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});

decreaseByFiveButton.addEventListener("click", () => {
  operand1 -= 5;
  console.log("operand1 = " + operand1 + ", operand2 = " + operand2);
  showOperand1.innerHTML = "operand 1: " + operand1;
  seeResult.innerHTML = null;

  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

multiplyByTwoButton.addEventListener("click", () => {
  operand1 *= 2;
  console.log("operand1 = " + operand1 + ", operand2 = " + operand2);
  showOperand1.innerHTML = "operand 1: " + operand1;
  seeResult.innerHTML = null;

  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divideByTwoButton.addEventListener("click", () => {
  operand1 /= 2;
  console.log("operand1 = " + operand1 + ", operand2 = " + operand2);
  showOperand1.innerHTML = "operand 1: " + operand1;
  seeResult.innerHTML = null;

  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
const increase2ByOneButton = document.querySelector(
  '[data-js="increase2-by-one"]'
);
const increase2ByFiveButton = document.querySelector(
  '[data-js="increase2-by-five"]'
);
const decrease2ByOneButton = document.querySelector(
  '[data-js="decrease2-by-one"]'
);
const decrease2ByFiveButton = document.querySelector(
  '[data-js="decrease2-by-five"]'
);
const multiply2ByTwoButton = document.querySelector(
  '[data-js="multiply2-by-two"]'
);
const divide2ByTwoButton = document.querySelector('[data-js="divide-by-two"]');

increase2ByOneButton.addEventListener("click", () => {
  operand2++;
  console.log("operand1 = " + operand1 + ", operand2 = " + operand2);
  showOperand2.innerHTML = "operand 2: " + operand2;
  seeResult.innerHTML = null;
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increase2ByFiveButton.addEventListener("click", () => {
  operand2 += 5;
  console.log("operand1 = " + operand1 + ", operand2 = " + operand2);
  showOperand2.innerHTML = "operand 2: " + operand2;
  seeResult.innerHTML = null;
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

decrease2ByOneButton.addEventListener("click", () => {
  operand2--;
  console.log("operand1 = " + operand1 + ", operand2 = " + operand2);
  showOperand2.innerHTML = "operand 2: " + operand2;
  seeResult.innerHTML = null;
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});

decrease2ByFiveButton.addEventListener("click", () => {
  operand2 -= 5;
  console.log("operand1 = " + operand1 + ", operand2 = " + operand2);
  showOperand2.innerHTML = "operand 2: " + operand2;
  seeResult.innerHTML = null;
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

multiply2ByTwoButton.addEventListener("click", () => {
  operand2 *= 2;
  console.log("operand1 = " + operand1 + ", operand2 = " + operand2);
  showOperand2.innerHTML = "operand 2: " + operand2;
  seeResult.innerHTML = null;
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divide2ByTwoButton.addEventListener("click", () => {
  operand2 /= 2;
  console.log("operand1 = " + operand1 + ", operand2 = " + operand2);
  showOperand2.innerHTML = "operand 2: " + operand2;
  seeResult.innerHTML = null;
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
