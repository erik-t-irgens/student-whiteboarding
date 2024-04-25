// Product of Array Except Self
// Given an array nums of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

//     Constraints: Do your best to complete this without a nested loop

// Example:

// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]
// // Explanation: The product of array except self for each position is calculated as follows:
// // output[0] = 2 * 3 * 4 = 24
// // output[1] = 1 * 3 * 4 = 12
// // output[2] = 1 * 2 * 4 = 8
// // output[3] = 1 * 2 * 3 = 6

// map (index => index + 1  ) => const = [math done do it]

function productArrray(array) { // [1, 2, 3, 4]

    // for every iteration of the index add until the end create new array in map with math'd
    //element , i
    // let mathArray = array.map((e) => (e,i)   ) 
    let

    for (i + 1, array.legnth - 1, i++) { // i = 0, array.length === 4
        //some math
        if (array[i] === array[i]) { // if 1 === 1
        }
        for (j, array.legnth - 1, j++) {
            let productArry = []
            //append elements that are not i 
            productArry.append()

        }

    }




}


// array.map((element, index) => {
//  ... Do stuff here
// })

// for (let i = 0; i < array.length; ++) {  
// for (let j =0; j < array.length ; j++) { do stuff here}}

// START HERE IN INTERVIEW QUESTIONS
// 1) explain my understanding of the prompt to make sure that there's nothing I have incorrect
// 2) ASK CLARIFYING QUESTIONS
// - Is javascript OK? 
// - focus on edge cases. 
// Will the input always have positing integers?
// Will the input ever have strings, or something else 
// Will they always be whole numbers
// 3) Psuedocode/Behaviors 
// Write out EVERY STEP that you need to accomplish to get to the results
// - I need a function that takes an array as an argument 
// - Look at the index (iterate over the array to receive each element)
//      - Second loop to multiply every element at the index that is NOT equal to our current index
// - Output that value into a new array
// - Repeat the process (next index)
// - return the output array
// 4) Actually do the implementations
// - Implement these steps one at a time
// 4b) While coding, anytime you finish some sort of implementation (a step is done) manully test it with an input
// - For loops, test at least one loop, and the LAST loop to make sure your (i < array.lnegth) is working correctly
//  5) DRY it up, make it more efficient


function productArray2(array) {
    let result = Array(array.length)

    for (let i = 0; i < array.length; i++) {
        let product = 1;
        for (let j = 0; j < array.length; j++) {
            if (i != j) {
                product *= array[j]
            }
        }
        result[i] = product;
        // result.push(product)
    }

    return result;
}

// Efficiently (one loop)

// Input: [1, 2, 3, 4]
// Output: [24, 12, 8, 6]

function productArrayEfficient(array) {
    let result = Array(array.length)
    let product = 1; // 24

    for (let i = 0; i < array.length; i++) {
        product *= array[i]

    }

    for (let i = 0; i < array.length; i++) {
        result[i] = (product / array[i])
    }

    // result.push(product)


    return result;
} 