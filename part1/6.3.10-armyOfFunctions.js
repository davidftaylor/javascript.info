/* Task:

Every function is meant to output its number. But something is wrong…

Why do all of the shooters show the same value?

Fix the code so that they work as intended.

*/

// No variable j before. Previously, all function calls referenced the same outer variable, i.
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
  	let j = i;
    let shooter = function() { // create a shooter function,
      alert( j ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.