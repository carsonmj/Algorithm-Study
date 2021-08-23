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
