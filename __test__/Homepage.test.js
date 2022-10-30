const { getLatestComics } = require('../index');

test("Home Page", async () => {
    expect(await getLatestComics(1)).toMatchSnapshot();
});