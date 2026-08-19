// write down binary search algorithms 

function binarySearch(arr,target){

    // write binary search algorithm oky 

    let left=0;
    let right=arr.length-1;
    while(left<=right){
      let mid = Math.floor((left + right) / 2);
        if(target===mid){
            return mid;
        }else if(target>arr[mid]){
            left=mid+1;
        }
        else{
            right=mid-1;
        }

    }

    return -1;


}

// function binrarySearch(arr,target){

//     let left =0;
//     let right =arr.length-1;

//     while(left<=right){
//         let mid =Math.floor((left+right)/2);
//         if(arr[mid]===target){
//             return mid;
//         }else if(arr[mid]<target){
//             left = mid +1;
//         }
//         else{
//             right=mid-1;
//         }
//     }
//     return -1;
// }


let array =[12,13,14,15,16,17]

let result = binarySearch(array,16);

if(result !== -1){
    console.log("find element at index of ",result);
}
else{
    console.log("not found element ");
}
