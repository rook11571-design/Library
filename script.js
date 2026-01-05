const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
  this.info = ()=>{
    return `${title} by ${author}, ${pages} pages, ${read?"read":"not read yet"}`
  }
  addBookToLibrary(this);
}

function addBookToLibrary(Book){
    myLibrary.push(Book);
}
const theHobbit = new Book('The Hobbit','J.R.R. Tolkien',295, false)
const abc = new Book('abc', 'John', 3, true);
console.log(theHobbit.info());
console.log(theHobbit.id);
console.log(abc.info())
console.log(myLibrary)
