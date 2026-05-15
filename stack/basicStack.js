// in js have inbuild stack oky 

const stack=[];
stack.push(1);
stack.push(5);
stack.push(8);
stack.push(23);

console.log(stack); 

stack.pop();
console.log(stack);
const top=stack[stack.length-1];

// top element or peek element 
console.log("top element",top);