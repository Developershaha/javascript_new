// // print n to 1 using recursion

// let incrementNumber = 1;

// function printNtoOne(number) {
//     // print number to 1 this is the logic
//     // if(number ===0) return;
//     // console.log("number ", number);
//     // // number = number - 1;
//     // return printNtoOne(number-1);

//     // now print 1 to number oky 
//     console.log("incrementNumber ", incrementNumber)
//     if (incrementNumber === number) return;
//     incrementNumber = incrementNumber + 1
//     return printNtoOne(incrementNumber);
    

// }

// printNtoOne(10);

function printOneToN(current, limit) {
    if (current > limit) return; // Base Case: stop when current exceeds limit
    
    console.log("number", current);
    
    // Pass the incremented value to the next call
    return printOneToN(current + 1, limit); 
}

printOneToN(1, 10);