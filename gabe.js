// Intersection of Two Arrays

// Problem: Given two arrays, write a function to compute their intersection. So, return the element(s) that both arrays have in common.
// input: [1, 2, 2, 1], [2, 2]
// output: [2]
// input: [1, 2, 3, 3], [2, 2, 3]
// output: [2, 3]

//for loop for goingthrough array 1 and 2
//inside for loop checking to see if equal
array1 = [1, 2, 2, 1];
array2 = [2, 2];
const intersection = (array1, array2) => {
    let output = [];
    for (let i = 0; i = array1.length; i++) {
        for (let j = 0;i = array2.length; j++) {
            if (array1[i] === array2[j]) {
                output.push(array1[i])
            }
        }

    }
    return output;
}
console.log(output);



---

// Solution 1

    function intersection(nums1, nums2) {
        const set1 = new Set(nums1);
        const set2 = new Set(nums2);
        return [...set1].filter(num => set2.has(num));
    }


// Solution 2

function intersection(nums1, nums2) {
    let resultArray = [];
    for (const num of nums2) {
        if (nums1.includes(num)) {
            if (!resultArray.includes(num)) {
                resultArray.push(num)
            }
        }
    }
    return resultArray;
}


// Feedback

// Good: 
// Glad you’re writing down English behaviors! 
// Loop for each array 1 and array 2
// Check to see if they’re equal throughout the loops
// You did a great job talking through what your solution was 
// Great job explaining your thought process with constructing your loop itself 
// Love that you brought up best practice and knowing what you think it is. 
// Glad you caught that you need something to hold your answer(output variable)
// “I’ll come back to that”!IT’s great!
// You can put pseudocode and move on, which is basically what you did.Lean on saying it’s pseudocode!

// Improvement:
// When you’re asking about edge cases, make sure that you’re looking at the prompt and understanding what your inputs and outputs might be.Through discussing the prompt, you can discover what sorts of edge cases your own mind might go to.An interview won’t supply those for you
// You don’t need to apologize for anything :)

