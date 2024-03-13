// Dutch National Flag problem
// Given an array A[] consisting of only 0s, 1s, and 2s.The task is to write a function that sorts the given array.The functions should put all 0s first, then all 1s and all 2s in last.

// This problem is also the same as the famous “Dutch National Flag problem”. The problem was proposed by Edsger Dijkstra.The problem is as follows:

// Given N balls of colour red, white or blue arranged in a line in random order.You have to arrange all the balls such that the balls with the same colours are adjacent with the order of the balls, with the order of the colours being red, white and blue(i.e., all red coloured balls come first then the white coloured balls and then the blue coloured balls).

//     Example:

// Input: { 0, 1, 2, 0, 1, 2 }
// Output: { 0, 0, 1, 1, 2, 2 }

// Input: { 0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 }
// Output: { 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2 }

// sorting from low to high 
// filtering and concatenation
// 

function dutchFlagSort(array) {
    return array.sort((a, b) => b - a);
}

function dutchFlagSortV2(array) {
    const zeroes = array.filter(char => char === 0);
    const ones = array.filter(char => 1);
    const twos = array.filter(char => 2);

    return zeroes.concat(ones.concat(twos));
}

// https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

// Good:

// Good questions
// Any size
// Randomized ?
//     Going through your behaviors
// Low to high
// Could filter and concatenation
// What would you mean by this ?
//     Writing your function. Good name
// Great that you are trying stuff that you’re not sure is going to work
// Using filter to try and get only the individual items was a good solution
// You could feasibly write your own and you thought very well on your feet

// Improve:
// Work on sorting methods 
// Review the following methods; filter, sort, map
// Review built -in methods for arrays and known if they modify the original
