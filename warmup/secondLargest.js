// find second largest elemeent in the array 


/**
 * 
 *  handle corner cases 
 * 
 * 1) like if array is empty or array have less then two element then show the message array not have two element or array is empty 
 * 2) if we have douplicate element then we ned to handle that corner case as well as 
 * 3) handle negative number as well as 
 * 
 * 
 * ----- time and space complexicity for below problem - time complexicity O(n) and space complexity is O(1) 
 */

// let arr=[4,9,0,8,2,8,7,1];
let arr=[10, 20, 20, 8]

function secondLargestElement(array){
    if(array.length<2){
        return "array contain less then two element ";
    }
let firstElement=-Infinity;
let secondElement=-Infinity;
    for(let i=0;i<array.length;i++){
        if(array[i]>firstElement){
            secondElement=firstElement;
            firstElement=array[i];
        }

        // this block of code shows wrong answeres when we have douplicate element in the array like this array - [10, 20, 20, 8] so i need to handle this else if 
// firstElement !=array[i] ---- > this condition willl satisfied the answeres 
        else if(array[i]>secondElement && firstElement != array[i]){
            secondElement=array[i];
        }
    }

    return secondElement;

}

let second=secondLargestElement(arr);

console.log(second,"second largest element ");