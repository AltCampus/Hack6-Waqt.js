// Get the unit of time between the given dates in milliseconds.
const differenceInMilliseconds = function (...arr) {
    return new Date(arr[0]).getTime() - new Date(arr[1].getTime());
  }

export default differenceInMilliseconds