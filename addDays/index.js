// Add the specified number of days to the given date. 
const addDays = function (...arr) {
    let newWaqt = arr[0].getTime() + arr[1] * 86400 * 1000;
    return new Date(newWaqt);
  }

export default addDays;