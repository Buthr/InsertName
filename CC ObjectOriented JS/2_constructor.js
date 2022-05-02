function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return`${this.title} was written by ${this.author} in ${this.year}`;
    }    
}


//Instatiate an Object
const book1 = new Book('Book One','DumB F', '2022');
const book2 = new Book('Book Two', 'MoroN 6', '2021');

console.log(book2);