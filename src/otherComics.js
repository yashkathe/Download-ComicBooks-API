const { otherComics } = require('../config/sitelinks.js');
const { parentScraper } = require('../functions/parentScraper');

exports.getEuropeComics = async (page) => {
    const uri = otherComics.europeComics;
    return await parentScraper(uri, page);
};

exports.getImageComics = async (page) => {
    const uri = otherComics.imageComics;
    return await parentScraper(uri, page);
};

exports.get2000adComics = async (page) => {
    const uri = otherComics.AD2000;
    return await parentScraper(uri, page);
};

exports.getAftershockComics = async (page) => {
    const uri = otherComics.aftershockComics;
    return await parentScraper(uri, page);
};

exports.getAntarticPressComics = async (page) => {
    const uri = otherComics.antarticPress;
    return await parentScraper(uri, page);
};

exports.getArchieComics = async (page) => {
    const uri = otherComics.archie;
    return await parentScraper(uri, page);
};

exports.getAvatarPressComics = async (page) => {
    const uri = otherComics.avatarPress;
    return await parentScraper(uri, page);
};

exports.getAspenComics = async (page) => {
    const uri = otherComics.aspen;
    return await parentScraper(uri, page);
};

exports.getBlackMaskComics = async (page) => {
    const uri = otherComics.blackMaskStudios;
    return await parentScraper(uri, page);
};

exports.getBookStudiosComics = async (page) => {
    const uri = otherComics.boomStudios;
    return await parentScraper(uri, page);
};

exports.getDarkHorseComics = async (page) => {
    const uri = otherComics.darkHorse;
    return await parentScraper(uri, page);
};

exports.getDynamiteComics = async (page) => {
    const uri = otherComics.dynamiteEntertainment;
    return await parentScraper(uri, page);
};

exports.getIDWComics = async (page) => {
    const uri = otherComics.idw;
    return await parentScraper(uri, page);
};

exports.getLionForgeComics = async (page) => {
    const uri = otherComics.lionForgeComics;
    return await parentScraper(uri, page);
};

exports.getOniPressComics = async (page) => {
    const uri = otherComics.oniPress;
    return await parentScraper(uri, page);
};

exports.getValiantComics = async (page) => {
    const uri = otherComics.valiant;
    return await parentScraper(uri, page);
};

exports.getZenescopeComics = async (page) => {
    const uri = otherComics.zenescope;
    return await parentScraper(uri, page);
};