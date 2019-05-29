// Subtract the specified number of days from the given date.
const subDays = function (...arr) {
    let newWaqt = arr[0].getTime() - arr[1] * 86400 * 1000;
    return new Date(newWaqt);
  }

export default subDays;