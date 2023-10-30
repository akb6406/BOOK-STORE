
const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Create a new book
router.post('/', async (req, res) => {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

// Get a list of all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get details of a specific book by its ID
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            res.status(404).json({ error: 'Book not found' });
            return;
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a book's details
router.put('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) {
            res.status(404).json({ error: 'Book not found' });
            return;
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a book
router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndRemove(req.params.id);
        if (!book) {
            res.status(404).json({ error: 'Book not found' });
            return;
        }
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
