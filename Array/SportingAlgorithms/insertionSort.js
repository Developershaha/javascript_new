// wrtie insertion sort algorithm oky 

let arr=[7,4,3,5,1,2];

for(let i=1;i<arr.length;i++){
    let curr=arr[i];
    let prev=i-1;

    // this is used for swap an dits insertion algorithm oky - loday agend learn all the sorting algorithm oky 
    while(arr[prev]>curr && prev>=0){
        arr[prev+1]=arr[prev];
        prev--;
    }
    arr[prev+1]=curr;
}

console.log(arr);