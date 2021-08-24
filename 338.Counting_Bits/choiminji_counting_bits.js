/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const answers = [];
    let matched = ''; 
    
    for (let i = 0; i <= n; i++) {
        matched = i.toString(2).match(/1/g);
        answers.push(matched !== null ? matched.length : 0);
    }
    
    return answers;
};
