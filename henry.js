// Find the Single Number
// Problem: Given an array of integers, every element appears twice except for one.Find that single one.The array can be of any length, and the integers can be any value.There will only be one “singled out” number in all sets
// Example:
// Input: [1, 2, 3, 2, 1]
// Output: 3

// Simplest behavior 
// 

const singleNumber = (array) => { // [3,3, 2]
  let singleNumber;
  for (let i = 0; i < array.length; i++)
  {
    const instances = array.filter(num => num === array[i]);
    if (instances.length % 2 !== 0) {
      singleNumber = array[i];
      break;
    }
  }
  return singleNumber;
}


// Alternative solution

function singleNumber(nums) {
    let numMap = {};

    for (let num of nums) {
        if (numMap[num] === undefined) {
            numMap[num] = 1;
        } else {
            numMap[num]++;
        }
    }

    for (let num in numMap) {
        if (numMap[num] === 1) {
            return parseInt(num);
        }
    }
}
 