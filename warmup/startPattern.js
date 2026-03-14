// Q- print * pattern oky n=4


function printStarts(number) {
    for (let i = 0; i < number; i++) {
        let row = " " // empty becomes every key loop 
        for (let j = 0; j < number; j++) {
            row = row + "* ";
        }
        console.log(row);
    }
}

printStarts(4);