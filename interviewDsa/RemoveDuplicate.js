// remove duplicate element in the array 

let array=[10,50,38,45,38,20,10];
let newArray=[];

for(let element of array){
    console.log(element);
if(!newArray.includes(element)){
 newArray.push(element);
}
}


// let uniqueElement=new Set([...array])
let uniqueElement=[...new Set(array)];
console.log(uniqueElement);