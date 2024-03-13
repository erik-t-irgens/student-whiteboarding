// Longest Common Prefix

// Prompt: Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "".

//     Example:

// const strs1 = ["flower", "flow", "flight"];
// const strs2 = ["dog", "racecar", "car"];

// longestCommonPrefix(strs1); // Output: "fl"
// longestCommonPrefix(strs2); // Output: ""

input["" "" ""]
output ""

function prefix(stringArray) {

    let result = ""

    for (i = 0, i > stringArray.length, i++) {
        for (char = 0, char > i.length, char++)
  }
    if i[char] === i + 1[char]{
        return result.push(i[char])
    }
}


// function prefix(stringArray){

// let result = ""

// for(i = 0, i > stringArray.length, i++){

//   for(j = 0, j > i, j++)

//   i[1]j[1] === i[2]j[1]
// }
//  result.push[j[]]
// }

// i[0] === i[1]{
//   return result.push[i]
// }

// if i[j] === 

// Erik's Solution

var longestCommonPrefix = function (strs) {
    if (strs.length === 0 || strs[0].length === 0) {
        return "";
    }

    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i]; // f
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};
