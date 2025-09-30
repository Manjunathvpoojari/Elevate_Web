/**
 * Helper function to display or hide validation errors.
 * It also applies a red border to the corresponding input field.
 * @param {string} fieldId - The ID of the error message element (e.g., 'nameError').
 * @param {string} message - The error message to display.
 */
function displayError(fieldId, message) {
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
    
    // Add error border to the input field using DOM manipulation and Tailwind classes
    const inputElement = document.getElementById(fieldId.replace('Error', ''));
    if (inputElement) {
        inputElement.classList.add('border-red-500');
        inputElement.classList.remove('border-gray-300');
    }
}

/**
 * Helper function to clear previous errors for a field.
 * It removes the red border and hides the error text.
 * @param {string} fieldId - The ID of the error message element (e.g., 'nameError').
 */
function clearError(fieldId) {
    const errorElement = document.getElementById(fieldId);
    errorElement.textContent = '';
    errorElement.classList.add('hidden');
    
    // Remove error border from the input field
    const inputElement = document.getElementById(fieldId.replace('Error', ''));
    if (inputElement) {
        inputElement.classList.remove('border-red-500');
        inputElement.classList.add('border-gray-300');
    }
}

/**
 * Main validation function executed on form submission.
 * @param {Event} event - The form submission event.
 * @returns {boolean} - Returns false to prevent the default form submission.
 */
function validateForm(event) {
    event.preventDefault(); // Prevent default submission initially
    
    let isValid = true;
    
    // 1. Get input elements and values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    
    // Clear all previous errors and success message
    clearError('nameError');
    clearError('emailError');
    clearError('messageError');
    document.getElementById('success-message').classList.add('hidden');

    // Regex for basic email format validation (common client-side check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // 2. Validate Name (must not be empty)
    if (name === '') {
        displayError('nameError', 'Full Name is required.');
        isValid = false;
    }

    // 3. Validate Email (must not be empty and must match regex)
    if (email === '') {
        displayError('emailError', 'Email address is required.');
        isValid = false;
    } else if (!emailRegex.test(email)) {
        displayError('emailError', 'Please enter a valid email address (e.g., user@domain.com).');
        isValid = false;
    }

    // 4. Validate Message (must not be empty)
    if (message === '') {
        displayError('messageError', 'A message is required.');
        isValid = false;
    }

    // 5. Handle submission result
    if (isValid) {
        // Show success message
        const successElement = document.getElementById('success-message');
        successElement.classList.remove('hidden');

        console.log('Form submission successful. Data:', { name, email, message });
        
        // Clear the form fields after success
        document.getElementById('contactForm').reset();
        
        return false;
    } else {
        // Focus on the first invalid field for better UX
        if (name === '') { nameInput.focus(); }
        else if (email === '' || !emailRegex.test(email)) { emailInput.focus(); }
        else if (message === '') { messageInput.focus(); }
        
        return false;
    }
}
