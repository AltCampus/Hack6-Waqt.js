function waqt() {
  return new Date;
}

// It will give you the current datetime
waqt.prototype.now = function(){
  return this;
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
waqt.prototype.addDays = function(...arr){
  let newWaqt = arr[0].getTime() + arr[1]*86400*1000; 
  return new Date(newWaqt);
}

// Subtract the specified number of days from the given date.
waqt.prototype.subDays = function(...arr){
  let newWaqt = arr[0].getTime() - arr[1]*86400*1000; 
  return new Date(newWaqt);
}

// Return the end of a unit of time for the given date.
waqt.prototype.endOfDay = function(...arr){
  let newWaqt = new Date(arr[0].getFullYear(),arr[0].getMonth(),arr[0].getDate(),23,59,59,999) 
  return new Date(newWaqt);
}

// Get the unit of time between the given dates in milliseconds.
waqt.prototype.differenceInMilliseconds = function(...arr) {
  return new Date(arr[0]).getTime() - new Date(arr[1].getTime());
}

// Get the unit of time between the given dates in days.
waqt.prototype.differenceInMilliseconds = function(...arr) {

let timeDifference = Date(arr[0]).getTime() - new Date(arr[1].getTime());

  return Math.floor(timeDifference/(86400*1000));
}