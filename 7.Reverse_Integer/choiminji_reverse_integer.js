let reverse = function(x) {  
    let reverseNumber = Number(String(Math.abs(x)).split('').reverse().join(''));
    
    return x < 0 ? -reverseNumber : reverseNumber;
};
