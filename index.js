const { getLatestComics } = require('./src/home');
const { getComicsThroughSearch } = require('./src/search');
const { getDCComics, getDCComicsVertigo, getDCComicsWildstorm } = require('./src/dccomics');
const { getMarvelComics } = require('./src/marvelcomics');

module.exports = {
    getLatestComics,
    getComicsThroughSearch,
    getDCComics,
    getDCComicsVertigo,
    getDCComicsWildstorm,
    getMarvelComics
};