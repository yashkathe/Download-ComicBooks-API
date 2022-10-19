exports.infoScraper = (str) => {
    if(str.length !== 0) {
        const infoString = str.split(",").map(x =>
            x.split(":")
        );

        const info = {};
        for(let i in infoString) {
            info[ infoString[ i ][ 0 ].replace(`'`, ``).trim().split(" ").join("") ]
                = infoString[ i ][ 1 ].replace(`'`, ``).trim();
        }
        return info;
    }
};