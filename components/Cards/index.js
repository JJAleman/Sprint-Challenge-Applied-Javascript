// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function articleComponent(cardInfo) {

    // Creating Elements
    const article = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const authImgDiv = document.createElement('div');
    const authImg = document.createElement('img');
    const authName = document.createElement('span');

    // Structure Elements
    article.appendChild(headline);
    article.appendChild(author);

    author.appendChild(authImgDiv);
    author.appendChild(authName);

    authImgDiv.appendChild(authImg);

    // Element Content
    headline.textContent = cardInfo.headline;
    authImg.src = cardInfo.authorPhoto;
    authName.textContent = cardInfo.authorName;


    // Add Class to Elements
    article.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    authImgDiv.classList.add('img-container');

    return article
}

const articleContainer = document.querySelector('.cards-container')


// Axios GET Request
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((res) => {
    console.log(res);
    res.data.articles.javascript.forEach(element => {
        articleContainer.appendChild(articleComponent(element));
    });
    res.data.articles.bootstrap.forEach(element => {
        articleContainer.appendChild(articleComponent(element));
    });
    res.data.articles.jquery.forEach(element => {
        articleContainer.appendChild(articleComponent(element));
    });
    res.data.articles.node.forEach(element => {
        articleContainer.appendChild(articleComponent(element));
    });
    res.data.articles.technology.forEach(element => {
        articleContainer.appendChild(articleComponent(element));
    });
})