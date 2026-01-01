const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce(
    (num, tot) => num+tot, 0
  );
};

const multiply = function(arr) {
  return arr.reduce(
    (num, tot) => num*tot, 1
  );
};

const power = function(a,b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if(a === 0 || a === 1) return 1;
  let res=a;
  for(let i=a-1; i>=2; i--){
    res*=i;
  }
  return res;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
