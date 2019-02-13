// Minimum of the given dates Returns the minimum (most distant future) of the given date.
const min = function (dateArr) {
    return dateArr.reduce((acc, v) => {
      if (acc > v) acc = v;
      return acc;
    }).toJSON();
  }

export default min;