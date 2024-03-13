// Find the Missing Number
// Given an array of size N - 1 with integers in the range of[1, N], find the missing number from the first N integers.

//Note: There are no duplicates in the list.

//Constrains: You may not use the.includes() method.

//Example:

// Input: arr = [1, 2, 3, 4, 6], N = 6
// Output: 5 // The missing number

// Input: arr2 = [2, 6, 3, 4, 1], N=6
// Output: 5 // The missing number

// step 1 sort the array lowest to highest

// 

//step 2 iterate through array checking if index +1 == value
// step 3 if there is a mismatch, index +1 == missing value
// step 4 return missing value.

const findMissing = (sortedArray) => {
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== i + 1) {
            return i + 1;
        }
    }
    return "something is really wrong, probably in your sorting function"
}

const sort = (array) => {
    let sortedArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            sortedArray.push(array[i + 1]);
            // switch position of array[i] and array[i+1]
        } else {
            sortedArray.push(array[i]);
        }
    }
    return findMissing(sortedArray);
}

const betterFindingFunction = (array, n) => {
    let sortedArray = [];
    for (let i = 0; i < n; i++) {
        sortedArray.push(-1)
    }
    for (let i = 0; i < array.length; i++) {
        sortedArray[array[i] - 1] = array[i];
    }
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === -1) {
            return i + 1;
        }
    }
    return "ERRORRRRR"
}

// Feedback

// Noah

// Good:
// Going over the example input
// Good question
//  Whole numbers
//  Do we want the index
//  Expect a sorted array ? Great catch
// Writing another example that’s not sorted just to be able to get himself an example that tests for that case. 
// Writing out some steps that he needs to do
// First instinct is to make sure the array is sorted
// Iterate through the array
// Check if index + 1= value
// If it’s not, return that index + 1
// Not comfortable in sorting, and that’s okay!
// Writing his own sorting method instead of using built-in .sort method
// Defining a temporary array(BigO memory, pretty insignificant)
// Going through your sorting algorithm using your example array is pretty great
// Pseudocode! 
// Great job moving onto the next part instead of focusing on how to sort
// Humor
// Very glad you walked through the function to make it work.
// Great catching your two issues.That was great
// Switching the position of your function
//     Hashing - did you look at the hints ?
//         Yeah you got it
// Make an empty array with length of N




// Improve:
// Is there a reason you didn’t use.sort() ?
//     Do you know the time complexity of sort() ? (the default)
// Do you think your implementation is better ?
//     You’re not using your N in either function
