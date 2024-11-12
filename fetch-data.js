// Define an async function to fetch and display user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create an unordered list to hold user names
        const userList = document.createElement('ul');

        // Loop through the users and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the data container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Fetch error:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
