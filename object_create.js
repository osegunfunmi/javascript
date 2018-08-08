// Object of Protos
const bookProtos = {
    getSummary: function (params) {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    function (params) {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
        
    }
};

// Create Objects
// const book1 = Object.create(bookProtos);
// book1.title = 'New Book';
// book1.author = 'Master J.S.';
// book1.year = '2013';
// console.log(book1);

// Another way to create Object
const book1 = Object.create(bookProtos, {
    title: { value: 'Book Cycling'},
    author: { value: 'Mike Stan'},
    year: { value: '2008'}
});
console.log(book1);