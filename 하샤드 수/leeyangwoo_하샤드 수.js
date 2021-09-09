function solution(x) {
    var answer = true;
    var temp = (x + "").split("").map(Number)
    var tempSum = 0;
    
    for(let i = 0 ; i < temp.length ; i++){
      tempSum+=temp[i];
    }
    
    if(x%tempSum !== 0){
      answer = false;
    }

    return answer;
}
