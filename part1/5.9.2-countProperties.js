/* Task:

Write a function count(obj) that returns the number of properties in the object.

Try to make the code as short as possible.

*/

let user = {
  name: 'John',
  age: 30
};


function count(obj) {
  return Object.keys(obj).length;
}