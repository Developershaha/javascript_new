// write donw linear search alogorithms 

function linearSearch( arr,target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

// return -1 from te function because array index start from 0 never array index negative oky 

let array=[1,2,3,44,55,66,77,-1,87];

let result = linearSearch(array,774);

if(result !== -1){
    console.log("element found at index at ",result);
}else{
    console.log("target value not found in the given array ");
}