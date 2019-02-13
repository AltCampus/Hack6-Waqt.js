function waqt() {
  return new Date;
}

Date.prototype.now = function(){
  return this;
}


// Day of Week Gets the day of the week.
function getDay(date) {
	return date.getDay();
}

// getWeek Gets the week of the Month.
function getWeek(date) {
	const day = date.getDate();	
	return Math.ceil(day / 7);
}

// returns true, if dates precedes one another
function isAfter(before, after) {
	return before < after;
}

// returns false , if before date does not precede the other
function isBefore(before, after) {
  return before > after;
}

