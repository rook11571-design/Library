let myLibrary = [];
const container = document.querySelector("#container");
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
  addBookToLibrary(this);
}

Book.prototype.toggle = function() {
  //do not use arrow function as arrow function do not have their own this!!!!
  this.read = !this.read;
};

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function displayLibrary() {
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

    const Status = document.createElement("div");
    Status.className = "status";
    const bookStatus = document.createElement("div");
    bookStatus.textContent = `Status  : ${book.read ? "Read" : "Not Read"}`;
    const readBtn = document.createElement("button");
    readBtn.textContent = "change status";
    readBtn.addEventListener("click", () => {
      book.toggle();
      console.log(book)
      bookStatus.textContent = `Status  : ${book.read ? "Read" : "Not Read"}`;
      
    });

    const bookId = document.createElement("div");
    bookId.textContent = `Id          : ${book.id}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", (e) => {
      // const index = myLibrary.indexOf(book);//this is the correct way of removing object from an array out of scope
      // if(index>-1){
      //   myLibrary.splice(index, 1);
      // }
      myLibrary = myLibrary.filter((element) => element.id !== book.id);//this is also a way to remove object from an array if the myLibrary variable is not passed to the function
      //e.target.parentElement.remove();//it is not the best way to do this as the UI and data might be out of sync
      removeLibrary();// this clear the UI
      displayLibrary();// this reset the UI and ensure UI and data are in sync
    });

    Status.appendChild(bookStatus);
    Status.appendChild(readBtn);
    card.appendChild(bookTitle);
    card.appendChild(bookAuthor);
    card.appendChild(bookPages);
    card.appendChild(Status);
    card.appendChild(bookId);
    card.appendChild(removeBtn);
    container.appendChild(card);
  });
}

function removeLibrary() {
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
  const checkboxElement =document.getElementById('read');
  const isChecked = checkboxElement.checked
  const newBook = new Book(
    form.title.value,
    form.author.value,
    form.page.value,
    isChecked
  );

  removeLibrary();
  displayLibrary();
  form.reset();
  const dialog = document.querySelector("dialog");
  console.log(newBook)
  dialog.close();
});

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const abc = new Book("abc", "John", 3, true);
displayLibrary();
