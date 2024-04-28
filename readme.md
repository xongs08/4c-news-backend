# NEWS ARTICLES API
### Live service:
https://fourc-news-backend.onrender.com/

## About this project
The first time i thinked about starting this project, i was at my english class and we were talking about news and how fake news can harm someone's professional career and life, then i had the idea: "Why not create my own website so me & my friends could manipulate the media by ourselves for fun", (yeah, great idea i know) and that's why i created this project.

## Folder Structure

    .
    ├── src               # Source Files
    │   ├── controllers   # Route Control Functions
    │   └── utils         # Utilities
    └──  tests            # Quick Test Scripts

## Technologies
- [**Bun**](https://bun.sh): Fast all-in-one Javascript runtime & toolkit;
- [**ExpressJs**](https://expressjs.com): Node.js framework that facilitates the creation of HTTP servers;
- [**Firestore**](https://firebase.google.com/docs/firestore): Google's document-oriented NoSQL database, ideal for data synchronization.

## Testing on your machine
```bash
git clone https://github.com/xongs08/4c-news-backend.git
```

Installing dependencies
```bash
bun install
```

Starting the server
```
bun run nodemon
```

Remember: Create a ```.env``` file in the root of the directory with your Firebase configs
```bash
apiKey=
authDomain=
projectId=
storageBucket=
messagingSenderId=
appId=
```

## Functions
- [**Create Article**](/tests/CreateArticleTest.ts): Register a new article to articles collection via POST
- [**Get Article**](/tests/GetArticleTest.ts): Returns the article you specified the id via GET
- [**Load All Articles**](/tests/LoadArticlesTest.ts): Return all the existents articles via GET
- [**Remove Article**](/tests/RemoveArticleTest.ts): Remove the article you specified the id via DELETE
- [**Update Article**](/tests/UpdateArticleTest.ts): Update/add field to article specified the id via PUT
