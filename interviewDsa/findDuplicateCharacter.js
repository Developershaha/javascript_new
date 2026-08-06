let str="shahaji";
let newStr=str.split("");

// i have solved this using map data structure oky 
let map={};
for(let ch of str){
    if(map[ch]){
        map[ch]=map[ch]+1;
    }else{
        map[ch]=1;
    }
}

// console.log(map);
let newMap ={};

for(let key in map){
    if(map[key]>1){
        newMap[key]=map[key];
    }
}


console.log(newMap);
console.log(map);
// let map=new Map();
// for(let ch of newStr){
//     if(map.has(ch)){
//         map.set(ch,map.get(ch)+1)
//     }else{
//         map.set(ch,1);
//     }
// }

// console.log(map);


// let newMap=new Map();

// for(let [key,value] of map){
//     if(value>1){
//         newMap.set(key,value)
//     }
// }
// console.log(newMap);