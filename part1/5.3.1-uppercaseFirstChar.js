/*
Task:
Write a function ucFirst(str) that returns the string str with the uppercased first character.
*/

function ucFirst(str) {
  //if (!str) return str;

  //return str[0].toUpperCase() + str.slice(1);
  return str.charAt(0).toUpperCase() + str.slice(1);
}