/* Task:

Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

Make two variants of the solution.

Using setInterval.
Using nested setTimeout.

*/

function printNumbersInterval(from, to) {
	let num = from;
	let output = setInterval(function() {
  	console.log(num);
    if (num == to) clearInterval(output);
    num++;
  }, 1000);
}

printNumbersInterval(1, 5);

function printNumbersTimeout(from, to) {
	let output = setTimeout(function print() {
  	console.log(from)
    from++;
    if (from <= to) setTimeout(print, 1000);
  }, 1000)
}

printNumbersTimeout(1, 5);