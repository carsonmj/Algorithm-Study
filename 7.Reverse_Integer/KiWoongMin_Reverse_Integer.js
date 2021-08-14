var reverse = function(x) {
    let num = Number(Math.abs(x).toString().split('').reverse().join(''));
    let max = Math.pow(2,31)-1;
    let min = Math.pow(2,31)|0;
  
    if(num >= max || num <= min || num === 0) return 0;
    
    if(x < 0) {
        return -num;
    } else {
        return num;
    }
};
