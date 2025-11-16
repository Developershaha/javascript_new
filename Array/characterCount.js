// Given an string , by to print number of unique character of each unique of a string 

function countString(str){
    let frequencyObje={};// initally kept empty obect 

    for (let i=0;i<str.length;i++){
        if(frequencyObje[str[i]]){
            frequencyObje[str[i]]+=1;
        }
        else{
            frequencyObje[str[i]]=1;
        }
    }

    return frequencyObje;
}

console.log("count frequency", countString("javascript"));


// Function to count the frequency of each unique character in a string
// function countString(str) {
//     let frequencyObj = {}; // empty object to store counts

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];

//         if (frequencyObj[char]) {
//             frequencyObj[char] += 1;   // increment count
//         } else {
//             frequencyObj[char] = 1;    // initialize count
//         }
//     }

//     return frequencyObj;
// }

// console.log("Count frequency:", countString("javascript"));
