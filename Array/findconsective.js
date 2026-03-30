let arr=[1,1,1,0,0,1,1,1,1,0];
function findConsective(array){
   let currCount=0;
    let maxCount=0;
  for(let i=0;i<array.length;i++){
    
 
   
    if(array[i]===1){
      currCount++;
    }
    else{
      maxCount=currCount>maxCount?currCount:maxCount;
      currCount=0
    }
  }
  
  return currCount>maxCount?currCount:maxCount;
  
}

console.log(findConsective(arr));