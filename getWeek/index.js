const getWeek = function (date = new Date()) {
    const year = date.getFullYear();	
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const firstWeek = 7 - firstDay;
    
    return firstWeek > 0 ? Math.ceil(Math.abs(date.getDate() - firstWeek) / 7 ) + 1 : 1;	
  }
  
export default getWeek;