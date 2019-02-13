function waqt() {
  return new Date;
}

Date.prototype.now = function(){
  return this;
}

