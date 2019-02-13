function waqt() {
  return new Date;
}

Date.prototype.now = function(){
  return this;
}


function min(dateArr) {
  return dateArr.reduce((acc,v) => {
    if(acc < v) acc = v;
    return v;
  });
}

function max(dateArr) {
  return dateArr.reduce((acc, v) => {
    if (acc > v) acc = v;
    return v;
  });
}

