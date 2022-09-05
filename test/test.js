const api = require('comicbooks-api')

const a = console.log(api.testFunction(1))
const b = console.log(api.getLatestComics(1))

console.log(a)
console.log(b)