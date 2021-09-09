function solution(phone_number) {
    var answer = '';
    for (var i = 0; i < phone_number.length; i++) {
        (i < phone_number.length - 4) ? answer += "*": answer += phone_number[i]
    }
    return answer;
}
