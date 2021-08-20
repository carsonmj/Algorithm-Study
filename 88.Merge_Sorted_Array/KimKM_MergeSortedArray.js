/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 var merge = function(nums1, m, nums2, n) {
    for(let i =0; i < n; i++){
    nums1[m+i] = nums2[i]
}
    nums1.sort((a,b) => a-b);
}


/*3차시기
숫자정렬이 아니라 가나다순 정렬이 돼서 실패

var merge = function(nums1, m, nums2, n) {
    for(let i =0; i < n; i++){
    nums1[m+i] = nums2[i]
}
    nums1.sort();
}
*/


/* 2차시기 
nums1의 길이가 1인경우에 적용불가해서 실패 

var merge = function(nums1, m, nums2, n) {
     nums1.splice(m,nums1.length-1)
     for(let i = 0; i < n; i++){
         nums1.push(nums2[i]);
     }
     nums1.sort();
}




/*1차시기..
원 nums1을 수정해야하는데, 새로운 nums1을 만들어서 실패 

콘솔에서는 잘 돌아가는데 leet에서는 왜 안된다고 하는지 모르겠음 
 var merge = function(nums1, m, nums2, n) {
    nums1 = [...nums1,...nums2].sort();
    const index = nums1.indexOf(0);
    nums1.splice(index, n+1);
    return nums1;
 }*/
