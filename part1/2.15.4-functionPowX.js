// Provided solution with condition added to handle non-integer exponents

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else if (n % 1 != 0) {
	alert('Only integer values for the exponent, please!')
} else {
  alert( pow(x, n) );
}