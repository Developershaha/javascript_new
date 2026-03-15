// check give number is palidrom or not oky 

/** 
 * 
 * step to solve this 
 * 1) check number is greate then 0 oky first corner case is resolved 
 * 2) initialise rev number as 0 and use while loop for iteration 
 * 3) get remainder and add into the reverser varaibel
 * 4) update means remove last digit from the number
 */

function checkPalidromNumber(n){

    let number=n;
    let rev=0;

    while(number>0){
        remainder=number%10; // get remainder from this line of code

        rev=rev*10+remainder;
        number=Math.floor(number/10);
    }

    return rev===n?`the give number is palidrom ${rev}`:`give number is not palidrom ${n}`;
}

let number=checkPalidromNumber(14341);
console.log("palidrom number",number);