const cheerio = require('cheerio');
const axios = require('axios');

const { infoScraper } = require('./infoScraper');

exports.parentScraper = (uri, page) => {

    return new Promise((resolve, reject) => {

        axios(`${uri}/${page}`).then(response => {

            const $ = cheerio.load(response.data);
            const comics = [];

            $('article').each(
                function() {

                    let coverPage = $(this).find('img').attr('src');
                    let valid = $(this).find('.post-info').children().remove().end().text();
                    let href = $(this).find('a').attr('href');

                    //only include individual comics not the bundles
                    if(valid) {
                        const promise = new Promise((resolve, reject) => {
                            axios(`${href}`).then(response => {

                                const $ = cheerio.load(response.data);

                                const title = $('.post-info').find('h1').text().trim();
                                const description = $('.post-contents').find('p').first().children().remove().end().text().trim();
                                const scrapedInfo = $('.post-contents > p:nth-child(7)').text().split("|").splice(1, 3).join().toString();

                                let downloadLinks = {};
                                $('.aio-pulse').each(function() {
                                    const scrapedDownloadTitle = $(this).children('a').attr('title').split(' ').join('').toLocaleUpperCase();
                                    const scrapedDownloadLinks = $(this).children('a').attr('href');
                                    downloadLinks[ scrapedDownloadTitle ] = scrapedDownloadLinks;
                                });

                                const information = infoScraper(scrapedInfo);

                                const comic = {
                                    title, coverPage, description, information, downloadLinks
                                };
                                resolve(comic);
                            }).catch(
                                err => {
                                    if(err) { reject(err); }
                                });
                        });
                        comics.push(promise);
                    }
                });
            resolve(Promise.all(comics));
        }).catch(err => {
            if(err) { reject(err); }
        });
    });
};