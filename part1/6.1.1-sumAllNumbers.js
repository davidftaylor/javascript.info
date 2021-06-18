/* Task:

Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

Make 3 solution variants:

Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.

P.S. Which solution variant is the fastest? The slowest? Why?

P.P.S. Can we use recursion to count sumTo(100000)?
*/

// Using loop
function sumTo1(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return sum;
}

// Using recursion
function sumTo2(n) {
	if (n == 1) return n;
	return n + sumTo2(n - 1);
}

// Using arithmetic progression formula
function sumTo3(n) {
	return n * (1 + n) / 2;
}

// Measuring performance
function measureTime(func) {
	let time1 = performance.now();
	for (let i = 0; i < 100; i++) {
  		func(5000);
	}
	console.log(performance.now() - time1);
}

measureTime(sumTo1);
measureTime(sumTo2);
measureTime(sumTo3);

/* Arithmetic progression is fastest, followed by the loop, followed by recursion

Recursion cannot sum up to 100,000 because the engine's maximum call stack is exceeded */
