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
