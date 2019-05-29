// Gives date in format provided
const format = function (date = new Date(), format) {
     let seperator = format.match(/\W*/g).filter(v => v != "")[0];
    return format.match(/\w*/g).filter(v => v != "")
    .map(v => (v == 'DD' || v == 'dd') ? date.getDate() : (v == 'MM' || v == 'mm')? date.getMonth() : (v == 'YYYY' || v == 'yyyy') ? date.getFullYear() : "provide correct format"
    ).join(`${seperator}`)
  }
  
export default format;
