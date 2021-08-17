/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const length = m + n;
    let temp = '';
    
    for(let i = m; i < length ; i++) {
        nums1[i] = nums2[i - m];
    }
  
    for(let j = 0; j < length; j++) {
        for(let k = j + 1; k < length; k++) {
            if (nums1[j] > nums1[k]) {
                temp = nums1[j];
                nums1[j] = nums1[k];
                nums1[k] = temp;
            } 
        }
    }
};
