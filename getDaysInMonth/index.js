// Gives number of days in month according to year and month provided
const getDaysInMonth = function (year = 2018, month = 1) {
    let date = new Date(year, month)
    return Number(date.toJSON().split("T")[0].split("-").slice(-1)[0])
  }

export default getDaysInMonth;