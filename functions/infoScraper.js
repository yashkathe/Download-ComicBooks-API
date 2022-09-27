exports.infoScraper = (str) => {
    const string2 = str.split(",");
    const string3 = string2.map(x =>
        x.split(":")
    );

    const infoObj = {};
    for(let i in string3) {
        infoObj[ string3[ i ][ 0 ].replace(`'`, ``).trim().split(" ").join("") ] = string3[ i ][ 1 ].replace(`'`, ``).trim();
    }

    return infoObj;
};