//  Implement Task 1 using Class.
//Design a JavaScript class called Person with properties for name and age. Implement a method to display the person's name and age.
// Then, create instances of Person and display their information.

class PersonClass{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    displayInfo(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const personA = new PersonClass("Kirti",22);
const personB = new PersonClass("Aman",17);

personA.displayInfo();
personB.displayInfo();