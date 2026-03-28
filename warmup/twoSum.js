/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
1️⃣ Reverse number without converting to string
2️⃣ Factorial using recursion
3️⃣ Print prime numbers between 1–100
4️⃣ Reverse number using recursion

🎯 Practice Questions (Very Important)

Try solving these before Day 2:

1️⃣ Count digits in number
2️⃣ Armstrong number
3️⃣ Palindrome number
4️⃣ Fibonacci series
5️⃣ Sum of digits
 */


function findTwoSum(array,target){
    for(let i=0;i<array.length;i++){

        for(let j=1;j<array.length;j++){
            if(array[i]+array[j]===target){
                return [array[i],array[j]];
            }
        }
    }
}

const arr=[2,7,11,15];
let data=findTwoSum(arr,18);

console.log("data",data);