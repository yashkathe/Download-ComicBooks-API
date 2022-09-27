# Unoffical Comic books api 

_Not Published_

The following api returns comic book information from various publishers including marvel, dc, archie and many more publications.

## Example
Implementing the library for api calls  

```js
const comicsApi = require('comicbooks-api');

app.get('/', async (req, res) => {
  const comics = await comicsApi.getLatestComics(1) 
  res.json(news)
})
```

The following function takes two paramters:  
1. Search Query
2. Page Number  (default value = 1)

The function returns an array of objects containing comic book   information  
example object:
```js
  {
    title: 'Batman – One Dark Knight #3 (2022)',
    description: 'From the sewers under Gotham to the roiling waters of the harbor, Batman’s march toward Blackgate Prison is nearing its end…but far from being a passive prisoner, E.M.P. has his own mission to fulfill—and there’s no way he’s letting the Dark Knight stop him from carrying it out!',
    coverPage: 'https://i0.wp.com/getcomics.info/share/uploads/2022/07/Batman-One-Dark-Knight-3-2022.jpg?fit=400%2C512&ssl=1',
    info: { 
        ImageFormat: 'JPG', 
        Year: '2022', 
        Size: '634 MB' 
    },
    downloadLinks: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
    ]
  }
```  

## Report Problems
If you have any problems regarding this project, read the following [disclaimer](https://github.com/yashkathe/download-comicbooks-api/blob/master/DISCLAIMER.md)
