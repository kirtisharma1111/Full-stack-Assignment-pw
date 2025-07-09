// Implement a Calculator Class
//Create a class called Calculator that initializes two values value1 and value2 to store numbers. Add methods for add, subtract, multiply,
// and divide. Perform and show operations.

class Calculator{
    constructor(value1,value2){
        this.value1= value1;
        this.value2=value2;
    }
    add(){
        return this.value1 + this.value2;
    }
    subtract(){
        return this.value1 - this.value2;
    }
    multiply(){
        return this.value1 * this.value2;
    }
    divide(){
        if(this.value2 === 0){
            return "Cannot divide by zero!";
        }
        return this.value1 / this.value2;
    }
}

const calc = new Calculator(10,5);
console.log("Add:", calc.add());
console.log("Subtract:", calc.subtract());
console.log("Multiply:", calc.multiply());
console.log("Divide:", calc.divide());