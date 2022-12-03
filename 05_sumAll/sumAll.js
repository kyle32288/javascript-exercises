const sumAll = function(x, y) {
    if (x < 0 || y < 0) return 'ERROR'
    if (x > y){
        let z = x;
        x = y;
        y = z;
    }
    let sum = 0;
    for (let i = x; i <= y; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
