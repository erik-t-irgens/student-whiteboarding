// Prompt: Reverse Integer

// Problem: Given a 32 - bit signed integer, reverse digits of an integer.

// Example:

// const num1 = 123;
// const num2 = -123;
// const num3 = 120;

// reverseInteger(num1); // Output: 321
// reverseInteger(num2); // Output: -321
// reverseInteger(num3); // Output: 21

// Make a function that takes an integer 
// I want to see if that number is negative or not (keep track of it)
// Convert the num into a string ()
// Reverse the string
// Convert the string back into an integer
// If loop to check if the original was a negative 
// Return the reversed integer

function reverseInteger(num1) {
    "-120"
    const isNev = num < 0; // True if negative, false if positive
    let string = num1 + "" //, String(num1) // Convert my number to a string 
    //string.reverse(), 
    // let array = string.split(); // ["-", "1", "2", "0"]
    // array.reverse // ["0", "2", "1", "-"]
    // let reversedString = array.join("") // "021-"
    // praseInt(reversedString)
    // +reversedString  +"120" === 120

    if (isNev) {
        // reversedString = "-" + reversedString // "-" + "021" === "-021" 
    }

    return parseInt(reversedString) // +reversedString


}


//

function reverseInteger(x) { // -120
    let isNegative = false; // true


    if (x < 0) {
        isNegative = true;
    }


    let stringifiedInt = x + ""; // "-120"
    let charArray = stringifiedInt.split(''); // ["-", "1", "2", "0"]
    let reversedArray = []; // ["0", "2", "1"]


    for (let i = charArray.length - 1; i >= 0; i--) {
        if (charArray[i] !== "-") {
            reversedArray.push(charArray[i]);
        }
    }

    let result = reversedArray.join(''); // "021"
    if (isNegative) {
        result = "-" + result; // "-021"
    }


    return +result; // -21
}



