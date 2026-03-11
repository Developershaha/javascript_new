// find largest number in the gives array 

function findLargestNumber(arr) {
    let largestNumber = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            largestNumber = arr[i];

        }

    }
    return largestNumber;

}

let number = findLargestNumber([12, 5, 3, 53, 34, 34, 5656, 657656, 99999999, 1, 45, 343, 43]);

console.log(number, "number");