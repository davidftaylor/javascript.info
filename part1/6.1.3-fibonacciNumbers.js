/* Task:

Write a function fib(n) that returns the n-th Fibonacci number.

P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.

*/

// With array and loop
function fib(n) {
	let arr = [];
	for (let i = 0; i < n; i++) {
		if (arr.length < 2) arr.push(1)
		else arr.push(arr[i - 1] + arr[i - 2])
	}
	return arr[n - 1];
}

// With recursion. But this simple implementation takes a long time for large numbers due to repeated calls.
function fibRecurse(n) {
	if (n <= 1) return n;
	return fibRecurse(n - 1) + fibRecurse(n - 2);
}

// Book solution using dynamic programming bottom-up
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}