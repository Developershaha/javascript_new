// provide a number and find the how many digit have in that number

function countDigit(number) {

    // corner cases 1) when given nubber is positive 
    // when its negative number 
    let count = 0;

    let n = Math.abs(number);

    console.log("heiiiii",n);
    if (n > 0) {
        n = number;
    }
    else if (n === 0) {
        count++;

    }
    else {
        // we can aslo do like 
        // this line do absolute number when we have negative bumber
        n = number + (-2 * number);
        console.log("hii");
    }
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;

    }

    return count;

}

let count = countDigit(-122987654);
console.log(count);

