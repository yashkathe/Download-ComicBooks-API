const { getDCComicsVertigo } = require('../index');

test("DC Vertigo", async () => {
    expect(await getDCComicsVertigo(1)).toMatchSnapshot();
});

