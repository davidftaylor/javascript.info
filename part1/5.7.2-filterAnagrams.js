// Task: Write a function aclean(arr) that returns an array cleaned from anagrams.

function aclean(arr) {
  let wordMap = new Map();
  for (let word of arr) {
    wordMap.set(Array.from(word.toLowerCase()).sort().join(), word);
  }
  return Array.from(wordMap.values());
}