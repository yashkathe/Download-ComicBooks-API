const { DC } = require('../config/sitelinks');
const { parentScraper } = require('../functions/parentScraper');

exports.getDCComics = async (page) => {
    const uri = DC.dcHome;
    return await parentScraper(uri, page);
};

exports.getDCComicsVertigo = async (page) => {
    const uri = DC.dcVertigo;
    return await parentScraper(uri, page);
};

exports.getDCComicsWildstorm = async (page) => {
    const uri = DC.dcWildstorm;
    return await parentScraper(uri, page);
};