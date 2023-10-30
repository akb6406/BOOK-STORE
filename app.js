const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const db = require('./config/db');
const Book = require('./models/book');

app.use(bodyParser.json());

// Define API routes
const booksRoutes = require('./routes/books');
app.use('/api/books', booksRoutes);

app.get('/', async (req, res) => {
    try {
        res.send("book store home")
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
