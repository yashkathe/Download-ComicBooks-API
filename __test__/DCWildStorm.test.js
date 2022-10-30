const { getDCComicsWildstorm } = require('../index');

test("DC WildStorm", async () => {
    expect(await getDCComicsWildstorm(1)).toMatchSnapshot();
});
