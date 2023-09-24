const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let sum = 0;
  arr.forEach(num => {
    sum += num;
  });
  return sum;
};

const multiply = function(arr) {
  let multiple = 1;
  arr.forEach(num=>{
    multiple *= num;
  })
  return multiple;
};

const power = function(num,pow) {
  let multiple = num;
	for(let i = 1; i < pow; i++){
    multiple *= num;
  }
  return multiple;
};

const factorial = function(num) {
	let result = 1;
  while(num){
    result *= num;
    num--;
  }
  return result;
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
