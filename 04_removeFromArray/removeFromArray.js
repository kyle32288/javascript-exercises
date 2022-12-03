const removeFromArray = function(myArray, removeMe) {
    for (let i = 1; i < arguments.length; i++){
        myArray = myArray.filter(x => x != arguments[i] || typeof(arguments[i]) != typeof(x));
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
