// 
function printStarts(number){

    for(let i=0;i<number;i++){
        let emptyandStart="";
// space loop
        for(let j=0;j<number-(i+1);j++){
            emptyandStart=emptyandStart+"- ";
        }
        // adding only * stars
        for(let k=0;k<i+1;k++){
            emptyandStart=emptyandStart+"* "
        }
        console.log(emptyandStart);
    }
}

printStarts(5);