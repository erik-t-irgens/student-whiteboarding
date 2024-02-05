// Valid Parenthesis String
// Problem: Given a string containing only 6 types of characters: '(', ')', ‘{‘, ‘ }’, ‘[‘and ']’, write a function to check whether the string is valid. A valid string must have valid bracket pairs.
// Example:
// Input: ‘{}[]()’
//Output: true
// Input: ‘[[]{}()’
// Output: false
// Input: ‘][][‘
// Output: false
// Input: ‘({}[]())’
// Output: true

//initializing object with bracket type count 
//check number of opening and closing brackets
// using a loop to check string
//check if opening comes before closing 

const bracketCheck = (string) => {
    const values = {
        "(":{num: 0, index: []},
        ")":{num: 0, index: []},
        "{":{num: 0, index: []},
        "}":{num: 0, index: []},
        "[":0,
        "]":0,
    }

    for(let i = 0; i<string.length; i++ ){
        values[string[i]]++
        values[string[i]][index].push(i)
    }

    if (values["("] === values[")"] && values["{"] === values["}"] && values["["] === values["]"] ){
        //check if opening bracket index is higher than closing, if it return false 
        //
    }
    else{
        return false
    } 
}




// ChatGPT's solution

function isValid(str) {
    const stack = [];
    const bracketMap = {
        '(': ')',
        '{': '}',
        '[': ']'
    };


    for (let char of str) {
        if (char === '(' || char === '{' || char === '[') {
            // Opening bracket, push to stack
            stack.push(char);
        } else {
            // Closing bracket
            const top = stack.pop();
            if (char !== bracketMap[top]) {
                // Mismatched closing bracket
                return false;
            }
        }
    }


    // Check if there are any remaining unmatched opening brackets
    return stack.length === 0;
}
