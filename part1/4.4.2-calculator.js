/*
Task:

Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/

let calculator = {
	read() {
		this.value1 = +prompt('Enter a number', '');
		this.value2 = +prompt('Enter a number', '');
	},

	sum() {
		return this.value1 + this.value2;
	},

	mul() {
		return this.value1 * this.value2;
	}
}