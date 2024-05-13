// Memoization

function canSumMemoization(n, nums, memo = {}) {
  if (n < 0) return false;
  if (n === 0) return true;
  if (memo[n]) return memo[n];

  for (let i = 0; i < nums.length; i++) {
    let remainder = n - nums[i];
    if (canSumMemoization(remainder, nums, memo)) {
      memo[n] = true;
      return true;
    }
  }

  return false;
}

console.log(canSumMemoization(7, [4, 3])); // expected true
console.log(canSumMemoization(9, [2, 3, 5])); // expected true
console.log(canSumMemoization(300, [100, 14, 5])); // expected true
console.log(canSumMemoization(9, [5, 5])); // expected false
