// find in the given string maximum vowels and consonants 



function findVowelandConsonanats(s) {
    let map = {}; // take hashmap and know how to hashmap work internally 


    // store all the key in the map 
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        };

    }

    // find maximum and minimun and add two and return 
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let vowelsMax = 0;
    let consonantsMax = 0;
    for (let i = 0; i < s.length; i++) {
        if (vowel.includes(s[i])) {
            if (vowelsMax < map[s[i]]) {
                vowelsMax = map[s[i]];
            }
        } else {
            if (consonantsMax < map[s[i]]) {
                consonantsMax = map[s[i]];
            }
        }

    }
    console.log("dsfs", map);
    return vowelsMax + consonantsMax;


}

console.log(findVowelandConsonanats("successesww"));