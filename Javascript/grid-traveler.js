// Memoization
function gridTravelerMemoization(n, m, memo = {}) {
  let key = n + "," + m;
  if (n === 0 || m === 0) return 0;
  if (n === 1 && m === 1) return 1;
  if (memo[key]) return memo[key];

  let result =
    gridTravelerMemoization(n - 1, m, memo) +
    gridTravelerMemoization(n, m - 1, memo);

  memo[key] = result;

  return result;
}

// Memoization
function gridTravelerTabulation(n, m) {
  let tab = Array.from(Array(n), (_) => Array(m).fill(0));

  tab[0][0] = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      tab[i][j] += tab[i - 1][j] + tab[i][j - 1];
    }
  }

  console.log(tab);

  return tab[n - 1][m - 1];
}

console.log(gridTravelerMemoization(2, 2)); // expected 2
console.log(gridTravelerMemoization(1, 1)); // expected 1
console.log(gridTravelerMemoization(1, 0)); // expected 0
console.log(gridTravelerMemoization(0, 1)); // expected 0
console.log(gridTravelerMemoization(10, 10)); // expected 48620

console.log("Tabulation result");

console.log(gridTravelerTabulation(2, 2)); // expected 2
// console.log(gridTravelerTabulation(1, 1)); // expected 1
// console.log(gridTravelerTabulation(1, 0)); // expected 0
// console.log(gridTravelerTabulation(0, 1)); // expected 0
// console.log(gridTravelerTabulation(10, 10)); // expected 48620
