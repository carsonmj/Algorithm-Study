/*
1. 시작시간 : 8/30 13:50
2. 목표시각 : +30분
3. 1차 idea : 
배열 root를 오름차순 정리후, low와 high의 index를 찾고, reduce로 부분집합의 전체 합을 구하면 될듯
*/ 

//1차 시도 : 13:50 ~ 14:00 실패, Error.. root.sort() is  not a function ... root가 배열이 아닌것인지???
var rangeSumBST = function(root, low, high) {
    root.sort((a,b) => a-b);
    const indexOfLow = root.indexOf(low);
    const indexOfHigh = root.indexOf(high);
    result = root.slice(indexOfLow,indexOfHigh+1).reduce((a,b) => a+b);
    return result;
};

//2차 시도 : 혹시나 root가 배열 타입이 아닌가 싶어 배열형태로 바꿔서 시도함, 계산값이 틀려서 실패

var rangeSumBST = function(root, low, high) {
    const rootArray = []
    for(let i = 0; i < root.length; i++){
        rootArray.push(root[i]);
    }
    rootArray.sort((a,b) => a-b);
    const indexOfLow = rootArray.indexOf(low);
    const indexOfHigh = rootArray.indexOf(high);
    result = rootArray.slice(indexOfLow,indexOfHigh+1).reduce((a,b) => a+b);
    return result;
};