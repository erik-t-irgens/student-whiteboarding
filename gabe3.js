// Merge Sorted Array
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively.You may assume that nums1 has enough space(size that is equal to m + n) to hold additional elements from nums2.

// Elements that are to be included within the merged array with only include up to nums1[m - 1] and nums2[n - 1], and not any trailing 0s(where nums1[i > m - 1]).

//   Example:

// Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]

// let nums1 = [1,2,3,0,0,0]
// let nums2 = [2,4,5]
let nums1 = [];
let nums2 = [];
const merge = (nums1, m, nums2, n) => {
  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i]);
  }
  nums1.sort();

  while (nums1.contains(0)) {
    nums1.shift();
  }
  return nums1;
}

// [1, 2, 2, 3, 5, 6]
// // [1,2,3,0,0,0,2,4,5]
// merge([1,2,3,4,0,0,0], 3, [2,4,5], 3)

nums1.push(...nums2)

// i = m - 1
// j = n -1 || nums2.length - 1
// k = nums1.length - 1

// Compare the numbers at nums1[i] and nums2[j]
// Whichever one is bigger, replace nums1[k] with bigger number
// Decrement k (to go to the next 0)
// Decrement whichever index was bigger ( i or j) to go to the next number to compare
// We'd have to do something for if the values are the same
// Replacing 0s, comparing sizes (sorting), and then we can return the original array
