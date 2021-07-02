/* Task:

There’s an object dictionary, created as Object.create(null), to store any key/value pairs.

Add method dictionary.toString() into it, that should return a comma-delimited list of keys. Your toString should not show up in for..in over the object.

*/

let dictionary = Object.create(null);

Object.defineProperty(dictionary, 'toString', {
	value: function() {
  	return Object.keys(dictionary).join();
  }
})

// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for(let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log(dictionary.toString()); // "apple,__proto__"