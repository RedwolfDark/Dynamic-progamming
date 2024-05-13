// Memoization
function fibonacciMemoization(n, memo = {}) {
  if (n <= 2) return 1;

  if (memo[n]) return memo[n];

  let result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  memo[n] = result;
  return result;
}

// Tabulation
function fibonacciTabulation(n, tab = []) {
  tab[0] = 1;
  tab[1] = 1;

  for (let i = 2; i < n; i++) {
    tab[i] = tab[i - 1] + tab[i - 2];
  }

  return tab[n - 1];
}

console.log(fibonacciTabulation(3));
