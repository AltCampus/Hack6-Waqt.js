function waqt() {
  return new Date;
}

// will return current date and time
waqt.now = function(){
  return new Date;
}

// Gives number of days in month according to year and month provided
waqt.getDaysInMonth = function(year=2018, month=1){
  let date = new Date(year, month)
  return Number(date.toJSON().split("T")[0].split("-").slice(-1)[0])
}


// Gives total number of days passed in year
waqt.getDayOfYear = function(date = new Date()){
  let year = date.getFullYear();
  let day = date.getDate();
  let month = date.getMonth();
  let totalDays = 0;
  for(i=1; i<=month; i++){
    totalDays += Number(new Date(year,i).toJSON().split("T")[0].slice(-2));
  }
  return totalDays+day;
}
// It will give you the current datetime
waqt.prototype.now = function(){
  return this;
}


// Day of Week Gets the day of the week.
function getDay(date) {
	return date.getDay();
}

function getWeek(date = new Date()) {
  const year = date.getFullYear();	
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const firstWeek = 7 - firstDay;
  
  return firstWeek > 0 ? Math.ceil(Math.abs(date.getDate() - firstWeek) / 7 ) + 1 : 1;	
}

// getWeek Gets the week of the Month. Uses 'waqt.getDayOfYear()'
function getWeekInYear(date = new Date()) {
  const year = date.getFullYear();	  
  const firstDay = new Date(year, 0, 1).getDay();
  const firstWeek = 7 - firstDay;
  
  return firstWeek > 0 ? Math.ceil(Math.abs(getDayOfYear(date)- firstWeek) / 7 ) + 1 : 1;	
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
waqt.prototype.addDays = function(...arr){
  let newWaqt = arr[0].getTime() + arr[1]*86400*1000; 
  return new Date(newWaqt);
}

// Subtract the specified number of days from the given date.
waqt.prototype.subDays = function(...arr){
  let newWaqt = arr[0].getTime() - arr[1]*86400*1000; 
  return new Date(newWaqt);
}

// Gives date in format provided
function format(date=new Date(), format){
  seperator = format.match(/\W*/g).filter(v=>v!="")[0];
  return format.match(/\w*/g).filter(v=>v!="").map(v=>{
    if(v=='DD'||v=='dd'){
      return date.getDate();
    } else if(v=='MM'||v=='mm'){
      return date.getMonth();
    } else if(v=='YYYY'||v=='yyyy'){
      return date.getFullYear();
    }
  }).join(`${seperator}`)
}

//Is Same Check if a date is the same as another date.
function isSameDay(date1,date2) {
  return (
    (date1.getDate() == date2.getDate() ) &&
    (date1.getMonth() == date2.getMonth() ) &&
    (date1.getFullYear() == date2.getFullYear() )	
  );
  }
}

// Return the end of a unit of time for the given date.
waqt.prototype.endOfDay = function(...arr){
  let newWaqt = new Date(arr[0].getFullYear(),arr[0].getMonth(),arr[0].getDate(),23,59,59,999) 
  return new Date(newWaqt);
}

// Is a Date Check if a variable is a native js Date object.
function isDate(date) {
  return (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date));
}
