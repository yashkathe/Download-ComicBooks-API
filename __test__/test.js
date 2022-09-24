const comicbookAPI = require('comicbooks-api');

//Get comics from Home Page
const getHomePage = async () => {
    const comics = await comicbookAPI.getLatestComics(1);
    console.log(comics);
};

//Get comics through search
const searchComics = async () => {
    const comics = await comicbookAPI.getComicsThroughSearch('batman', 1);
    console.log(comics);
};

//Get latest DC comics releases from home page
const DCHome = async () => {
    const comics = await comicbookAPI.getDCComics(1);
    console.log(comics);
};

//Get latest DC Vertigo comics releases
const DCVertigo = async () => {
    const comics = await comicbookAPI.getDCComicsVertigo(1);
    console.log(comics);
};

//Get latest DC wildstorm comics releases
const DCWildstorm = async () => {
    const comics = await comicbookAPI.getDCComicsWildstorm(1);
    console.log(comics);
};


//Get latest Marvel comics releases from home page
const marvelHome = async () => {
    const comics = await comicbookAPI.getMarvelComics(1);
    console.log(comics);
};

// getHomePage() 

// searchComics()

// marvelHome()

// DCHome()
// DCVertigo()
// DCWildstorm()