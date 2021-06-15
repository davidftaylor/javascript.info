/* Task:

There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

If salaries is empty, then the result must be 0.
*/

let salaries = {};

function sumSalaries(obj) {
let sumOfSalaries = 0;
for (let salary of Object.values(salaries)) {
  sumOfSalaries += salary;
  }
  return sumOfSalaries;
}