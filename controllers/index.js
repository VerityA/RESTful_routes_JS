const express = require('express');
const router = new express.Router();

const filmsRouter = require('./films_controller.js');
const booksRouter = require('./books_controller.js');

router.use('/films', filmsRouter);
router.use('/books', booksRouter);

module.exports = router;
