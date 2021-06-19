let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
	while (list != null) {
  	//console.log(list.value);
    list = list.next;
  }
}

/* Book solution:

function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}

"In the future we may need to extend a function, do something else with the list. If we change list, then we lose such ability.

Talking about good variable names, list here is the list itself. The first element of it. And it should remain like that. That’s clear and reliable."

*/

function printListRecurse(list) {
	//console.log(list.value);
  if (list.next != null) printListRecurse(list.next);
}

/* Book solution:

function printList(list) {

  alert(list.value);

  if (list.next) {
    printList(list.next);
  }
}

"Technically, the loop is more effective. These two variants do the same, but the loop does not spend resources for nested function calls.

From the other side, the recursive variant is shorter and sometimes easier to understand."

*/

// Performance tests
let p1 = performance.now();
for (let i = 0; i < 1000; i++) {
	printList(list);
}
console.log(performance.now() - p1);
let p2 = performance.now();
for (let i = 0; i < 1000; i++) {
	printListRecurse(list);
}
console.log(performance.now() - p2);