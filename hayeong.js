// Tribonacci Sequence
// The Tribonacci sequence Tn is defined as follows:

// T0 = 0 T1 = 1 T2 = 1 Tn = Tn - 1 + Tn - 2 + Tn - 3 for n > 2 Write a function to return the value of Tn.
// [0,1,1, 2, 4]

//     Example:

// Input: n = 4
// Output: 4
// // Explanation: T4 = T3 + T2 + T1 = 2 + 1 + 1 = 4.

// use if statement to see if it's not larger than 2
// answer will be straightforward: [0, 1, 1]
// always be integer 

// recursion 

// using base, termination, recursion 

function tribonacciRecursion(n, index = 0, given = [0, 1, 1]) {
    // termination 
    if (n === index) {
        return given[n - 1];
    }

    // base 
    if (n >= index) {
        // add the element to the array 
        // this element is the sum of the last three elements
        // first element to be added = n - 3
        // last element to be added = n - 1
        // n = index 
        // [0, 1, 2, 3, 4 , 5]
        let arr = [];
        for (let i = n - 3; i <= n - 1; i++) {
            arr.push(i);
        }
        let sum = 0;
        arr.forEach(element => {
            sum += element;
        });
        given.push(sum);
    }

    // recursion 
    return tribonacciRecursion(n, index += 1, given);
}

console.log(tribonacciRecursion(3));
