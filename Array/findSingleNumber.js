function findSingleNumber(nums){
  
  const countMap={};
  
  // for(let num of nums){
  //   countMap[num]=(countMap[num]||0)+1;
  // }
  
  for(let i=0;i<nums.length;i++){
    countMap[nums[i]]=(countMap[nums[i]]||0)+1;
  }
  
  console.log(countMap);
  
  // for(let key in countMap){
  //   if(countMap[key]==1){
  //     return key;
  //   }
  // }
  
  for(let i=0;i<nums.length;i++){
    if(countMap[nums[i]]===1){
      return nums[i];
    }
  }
}

console.log(findSingleNumber([4, 1, 2, 1, 2]));     // Output: 4
