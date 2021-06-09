/*
Task:

Write a loop which prompts for a number greater than 100.
If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100
or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers.
There’s no need to implement a special handling for a non-numeric input in this task.
*/

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

/*
The above code only works because the prompt returns string values. Thus, '0' is not
evaluated as falsy by the while condition because it is a non-empty string. For this reason,
the below code fails to implement the task correctly. The loop is halted if '0' is entered.

let num;

do {
  num = +prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);
*/