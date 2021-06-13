/* Task:

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.
*/

function unique(arr) {
  let uniqueArr = [];
  arr.forEach(elem => {
  	if (!(uniqueArr.includes(elem))) {
    	uniqueArr.push(elem);
    }
  })
  return uniqueArr;
 }