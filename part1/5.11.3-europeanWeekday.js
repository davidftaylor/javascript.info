/* Task:

European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7).
Write a function getLocalDay(date) that returns the “European” day of week for date.
*/

function getLocalDay(date) {
	// return date.getDay() == 0 ? 7 : date.getDay();
	// Using the conditional operator in this way is not recommended by JS.info
	
	if (date.getDay() == 0) return 7;
	return date.getDay();
}