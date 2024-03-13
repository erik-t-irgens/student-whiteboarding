// Problem: Given a sorted array nums, remove the duplicates in -place such that each element appears only once and return the new length(or count of unique elements). 

// As further exploration, do not allocate extra space for another array; you must do this by modifying the input array in -place with O(1) extra memory.

//     Example:
// const nums1 = [1, 1, 2];
// const nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// removeDuplicates(nums1); // Output: 2 (there are 2 unique numbers)
// removeDuplicates(nums2); // Output: 5 (there are 5 unique numbers)

// ---

// I need a function that takes an array XX
// I need to loop through the array to compare values
// I need some way to compare the values themselves 
// If values are the same, remove the duplicate or don't count it
// Return the total amount of unique integers/elements in the array


function removeDuplicates(arr) { // [1,2]
    let currentNumber = null; // 2

    for (let i = 0; i < arr.length; i++) {// i =1
        if (arr[i] !== currentNumber) {
            currentNumber = arr[i]
        } else {
            arr.splice(i, 1); // remove the element at that index
            i--
        }
    }
    return arr.length // 2 
}

