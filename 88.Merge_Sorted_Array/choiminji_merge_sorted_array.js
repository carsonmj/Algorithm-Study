/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const mergeNums = function(nums1, m, nums2, n) {
  m--;
  n--;
    
  let index = nums1.length - 1;
    
  while (index >= 0) {
    if (n > -1 && m > -1 && nums1[m] >= nums2[n]) {
      nums1[index] = nums1[m];
      nums1[m] = nums2[n];
      m--;
    } else if (n > -1) {
      nums1[index] = nums2[n--];
    }
    index--;
  }
};
