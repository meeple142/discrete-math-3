/** 
Searching algorithms

Linear search O(n):
This search algorithm takes advantage of the spatial locality of arrays and temporal locality for 
linked lists. It simply iterates through each item and returns the index of the first 
item found in the array or linked list.

Binary search O(log n):
This search algorithm simply looks at the middle part of the array and asks itself if the element it is
looking for is lower, equal or greater than the middle element. If it is lower, it cuts off the middle
element and everything to the right. It does the same for greater but to the left instead of the right.
If it is the same, it simply returns the index.

Jump search O(sqrt(n)):
This search algorithm is pretty much the same as the linear search but instead of looking at each index,
it has a predefined number of "jumps" to make before checking the number. It can be risky but the risk
can be reduced by implementing the logic of binary search with the array being sorted without the middle array 
part and backtracking if the element is higher than the value it is looking for.

*/