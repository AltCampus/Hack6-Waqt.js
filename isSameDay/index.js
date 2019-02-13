//Is Same Check if a date is the same as another date.
const isSameDay =function(date1, date2) {
    return (
      (date1.getDate() == date2.getDate()) &&
      (date1.getMonth() == date2.getMonth()) &&
      (date1.getFullYear() == date2.getFullYear())
    );
  }

export default isSameDay;