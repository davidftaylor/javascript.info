/*
Task:

Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.

The resulting value must be returned as a number.

The visitor can also stop the process by entering an empty line or pressing “CANCEL”. 
In that case, the function should return null.
*/

// My solution

function readNumber() {
  let response = prompt('Enter a number', '');
  // let num = +response;

  if (response === '' || response === null) {
    return null;
  }

  /*
  if (isNaN(num)) {
    num = readNumber();
  }
  */

  if (isNaN(+response)) {
    response = readNumber();
  }

  // return num;
  return +response;
}

// Book solution

function readNumber() {
  let num;

  do {
    num = prompt("Enter a number please?", 0);
  } while ( !isFinite(num) );

  if (num === null || num === '') return null;

  return +num;
}