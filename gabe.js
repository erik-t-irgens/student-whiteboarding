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
