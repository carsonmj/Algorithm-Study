let reverse = function(x) {  
    let reverseNumber = Number(String(Math.abs(x)).split('').reverse().join(''));
    
    if (0x7FFFFFFF < reverseNumber) {
        return 0;
    }
    
    return x < 0 ? -reverseNumber : reverseNumber;
};
