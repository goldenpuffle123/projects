const fibonacci = function(num) {
    if(num < 0) return "OOPS";
    else if(num == 0) return 0;
    else if(num <= 1) return 1;
    const fib = [1,1];
    for(let i=2; i<num; i++) {
        [fib[0], fib[1]] = [fib[1], fib[0]+fib[1]];
    }
    return fib[1];

};

// Do not edit below this line
module.exports = fibonacci;
