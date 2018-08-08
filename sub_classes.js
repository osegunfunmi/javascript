// sub-classes
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
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;  
    }
}

// Magazine Subclass
class Magazine extends Book {
    constructor (title,author,year, month){
        // function super calls the parant class parameters this.month adds month as new parameter
        super(title, author, year);
        this.month = month;
    }
}

// instantaiate Magazine

const mag1 = new Magazine('Flght Through JavaScript', 'Jerry Hopkins', '2011', 'Jan');
console.log(mag1.getAge());
