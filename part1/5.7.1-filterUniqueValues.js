/* Task:

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.
*/

function unique(arr) {
  return Array.from(new Set(arr));
}