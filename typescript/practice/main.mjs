
/** Closure */
export const multiplyClosure = value => {
  return (secondValue) => {return secondValue * value }
}

// console.log(multiplyClosure(2)(6));
var length = 4;
function fn() {
  length = 1;
  console.log('this.length');
  
}

var obj = {
  length: 10,
  method: function(fn) {
    fn();
    arguments[0]();
  }
}

console.log(fn.prototype);



