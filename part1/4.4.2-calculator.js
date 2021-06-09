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