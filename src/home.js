//get info for latest comics from home page

const { URL } = require('../endpoints/endpoints');
const { parentScraper } = require('../functions/parentScraper');

exports.getLatestComics = async (page) => {
    const uri = URL.base;
    return await parentScraper(uri, page);
};