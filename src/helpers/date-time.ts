export function daysUntilEndDate(endDate: string): string {
  // Convert the end date to a JavaScript Date object
  const endDateObject = new Date(endDate);

  // Get the current date
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = endDateObject.getTime() - currentDate.getTime();

  // Calculate the number of days left
  const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  if (daysLeft > 0) {
    return `${daysLeft} days left until ${endDate}`;
  } else if (daysLeft === 0) {
    return `Today is the end date: ${endDate}`;
  } else {
    return `The end date ${endDate} has already passed.`;
  }
}
