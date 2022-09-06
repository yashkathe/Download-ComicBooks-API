//get info through searches

const { URL } = require('../config/sitelinks');
const cheerio = require('cheerio');
const axios = require('axios');

exports.getComicsThroughSearch = (query, page = 1) => {

    return new Promise((resolve, reject) => {
        search = query.trim().split(" ").join('+');

        axios(`${URL.searchUri1}/${page}/${URL.searchUri2}${search}`).then(
            response => {
                const html = response.data;
                const $ = cheerio.load(html);

                const comics = [];

                const error = $('.pagination-button').text();
                if(error === "No Result: Please try another search query.") {
                    reject("didn't find any comics");
                }

                $('article').each(
                    function() {
                        let coverPage = $(this).find('img').attr('src');
                        let valid = $(this).find('.post-info').children().remove().end().text();
                        let href = $(this).find('a').attr('href');

                        if(valid) {
                            const promise = new Promise((resolve, reject) => {
                                axios(`${href}`).then(response => {

                                    const downloadLinksArr = [];

                                    const html = response.data;
                                    const $ = cheerio.load(html);

                                    const title = $('.post-info').find('h1').text().trim();
                                    const description = $('.post-contents').find('p').first().children().remove().end().text().trim();
                                    const infoArr = $('.post-contents > p:nth-child(7)').text().split("|");
                                    const info = infoArr.splice(1, 3);

                                    $('.aio-pulse').each(function() {
                                        const downloadLinks = $(this).children('a').attr('href');
                                        const downloadTitle = $(this).children('a').attr('title');
                                        let downloadLinksObj = {};
                                        downloadLinksObj[ downloadTitle ] = downloadLinks;
                                        downloadLinksArr.push(downloadLinksObj);
                                    });
                                    const completeObj = {
                                        title, description, coverPage, info, downloadLinks: downloadLinksArr
                                    };
                                    resolve(completeObj);
                                }).catch(
                                    err => {
                                        if(err) { reject("promise failed on first"); }
                                    }
                                );
                            }
                            ).catch(err => {
                                if(err) { reject("promise failed on 2nd"); }
                            });
                            comics.push(promise);
                        }
                    }
                );
                resolve(comics);
            });
    });
};
