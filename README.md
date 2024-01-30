# Unoffical Comic books api

The following api returns comic book information from various publishers
including marvel, dc, archie and many more publications.

Don't forget to ⭐ the
[repository](https://github.com/yashkathe/Download-ComicBooks-API)!

## Example

Implementing the library for API calls

### Example 1

```js
const comicsApi = require("comicbooks-api");

try {
	const getApi = async () => {
		const comics = await comicsApi.getLatestComics(1);
		console.log(comics);
	};
	getApi();
} catch (err) {
	console.log(err);
}
```

The above function takes one argument:

1. Page Number

### Example 2

```js
const comicsApi = require("comicbooks-api");

try {
	const getApi = async () => {
		const comics = await wait comicsApi.getComicsThroughSearch("batman", 1);
		console.log(comics);
	};
	getApi();
} catch (err) {
	console.log(err);
}
```

The above function takes two arguments:

1. Search Query
2. Page Number

The function returns an array of objects containing comic book information

### example object:

```js
  {
    title: "Batman – Beyond the White Knight #6 (2022)",
    coverPage: "https://i0.wp.com/getcomics.info/share/uploads/2022/10/Batman-Beyond-the-White-Knight-6-2022.jpg?fit=400%2C615&ssl=1",
    description: "After years of rivalry, it’s the showdown you’ve been waiting for…Jason Todd versus Dick Grayson! Who’s the best Robin? Find out this issue! Plus, with the help of an unexpected new ally, Bruce Wayne aims to take Derek Powers down for good. But will the malevolent millionaire’s newfound powers prove to be too much for the former Batman?",
    information: {
      "ImageFormat": "JPG",
      "Size": "64 MB",
      "Year": "2022",
    }
    downloadLinks: {
      DOWNLOADNOW: "link here",
      MEDIAFIRE: "link here",
      READONLINE: "link here",
      UFILE: "link here",
      ZIPPYSHARE: "link here",
    }
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

If you have any problems regarding this project, read the following
[disclaimer](https://github.com/yashkathe/Download-ComicBooks-API/blob/master/DISCLAIMER.md)
