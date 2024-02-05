// Prompt: First Unique Character in a String Problem: Given a string, find the first non - repeating character and return its index.If it doesn't exist, return -1. Example
// const input1 = "leetcode";
// const input2 = "loveleetcode";
// firstUniqueChar(input1); // Output: 0 (The first non-repeating character is 'l' at index 0)
// firstUniqueChar(input2); // Output: 2 (The first non-repeating character is 'v' at index 2)


const input1 = "leetcode";

function firstUnique(s) {
  // let strArray = s.split('');
  let charCount = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    }
    else {
      charCount[char] += 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1){
      return i;
    }
  }
  return -1;
}

//


function firstUniqueChar(s) {
    const charCount = {};

    // Count the occurrences of each character
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character and return its index
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }

    // If no non-repeating character is found
    return -1;
}
