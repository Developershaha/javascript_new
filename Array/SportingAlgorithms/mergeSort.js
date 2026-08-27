function mergeSort(arr) {

    // Base condition
    if (arr.length <= 1) {
        return arr;
    }

    // Find middle
    let mid = Math.floor(arr.length / 2);

    // Divide array into two halves
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // Recursively sort both halves
    left = mergeSort(left);
    right = mergeSort(right);

    // Merge sorted halves
    return merge(left, right);
}


function merge(left, right) {

    let result = [];

    let i = 0;
    let j = 0;

    // Compare elements from left and right
    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add remaining elements from left
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Add remaining elements from right
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}


// Example
let arr = [7, 1, 5, 4, 3, 5, 2, 1];

let sortedArray = mergeSort(arr);

console.log(sortedArray);