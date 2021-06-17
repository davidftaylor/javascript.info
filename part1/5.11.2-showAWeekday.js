/* Task:

Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
*/

function getWeekDay(date) {
	let dayArray = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return dayArray[date.getDay()];
}