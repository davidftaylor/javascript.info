/* Task:

Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements.

All element orders should have an equal probability. 
For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
*/

// Naive shuffling - not optimal, use Fisher-Yates instead!

let arr = [1, 2, 3];

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = Math.floor(Math.random() * arr.length);
    let temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

let results = {};

let i = 0;
while (i < 10000) {
  let result = shuffle(arr).join('');
  if (result in results) {
    results[result] = results[result] + 1;
    i++;
    continue;
  }
  results[result] = 1;
  i++;
}