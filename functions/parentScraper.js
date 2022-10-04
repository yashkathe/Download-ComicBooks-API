const cheerio = require('cheerio');
const axios = require('axios');

const { infoScraper } = require('./infoScraper');

exports.parentScraper = (uri, page) => {

    return new Promise((resolve, reject) => {

        axios(`${uri}/${page}`).then(response => {
            const html = response.data;
            const $ = cheerio.load(html);

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

                                const downloadLinksArr = [];

                                const html = response.data;
                                const $ = cheerio.load(html);

                                const title = $('.post-info').find('h1').text().trim();
                                const description = $('.post-contents').find('p').first().children().remove().end().text().trim();
                                const infoArr = $('.post-contents > p:nth-child(7)').text().split("|");
                                const infoStr = infoArr.splice(1, 3).join().toString();
                                const pageNumber = $('ul.page-numbers > li:nth-child(5) > a:nth-child(1)').text()
                                console.log(pageNumber)

                                $('.aio-pulse').each(function() {
                                    const downloadLinks = $(this).children('a').attr('href');
                                    const downloadTitle = $(this).children('a').attr('title');
                                    let downloadLinksObj = {};
                                    downloadLinksObj[ downloadTitle ] = downloadLinks;
                                    downloadLinksArr.push(downloadLinksObj);
                                });
                                let info;
                                // remove out all the empty info strings
                                if(infoStr.length !== 0) {
                                    info = infoScraper(infoStr);
                                }
                                //store all scraped data into an objects
                                const comic = {
                                    pageNumber ,title, description, coverPage, info, downloadLinks: downloadLinksArr
                                };
                                resolve(comic);
                            }).catch(
                                err => {
                                    if(err) { reject(err); }
                                }
                            );
                        });
                        comics.push(promise);
                    }
                }
            );
            resolve(comics);
            return Promise.all(comics);
        }).catch(err => {
            if(err) { reject(err); }
        });
    }).then(function(comics) {
        return Promise.all(comics);
    }).catch(err => {
        if(err) {
            console.log(err);
        }
    });
};