// write down binary search algorithms 

function binrarySearch(arr,target){

    let left =0;
    let right =arr.length-1;

    while(left<=right){
        let mid =Math.floor((left+right)/2);
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            left = mid +1;
        }
        else{
            right=mid-1;
        }
    }
    return -1;
}


let array =[12,13,14,15,16,17]

let result = binrarySearch(array,15);

if(result !== -1){
    console.log("find element at index of ",result);
}
else{
    console.log("not found element ");
}
