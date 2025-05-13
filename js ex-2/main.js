const tableContainer = document.getElementById("tableContainer");
    const createTableButton = document.getElementById("createTable");
    const resetTableButton = document.getElementById("resetTable");

    // Function to create a dynamic table
    function createTable(rows, columns) {
      const table = document.createElement("table");
      table.className = "table table-bordered table-striped mt-4";
      const tbody = document.createElement("tbody");

      for (let i = 0; i < rows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
          const cell = document.createElement("td");
          
          row.appendChild(cell);
        }
        tbody.appendChild(row);
      }

      table.appendChild(tbody);
      return table;
    }

    // Event listener for creating the table
    createTableButton.addEventListener("click", () => {
      const rows = parseInt(document.getElementById("rows").value, 10);
      const columns = parseInt(document.getElementById("columns").value, 10);

      if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Please enter valid numbers for rows and columns!");
        return;
      }

      tableContainer.innerHTML = ""; // Clear any existing table
      const table = createTable(rows, columns);
      tableContainer.appendChild(table);
    });

    // Event listener for resetting the table
    resetTableButton.addEventListener("click", () => {
      tableContainer.innerHTML = ""; // Clear the table
      document.getElementById("rows").value = "";
      document.getElementById("columns").value = "";
    });


    //to-do list js//////////////////////////////////////////////
    
const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if (inputbox.value==="") {
        alert("You Must Write Something");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML=inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("Span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
}

listContainer.addEventListener("click",function(e){
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);




let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
  let currentTime = new Date();

  hrs.innerHTML=currentTime.getHours();
  min.innerHTML=currentTime.getMinutes();
  sec.innerHTML=currentTime.getSeconds();
  
},1000)

// quotes geneator/////////////////////////////////////////////////

const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. - Oprah Winfrey",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
  "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It is during our darkest moments that we must focus to see the light. - Aristotle",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson"
];

function generateQuote() {
  // Generate a random index between 0 and the length of the quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);

  // Update the content of the quote-box element with a random quote
  document.querySelector('.quote-box').textContent = quotes[randomIndex];
}

// Data for countries and their states///////////////////////////////////


const countryStateData = {
  usa: [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
    "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", 
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", 
    "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ],
  india: [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", 
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ],
  australia: [
    "Australian Capital Territory", "New South Wales", "Northern Territory", 
    "Queensland", "South Australia", "Tasmania", "Victoria", 
    "Western Australia"
  ],
  canada: [
    "Alberta", "British Columbia", "Manitoba", "New Brunswick", 
    "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island",
    "Quebec", "Saskatchewan"
  ]
};

const countryDropdown = document.getElementById("country");
const stateDropdown = document.getElementById("state");
const clearButton = document.getElementById("clear");

// Event listener for country selection
countryDropdown.addEventListener("change", function () {
  const selectedCountry = countryDropdown.value;

  // Clear the state dropdown
  stateDropdown.innerHTML = '<option value="">-- Select a State --</option>';

  // Populate state dropdown if a country is selected
  if (selectedCountry && countryStateData[selectedCountry]) {
    countryStateData[selectedCountry].forEach(state => {
      const option = document.createElement("option");
      option.value = state.toLowerCase().replace(/ /g, "-");
      option.textContent = state;
      stateDropdown.appendChild(option);
    });
  }
});

// Clear button to reset dropdowns
clearButton.addEventListener("click", () => {
  countryDropdown.value = "";
  stateDropdown.innerHTML = '<option value="">-- Select a State --</option>';
});


// Palindrome CHECKER////////////////////////////////////


document.getElementById("checkPalindrome").addEventListener("click", function () {
  const userInput = document.getElementById("userInput").value.trim(); // Get the input and trim whitespace
  const resultDiv = document.getElementById("result");

  // Function to check if the string is a palindrome
  function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters and lowercase
    const reversed = cleaned.split("").reverse().join(""); // Reverse the string
    return cleaned === reversed; // Compare original with reversed
  }

  // Display the result
  if (userInput === "") {
    resultDiv.innerHTML = "Please enter a string.";
    resultDiv.style.color = "red";
  } else if (isPalindrome(userInput)) {
    resultDiv.innerHTML = `"${userInput}" is a Palindrome! 🎉`;
    resultDiv.style.color = "green";
  } else {
    resultDiv.innerHTML = `"${userInput}" is NOT a Palindrome. 😔`;
    resultDiv.style.color = "red";
  }
});



// EVENT COUNT TIMER////////////////////////////////////////////


document.getElementById("startCountdown").addEventListener("click", function () {
  const eventDateInput = document.getElementById("eventDate").value; // Get the user input
  const countdownDiv = document.getElementById("countdown");

  if (!eventDateInput) {
    countdownDiv.innerHTML = "Please enter a valid date and time.";
    countdownDiv.style.color = "red";
    return;
  }

  const eventDate = new Date(eventDateInput).getTime();

  // Function to update the countdown

  const countdownTimer = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    if (timeLeft <= 0) {
      clearInterval(countdownTimer);
      countdownDiv.innerHTML = "The event has started! 🎉";
      countdownDiv.style.color = "lime";
      return;
    }

    // Calculate time remaining
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown
    countdownDiv.innerHTML = `
      ${days} Days, 
      ${hours} Hours, 
      ${minutes} Minutes, 
      ${seconds} Seconds
    `;
    countdownDiv.style.color = "white";
  }, 1000);
});



// CUSTOM CALCI///////////////////////////////////////////////////////////////////

const historyList = []; // Array to store the last 5 calculations

function performOperation(operator) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const resultDisplay = document.getElementById('result');
  const historyDiv = document.getElementById('history');

  // Validation for empty inputs
  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.innerHTML = "Result: Please enter valid numbers!";
    return;
  }

  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultDisplay.innerHTML = "Result: Division by zero is not allowed!";
        return;
      }
      result = num1 / num2;
      break;
    default:
      result = "Invalid Operation";
  }

  // Display the result
  resultDisplay.innerHTML = `Result: ${result}`;

  // Add calculation to history
  const calculation = `${num1} ${operator} ${num2} = ${result}`;
  historyList.unshift(calculation); // Add to the beginning of the history
  if (historyList.length > 5) historyList.pop(); // Limit to the last 5 calculations

  // Display the history
  historyDiv.innerHTML = historyList
    .map(item => `<div class="history-item">${item}</div>`)
    .join('');
}