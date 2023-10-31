# Book Store API

## Description

The Book Store API is a RESTful service for managing books. It provides Create, Read, Update, and Delete (CRUD) operations for book records. This README explains how to use the API, its endpoints, and provides examples.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Sample Requests and Responses](#sample-requests-and-responses)


## Features

- Create a new book with title, author, and summary.
- Retrieve a list of all books.
- View details of a specific book by its ID.
- Update a book's details.
- Delete a book.

## Prerequisites

Before using the Book Store API, you should have the following installed:

- Node.js
- MongoDB
- Git (optional)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/book-store-api.git
   cd book-store-api

   Install dependencies:
   ```npm install```


Configure MongoDB connection by editing `config/db.js`.
Start the server:```npm start```


## Usage
To use the API, you can make HTTP requests to the defined endpoints. You can use tools like Postman or `Thunder Client` (extension on vs code) for testing.
## API Endpoints
* POST /api/books: Create a new book.
* GET /api/books: Retrieve a list of all books.
* GET /api/books/:id: View details of a specific book by its ID.
* PUT /api/books/:id: Update a book's details.
* DELETE /api/books/:id: Delete a book.
## Sample Requests and Responses
Create a new book

```POST /api/books
Content-Type: application/json

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "summary": "A classic novel about the American Dream."
}
```

Response (201 Created):
 ```{
  "_id": "12345",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "summary": "A classic novel about the American Dream."
}
```

Retrieve a list of all books
```GET /api/books
```
Response (200 OK):
```[
  {
    "_id": "12345",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "summary": "A classic novel about the American Dream."
  },
  {
    "_id": "67890",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "summary": "A timeless novel addressing racial injustice."
  }
]
```

thanks you