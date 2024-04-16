#  Sliding Window
#  Given an array data containing integers, an integer n, and an integer m, return a nested array containing all subarrays within the window with size of n using m as the distance between the start of each window.

#    Ex:

#  Input: array = [1, 2, 3, 4, 5], n = 3, m = 2
#  Output: [[1, 2, 3], [3, 4, 5]]


#  Explanation:

#  n represents the size of the window, which defines the length of the subarray elements.m represents how many indecies we jump to create subarrays following the first window.

#    So, given n is 3, we know our subarrays will have a length of 3. And given m is 2, we will build new subarrays every 2 indexes, like so:

#  0  1  2  3  4
#  [1, 2, 3, 4, 5]
#    ^     ^

#    Starting at index 0, we find our first subarray(window) using n, which is 3. So the first subarray is[1, 2, 3]

#  0  1  2  3  4
#  [1, 2, 3, 4, 5]
#    ^     ^

#    We then use m to jump to the next window location.Because m is 2, we jump two indexes to retrieve the next subarray, which is[3, 4, 5]

#  Once we reach the end of the data array, we return all subarrays.

#  Explain the prompt as you udnerstand it
#  - Ask questions about the input:
#  - Will the array always have sequential and ordered integers?
#    - No, the values can be anything (integer)
#  - Set an example array and example output array
#   - Asking clarifying question is great
#  - What if the length of the array was less than n?
#    - return []
#    - Will my input array always be as long or longer than n?
#  - All numbers need to be accounted for

#  [5, 3, 2, 5, 6] .. n = 3, m = 2
#       [[5,3,2], [5, 6]]
#  output: [[3, 1, 0], [0, 3, 4]]
#  real output: [[5, 3, 2 ], [2, 5, 6]]

#  Write an array that takes 3 arguments, (array, n, and m)
#  Wantt to use some sort of loop to iterate through the array
#     Increment i (or some variable)
#     We can increment i while i is <= the length of the array
#  We need to loop exactly `n` times in each loop
#  Taking the first 3 numbers (n numbers) and adding those as a subarray to a new array (result array)
#  Check to see if values are left in the array using m and n
#  return result array

#  ([1, 2, 3, 4, 5], 3, 2)
function sliding(array, n, m): # ([1, 2, 3, 4, 5], 3, 2)
     result = [] # [[1, 2, 3], [3, 4, 5]]
     i = 0 # 4
     while i + n <= len(array): # i = 2, len = 5
          subarray = [] # [3,4,5]
          for j in range(n): # i =  4, n = 3
               subarray.append(array[j + i]) # array[i] = 5
          result.append(subarray)
          i = i + m # i = 2
     return result
               
