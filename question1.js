// fizz buzz

/*
  FizzBuzz Problem:

  Write a program that prints the numbers from 1 to 100. 
  But for multiples of 3, print "Fizz" instead of the number, 
  and for multiples of 5, print "Buzz". 
  For numbers which are multiples of both 3 and 5, print "FizzBuzz".

  Example Output:
  1
  2
  Fizz
  4
  Buzz
  Fizz
  7
  8
  Fizz
  Buzz
  11
  Fizz
  13
  14
  FizzBuzz
  ...
*/

/*
  FizzBuzz Function:

  - Accepts a number `n` as input.
  - Returns "FizzBuzz" if the number is divisible by both 3 and 5.
  - Returns "Fizz" if the number is divisible by only 3.
  - Returns "Buzz" if the number is divisible by only 5.
  - Otherwise, returns the number itself.
*/

function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n;
    }
}

/*
  Test Cases:
  Running the function on different numbers and logging the output.
*/

console.log(fizzBuzz(1));  // Expected: 1
console.log(fizzBuzz(3));  // Expected: "Fizz"
console.log(fizzBuzz(5));  // Expected: "Buzz"
console.log(fizzBuzz(15)); // Expected: "FizzBuzz"
console.log(fizzBuzz(30)); // Expected: "FizzBuzz"
console.log(fizzBuzz(7));  // Expected: 7
console.log(fizzBuzz(10)); // Expected: "Buzz"
console.log(fizzBuzz(9));  // Expected: "Fizz"
