const leapYears = function(year) {

    if(year%100==0){
        if(year%400==0){
            return true;
        }else{
            return false;
        }
    }else if(year%4==0){
        return true;
    }else{
        return false;
    }
    //Leap Years: divisible by 4
    //Not Leap Years: divisible by 100, but divisible by 400 are leap year
};

// Do not edit below this line
module.exports = leapYears;
