// write algo of bubble sort 

function bubbleSort(arr){

    for(let i=0;i<arr.length-1;i++){
        let isSwap=false;
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                isSwap=true;
            }
        }
        if(!isSwap) break;
    }
    return arr;
}



let array =[5,2,4,1];


console.log(bubbleSort(array));