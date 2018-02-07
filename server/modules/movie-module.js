const Movie = require('./movie-class');

const moviesArray = [
  new Movie('Pulp Fiction', 'Quentin Terrantino', 4),
  new Movie('First Contact', 'Jonathan Frakes', 5),
  new Movie('Phantom Menace', 'George Lucas', 1),
  new Movie('Grand Budapest Hotel', 'Wes Anderson', 4)
]

module.exports = { moviesArray: moviesArray }