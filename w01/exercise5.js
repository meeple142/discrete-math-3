/**

The main reason why sorted arrays/linked lists is far better than 
unsorted arrays/linked lists is because of the following
- less memory accesses - can take advantage of the fact
that you can assume things like Binary Search does.
- In order to take advantage of the more efficient
searching algorithms, we need to apply sorting algorithms
to the unsorted array. We bypass all of that with an 
already-sorted array.

Arrays
-----------------
The biggest thing we can take advantage of for 
sorted arrays is the O(log n) algorithm, Binary
Search. The fact that we access less than half of
memory accesses is huge when we consider arrays
with thousands or even millions of elements. 

The fact that some of the top searching algorithms,
such as the Exponential Search, implement the Binary
Search algorithm or other O(log n) algorithms is huge
when it comes to searches. 


Linked Lists
-----------------
The linked list is quite different than the array since
the linked list does not come with an index operator unless
you override it. Technically, behind the scenes, the index
operator performs a linear search to obtain the location of the
node you are seeking. This makes searching algorithms LESS
efficient than arrays.

You technically still can utilize the binary search algorithm 
but the fact that you have to get to the element through the 
linear search makes the entire binary search algorithm in linked
list O(n log n), which, in the end, is STILL efficient but not as
efficient as arrays.

 */