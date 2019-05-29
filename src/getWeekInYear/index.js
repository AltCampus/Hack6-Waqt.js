// getWeek Gets the week of the Month. Uses 'waqt.getDayOfYear()'
const getWeekInYear = function(date = new Date()) {
    const year = date.getFullYear();	  
    const firstDay = new Date(year, 0, 1).getDay();
    const firstWeek = 7 - firstDay;
    
    return firstWeek > 0 ? Math.ceil(Math.abs(getDayOfYear(date)- firstWeek) / 7 ) + 1 : 1;	
  }

export default getWeekInYear;