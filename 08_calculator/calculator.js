const add = function() {
  const myArray = Array.from(arguments)
  return myArray.reduce((x, y) => x + y, 0);
};

const subtract = function() {
  const myArray = Array.from(arguments)
  return myArray.reduce((x, y) => x - y);
};

const sum = function(myArray) {
	return myArray.reduce((x, y) => x + y, 0);
};

const multiply = function(myArray) {
  return myArray.reduce((x, y) => x * y);
};

const power = function(x,y) {
	return (x ** y)
};

const factorial = function(x) {
  const myArray = [];
  for (i = 1; i <= x; i++){
    myArray.push(i)
  }
  return myArray.reduce((total, num) => total * num, 1);
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
