//Create two objects person1 and person2 with properties name and age. Create a function “introduce” that prints "Hello, I'm [name], 
//and I'm [age] years old." Use the call method to make person2 introduce itself using the introduce function.
let person1 = {
    name : "Yogesh",
    age : 45
};
let person2 = {
    name : "Myra",
    age : 15
};
function introduce(){
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}
introduce.call(person1);
