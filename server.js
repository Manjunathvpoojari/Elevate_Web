const express = require('express');
const app = express();
const PORT = 3000;

// Middleware: Tells Express to parse incoming requests with JSON payloads (e.g., from Postman)
app.use(express.json());

// 4. In-memory Storage: The array to hold our book objects.
let books = [
    { id: 1, title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams" },
    { id: 2, title: "Pride and Prejudice", author: "Jane Austen" }
];
let nextId = books.length + 1; // Counter for new books

// --- API ENDPOINTS (Routes) ---

// 5. GET /books: Read all books (R in CRUD)
app.get('/books', (req, res) => {
    // Respond with a 200 OK status and the list of books
    res.status(200).json(books);
});

// 6. POST /books: Create a new book (C in CRUD)
app.post('/books', (req, res) => {
    // Get data from the request body (sent by Postman)
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
    }

    const newBook = {
        id: nextId++,
        title,
        author
    };

    books.push(newBook);
    // Respond with 201 Created status and the new book object
    res.status(201).json(newBook);
});

// 7. PUT /books/:id: Update a specific book (U in CRUD)
app.put('/books/:id', (req, res) => {
    // Get the ID from the URL (e.g., /books/1)
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ message: 'Book not found' });
    }

    const { title, author } = req.body;

    // Update the book's properties if they are provided in the request body
    if (title) books[bookIndex].title = title;
    if (author) books[bookIndex].author = author;

    res.status(200).json(books[bookIndex]);
});

// 8. DELETE /books/:id: Remove a specific book (D in CRUD)
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = books.length;

    // Create a new array that excludes the book with the matching ID
    books = books.filter(b => b.id !== id);

    if (books.length < initialLength) {
        // 204 No Content is the standard response for successful deletion
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

// 3. Start the Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});