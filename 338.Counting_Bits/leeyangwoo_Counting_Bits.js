/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [];
    for(let i = 0 ; i < n+1; i ++){
      i === 0 ? result.push(0) : result.push(i.toString(2).match(/1/g).length);
  }    
    console.log(result);
    return result;
};
