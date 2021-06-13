/*
Task:

Create a constructor function Calculator that creates “extendable” calculator objects.

The task consists of two parts.

First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
*/

function Calculator() {
    this.calculate = function(str) {
      let firstSpace = str.indexOf(' ');
      let lastSpace = str.lastIndexOf(' ');
      let firstNumber = +str.slice(0, firstSpace);
      let secondNumber = +str.slice(lastSpace + 1);
      let add = str.includes('+');
    
      if (add) {
        return firstNumber + secondNumber;
      }
      return firstNumber - secondNumber;
    }
}

/*

Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

No parentheses or complex expressions in this task.
The numbers and the operator are delimited with exactly one space.
There may be error handling if you’d like to add it.

*/

// My solution

function Calculator() {
    this.operatorFuncs = {
  	  '+': function(a, b) { return a + b },
      '-': function(a, b) { return a - b }
    };

	this.calculate = function(str) {
  	  let firstSpace = str.indexOf(' ');
      let lastSpace = str.lastIndexOf(' ');
      let operator = str.slice(firstSpace, lastSpace).trim();
      let firstNumber = +str.slice(0, firstSpace);
      let secondNumber = +str.slice(lastSpace + 1);

      if (!this.operatorFuncs[operator]) {
        return 'No such operator stored.'
      }
    
      return this.operatorFuncs[operator](firstNumber, secondNumber);
    }
  
    this.addMethod = function(name, func) {
  	  this.operatorFuncs[name] = func;
    }
}

