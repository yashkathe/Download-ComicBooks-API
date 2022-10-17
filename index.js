const { getLatestComics } = require('./src/home');
const { getComicsThroughSearch } = require('./src/search');
const { getDCComics, getDCComicsVertigo, getDCComicsWildstorm } = require('./src/dccomics');
const { getMarvelComics } = require('./src/marvelcomics');
const { getEuropeComics, getImageComics, get2000adComics, getAftershockComics,
    getAntarticPressComics, getArchieComics, getAvatarPressComics, getAspenComics,
    getBlackMaskComics, getBoomStudiosComics, getDarkHorseComics, getDynamiteComics,
    getIDWComics, getLionForgeComics, getOniPressComics, getValiantComics,
    getZenescopeComics } = require('./src/otherComics');

module.exports = {
    getLatestComics,
    getComicsThroughSearch,
    getDCComics,
    getDCComicsVertigo,
    getDCComicsWildstorm,
    getMarvelComics,
    getEuropeComics,
    getIDWComics,
    getImageComics,
    get2000adComics,
    getAftershockComics,
    getAntarticPressComics,
    getArchieComics,
    getAvatarPressComics,
    getAspenComics,
    getBlackMaskComics,
    getBoomStudiosComics,
    getDarkHorseComics,
    getDynamiteComics,
    getLionForgeComics,
    getOniPressComics,
    getValiantComics,
    getZenescopeComics
};
