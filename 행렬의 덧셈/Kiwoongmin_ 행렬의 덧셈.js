function solution(arr1, arr2) {
    const sum = new Array();
    for (let i = 0; i < arr1.length; i++) {
        sum[i] = new Array();
        for(let j = 0; j < arr1[i].length; j++) {
           sum[i][j] = arr1[i][j]+arr2[i][j];
        }
    }
  
    return sum;
}
