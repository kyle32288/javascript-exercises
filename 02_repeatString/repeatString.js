const repeatString = function(myWord, myReps) {
    if (myReps < 0){
        return 'ERROR';
    }
    return(myWord.repeat(myReps));
};

// Do not edit below this line
module.exports = repeatString;
