function timeDifference(current, previous) {
  const milliSecondsPerMinute = 60 * 1000;
  const milliSecondsPerHour = milliSecondsPerMinute * 60;
  const milliSecondsPerDay = milliSecondsPerHour * 24;
  const milliSecondsPerWeek = milliSecondsPerDay * 7;
  const milliSecondsPerMonth = milliSecondsPerDay * 30;
  const milliSecondsPerYear = milliSecondsPerDay * 365;

  const elapsed = current - previous;

  if (elapsed < milliSecondsPerDay) {
    return "today";
  } else if (elapsed < milliSecondsPerWeek) {
    return "this-week";
  } else if (elapsed < milliSecondsPerMonth) {
    return "this-month";
  } else if (elapsed < milliSecondsPerYear) {
    return "this-year";
  } else {
    return "ever";
  }
}

function timeDifferenceForDate(date) {
  const now = new Date().getTime();
  const updated = new Date(date).getTime();
  return timeDifference(now, updated);
}

Date.prototype.getLetterDay = function() {
  return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"][this.getDay()];
};

Date.prototype.getWordDay = function() {
  return [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ][this.getDay()];
};

Date.prototype.getWordMonth = function() {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ][this.getMonth()];
};

Date.prototype.getFormatThisYear = function() {
  let letterMonth = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ][this.getMonth()];
  return letterMonth + " " + this.getDate();
};

Date.prototype.getMonthYear = function() {
  return this.getWordMonth() + " " + this.getFullYear();
};

export function formatDate(date) {
  let code = timeDifferenceForDate(date);
  switch (code) {
    case "today":
      return date.getHours() + ":00";
    case "this-week":
      return date.getWordDay();
    case "this-month":
    case "this-year":
      return date.getFormatThisYear();
    default:
      return date.getMonthYear();
  }
}
