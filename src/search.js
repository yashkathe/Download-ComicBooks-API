//get info through searches

const { URL } = require('../endpoints/endpoints');
const cheerio = require('cheerio');
const axios = require('axios');

const { infoScraper } = require('../functions/infoScraper');

exports.getComicsThroughSearch = (query, page = 1) => {

    return new Promise((resolve, reject) => {
        search = query.trim().split(" ").join('+');

        axios(`${URL.searchUri1}/${page}/${URL.searchUri2}${search}`).then(
            response => {
                const $ = cheerio.load(response.data);

                const comics = [];

                const error = $('.pagination-button').text();
                if(error === "No Result: Please try another search query.") {
                    reject("No results availabe for you search query");
                }

                $('article').each(
                    function() {
                        let coverPage = $(this).find('img').attr('src');
                        let valid = $(this).find('.post-info').children().remove().end().text();
                        let href = $(this).find('a').attr('href');

                        if(valid) {
                            const promise = new Promise((resolve, reject) => {
                                axios(`${href}`).then(response => {

                                    const downloadLinks = [];

                                    const $ = cheerio.load(response.data);

                                    const title = $('.post-info').find('h1').text().trim();
                                    const description = $('.post-contents').find('p').first().children().remove().end().text().trim();
                                    const scrapedInfo = $('.post-contents > p:nth-child(7)').text().split("|").splice(1, 3).join().toString();

                                    $('.aio-pulse').each(function() {
                                        const scrapedDownloadLinks = $(this).children('a').attr('href');
                                        const scrapedDownloadTitle = $(this).children('a').attr('title');
                                        let downloadLink = {};
                                        downloadLink[ scrapedDownloadTitle ] = scrapedDownloadLinks;
                                        downloadLinks.push(downloadLink);
                                    });

                                    const info = infoScraper(scrapedInfo);

                                    const comic = {
                                        title, description, coverPage, info, downloadLinks
                                    };
                                    resolve(comic);
                                }).catch(
                                    err => {
                                        if(err) { reject(err); }
                                    }
                                );
                            }
                            ).catch(err => {
                                if(err) { reject(err); }
                            });
                            comics.push(promise);
                        }
                    }
                );
                resolve(comics);
            });
    }).then(function(comics) {
        return Promise.all(comics);
    }).catch(err => {
        if(err) {
            console.log(err);
        }
    });
};
