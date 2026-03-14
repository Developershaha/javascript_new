// 

function printStarts(number){
    for(let i=0;i<number;i++){
        let row="";
        for(let j=0;j<=i;j++){
            row=row+"* "
        }
        console.log(row);
    }
}

printStarts(4);