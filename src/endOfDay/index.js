// Return the end of a unit of time for the given date.
const endOfDay = function (...arr) {
    let newWaqt = new Date(arr[0].getFullYear(), arr[0].getMonth(), arr[0].getDate(), 23, 59, 59, 999)
    return new Date(newWaqt);
  }

export default endOfDay;