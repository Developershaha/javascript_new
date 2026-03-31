// find nth fibbonachi number

function fibbonachi(number){

    let first=0;
    let second=1;
    let next=0;
    for(let i=2;i<=number;i++){
        next=first+second;
        first=second;
        second=next; 

    }
    return next;

}
    console.log(fibbonachi(9))
