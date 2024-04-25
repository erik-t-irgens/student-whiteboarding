# Tribonacci Sequence
# The Tribonacci sequence Tn is defined as follows:

# T0 = 0 T1 = 1 T2 = 1 Tn = Tn-1 + Tn-2 + Tn-3 for n > 2 Write a function to return the value of Tn.

# Example:

# Input: n = 4
# Output: 4
# // Explanation: T4 = T3 + T2 + T1 = 2 + 1 + 1 = 4.

# [0, 1, 1, 2, 4 .... n]

def fibo(n):
  list = [0,1,1]

  temporary_list = []

  for i in range n:
    temporary_list.add(list[i])
    if (i+1) % 3 == whole number:
      list.add(sum(temporary_list))
      temporary_list = []

list[0,1,1,2,4,7,13]

def fibo(n):
  list = [0,1,1]

  i = 3

  while i <= n-1:
    list.add(list[i-3]+list[i-2]+list[i-1])
    i += 1

  return list


list = [0,1,1,2,4,7]


fibo(6)

list[0,1,1,2,1,1,1]

temp[2,]
