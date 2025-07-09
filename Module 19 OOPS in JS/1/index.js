//  Create a Constructor for a Person
//Write a JavaScript function constructor named Person that takes two parameters, name, and age, and Add a method to the prototype to display 
//name and age . Then, create two instances of Person and display their names and ages.

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

const person1 = new Person("Kirti Sharma",21);
const person2 = new Person("Aman Sharma", 18);

person1.displayInfo();
person2.displayInfo();