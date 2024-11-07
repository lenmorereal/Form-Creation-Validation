// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Select the form and feedback division
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Add event listener for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Retrieve user input values and trim whitespace
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize validation flag and error messages array
        let isValid = true;
        const messages = [];

        // Validate username
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Validate email
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must contain '@' and '.' symbols.");
        }

        // Validate password
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback to the user
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Success color
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Join messages with line breaks
            feedbackDiv.style.color = "#dc3545"; // Error color
        }
    });
});
// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch user data and display it
async function fetchUserData() {
  // Select the data container element
  const dataContainer = document.getElementById('api-data');
  
  try {
    // Display a loading message while fetching data
    dataContainer.innerHTML = "Loading user data...";
    
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const users = await response.json();
    
    // Clear the loading message
    dataContainer.innerHTML = "";
    
    // Create and populate the user list
    const userList = document.createElement('ul');
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = user.name;
      userList.appendChild(listItem);
    });
    
    // Append the user list to the data container
    dataContainer.appendChild(userList);

  } catch (error) {
    // Handle any errors
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error("Error fetching user data:", error);
  }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
