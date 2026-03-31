// using algebra formula we can find out or usign loop and object concpet of javascript we can do 

function findMissingNumber(arr){

    let numsMap={}// create hashmap oky means simple javascript object 

    // for(let i=0;i<arr.length;i++){ // iterate all the element 
    //     numsMap[arr[i]]=true; // this is the assignment value int he key value formate in object oky 

    // }
        /**
     * 
     * other wise write for of loop for object oky
     * 
     * for(let num of arr){
     * numsMap[num]=true;
     * }
     */

        let n=arr.length;
        let totalSum=n*(n+1)/2

        let expectedSum=0;
        for(let i of arr){
            expectedSum=expectedSum+i;
        }
return totalSum-expectedSum;
    // for(let i=0;i<arr.length;i++){
    //     if(!numsMap[i]){
    //         return i;
    //     }
    // }

}

let array=[9,6,4,2,3,5,7,0,1]; // missing 8 oky 

console.log("missing number ",findMissingNumber(array))


