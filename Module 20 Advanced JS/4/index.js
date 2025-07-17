//Create an object car with properties brand, model, and a method displayDetails that prints "Brand: [brand],Model: [model]". Test the method using this keyword.
let car = {
    brand : "Hyndai",
    model : "Top",
    displayDetails : function(){
        console.log(`Brand: ${this.brand}, Model:${this.model}`);
    }
};
car.displayDetails();