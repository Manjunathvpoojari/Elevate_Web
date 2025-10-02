const API_URL = 'https://jsonplaceholder.typicode.com/users';
const container = document.getElementById('user-data-container');
const reloadButton = document.getElementById('reload-btn');

/**
 * Renders an error message on the page.
 * @param {string} message - The error message to display.
 */
function displayError(message) {
    container.innerHTML = `<div class="error-message">❌ Error: ${message}</div>`;
}

/**
 * Creates and appends a user card to the container.
 * @param {object} user - The user object from the API.
 */
function displayUser(user) {
    const userCard = document.createElement('div');
    userCard.classList.add('user-card');

    // Display Name, Email, and Address
    userCard.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email:</strong> ${user.email}</p>
        <p>
            <strong>Address:</strong> 
            ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}
        </p>
    `;
    container.appendChild(userCard);
}

/**
 * Fetches user data from the API and displays it on the page.
 */
async function fetchAndDisplayUsers() {
    // 1. Clear previous content and show loading message
    container.innerHTML = '<p class="loading-message">Loading user data...</p>';

    try {
        // 2. Use fetch to request data
        const response = await fetch(API_URL);

        // 3. Handle HTTP errors (e.g., 404, 500)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // 4. Parse the JSON response
        const users = await response.json();

        // Clear the loading message before displaying results
        container.innerHTML = ''; 

        // 5. Loop through users and display their info
        users.forEach(user => {
            displayUser(user);
        });

    } catch (error) {
        // 5. Handle network errors (e.g., no internet, blocked request)
        // This is where disabling the internet (Hint 7) will trigger an error.
        console.error("Fetch operation failed:", error);
        displayError(error.message || 'Could not connect to the API. Check your network.');
    }
}

// Initial fetch when the page loads
fetchAndDisplayUsers();

// 8. Add event listener for the reload button
reloadButton.addEventListener('click', fetchAndDisplayUsers);