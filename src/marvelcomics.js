const { Marvel } = require('../config/sitelinks');
const cheerio = require('cheerio');
const axios = require('axios');

exports.getMarvelComics = (page) => {

    return new Promise((resolve, reject) => {

        axios(`${Marvel.marvelHome}/${page}`).then(response => {
            const html = response.data;
            const $ = cheerio.load(html);

            const comics = [];

            $('article').each(
                function() {
                    // let id = $(this).attr("id");
                    // let title = $(this).find('.post-title').text();
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
                                const info = infoArr.splice(1, 3).join();

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
                        });
                        comics.push(promise);
                    }
                }
            );
            resolve(comics);
        }).catch(err => {
            if(err) { reject(err); }
        });
    }).then(function(comics) {
        return Promise.all(comics).then(values => {
            return values;
        });
    }).catch(err => {
        if(err) {
            console.log(err);
        }
    });
};