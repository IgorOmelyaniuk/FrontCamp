const API_KEY = '66e811207ca040b7815bd78758d16e1b';
const API_URL = 'https://newsapi.org/v2/everything?';
const news = document.querySelector('.news');
const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('.navigation-link');

nav.addEventListener('click', e => getNews(e));

const getNews = async (e) =>  {
    const element = e.target;
    
    if (element.classList.contains('navigation-link')) {
        const source = element.dataset.source;
        toggleActiveClass(element);
        const articles = await sendRequest(source);
        renderNews(articles);
    }
}

const toggleActiveClass = element => {
    const news = document.querySelector('.news');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

const sendRequest = async (source) => {
    const response = await fetch(`${API_URL}sources=${source}&apiKey=${API_KEY}`);
    const { articles } = await response.json();
    return articles;
}

const renderNews = (articles) => {
    news.innerHTML = '';
    let articlesList = '';

    articles.forEach(article => {
        const value = renderArticle(article, news);
        articlesList += value.innerHTML;
    });

    news.scrollIntoView();
    news.innerHTML = articlesList;
}

const renderArticle = (data, news) => {
    const article = document.createElement('div');
    const { title, publishedAt, description, urlToImage } = data;
    article.innerHTML += 
    `<div class="news-item">
        <img class="news-item-img" src=${urlToImage} />
        <div class="news-item-title">${title}</div>
        <div class="news-item-description">${description}</div>
        <div class="news-item-date">${publishedAt}</div>
    </div>`;

    return article;
}