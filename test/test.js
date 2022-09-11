const api = require('comicbooks-api');

//Get comics from Home Page

const getHomePage = async () => {
    const comics = await api.getLatestComics(1)
    // console.log(comics)
}

//Get comics through search

const searchComics = async () => {
    const comics = await api.getComicsThroughSearch('batman', 1)
    // console.log(comics)
}

