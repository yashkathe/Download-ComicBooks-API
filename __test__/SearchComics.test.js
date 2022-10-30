const { getComicsThroughSearch } = require('../index');


test("Search Comics", async () => {
    expect(await getComicsThroughSearch('Batman', 1)).toMatchSnapshot();
});

