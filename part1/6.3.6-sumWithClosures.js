// Task: Write function sum that works like this: sum(a)(b) = a+b.

function sum(a) {
	return function(b) {
  	return a + b;
  }
}