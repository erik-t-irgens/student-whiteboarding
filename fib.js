// Recursive

function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
    }
}


// Iterative

function fibonacciIterative(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}



// Recursive Solution: O(2 ^ n)

// This is because the recursive solution involves redundant calculations and leads to an exponential time complexity.
// Iterative Solution: O(n)

// The iterative solution iterates through the sequence once to compute the nth Fibonacci number, resulting in a linear time complexity.