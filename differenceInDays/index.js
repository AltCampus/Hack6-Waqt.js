// Get the unit of time between the given dates in days.
const differenceInDays = function (...arr) {

    let timeDifference = Date(arr[0]).getTime() - new Date(arr[1].getTime());
  
    return Math.floor(timeDifference / (86400 * 1000));
  }

export default differenceInDays;