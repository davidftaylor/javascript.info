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

function printListReverse(list) {
	let tmp = list;
  let values = [];
  while (tmp) {
  	values.push(tmp.value);
    tmp = tmp.next;
  }
  values.reverse().forEach(elem => console.log(elem));
}

/*

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert( arr[i] );
  }
}

*/

//printListReverse(list);

function printListRevRecurse(list) {
	if (!list.next) console.log(list.value);
  else if (list.next) {
  	printListRevRecurse(list.next);
    console.log(list.value);
  }
}

/*

Book solution:

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
}

*/

//printListRevRecurse(list);