const express = require('express');
const FilmsData = require('../data/films_data.js');
const filmsData = new FilmsData();

const filmsRouter = new express.Router();

filmsRouter.get('/', function (req, res) {
  const allFilms = filmsData.all();
  res.json(allFilms);
});

filmsRouter.get('/:id', function(req, res) {
  const film = filmsData.find(req.params.id);
  res.json(film);
});

filmsRouter.post('/', function(req, res) {
  const newFilm = req.body.film;
  filmsData.add(newFilm);
  res.json(filmsData.all());
});

filmsRouter.put('/:id', function(req, res) {
  const updatedFilm = req.body.film;
  filmsData.update(req.params.id, updatedFilm);
  res.json(filmsData.all());
});

filmsRouter.delete('/:id', function(req, res){
  filmsData.delete(req.params.id);
  res.json(filmsData.all());
});


module.exports = filmsRouter;
