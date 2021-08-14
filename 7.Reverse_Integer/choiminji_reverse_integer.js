let reverse = function(x) {  
    let reverseNumber = String(Math.abs(x)).split('').reverse().join('');
    reverseNumber = Number(reverseNumber);
      
    if (0x7FFFFFFF < reverseNumber) {
        return 0;
    }
    
    return x < 0 ? -reverseNumber : reverseNumber;
};