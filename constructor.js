// constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// Instantiate and object
const book1 = new Book("High-Level Programming", "Arthur Ibik", "2015");
const book2 = new Book("Programming for Beginners", "Arthur Ibik", "2018");

console.log(book2);
// Math,floor(Math.random() * num of item in array)