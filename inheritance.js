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

    // Magazine Contructor
function Magazine (title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
    }

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Use Magazine constructor
Magazine.prototype.constructor = Magazine;

// Instanstiate magazine Object
const mag1 = new Magazine('Mag One', 'John Piper', '2017', 'August');

console.log(mag1);