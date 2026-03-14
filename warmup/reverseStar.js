// 
function printStarts(){

    for(let i=5;i>=1;i--){
        let allNumber="";
        for(let j=1;j<=i;j++){
        allNumber=allNumber+j;
        }
        console.log(allNumber);
    }
}

printStarts();