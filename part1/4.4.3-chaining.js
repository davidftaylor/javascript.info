/*
Task:
Modify the code of up, down and showStep to make the calls chainable.
*/

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    alert( this.step );
    return this;
  }
};

// Solution adds 'return this' to each method