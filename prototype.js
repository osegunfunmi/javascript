// constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    }

   //  getSummary
    Book.prototype.getSummary = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }; 

    // getAge
    Book.prototype.getAge = function (params) {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
        
    };

    // Revise / change year

    Book.prototype.revise = function (newYear) {
        this.year = newYear;
        this.revised = true;
    }; 

// Instantiate and object
const book1 = new Book("High-Level Programming", "Arthur Ibik", "2015");
const book2 = new Book("Programming for Beginners", "Arthur Ibik", "2010");

console.log(book2);
book2.revise('2019'); 

console.log(book2);

