/* Task:

Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

Parameters:

year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).
*/

function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1, 1);
	date.setDate(date.getDate() - 1);
  	return date.getDate();
}

// date.setDate(...) cannot be returned directly - it provides milliseconds.

// The book solution is more clever, passing 0 as the day, avoiding the need for the 2nd line in the function:

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}