const myLybrary = [];
function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.info = function(){
        return `${this.title} by ${this.author}, contains ${this.pages} pages`;
    }

}

function addBookTolibrary(bookObject){
    myLybrary.push(bookObject);
}

function goThroughTheLibrary(){
    for (let i = 0; i <= myLybrary.length;i++){
        return myLybrary[i].info();
    }

}