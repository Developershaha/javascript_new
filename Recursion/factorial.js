// find given number factorial 


function factorialNumber(number){

    if(number ===1){
        return 1;
    }

    return number * factorialNumber(number-1);

}

console.log("factorial ",factorialNumber(5));