//get info for latest comics from home page

const { URL } = require('../config/sitelinks');
const { parentScraper } = require('../functions/parentScraper');

exports.getLatestComics = async (page) => {
    const uri = URL.base;
    return await parentScraper(uri, page);
};