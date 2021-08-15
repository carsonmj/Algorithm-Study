var reverse = function(x) {
    if(x === 0) return 0;
    let result = parseInt(x.toString().split("").reverse().join(""));
    if(result > Math.pow(2,31)-1 || result < -Math.pow(2,31)-1) return 0;
    return x > 0 ? result : -result
};
