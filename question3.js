/*
  Simple Calculator Problem:

  - Create a function `calculator(num1, num2, operation)` that takes two numbers and a mathematical operation.
  - The function should return the result of the operation.
  - The allowed operations are: "add", "subtract", "multiply", "divide".
  - If the operation is "divide" and `num2` is `0`, return "Cannot divide by zero".
  - If an invalid operation is provided, return "Invalid operation".

  Example 1:
  Input: (5, 3, "add")
  Output: 8
  Explanation: 5 + 3 = 8

  Example 2:
  Input: (10, 2, "subtract")
  Output: 8
  Explanation: 10 - 2 = 8

  Example 3:
  Input: (4, 6, "multiply")
  Output: 24
  Explanation: 4 * 6 = 24

  Example 4:
  Input: (9, 3, "divide")
  Output: 3
  Explanation: 9 / 3 = 3

  Example 5:
  Input: (7, 0, "divide")
  Output: "Cannot divide by zero"
  Explanation: Division by zero is not allowed.

  Example 6:
  Input: (5, 5, "modulus")
  Output: "Invalid operation"
  Explanation: "modulus" is not a valid operation.

  Constraints:
  - num1 and num2 are integers.
  - operation is a string that must be one of "add", "subtract", "multiply", or "divide".
*/

function calculator(num1, num2, operation) {
    if (operation === "add") {
        return num1 + num2;
    } else if (operation === "subtract") {
        return num1 - num2;
    } else if (operation === "multiply") {
        return num1 * num2;
    } else if (operation === "divide") {
        return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    } else {
        return "Invalid operation";
    }
}

// Test cases
console.log(calculator(5, 3, "add"));       // Expected: 8
console.log(calculator(10, 2, "subtract")); // Expected: 8
console.log(calculator(4, 6, "multiply"));  // Expected: 24
console.log(calculator(9, 3, "divide"));    // Expected: 3
console.log(calculator(7, 0, "divide"));    // Expected: "Cannot divide by zero"
console.log(calculator(5, 5, "modulus"));   // Expected: "Invalid operation"
