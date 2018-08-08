// easiate method for me
class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    // add method getSummary to Class Book
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    // method getAge
   getAge(params) {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;  
    }
        // method revise
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    // static method is used so you don't have to instatatiate an object, then you call the object with the class name
    static topBook(){
        return 'Barnes & Nobble';
    }

}

// Instatatiate Object
// const book1 = new Book('Book My Flght', 'Jerry Robert', '2015');
// const book2 = new Book('Booking Strategy', 'Jerry Robert', '2015');

// console.log(book2);
// book2.revise('1980');
// console.log(book2);

console.log(Book.topBook());