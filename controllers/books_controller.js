const express = require('express');
const BooksData = require('../data/books_data.js');
const booksData = new BooksData();

const booksRouter = new express.Router();

booksRouter.get('/', function (req, res) {
  const allBooks = booksData.all();
  res.json(allBooks);
});

booksRouter.get('/:id', function(req, res) {
  const books = booksData.find(req.params.id);
  res.json(books);
});

booksRouter.post('/', function(req, res) {
  const newFilm = req.body.books;
  booksData.add(newFilm);
  res.json(booksData.all());
});

booksRouter.put('/:id', function(req, res) {
  const updatedFilm = req.body.books;
  booksData.update(req.params.id, updatedFilm);
  res.json(booksData.all());
});

booksRouter.delete('/:id', function(req, res){
  booksData.delete(req.params.id);
  res.json(booksData.all());
});


module.exports = booksRouter;
