// First Unique Character in a String

// Problem: Given a string, find the first non - repeating character and return its index.If it doesn't exist, return -1.

// Example:

// const input1 = "leetcode";
// const input2 = "loveleetcode";

// firstUniqueChar(input1); // Output: 0 (The first non-repeating character is 'l' at index 0)
// firstUniqueChar(input2); // Output: 2 (The first non-repeating character is 'v' at index 2)

function UniqueChar(input) {

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (input.indexOf(char) === input.lastindexOf(char))
            return index
    }

    return -1
}


// Erik's Solutions

function firstUniqueChar(s) { // "dogagodoo"
    const charCount = {}; // 

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


// First Unique Character in a String

// Problem: Given a string, find the first non - repeating character and return its index.If it doesn't exist, return -1.

// Example:

// const input1 = "leetcode";
// const input2 = "loveleetcode";

// firstUniqueChar(input1); // Output: 0 (The first non-repeating character is 'l' at index 0)
// firstUniqueChar(input2); // Output: 2 (The first non-repeating character is 'v' at index 2)

// Create a function that accepts a string as an argument XX
// Instantiate a loop to loop through all of the characters in the string XX
// Track if each letter is unique or not during the loop 
// 
// Figure out which of those letters, if unique, comes first
// Find the first unique letter's index
// return that index
// If there are no unique characters, return -1 (check to see if there are any uniques at all)

function findUniqueCharacterInteger(string) {
    "leetcode"
    let characterObject = {} // {}
    for (let i = 0; i < string.length; i++) {

    }
}