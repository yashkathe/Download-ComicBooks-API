const api = require('comicbooks-api');

//Get comics from Home Page
const getHomePage = async () => {
    const comics = await api.getLatestComics(1);
    console.log(comics);
};

//Get comics through search
const searchComics = async () => {
    const comics = await api.getComicsThroughSearch('batman', 1);
    console.log(comics);
};

//Get latest DC comics releases from home page
const DCHome = async () => {
    const comics = await api.getDCComics(1);
    console.log(comics);
};

//Get latest DC Vertigo comics releases
const DCVertigo = async () => {
    const comics = await api.getDCComicsVertigo(1);
    console.log(comics);
};

//Get latest DC wildstorm comics releases
const DCWildstorm = async () => {
    const comics = await api.getDCComicsWildstorm(1);
    console.log(comics);
};


//Get latest Marvel comics releases from home page
const marvelHome = async () => {
    const comics = await api.getMarvelComics(1);
    console.log(comics);
};

// getHomePage()
// searchComics()
// DCHome()
// marvelHome()
// DCVertigo()
// DCWildstorm()