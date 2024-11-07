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

    // Check if response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Convert the response to JSON format
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
    // Handle any errors by clearing the loading message and displaying an error message
    dataContainer.innerHTML = 'Failed to load user data.';
    console.error("Error fetching user data:", error);
  }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
