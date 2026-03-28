//

function consectiveNumber(nums){
    let currentCount=0;
    let maxCount=0

    for(let i=0;i<=nums.length;i++){
        if(nums[i]==1){
            currentCount++;
             if(currentCount>maxCount){
                maxCount=currentCount;
            }
        }
        else{
           
            currentCount=0;
        }
       
    }

    return maxCount;
}

let array=[0,0,1,0,1,1,1,1,1,10,0,0,0];


console.log("sdfsfsd",consectiveNumber(array))