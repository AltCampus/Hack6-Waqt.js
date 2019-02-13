// Gives total number of days passed in year
const getDayOfYear = function (date = new Date()) {
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth();
    let totalDays = 0;
    for (let i = 1; i <= month; i++) {
      totalDays += Number(new Date(year, i).toJSON().split("T")[0].slice(-2));
    }
    return totalDays+day;
  }

export default getDayOfYear;
