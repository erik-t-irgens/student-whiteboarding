// Rotate Array
// Problem: Given an array, rotate the array to the right by k steps, where k is a non - negative integer.
//     Example:
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;

// rotateArray(nums, k); // Output: [5, 6, 7, 1, 2, 3, 4]

function rotateArray(nums, k) {
    finalArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (i + k > nums.length) { // 6
            finalArray[(i + k) -= nums.length + 1];
        } else {
            finalArray[i + k] = nums[i];
        }
    }
    return finalArray;
}

// finalArray [ 4, 5, 6, 1, 2, 3]


// Erik's Solution:

function rotateArray(nums, k) {

    const rotatedArray = [];

    // Copy the last k elements to the rotated array
    for (let i = nums.length - k; i < nums.length; i++) {
        rotatedArray.push(nums[i]);
    }

    // Copy the remaining elements to the rotated array
    for (let i = 0; i < nums.length - k; i++) {
        rotatedArray.push(nums[i]);
    }

    return rotatedArray;
}
