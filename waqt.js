function waqt() {
  return new Date;
}

waqt.now = function(){
  return new Date;
}

waqt.getDaysInMonth = function(year, month){
  let date = new Date(year, month)
  return Number(date.toJSON().split("T")[0].split("-").slice(-1)[0])
}

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


