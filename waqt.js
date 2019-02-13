function waqt() {
  return new Date;
}

// It will give you the current datetime
Date.prototype.now = function(){
  return this;
}


// Day of Week Gets the day of the week.
function getDay(date) {
	return date.getDay();
}

function getWeek(date) {
  const year = date.getFullYear();	
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const firstWeek = 7 - firstDay;
  
  return firstWeek > 0 ? Math.ceil(Math.abs(date.getDate() - firstWeek) / 7 ) + 1 : 1;	
}

// getWeek Gets the week of the Month.
function getWeekInYear(date) {
  const year = date.getFullYear();	  
  const firstDay = new Date(year, 1, 1).getDay();
  const firstWeek = 7 - firstDay;
  
  return firstWeek > 0 ? Math.ceil(Math.abs(date.getDate() - firstWeek) / 7 ) + 1 : 1;	
}

// returns true, if dates precedes one another
function isAfter(before, after) {
	return before < after;
}

// returns false , if before date does not precede the other
function isBefore(before, after) {
  return before > after;
}


// Check if date is future
function isFuture(date) {
  const currentDate = new Date();

  return date > currentDate;
}

// Minimum of the given dates Returns the minimum (most distant future) of the given date.
function min(dateArr) {
  return dateArr.reduce((acc,v) => {
    if(acc > v) acc = v;
    return acc;
  }).toJSON();
}
//Maximum of the given dates Returns the maximum (most distant future) of the given date.
function max(dateArr) {
  return dateArr.reduce((acc, v) => {
    if (acc < v) acc = v;
    return acc;
  }).toJSON();
}

// Add the specified number of days to the given date. 
Date.prototype.addDays = function(...arr){
  let newWaqt = arr[0].getTime() + arr[1]*86400*1000; 
  return new Date(newWaqt);
}

// Subtract the specified number of days from the given date.
Date.prototype.subDays = function(...arr){
  let newWaqt = arr[0].getTime() - arr[1]*86400*1000; 
  return new Date(newWaqt);
}
