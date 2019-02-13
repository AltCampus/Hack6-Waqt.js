function waqt() {
  return new Date;
}

// It will give you the current datetime
Date.prototype.now = function(){
  return this;
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