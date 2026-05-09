// we have given two array and add that two array and return new array 


function addArray(arr1, arr2) {

    let finalArray = [];

    for (let i = 0; i < arr1.length; i++) {
        let sum = arr1[i] + arr2[i];
        finalArray.push(sum);

    }
    return finalArray;

}

let arr = addArray([1, 2, 3], [4, 5, 6]);

// console.log("arra", arr);


// merge two array 
function mergeArray(arr1, arr2) {
    let mergeArray = [...arr1, ...arr2];
    return mergeArray;
}

// console.log(mergeArray([1, 2, 3], [4, 5, 6]));
// we have two array and find sum using join method 


function sumArrayUsingJoin() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    const num1 = Number(arr1.join(""));
    const num2 = Number(arr2.join(""));
console.log("number",num1);
    const sum = num1 + num2;
    console.log("sum", String(sum).split("").map(Number));
}


console.log("array ", sumArrayUsingJoin())