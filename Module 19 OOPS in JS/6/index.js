//Design a Class for a Geometric Shape
//Design a class called Shape that can represent various geometric shapes. Implement subclasses for specific shapes like Circle, Rectangle,
//and RightTriangle. Each subclass should have properties of that shape (e.g. Width, height for a rectangle) and methods for calculating the
//area and perimeter of the shape. Create instances of these shapes and calculate their areas and perimeters.

class Shape{
    area(){}
    perimeter(){}
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius ** 2;
    }
    perimeter(){
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle extends Shape{
    constructor(width,height){
        super();
        this.width = width;
        this.height = height;
    }
    area(){
        return this.width * this.height;
    }
    perimeter(){
        return 2 * (this.width + this.height);
    }
}
class RightTriangle extends Shape{
    constructor(base,height){
        super();
        this.base = base;
        this.height = height;
    }
    area(){
        return 0.5 * this.base * this.height;
    }
    perimeter(){
        const hypotenuse = Math.sqrt(this.base**2 + this.height**2);
        return this.base + this.height + hypotenuse;
    }
}
const circle = new Circle(7);
console.log("Circle Area:", circle.area().toFixed(2));
console.log("Circle Perimeter:", circle.perimeter().toFixed(2));

const rectangle = new Circle(5,10);
console.log("Rectangle Area:", rectangle.area());
console.log("Rectangle Perimeter:", rectangle.perimeter());

const triangle = new RightTriangle(3,4);
console.log("RightTriangle Area:", triangle.area());
console.log("RightTriangle Perimeter:", triangle.perimeter().toFixed(2));
