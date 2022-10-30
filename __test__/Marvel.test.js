const { getMarvelComics } = require('../index');


test("Marvel Comics", async () => {
    expect(await getMarvelComics(1)).toMatchSnapshot();
});

