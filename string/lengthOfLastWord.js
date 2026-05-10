function lengthOfLastWord(s) {
    // s = s.trim();
    // here we have use inbuit method but for a now don't use this use ur custom logic 

    let length = s.length - 1;
    let count = 0;

    // remove space from the last 
    while (length >= 0) {

        if(s[length] != " "){
            count++;

        }else if(count > 0){
            break;
        }
       length--;
    }
     return count;


    // solved using inbuilt method 
    // return s?.[s.length-1].length;

    // for (let i = length; i >= 0; i--) {
    //     console.log(s[i] != " ");
    //     if (s[i] != " ") {
    //         count++;
    //     } else {
    //         return count;
    //     }
    // }
    // return count;
}

console.log("length of the last word ", lengthOfLastWord("  fly me   to   the moon  "));
console.log(lengthOfLastWord("hello"));