// Prompt: Rotate Array
// Problem: Given an array, rotate the array to the right by k steps, where k is a non - negative integer.
// Example:
// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;

// rotateArray(nums, k); // Output: [5, 6, 7, 1, 2, 3, 4]


//pop() remove ends, 
//loop rev (--) const k
//push array
//return value of icesn that are popped off

function rotateArray(nums, k){
  let ToAdd = [];
  Output = [];
  for (let i =nums.length-k; i < nums.length; i++) {
      Output.push(nums[i])
  }
  return Output
}

//

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
