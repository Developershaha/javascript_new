// write algorithm for bubble sort oky

let arr=[5,4,9,1,0];
function bubbleSortArray(array){
    // write logic for sorting array 
    // first loop is used to iterate on the array till second last element

    for(let i=0;i<array.length-1;i++){

        let isSwapped=false;

        for(let j=0;j<array.length-1-i;j++){
            if(array[j]>array[j+1]){
                // write swap logic here
                let temp=array[j];
                array[j]=array[j+1]
                array[j+1]=temp;
                isSwapped=true;
            }
        }
        if(!isSwapped) break;
    }
}

console.log("before sorting array",arr);
bubbleSortArray(arr);
console.log("after sorting array",arr);