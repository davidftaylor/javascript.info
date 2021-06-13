/*
Task:

Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

The function must be case-insensitive.
*/

function checkSpam(str) {
	strLower = str.toLowerCase();
	return strLower.includes('viagra') || strLower.includes('xxx');
}