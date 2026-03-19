// remove duplicate element in the given not descreasing array 


function removeDuplicate(arr){


    // first solution using two point -- we can solve this using key value pair of array - non sorting array any array 
let uniqueElementPointer=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>arr[uniqueElementPointer]){
        uniqueElementPointer=uniqueElementPointer+1;
        arr[uniqueElementPointer]=arr[i];
    }

}
return arr;



}

console.log(removeDuplicate([0,1,1,2,2,2,3,3,4]));