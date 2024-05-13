// Memoization

function bestSumMemoization(n, nums, memo = {}) {
  if (n < 0) return null;
  if (n === 0) return [];
  if (memo[n]) return memo[n];

  let otherPath = null;

  for (let i = 0; i < nums.length; i++) {
    let remainder = n - nums[i];
    let result = bestSumMemoization(remainder, nums, memo);

    if (result !== null) {
      let path = [...result, nums[i]];

      if (otherPath === null || path.length < otherPath.length) {
        otherPath = path;
      }
    }
  }

  memo[n] = otherPath;
  return otherPath;
}

console.log(bestSumMemoization(7, [4, 3, 7])); // expected 7
console.log(bestSumMemoization(9, [2, 3, 5])); // expected true
console.log(bestSumMemoization(300, [100, 14, 5])); // expected true
console.log(bestSumMemoization(9, [5, 5])); // expected false
