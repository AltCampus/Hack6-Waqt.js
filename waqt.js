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


//Is Same Check if a date is the same as another date.
function isSameDay(date1,date2) {
  return (
    (date1.getDate() == date2.getDate() ) &&
    (date1.getMonth() == date2.getMonth() ) &&
    (date1.getFullYear() == date2.getFullYear() )	);
  }

// Return the end of a unit of time for the given date.
waqt.prototype.endOfDay = function(...arr){
  let newWaqt = new Date(arr[0].getFullYear(),arr[0].getMonth(),arr[0].getDate(),23,59,59,999) 
  return new Date(newWaqt);
}

// Is a Date Check if a variable is a native js Date object.
function isDate(date) {
  
}