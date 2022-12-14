const fibonacci = function(num) {
    if (num == 1) return(1)
    if (num <= 0) return('OOPS')
    let x = 0;
    let y = 1;
    let z;
    for (let i = 0; i < +num-1; i++){
        z = x + y;

        x = y;
        y = z;  
    }
    return(z)
};

// Do not edit below this line
module.exports = fibonacci;
