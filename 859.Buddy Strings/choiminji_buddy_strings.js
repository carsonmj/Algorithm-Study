/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 const buddyStrings = function(s, goal) {
    if (s.length != goal.length || s.length < 2 || goal.length < 2) {
        return false;    
    }
    
    if (s === goal)  {
        const setStr = new Set(s.split(''));
        return setStr.size < s.length;
    }
    
    const difIndex = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] != goal[i]) {
            difIndex.push(i);
        }
        if (difIndex.length > 2) {
            return false;    
        }
    }
    
    return s[difIndex[0]] === goal[difIndex[1]] && s[difIndex[1]] === goal[difIndex[0]];
    
};
