/*
Task:

The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.
*/

// Solution in O(n^2)

function getMaxSubSum(arr) {
	//let maxSum = -Infinity;
  let maxSum = 0;
  //let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
  	for (let j = i; j < arr.length; j++) {
    	sum += arr[j];
      //maxSum = sum > maxSum ? sum : maxSum;
      maxSum = Math.max(maxSum, sumFixedStart);
    }
    //sum = 0;
  }
  //console.log(maxSum);
  return maxSum;
}

// Solution in O(n)

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let i of arr) {
    partialSum += i;
    maxSum = Math.max(maxSum, partialSum);
    //partialSum = Math.max(0, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}