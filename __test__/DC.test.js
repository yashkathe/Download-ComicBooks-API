const { getDCComics } = require('../index');

test("DC Comics", async () => {
    expect(await getDCComics(1)).toMatchSnapshot();
});