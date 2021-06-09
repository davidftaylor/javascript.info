/* 
If value is defined within 'do', it does not share a scope with 'while'.

If value is defined at the top of the function, the loop runs infinitely,
as type conversion is always immediately performed and thus always returns a number. 

Additionally, the while condition would not work even if implemented as intended.
It is not exhaustive enough, due to the fact that 'Infinity' is a number, but not finite,
and thus all arrays will sum to infinity if it is ever accepted and included.

Important to know: when the user hits 'OK' on a prompt without inputting anything, an empty
string is returned. When the user clicks 'Cancel', 'null' is returned.
*/



/*
function sumInput() {
	let arr = [];
    let value;

	do {
    value = +prompt();
    arr.push(value);
  } while (typeof(value) == 'number');
  
  let sum = 0;
  
  for (let num of arr) {
  	sum += num;
  }
  return sum;
}

sumInput();
*/

