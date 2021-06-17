/* Task:

Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

*/

let date = new Date("2012-02-20T03:12");

// or

let date1 = new Date(2012, 1, 20, 3, 12);

// or

let date2 = new Date("February 20, 2012 03:12:00");

/*
From MDN:

Note: Parsing of date strings with the Date constructor (and Date.parse, they are equivalent)
is strongly discouraged due to browser differences and inconsistencies.
*/