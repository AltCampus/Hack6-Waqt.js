// Is a Date Check if a variable is a native js Date object.
const isDate = function (date) {
    return (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date));
  }

export default isDate;