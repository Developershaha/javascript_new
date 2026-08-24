// write selection sort algorithm oky 

let arr=[7,1,5,4,3,2];

for(let i=0;i<arr.length-1;i++){

    let min =i;
    for(let j=i+1;j<arr.length;j++){
     if(arr[j]<arr[min]){
        min=j;
     }
     if(min!=i){
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
     }
    }
}
    console.log("dsfsf",arr);
