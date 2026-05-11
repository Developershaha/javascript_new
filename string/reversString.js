// make string into reverse string 

function reverseString(s){
    let str="";

    for(let i=0;i<s.length;i++){
        str=str+s[s.length-i-1];
    }
    return str;


}

console.log("revers",reverseString("shahaji"));