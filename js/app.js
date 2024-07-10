// let $ = document;
// let titleInput = $.getElementById('title');
// let authorInput = $.getElementById('author');
// let yearInput = $.getElementById('year');
// let addBookElement = $.querySelector('input[type="submit"]');
// let bookContainer = $.querySelector('#book-list')

// let books = [];

// addBookElement.addEventListener('click', function(event){
//     event.preventDefault();

//     let titleInputValue = titleInput.value;
//     let authorInputValue = authorInput.value;
//     let yearInputValue = yearInput.value;

//     if( titleInput.value == '' || authorInput.value == '' || yearInput.value == ''){

//         alert('Please select a book');

//     }else{
    
//         let newBookObject = {
//             id: books.length +1,
//             title: titleInputValue,
//             author: authorInputValue,
//             year: yearInputValue
//         }
//         books.push(newBookObject);
    
//         setIntoLocalStorage(books);
       
//     }


// })


// function setIntoLocalStorage(allBooksArray){
//     localStorage.setItem('books', JSON.stringify(allBooksArray));
//     makeEmptyInputs();
//     booksGenerator(allBooksArray)

// }

// function makeEmptyInputs(){
//     titleInput.value = '';
//     authorInput.value = '';
//     yearInput.value = '';
// }

// function booksGenerator(allBooksArray){

//     bookContainer.innerHTML = '';

//     allBooksArray.forEach(function(book){
//         newBookTrElement = $.createElement('tr');

//         let newBookTitleTh = $.createElement('th');
//         newBookTitleTh.innerHTML = book.title;

//         let newBookAuthorTh = $.createElement('th');
//         newBookAuthorTh.innerHTML = book.author;

//         let newBookYearTh = $.createElement('th');
//         newBookYearTh.innerHTML = book.year;

//         newBookTrElement.append(newBookTitleTh, newBookAuthorTh, newBookYearTh);
//         bookContainer.append(newBookTrElement);
//     });
// }

// function getBooksFromLocalStorage(){

//     let localStorageBooks = localStorage.getItem('books');

//     if(localStorageBooks){
//         books = JSON.parse(localStorageBooks);
//         booksGenerator(books)
//     }
// }

// window.addEventListener('load', getBooksFromLocalStorage);
