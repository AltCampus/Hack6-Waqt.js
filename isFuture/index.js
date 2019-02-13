// Check if date is future
const isFuture = function (date) {
    const currentDate = new Date();
  
    return date > currentDate;
  }

export default isFuture;