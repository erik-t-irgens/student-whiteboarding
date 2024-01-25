// Problem: Given two strings s and t, write a function to determine if t is an anagram of s.
// Example:
// Input: [“anagram”, “margana”]
// Output: true

//turn these strings into arrays
//sort the arrays
//join the arrays back into strings
//compare the two strings

const anagram = (string1, string2) => {

  if (string1.length === string2.length) {
    const sortedString1 = string1.split('').sort().join('');
    const sortedString2 = string2.split('').sort().join('');

    return (sortedString1 === sortedString2);
  } else {
    return false;
  }
}

// Alternative Answer

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of t) {
        if (!charCount[char]) {
            return false;
        }
    }

    return true;
}
