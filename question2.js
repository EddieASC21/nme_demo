/*
  Climbing Stairs Problem:

  - You are climbing a staircase that has `n` steps.
  - You can climb 1 step or 2 steps at a time.
  - How many distinct ways can you reach the top?

  Example 1:
  Input: n = 2
  Output: 2
  Explanation: (1 step + 1 step) OR (2 steps)

  Example 2:
  Input: n = 3
  Output: 3
  Explanation: (1+1+1), (1+2), (2+1)

  Constraints:
  - 1 ≤ n ≤ 45
*/

function climbStairs(n) {
    if (n === 1) return 1; // Base case: Only 1 way for 1 step
    if (n === 2) return 2; // Base case: 2 ways for 2 steps

    // Recursive call: Number of ways to reach step n is the sum of ways to reach (n-1) and (n-2)
    return climbStairs(n - 1) + climbStairs(n - 2);
}

/*
  Test Cases:
  Running the function for small values of `n` since brute force is slow.
*/

console.log(climbStairs(2));  // Expected: 2
console.log(climbStairs(3));  // Expected: 3
console.log(climbStairs(4));  // Expected: 5
console.log(climbStairs(5));  // Expected: 8
console.log(climbStairs(6));  // Expected: 13 