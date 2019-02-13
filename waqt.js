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
