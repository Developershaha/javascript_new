// print sum of array using recursion

function sumOfArray(arr, length) {

    if (length === 0) {
        return arr[0] % 2 !== 0 ? arr[0] : 0;
    }
    let addOdd = arr[length] % 2 !== 0 ? arr[length] : 0;
    return addOdd + sumOfArray(arr, length - 1);
}

console.log(sumOfArray([5, 3, 2, 0, 1], [5, 3, 2, 0, 1].length - 1));