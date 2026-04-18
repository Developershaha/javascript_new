// check given array is palidrom or not oky 


function checkPalidrome(arr){
    let left =0;
    let right=arr.length-1;
    while(left<right){
        if(arr[left]!=arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;

}

let check = checkPalidrome([1,2,3,2,1,1]);
console.log(check);