// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Function to fetch and display user data
async function fetchUserData() {
    // Select the data container element where the user data will be displayed
    const dataContainer = document.getElementById('api-data');
    
    // Clear the loading message
    dataContainer.innerHTML = '';
    
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Create a <ul> element to hold the list of users
        const userList = document.createElement('ul');
        
        // Loop through the users array and create a list item for each user
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        // Append the user list to the data container
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // Handle errors and display a failure message
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// Invoke fetchUserData when the DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
