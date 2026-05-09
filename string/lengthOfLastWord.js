function lengthOfLastWord(s) {
    s = s.trim();

    // solved using inbuilt method 
    // return s?.[s.length-1].length;
    let count = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        console.log(s[i] != " ");
        if (s[i] != " ") {
            count++;
        } else {
            return count;
        }
    }
    return count;
}

console.log("length of the last word ", lengthOfLastWord("  fly me   to   the moon  "));