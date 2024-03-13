// Find the Missing Number
// Given an array of size N - 1 with integers in the range of[1, N], find the missing number from the first N integers.

//     Note: There are no duplicates in the list.

//         Constrains: You may not use the.includes() method.

//             Example:

// Input: arr = [1, 2, 3, 4, 6], N = 6
// Output: 5 // The missing number

// What I could do is brute force this:
// Create another array containing all values from 1 - N
// Loop over both arrays for each index, and if that value at the "created" array at the index doesn't exist in the other array, return that value. 
// Instead, to avoid a nested loop, I could use hashing-like syntax by tallying the existence of each value creating a temporary array.

// Loop using N, creating an array containing some nullable value (0 probably)
// Loop through the other array, and use the value of the index as the index in my temp array, and set it equal to that value
// After I've done that, the index that contains a 0 still will be the missing number (index + 1)

function findMissingNumber(arr, N) {
    // instantiate array with null values
    let tempArr = []
    for (let i = 0; i < N; i++) {
        tempArr.push(0)
    }

    // tempArr.length === N

    // Loop over the provided array and set the values

    arr.forEach(int => {
        tempArr[int - 1] = int
    });

    for (let i = 0; i < N; i++) {
        if (tempArr[i] != i + 1) {
            return i + 1
        }
    }

    // Returning -1 if no missing number exists.
    return -1

}

// Big O of O(n)