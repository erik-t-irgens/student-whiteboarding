// Product of Array Except Self
// Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

//Constraints: Do your best to complete this without a nested loop

// Example:

// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// // Explanation: The product of array except self for each position is calculated as follows:
// // output[0] = 2 * 3 * 4 = 24
// // output[1] = 1 * 3 * 4 = 12
// // output[2] = 1 * 2 * 4 = 8
// // output[3] = 1 * 2 * 3 = 6

//input: array of int, length array always 2+
//output: array of int, each position holds other numbers multipied
//edge cases: int positive values? yes
// int include 0? no . >0
//  what if? null entered, empty arry(not possible), non-int (not possible)

//steps: function take 1 arguments, array1 
// nested loop: take array1[0], then take product other values, save product as output[0]
//repeat
//return output
const test = [1, 2, 3, 4];
// // Output: [24, 24, 16, 12]

const selflessArray = (array) => {
    let output = [];
    for (let i = 0; i < array.length; i++) { //lookijgn at 2
        let math = 1;
        for (let j = 0; i < array.length; j++) { //? index 0
            //v2 j==2
            if (i != j) {
                math = array[j] * math;//2, 6, 24
            }
            //output[i] = array[j]*array[j+1]*array[j+2] until array complete  //issue at location 2, not account location 0
            //length ++;  ?
        }
        output.push(math);  //[24]
    }
    return output;
}

const selfishArray = (array) => {
    let maxVal = array.reduce((a, b) =>
        a * b); //24
    let output = [];
    for (let i = 0; i < array.length; i++) {
        let product = maxVal / array[i];
        output.push(product);
    }
    return output;
}

// // Output: [24, 12, 8, 6]
// output[0] = 24, 2 * 3 * 4
//multiply everything==24, 
//output[i] = 24/array[i]

console.log(selflessArray(test))
console.log(selfishArray(test))







// Prompt:
// Given two arrays, nums1 and nums2, return an array containing all the elements that are common to both arrays.The returned array should not contain duplicate elements, and the elements can be in any order.

// Write a function named intersection that takes in two integer arrays nums1 and nums2 as input and returns an array of integers representing their intersection.

//     Example:

// Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
// Output: [2]

// Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
// Output: [9, 4]
// Constraints:

// Each array's length does not exceed 1000.
// Each integer in the arrays will be in the range[-1000, 1000].
// The arrays may contain duplicate elements, but the returned array should not contain duplicates.


//FEEDBACK

// Good:
// Good questions
// JavaScript good ?
//     Read it outloud! Sounds great.
// Talking about your understanding is great to start with 
// Array of integers, n > 1 and n = array.length(yes)
// Output will be an array of integers, each position holds the other numbers multiplied together.
//     You’re using the example! 
// Thinking about edge cases!
// Can there be anything with 0 ?
//     Positive only ?
//         Is null entered ?
//             Empty array ? You know that’s not possible
// Non - int(not possible)
// THIS IS SO GOOD!
// Steps to solve: 
// Function that takes 2 arguments ar 1 and 2
// Solve as a nested loop to look at it visually 
// This is actually okay.I think it’s good to show that you have an approach that is the less efficient solution and that you can explain WHY it’s no efficient
// Starting to code!
// You’ve got your function declarations down
// Really great catch with this argument.You fix mistakes very well.
// Using an example array.Love that you have that for a reference! 
// Talking really well through your code and what you’re doing.
//     It’s very clear to me that you have a solid foundational knowledge of syntax and what that syntax is doing. 
// You can absolutely start it nested.Remember TDD, the last step is refactoring in our RGR workflow
// Great to initialize your output array and explain why
// Pseudocode is great!
// Love that you’re now doing what I suggested with the example input
// MAYBE THIS COULD BE J CMON SIS!
// Caught that you don’t need the length anymore.
// Caught you problem with the location! 
// Make a new value here YES




// Imrpove:
// Will you have two arrays as arguments ?
//     Will you want j to be 1 ?
//         What is your thought about j ? How are we using it?
//             It might be good to take the moment that you’re trying to figure out how the loop is working by using your example.
//             Why do you need your length property ?
//                 What happens after that loop ?
