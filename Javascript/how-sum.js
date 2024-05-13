// Memoization

function howSumMemoization(n, nums, memo = {}) {
  if (n < 0) return null;
  if (n === 0) return [];
  if (memo[n]) return memo[n];

  for (let i = 0; i < nums.length; i++) {
    let remainder = n - nums[i];
    let otherPath = howSumMemoization(remainder, nums, memo);
    if (otherPath !== null) {
      memo[n] = [...otherPath, nums[i]];
      return [...otherPath, nums[i]];
    }
  }

  return null;
}

console.log(howSumMemoization(7, [4, 3])); // expected [4,3]
console.log(howSumMemoization(9, [2, 3, 5])); // expected [3,2,2,2]
console.log(howSumMemoization(300, [100, 14, 5])); // expected [100,100,100]
console.log(howSumMemoization(9, [5, 5])); // expected null
