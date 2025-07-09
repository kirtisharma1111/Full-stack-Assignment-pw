//  Implement a Library System
//Create a class called Library that can manage a collection of books. Each book should be represented as an instance of a Book class (with
//properties like title, author, and availability). Implement methods in the Library class to add books, check out books, and return books.
//Keep track of the books available.

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.available = true;
  }

  info() {
    return `"${this.title}" by ${this.author} - ${this.available ? "Available" : "Checked out"}`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Added: ${book.title}`);
  }

  checkOut(title) {
    const book = this.books.find((b) => b.title === title && b.available);
    if (book) {
      book.available = false;
      console.log(`Checked out: ${title}`);
    } else {
      console.log(`Book not available or already checked out: ${title}`);
    }
  }

  returnBook(title) {
    const book = this.books.find((b) => b.title === title && !b.available);
    if (book) {
      book.available = true;
      console.log(`Returned: ${title}`);
    } else {
      console.log(`Book not found or already available: ${title}`);
    }
  }

  showAllBooks() {
    this.books.forEach((book) => {
      console.log(book.info());
    });
  }
}

const lib = new Library();
const b1 = new Book("Harry Potter", "J.K. Rowling");
const b2 = new Book("The Hobbit", "J.R.R. Tolkien");

lib.addBook(b1);
lib.addBook(b2);

lib.showAllBooks();
lib.checkOut("Harry Potter");
lib.showAllBooks();
lib.returnBook("Harry Potter");
lib.showAllBooks();
