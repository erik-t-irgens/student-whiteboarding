// Majority Element

// Problem: Given an array, find the element that appears most frequently. 
// Example: 
// input: [3, 3, 4, 2, 2, 3, 3]
// output: 3 || [3]

// Further exploration: If the most commonly occuring element "ties" with other elements, return all elements that "tie". 
// input: [1, 2, 2, 3, 1, 1, 3, 2, 3]
// output: [1, 2, 3] 

//input array of integers over 0. no special char/etc.
//output: be either the number as is or the num in it's own array.a

//for loop to iterate through the array and check for how often it occurs.
// counter
// initialize {num, #occurances}
// take object and compare # occurences

// return key that value is the greatest

const majorityElement = (array) => {
  let occurencesObj = {};
  for (let i = 0; i < array.length; i++) {
    //key of the occurenct Obj === array[i]
    //value of the Obj === 0 || array[i] + 1;
    
  }
  if //value of the occObj > value occObj +1
  //whichever is the greatest value,
  let answer = [];
  answer.push(value);
  return answer;
}

const finalAnswer = majorityElement(array);

---

// Solution:

    function majorityElement(nums) {
        const countMap = {};
        let highestCount = 0;

        // Count the occurrences of each element
        for (let num of nums) {
            countMap[num] = (countMap[num] || 0) + 1;
            highestCount = Math.max(highestCount, countMap[num]);
            // if (highestCount < countMap[num]) { highestCount = countMap[num] }
        }

        const result = [];

        // Iterate through the countMap and add elements with maximum count
        for (let num in countMap) {
            if (countMap[num] === maxCount) {
                result.push(parseInt(num));
            }
        }

        return result;
    }
