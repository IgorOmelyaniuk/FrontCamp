const links = document.querySelectorAll('.navigation-link');

links.forEach(link => link.addEventListener('click', e => getNews(e)));

const getNews = e =>  {
    const element = e.target;
    toggleActiveClass(element);
    const source = element.dataset.source;
    sendRequest(source);
}

const toggleActiveClass = element => {
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}

const sendRequest = source => {
    fetch(`https://newsapi.org/v2/everything?sources=${source}&apiKey=66e811207ca040b7815bd78758d16e1b`)
    .then(response => response.json())
    .then(data => {
        const {articles} = data;
        document.querySelector('.news').innerHTML = '';
        articles.forEach(article => renderArticle(article))
    })
    .catch(err => alert(`Request error: ${err}`))
}

const renderArticle = data => {
    const news = document.querySelector('.news');
    const article = document.createElement('div');
    article.classList.add('news-item');
    const { title, publishedAt, description, urlToImage } = data;
    renderElement('img', 'news-item-img', urlToImage, article);
    renderElement('div', 'news-item-title', title, article);
    renderElement('div', 'news-item-description', description, article);
    renderElement('div', 'news-item-date', publishedAt, article);
    news.appendChild(article);
}

const renderElement = (tag, className, content, parent) => {
    const element = document.createElement(tag);
    element.className = className;

    if (tag === 'img') {
        element.src = content;
    } else {
        element.innerHTML = content;
    }
    
    parent.appendChild(element);
}