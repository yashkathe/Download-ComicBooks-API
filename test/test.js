const api = require('comicbooks-api');

api.getLatestComics(1).then(function(comics) {
    Promise.all(comics).then(values => {
        return values;
    });
});

api.getComicsThroughSearch('batman', 2).then(function(comics) {
    Promise.all(comics).then(values => {
        return values;
    });
})

