const { getLatestComics } = require('./src/home');

getLatestComics(2).then(function(comics){
    Promise.all(comics).then(values => {
        console.log(values)
        return values
      });
})

// getLatestComics(1)

const testFunction = (a) => {
    return `testing ${a}`;
};

module.exports = { getLatestComics, testFunction};