const { Marvel } = require('../endpoints/endpoints');
const {parentScraper} = require('../functions/parentScraper')

exports.getMarvelComics = async (page) => {
    const uri = Marvel.marvelHome
    return await parentScraper(uri,page)
};