/*
1. 시작시간 : 8/23 10:44
2. 목표시각 : +30분

3. 문제해설

Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
 ans[i] is the number of 1's in the binary representation of i.

정수 n 
n+1길이의 배열을 반환, 배열 ans
각 원소 i는 0보다 크거나 같고 n보다 같거나 작음
i번째 원소 ans[i]의 값은 i의 이진법숫자에서 1의 갯수입니다.

예 : 정수 n이 3으로 정해졌을 경우 길이는 4, i 는 0,1,2,3 배열 ans의 각 원소는..
ans[0] = 0 => 0
ans[1] = 01 => 1
ans[2] = 10 => 1
ans[3] = 11 => 2
* 4 = 100, 5 = 101, 6=110, 7=111
* 그렇다면,, 2^n마다 1이 들어가 있고, 2^n보다 크고 2^n+1보다 작은 경우에는, 다시 조각내서 1의 갯수를 세면 됨


4. 1차 idea :

i에 따른 이진법수를 확인하는 함수를 만들고,
이어 이진법수를 원소로 바꾸는(1의 갯수를 세는) 함수를 만든다.
그 함수에 for문을 넣어서 전체 배열을 구하는 함수를 만든다.

1. 1차 시도 10:50 ~ 11: 50*/

const countBits = function(n) {
    const ans = [0];
    for(let i = 1; i < n+1; i++){
        ans[i] = getNumberOf1InBinary(i);
    }
    return ans;
};


function getNumberOf1InBinary(i){
    for(let j = 0; j < 30; j++){
        if(i === Math.pow(2, j)){
            return 1;
        }
        else if(i < Math.pow(2, j)){
            k = i - Math.pow(2, (j - 1));
            return (1 + getNumberOf1InBinary(k));
        }
    }
}


