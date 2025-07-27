function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.info = function(){
        return `${this.title} by ${this.author}, contains ${this.pages} pages`;
    }

}

const book1 = new Book('Entendendo Algoritmos', 'Bhargava', 300);
console.log(book1.title)
console.log(book1.author)
console.log(book1.pages)
console.log(book1.info())