/*
Task:

Write a function formatDate(date) that should format date as follows:

If since date passed less than 1 second, then "right now".
Otherwise, if since date passed less than 1 minute, then "n sec. ago".
Otherwise, if less than an hour, then "m min. ago".
Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
*/

function formatDate(date) {
  let differenceInSeconds = (Date.now() - date.getTime()) / 1000;
  if (differenceInSeconds < 1) return "right now";
  if (differenceInSeconds < 60) return `${differenceInSeconds} sec. ago`;
  if (differenceInSeconds < 3600) return `${differenceInSeconds/60} min. ago`;
  let year = String(date.getYear()).substr(-2);
  let month = String(date.getMonth() + 1).padStart(2, '0');
  let date2 = String(date.getDate()).padStart(2, '0');
  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');

  return `${date2}.${month}.${year} ${hours}:${minutes}`
}