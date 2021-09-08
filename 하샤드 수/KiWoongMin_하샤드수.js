function solution(x) {
    const arr = x.toString().split('');
    let sum = 0;
    
    arr.forEach( (item) => sum += Number(item) );
    
    return x % sum === 0 ? true : false;
}
