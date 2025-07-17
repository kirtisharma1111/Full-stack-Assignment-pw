//You are given an array of numbers named myArray. Create a function that takes any number of arguments and adds them to the existing array.
//Use the spread and rest operator.
let myArray = [1,2,3,4,5];
function addToArray(...args){
    myArray.push(...args);
    return myArray;
}
console.log(addToArray(6,7,8));


