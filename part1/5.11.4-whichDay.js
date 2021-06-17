/*
Task:

Create a function getDateAgo(date, days) to return the day of month days ago from the date.

For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

Should work reliably for days=365 or more:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

P.S. The function should not modify the given date.
*/

function getDateAgo(date, days) {
	let oldDate = new Date(date);
	oldDate.setDate(date.getDate() - days);
	return oldDate.getDate();
}

/* 'date' as a parameter in 'new Date(...)', as in 'new Date(date)', works
because 'date' returns a string that can be parsed by the Date constructor.

It is important to use the methods .setDate() and .getDate() to get the correct result */