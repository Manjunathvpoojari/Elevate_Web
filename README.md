Web Development Internship Tasks
This repository contains the solutions for four tasks completed as part of the Web Development Internship, covering front-end fundamentals, dynamic client-side scripting, responsive design, and back-end API development.

🛠️ Web Development Internship Tasks
➡️ Task 1: Responsive Landing Page
Project Overview

The task involved building a clean, responsive landing page with three main sections:
    - A header with a logo and navigation links.
    - A hero section featuring a main heading, a paragraph, and a call-to-action (CTA) button.
    - A footer with social links.

Technologies Used

HTML5: For structuring the page content.

CSS3: For styling, including colors, fonts, and layout.

Flexbox: Used for flexible and efficient layouts.

Media Queries: Implemented for full responsiveness across different screen sizes.

How to View

Clone the Repository: git clone [your-github-repo-link]

Open in VS Code: Open the project folder.

Use Live Server: Right-click index.html and select "Open with Live Server" to view the page.

Deliverables

index.html: Main HTML file.

style.css: CSS file with all styling and responsiveness logic.

logo.jpg: Logo image used in the header.

➡️ Task 2: To-Do List Web App (Front-end only)
Project Overview

The application allows users to:
    - Add new tasks via an input field and a button.
    - Mark tasks as completed by clicking on them, which toggles a strike-through effect.
    - Delete tasks individually using a remove button.

The UI updates instantly without requiring a page reload.

Technologies Used

HTML5: For the basic structure, including the input field, add button, and the list container.

CSS3: For styling the app, ensuring a clean and user-friendly interface.

Vanilla JavaScript: The core technology for all functionality, including event listeners, creating and appending new elements to the DOM, and dynamically toggling CSS classes.

How to View
The setup is the same as Task 1. Simply open the index.html file for Task 2 in your browser or use the Live Server extension in VS Code.

Deliverables

index.html: HTML file for the To-Do list structure.

style.css: CSS file for the app's visual design.

script.js: JavaScript file containing all the functional logic.

➡️ Task 3: REST API to Manage a List of Books (Back-end)
Project Overview

The objective was to build a simple RESTful API with full CRUD (Create, Read, Update, Delete) functionality to manage a list of books. Data is stored in memory to focus solely on API routing and HTTP methods.

Key Endpoints Implemented
| HTTP Method | Endpoint | Description |
| :--- | :--- | :--- |
| GET | /books | Retrieves a list of all books. |
| POST | /books | Adds a new book to the list (Create). |
| PUT | /books/:id | Updates an existing book by its ID (Update). |
| DELETE | /books/:id | Removes a book from the list by its ID (Delete). |

Technologies Used

Node.js: The JavaScript runtime environment.

Express.js: The web framework used for setting up the server, defining routes, and handling requests.

JSON Handling: Parsing request bodies and sending structured responses.

How to Test
1.  Initialize Project: Run npm init -y and install Express: npm install express.
2.  Run Server: Execute the main file using node server.js (or node app.js).
3.  Use Postman: Test all four endpoints by sending requests to http://localhost:3000/books and verifying the responses.

➡️ Task 4: Mobile-Friendly Conversion using Media Queries
Project Overview

The objective was to convert a desktop-only page to a fully mobile-friendly layout by implementing CSS media queries for the 768px breakpoint.

Key responsive transformations implemented:

Vertical Stacking: The main article content and sidebar were switched from a horizontal flex layout to a vertical column stack.

Navigation Restructure: The horizontal header navigation was converted into a vertical, full-width list suitable for touch input.

Fluid Scaling: Ensured the feature image and all content scale within the viewport to eliminate horizontal scrolling and overflow issues.

Technologies Used

HTML5: Included the essential <meta name="viewport"> tag to enable device scaling.

CSS3: Applied Media Queries to target mobile devices (max-width: 768px).

Flexbox: Used in conjunction with media queries to dynamically control content flow.

How to Test

Open the file in a web browser.

Use Chrome DevTools (or similar browser tools) and activate the Device Toolbar.

Set the viewport width to 768px or less to observe the layout transform from two columns to stacked rows.

Deliverables

responsive_layout_with_media_queries.html: A single HTML file containing the structure and all embedded CSS, including the responsive media queries.
