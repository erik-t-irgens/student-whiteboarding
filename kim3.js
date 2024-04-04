// Merge Sorted Array
// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// The number of elements initialized in nums1 and nums2 are m and n respectively.You may assume that nums1 has enough space(size that is equal to m + n) to hold additional elements from nums2.

// Elements that are to be included within the merged array with only include up to nums1[m - 1] and nums2[n - 1], and not any trailing 0s(where nums1[i > m - 1]).

//   Example:

// Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// Output: [1, 2, 2, 3, 5, 6]

//input: 1-sorted array:int 2-sortedarr(int)
//merge 2 into 1 as 1 array(sorted)-not making a new array. altering original array. (not bp)
//m = nums1.length (minus the zeros)
//n= nums2.length  //nums1.length-m = n

//qs: always trailing 0's, pos int? Y, >0, always 1 int in each array, nums1.length=2 (min)

//Plan:
// iterate through nums1, where value = 0, replace value from nums 2 until there are no more zeros or nums2 is empty
// return output array (nums 1 new)

const nums1 = [1, 2, 2, 3, 5, 6];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

const mergeArrray = (nums1, m, nums2, n) => {
  if (n != nums2.length || nums1.length != (m + n)) {
    return "Error";
  }
  for (let i = m; i < nums1.length; i++) {
    let j = 0;
    if (nums1[i] === 0) {
      nums1[i] = nums2[j]
      j++;
    }
  }
  return nums1.sort();
}

// i = m - 1
// j = n -1 || nums2.length - 1
// k = nums1.length - 1

// Compare the numbers at nums1[i] and nums2[j]
// Whichever one is bigger, replace nums1[k] with bigger number
// Decrement k (to go to the next 0)
// Decrement whichever index was bigger ( i or j) to go to the next number to compare
// We'd have to do something for if the values are the same
// Replacing 0s, comparing sizes (sorting), and then we can return the original array


// Feedback

// Good
// Read prompt outloud
// Given 2 sorted integer arrays,
//   Making notes! Great!
// Discerning between input and output
// Good job putting down what you think the input is and understanding it
// Not making a new array
// Doing great job asking the questions
// Will I always have the right amount of trailing zeros.Good Q
// Will they be positive and greater than 0 ?
//   Always be integers
// Thiking of edge cases


// Thinking about plan now
// Iterate through nums1, where value is 0 – if it is, remove it
// This isn’t the intention of the prompt, but you can certain do it this way
// How about sorting ?
//   Could you sort it while you’re doing your pushing ?
//     Love the error handling you did with the length of the nums2 array.You should do the same with nums1!
// Love that you’re using pseudocode with .replace(), but what if you can’t use it ?

//   Improve
// You could speak up a little while coding.I think you’re super comfortable with me now:)
// Even though making a func declaration is muscle memory at this point, it’s good to explain what you’re doing!
//   `for let(i=0; i <nums1.length; i++) … You could use m here to start at the zeroes and not have to loop over any of the values
// You can use a triple-pointer for this
// i = m-1 (for the end of valid integers at nums1)
// j = n-1 (for the end of nums2)
// k = nums1.length - 1 (to get to the 0s at the end)
// Compare i and j, whichever is bigger replace nums1[k] with that value. Decrement the larger of the 2 pointers (i or k), and then decrement k as well and do it again
// This will sort it, and will also only need 1 loop as long as the length of nums1
// In your solution, the nested loop will run every time you increment i. J will go through the entire array of nums2 each time
// .replace isn’t an array method.
