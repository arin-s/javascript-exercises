const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => {return total += Number.parseInt(number);}, 0);
};

const multiply = function(numbers) {
	return numbers.reduce((total, number) => {return total *= Number.parseInt(number);}, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
  let total = 1;
	for (let i = 1; i <= number; i++) {
    total *= i;
  }
  return total;
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
