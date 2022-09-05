const { getLatestComics } = require('./src/home');

getLatestComics(1).then(function(comics){
    console.log(comics)
})

const testFunction = (a) => {
    return `testing ${a}`;
};

module.exports = { getLatestComics, testFunction};