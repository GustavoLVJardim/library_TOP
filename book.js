const booklist = document.getElementById('booklist');

const myLibrary = [];

function Book(title, author, pages, read=false){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, contains ${this.pages} pages`;
    }

}

function saveLocalLibrary() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function goThroughTheLibrary(){
    let library = []
    for (let i = 0; i <= myLibrary.length -1;i++){
        
        library.push(myLibrary[i].title);
    
    
    }
    return library

}

function renderLibrary(){
    if (booklist){
        booklist.textContent = '';
    
        myLibrary.forEach(
        (book) => {
            const book_item = document.createElement('div');
            const remove_btn = document.createElement('button')
            remove_btn.textContent = "Remove"
            book_item.textContent = book.title;
            booklist.appendChild(book_item);
            booklist.appendChild(remove_btn);
            remove_btn.addEventListener('click', () => {
                removeBookToLibrary(book);
                renderLibrary();
            })

        }
    )

    }
    
}

function addBookTolibrary(bookObject){
    myLibrary.push(bookObject);
    saveLocalLibrary();
}

function removeBookToLibrary(bookObject){
    myLibrary.splice(myLibrary.indexOf(bookObject), 1);
    saveLocalLibrary();
}




const storedLibrary = localStorage.getItem('myLibrary');
if (storedLibrary) {
    const tempArray = JSON.parse(storedLibrary);
    tempArray.forEach(bookData => {
        myLibrary.push(new Book(bookData.title, bookData.author, bookData.pages, bookData.read));
    });
} else {
   
    addBookTolibrary(new Book('The name of book', 'The author', 'The number of pages', false)); // Passe o 'read'
    addBookTolibrary(new Book('The name of book2', 'The author2', 'The number of pages2', true));
    addBookTolibrary(new Book('The name of book3', 'The author3', 'The number of pages3', false));
}






function getBookFromForm(){
    const titleBookForm = document.getElementById('titlebook').value;
    const authorBookForm = document.getElementById('author').value;
    const pagesBookForm = document.getElementById('pages').value;
    const readBookForm = document.getElementById('readcheck').checked;
    const bookObject = new Book(titleBookForm, authorBookForm, pagesBookForm, readBookForm);
    addBookTolibrary(bookObject)
}

document.addEventListener("DOMContentLoaded", function() {
    const formElement = document.querySelector('#bookForm'); 
    const booklist = document.getElementById('booklist'); // redefina aqui para garantir

    if (formElement) { 
        formElement.addEventListener("submit", function(event){
            event.preventDefault();
            getBookFromForm();
            window.location.href = 'index.html'; 
        });
    }

    if (booklist) {
        renderLibrary();  // <- Chamada correta no index.html
    }
});
