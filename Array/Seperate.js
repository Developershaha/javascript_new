/* 
-----------------------------------------------
Problem Statement

Given an array that contains only 0s and 1s in random order, 
write a function to rearrange the array such that all 0s appear 
before all 1s.

Constraints:
- Must be solved in-place (no extra array).
- Use two pointers:
    i -> starts from the beginning
    j -> starts from the end
- Time complexity: O(n)
- Space complexity: O(1)

Approach Used:
Two-Pointer Technique:
- Move pointer i from the left.
- Move pointer j from the right.
- When arr[i] is 1 and arr[j] is 0 → swap them.
- Otherwise, move pointers accordingly.
-----------------------------------------------
*/

// Utility function to swap elements at index i and j
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Function to separate 0s and 1s using two-pointer technique
function separate(arr) {
    let i = 0;                     // pointer starting from the left
    let j = arr.length - 1;        // pointer starting from the right

    while (i <= j) {
        // If element at i is 1 and element at j is 0 → swap
        if (arr[i] === 1) {
            swap(arr, i, j);
            j--;                   // move j left after swap
        } else {
            i++;                   // arr[i] = 0 → already in correct position
        }
    }
}

// Test array
let arr = [1, 1, 1, 0, 1, 0, 0, 0, 1, 0];
separate(arr);
console.log(arr);   // Output: all 0s first, then 1s
