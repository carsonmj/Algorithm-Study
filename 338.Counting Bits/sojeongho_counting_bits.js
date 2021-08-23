var countBits = function(n) {
    let tmp = [];
    let answer = [];
 
    for(let i=0; i<=n; i++){
        tmp.push(i.toString(2));

    }
    for (let x of tmp){
     answer.push(x.split('').reduce((a, b)=>a+Number(b), 0));
    }
   return answer;
};


// 2진수로 만들어 각 자릿수를 더해주었습니다
// 처음에는 while문으로 했는데, 8700단위에서 wrong answer로 나오더라구요..
