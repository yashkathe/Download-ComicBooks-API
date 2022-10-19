# Unoffical Comic books api 

The following api returns comic book information from various publishers including marvel, dc, archie and many more publications.

## Example
Implementing the library for API calls  

### Example 1 

```js
const comicsApi = require('comicbooks-api');

app.get('/', async (req, res) => {
    const comics = await comicsApi.getLatestComics(1) 
    res.json(comics)
})
```

The above function takes one argument:  
1. Page Number  

### Example 2  

```js
const comicsApi = require('comicbooks-api');

app.get('/', async (req, res) => {
    const comics = await comicsApi.getComicsThroughSearch('batman', 1) 
    res.json(comics)
})
```
The above function takes two arguments: 
1. Search Query 
2. Page Number

The function returns an array of objects containing comic book   information    
### example object:
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

## List of Publishers and their respective functions

- Marvel Comics  
getMarvelComics( pageNumber )

- DC Comics  
getDCComics( pageNumber )

- DC Vertigo  
getDCComicsVertigo( pageNumber )

- DC Wildstorm    
getDCComicsWildstorm( pageNumber )

- Europe Comics  
getEuropeComics( pageNumber )

- Image Comics  
getImageComics( pageNumber )

- 2000AD  
ad2000comics( pageNumber )

- After Shock  
getAftershockComics( pageNumber ) 

- Antartic Press  
getAntarticPressComics( pageNumber )

- Archie    
getArchieComics( pageNumber )

- Avatar Press  
getAvatarPressComics( pageNumber )

- Aspen  
getAspenComics( pageNumber )

- Black Mask  
getBlackMaskComics( pageNumber )

- Boom Studios  
getBoomStudiosComics( pageNumber )

- Dark Horse  
getDarkHorseComic( pageNumber )

- Dynamite  
getDynamiteComics( pageNumber )

- IDW  
getIDWComics( pageNumber )

- Lion Forge    
getLionForgeComics( pageNumber )

- Oni Press  
getOniPressComics( pageNumber )

- Valiant  
getValiantComics( pageNumber )

- ZeneScope  
getZenescopeComics( pageNumber )

## Other Functions

- Get recently published comics from all publishers  
getLatestComics( pageNumber )

- Search comics through search query  
getComicsThroughSearch( searchQuery , pageNumber )

## Report Problems
If you have any problems regarding this project, read the following [disclaimer](https://github.com/yashkathe/Download-ComicBooks-API/blob/master/DISCLAIMER.md)
