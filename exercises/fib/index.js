// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function cacheFuntion(fn) {
  const cached = {};
  return function (...args) {
    if (cached[args]) {
      return cached[args];
    }

    const result = fn.apply(this, args);
    cached[args] = result;

    return result;
  };
}

function fib(n) {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const first = result[i - 1];
    const second = result[i - 2];

    result.push(first + second);
  }
  return result[n];
}

module.exports = fib;
