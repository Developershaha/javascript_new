
// find negative number in the gives array 

function findNegativeNumber(array){
let count=0;
    for(let i=0;i<arr.length;i++){
        if(array[i]<0){
            count++;

        }
    }
    return count;

}

let arr=[1,3,45,67,-67,-9,-34,87,9,3,5,63,4];

let totalcount=findNegativeNumber(arr)

console.log(totalcount,"total count")