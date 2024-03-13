// Longest Common Prefix

// Prompt: Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "".
//     Example:

// Input: ["flower", "flow", "flight"];

// Output: "fl"

// Input: ["dog", "racecar", "car"];

// Output: ""

["dog", "dog", "dog"]

function prefix(words) {
    let common = [d, d, d]
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; i < words[i].length; i++) {
            common.push(words[i][j]);
        }
    }
}


function prefix2(words) {
    sortedlist = words.sort()
    shortest = sortedlist[0];
    list = [f, f, f]
    for (let i = 1; i < words.length; i++) {
        for (let j = 0; j < shortest.length; i++) {
            if shortest[0] == sortedlist[i][j] {

            }
        }

    }
}

//

var longestCommonPrefix = function (strs) {
    if (strs.length === 0 || strs[0].length === 0) {
        return "";
    }

    let prefix = '';
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
};


// THis was SO GOOD! :)


