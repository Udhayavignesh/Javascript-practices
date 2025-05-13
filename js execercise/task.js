// Book Class
class Book {
    constructor(title, author = "Unknown", year = "Not Specified") {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    getSummary() {
      return `Title: "${this.title}", Author: ${this.author}, Year: ${this.year}`;
    }
  }
  
  // Library Class
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
      this.displayBooks();
    }
  
    removeBook(title) {
      this.books = this.books.filter((book) => book.title !== title);
      this.displayBooks();
    }
  
    displayBooks() {
      const libraryList = document.getElementById("library");
      libraryList.innerHTML = "";
  
      if (this.books.length === 0) {
        libraryList.innerHTML = "<li>No books in the library.</li>";
      } else {
        this.books.forEach((book) => {
          const li = document.createElement("li");
          li.textContent = book.getSummary();
  
          const removeButton = document.createElement("button");
          removeButton.textContent = "Remove";
          removeButton.onclick = () => this.removeBook(book.title);
  
          li.appendChild(removeButton);
          libraryList.appendChild(li);
        });
      }
    }
  }
  
  // Item Class
  class Item {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = parseFloat(price);
      this.quantity = parseInt(quantity);
    }
  
    getTotalPrice() {
      return this.price * this.quantity;
    }
  
    getSummary() {
      return `Item: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}, Total: $${this.getTotalPrice().toFixed(2)}`;
    }
  }
  
  // Cart Class
  class Cart {
    constructor() {
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
      this.displayCart();
    }
  
    removeItem(name) {
      this.items = this.items.filter((item) => item.name !== name);
      this.displayCart();
    }
  
    calculateTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    displayCart() {
      const cartList = document.getElementById("cart");
      const totalPriceEl = document.getElementById("totalPrice");
  
      cartList.innerHTML = "";
  
      if (this.items.length === 0) {
        cartList.innerHTML = "<li>No items in the cart.</li>";
        totalPriceEl.textContent = "0.00";
      } else {
        this.items.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.getSummary();
  
          const removeButton = document.createElement("button");
          removeButton.textContent = "Remove";
          removeButton.onclick = () => this.removeItem(item.name);
  
          li.appendChild(removeButton);
          cartList.appendChild(li);
        });
  
        totalPriceEl.textContent = this.calculateTotalPrice().toFixed(2);
      }
    }
  }
  
  // Initialize Library and Cart
  const library = new Library();
  const cart = new Cart();
  
  // DOM Elements
  const addBookButton = document.getElementById("addBook");
  const addItemButton = document.getElementById("addItem");
  
  // Add Book Event
  addBookButton.addEventListener("click", () => {
    const title = document.getElementById("bookTitle").value.trim();
    const author = document.getElementById("bookAuthor").value.trim();
    const year = document.getElementById("bookYear").value.trim();
  
    if (!title) {
      alert("Please enter the book title.");
      return;
    }
  
    const book = new Book(title, author, year || "Not Specified");
    library.addBook(book);
  
    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookYear").value = "";
  });
  
  // Add Item to Cart Event
  addItemButton.addEventListener("click", () => {
    const name = document.getElementById("itemName").value.trim();
    const price = document.getElementById("itemPrice").value.trim();
    const quantity = document.getElementById("itemQuantity").value.trim();
  
    if (!name || !price || !quantity) {
      alert("Please fill out all item fields.");
      return;
    }
  
    const item = new Item(name, parseFloat(price), parseInt(quantity));
    cart.addItem(item);
  
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQuantity").value = "";
  });


  // 1. Greet After Delay
function greetAfterDelay() {
  const messageElement = document.getElementById("greetMessage");
  messageElement.textContent = "Waiting...";
  setTimeout(() => {
    messageElement.textContent = "Hello, World!";
  }, 3000);
}

document.getElementById("greetButton").addEventListener("click", greetAfterDelay);

// 2. Custom Delay Function
function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function customDelayFunction() {
  const messageElement = document.getElementById("delayMessage");
  messageElement.textContent = "Waiting for 2 seconds...";
  await delay(2000);
  messageElement.textContent = "Done waiting!";
}

document.getElementById("delayButton").addEventListener("click", customDelayFunction);

// 3. Simulating API Call
function mockApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Mock API data" });
    }, 1000);
  });
}

async function simulateApiCall() {
  const messageElement = document.getElementById("apiMessage");
  messageElement.textContent = "Fetching mock data...";
  const result = await mockApi();
  messageElement.textContent = `API Response: ${result.data}`;
}

document.getElementById("apiButton").addEventListener("click", simulateApiCall);

// 4. Chaining Promises


function step1() {
  return delay(1000).then(() => "Step 1 complete");
}

function step2() {
  return delay(1000).then(() => "Step 2 complete");
}

function step3() {
  return delay(1000).then(() => "Step 3 complete");
}

async function runChainedSteps() {
  const messageElement = document.getElementById("chainMessage");
  messageElement.textContent = "Running steps...";
  const s1 = await step1();
  const s2 = await step2();
  const s3 = await step3();
  messageElement.textContent = `${s1}, ${s2}, ${s3}`;
}

document.getElementById("chainButton").addEventListener("click", runChainedSteps);

// 5. Fetching API Data
async function fetchData() {
  const outputElement = document.getElementById("fetchOutput");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    outputElement.textContent = JSON.stringify(data.slice(0, 5), null, 2); // Show only first 5 posts
  } catch (error) {
    outputElement.textContent = `Error: ${error.message}`;
  }
}

document.getElementById("fetchButton").addEventListener("click", fetchData);

// 6. Parallel Execution
function task1() {
  return delay(1500).then(() => "Task 1 complete");
}

function task2() {
  return delay(1000).then(() => "Task 2 complete");
}

async function runParallelTasks() {
  const messageElement = document.getElementById("parallelMessage");
  messageElement.textContent = "Running tasks in parallel...";
  const results = await Promise.all([task1(), task2()]);
  messageElement.textContent = results.join(", ");
}

document.getElementById("parallelButton").addEventListener("click", runParallelTasks);


  