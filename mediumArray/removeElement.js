// remove elemnt all teh element which is occuring in the array oky 

var removeElement = function(nums, val) {
let index=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){ 
            nums[index]=nums[i];
            index++;

        }
    }
    console.log("nums",nums);
    return index;
    
};

console.log("dsds",removeElement([3,2,2,3],3));