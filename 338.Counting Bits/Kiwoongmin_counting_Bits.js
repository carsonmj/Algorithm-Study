/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const arr = [];
    let jinsoo = null;

    for(let i = 0; i <= n; i++) {
        jinsoo = i.toString(2);
        arr[i] = Array.from(jinsoo, Number).reduce((acc, cur) => acc + cur);
    }
   return arr;
};
