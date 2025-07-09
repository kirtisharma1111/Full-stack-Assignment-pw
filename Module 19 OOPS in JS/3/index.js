// Create a Constructor for a Book
//Design a constructor function called Book that takes title and author as parameters. Add a method to the prototype of the Book that displays
//the book's information. Create at least two book instances and display their information.

function Book(title,author){
    this.title = title;
    this.author = author;
}

Book.prototype.displayInfo = function(){
    console.log(`"${this.title}" by ${this.author}`);
};

const book1 = new Book("The Diary of a young girl", "Anne Frank");
const book2 = new Book("Julius Caesar", "Williams");

book1.displayInfo();
book2.displayInfo();
