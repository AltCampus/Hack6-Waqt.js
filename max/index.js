//Maximum of the given dates Returns the maximum (most distant future) of the given date.
const max = function(dateArr) {
    return dateArr.reduce((acc, v) => {
      if (acc < v) acc = v;
      return acc;
    }).toJSON();
  }

export default max;