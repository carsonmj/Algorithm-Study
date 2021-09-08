function solution(phone_number) {
    const arr = phone_number.split('');
    const len = arr.length;
    const newArr = [];
    const result = arr.splice(-4);
    
    for (let i = 0; i < len - 4; i++) {
        newArr.push('*');
    }
    
    const answer = newArr.concat(result).join('');
    
    return answer;
}
