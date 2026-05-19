// in js have inbuild stack oky 

const queue=[];
queue.push(1);
queue.push(5);
queue.push(8);
stack.push(23);

console.log(stack); 

stack.pop();
console.log(stack);
const top=stack[stack.length-1];

// top element or peek element 
console.log("top element",top);  

// stack[3]. // invalid operation but in js it work because internally uses array 