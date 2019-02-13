function waqt() {
  return new Date;
}

// It will give you the current datetime
Date.prototype.now = function(){
  return this;
}

// Minimum of the given dates Returns the minimum (most distant future) of the given date.
function min(dateArr) {
  return dateArr.reduce((acc,v) => {
    if(acc < v) acc = v;
    return acc;
  }).toJSON();
}
//Maximum of the given dates Returns the maximum (most distant future) of the given date.
function max(dateArr) {
  return dateArr.reduce((acc, v) => {
    if (acc > v) acc = v;
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
