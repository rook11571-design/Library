const myLibrary = [];
const container = document.querySelector("#container");
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
  this.info = () => {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "read" : "not read yet"
    }`;
  };
  addBookToLibrary(this);
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}
function displayLibrary(myLibrary) {
  myLibrary.forEach((book) => {
    console.log(book);
    const card = document.createElement("div");
    card.classList = "card";
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
    bookTitle.style.textAlign = "center";
    const bookAuthor = document.createElement("div");
    bookAuthor.textContent = `Authour : ${book.author}`;
    const bookPages = document.createElement("div");
    bookPages.textContent = `Pages    : ${book.pages}`;
    const bookStatus = document.createElement("div");
    bookStatus.textContent = `Status  : ${book.read ? "read" : "not read yet"}`;
    const bookId = document.createElement("div");
    bookId.textContent = `Id          : ${book.id}`;
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(bookStatus);
    card.appendChild(bookId);
    container.appendChild(card);
  });
}
function removeLibrary(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
const addBtn = document.querySelector("button");
addBtn.addEventListener("click", () => {
  //show dialog
  const dialog = document.querySelector("dialog");
  dialog.showModal();
});
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.querySelector("form");
  const newBook = new Book(
    form.title.value,
    form.author.value,
    form.page.value,
    form.read.value
  );
  removeLibrary();
  displayLibrary(myLibrary);
});

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const abc = new Book("abc", "John", 3, true);
displayLibrary(myLibrary);
