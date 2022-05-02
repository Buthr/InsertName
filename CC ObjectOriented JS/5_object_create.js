// Object Of Protos
const bookProtos = {
    getSummary: function(){
        return`${this.title} 
        was written by ${this.author} in ${this.year}`;
    },
    getAge: function() {
        const years = new Date().getFullYear() - this.year;
        return`${this.title} is ${years} years old`;
    }
}

//Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.title = 'Moron King';
book1.title = '2022';

console.log(book1);

