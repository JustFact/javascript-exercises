const fibonacci = function(num) {
    if(num<0){
        return 'OOPS'
    }
    let adder = 0;
    let currentNumber = 1;
    let holdNum;
    while(num-1){
        holdNum = currentNumber;
        currentNumber = currentNumber + adder;
        adder = holdNum
        num--;
    }
    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
