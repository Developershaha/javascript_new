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

    let mapKeys=Object.keys(map)
    for (let i = 0; i < mapKeys.length; i++) {
        if (vowel.includes(mapKeys[i])) {
            if (vowelsMax < map[mapKeys[i]]) {
                vowelsMax = map[mapKeys[i]];
            }
        } else {
            if (consonantsMax < map[mapKeys[i]]) {
                consonantsMax = map[mapKeys[i]];
            }
        }

    }
    console.log("dsfs", map);
    return vowelsMax + consonantsMax;


}

console.log(findVowelandConsonanats("successesww"));