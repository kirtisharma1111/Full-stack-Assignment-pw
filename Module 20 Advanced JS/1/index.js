//Create a Map in JavaScript and perform the following operations
let map = new Map();
// Add key-value pairs to the Map
map.set("name","kirti");
map.set("age",22);
map.set("city","Delhi");
// Check if a specific key exist
console.log(map.has("age"));
//Retrieve the value associated with a given key
console.log(map.get("name"));
// Iterate through all key-value pairs.
for(let[key,value] of map){
    console.log(`${key}:${value}
        `);
}

