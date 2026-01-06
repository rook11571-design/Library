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
  this.toggle = () => {
    if (read) {
      read = false;
    } else {
      read = true;
    }
    this.read = read;
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

    const Status = document.createElement("div");
    Status.id = "status";
    const bookStatus = document.createElement("div");
    bookStatus.textContent = `Status  : ${book.read ? "Read" : "Not Read"}`;
    const readBtn = document.createElement("button");
    readBtn.textContent = "change status";
    readBtn.addEventListener("click", () => {
      book.toggle();
      bookStatus.textContent = `Status  : ${book.read ? "Read" : "Not Read"}`;
      console.log(book.info());
    });

    const bookId = document.createElement("div");
    bookId.textContent = `Id          : ${book.id}`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", (e) => {
      myLibrary = myLibrary.filter((element) => element.id !== book.id);
      e.target.parentElement.remove();
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
  
  const newBook = new Book(
    form.title.value,
    form.author.value,
    form.page.value,
    form.read.value
  );

  removeLibrary();
  displayLibrary(myLibrary);
  form.reset();
  const dialog = document.querySelector("dialog");
  dialog.close();
});

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const abc = new Book("abc", "John", 3, true);
displayLibrary(myLibrary);
