// Prompt: Move Zeroes

// Problem: Given an array of integers, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Example:
// const nums1 = [0, 1, 0, 3, 12];
// const nums2 = [0, 0, 1, 2, 0, 3, 0, 4];

// moveZeroes(nums1); // Output: [1, 3, 12, 0, 0]
// moveZeroes(nums2); // Output: [1, 2, 3, 4, 0, 0, 0, 0]


function moveZeroes(nums) {
    let nonZero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZero] = num[i];

            if (i !== nonZero) {
                num[i] = 0;
            }
            nonZero++;
        }
    }
    return nums;
}

// My solution

function moveZeroes(nums) {
    let nonZeroIndex = 0;

    // Move all non-zero elements to the beginning
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            nonZeroIndex++;
        }
    }

    // Fill the remaining elements with zeroes
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}
