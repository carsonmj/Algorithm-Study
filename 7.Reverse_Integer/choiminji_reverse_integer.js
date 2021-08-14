let reverse = function(x) {  
    let reverseNumber = String(Math.abs(x)).split('').reverse().join('');
    
    if (reverseNumber.indexOf(0) === 0 && reverseNumber.length != 1) {
        Number(reverseNumber.substring(1));
    }
      
    if (0x7FFFFFFF < reverseNumber) {
        return 0;
    }
    
    return x < 0 ? -reverseNumber : reverseNumber;
};