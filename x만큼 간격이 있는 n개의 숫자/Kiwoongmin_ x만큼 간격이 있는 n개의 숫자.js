function solution(x, n) {
    let sum = 0;
    const arr = [];
    
    for (let i = 0; i < n ; i++) {
        sum = sum + x;
        arr.push(sum);
    }
    return arr;
}
