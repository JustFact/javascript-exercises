const removeFromArray = function(arr) {
    for(let i = 1;i<arguments.length;i++){
        if(arr.find(e=>e===arguments[i])){
            let elementIndex = arr.findIndex(e=>(e===arguments[i]));;
            arr.splice(elementIndex,1);
        }    
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
