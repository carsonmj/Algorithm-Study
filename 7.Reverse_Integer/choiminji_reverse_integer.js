let reverse = function(x) {  
    let reverseNumber = Number(String(Math.abs(x)).split('').reverse().join(''));
    reverseNumber = reverseNumber);
    
    return x < 0 ? -reverseNumber : reverseNumber;
};
