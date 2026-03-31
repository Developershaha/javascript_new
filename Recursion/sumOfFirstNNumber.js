// some of first n number 
// 1+2+3+4+5+6-- like this 

function someOfFirstNumber(number){

if(number<=0) return 0; // base condition

// console.log(number);
// sum=sum+number;
// number=number-1;
// someOfFirstNumber(number);
return number + someOfFirstNumber(number-1);

}
console.log(someOfFirstNumber(5));


