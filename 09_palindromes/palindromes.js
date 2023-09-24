const palindromes = function (str) {
    let cleanArray = Array.from(str.toLowerCase())
                        .filter(character=>character!=' ')
                        .filter(character=>character!=',')
                        .filter(character=>character!='!')
                        .filter(character=>character!='.')

    return cleanArray.join("")==cleanArray.reverse().join("");
    // for(let i = 0; i < cleanArray.length; i++){
    //     if(cleanArray[i]!=cleanArray[cleanArray.length-1-i]){
    //         return false;
    //     }
    // }
    // return true;
};

// Do not edit below this line
module.exports = palindromes;
