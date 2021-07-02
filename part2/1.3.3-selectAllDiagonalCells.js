/* Task:

Write the code to paint all diagonal table cells in red.

You’ll need to get all diagonal <td> from the <table> and paint them using the code:

// td should be the reference to the table cell
td.style.backgroundColor = 'red';

*/

let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let td = table.rows[i].cells[i];
  td.style.background = 'red';
}