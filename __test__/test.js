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

const europeComics = async () => {
    const comics = await comicbookAPI.getEuropeComics(1);
    console.log(comics);
};

const imageComics = async () => {
    const comics = await comicbookAPI.getImageComics(1);
    console.log(comics);
};

const ad2000comics = async () => {
    const comics = await comicbookAPI.get2000adComics(1);
    console.log(comics);
};

const afterShockComics = async () => {
    const comics = await comicbookAPI.getAftershockComics(1);
    console.log(comics);
};

const antarticPressComics = async () => {
    const comics = await comicbookAPI.getAntarticPressComics(1);
    console.log(comics);
};

const archieComics = async () => {
    const comics = await comicbookAPI.getArchieComics(1);
    console.log(comics);
};

const avatarComics = async () => {
    const comics = await comicbookAPI.getAvatarPressComics(1);
    console.log(comics);
};

const aspenComics = async () => {
    const comics = await comicbookAPI.getAspenComics(1);
    console.log(comics);
};

const blackMaskComics = async () => {
    const comics = await comicbookAPI.getBlackMaskComics(1);
    console.log(comics);
};

const bookstudioComics = async () => {
    const comics = await comicbookAPI.getBookStudiosComics(1);
    console.log(comics);
};

const darkhorseComics = async () => {
    const comics = await comicbookAPI.getDarkHorseComics(1);
    console.log(comics);
};

const dynamiteComics = async () => {
    const comics = await comicbookAPI.getDynamiteComics(1);
    console.log(comics);
};

const IDWComics = async () => {
    const comics = await comicbookAPI.getIDWComics(1);
    console.log(comics);
};

const lionForgeComics = async () => {
    const comics = await comicbookAPI.getLionForgeComics(1);
    console.log(comics);
};

const oniPressComics = async () => {
    const comics = await comicbookAPI.getOniPressComics(1);
    console.log(comics);
};

const valiantComics = async () => {
    const comics = await comicbookAPI.getValiantComics(1);
    console.log(comics);
};

const zenescopeComics = async () => {
    const comics = await comicbookAPI.getZenescopeComics(1);
    console.log(comics);
};


// getHomePage() 

// searchComics()

// marvelHome()

// DCHome()
// DCVertigo()
// DCWildstorm()

// europeComics()
// imageComics()
// ad2000comics()
// afterShockComics()
// antarticPressComics()
// archieComics()
// avatarComics()
// aspenComics()
// blackMaskComics()
// bookstudioComics()
// darkhorseComics()
// dynamiteComics()
// IDWComics()
// lionForgeComics()
// oniPressComics()
// valiantComics()
// zenescopeComics()