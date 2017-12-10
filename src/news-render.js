const renderNews = (articles, news) => {
    news.innerHTML = '';
    let articlesList = '';

    articles.forEach(article => {
        const value = renderArticle(article);
        articlesList += value.innerHTML;
    });

    news.scrollIntoView();
    news.innerHTML = articlesList;
}

const renderArticle = data => {
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

module.exports = { renderNews };