import renderArticle from '../article/index';
import { divFactory } from '../patterns';
import './style.less';

const news = document.querySelector('.news');

const renderNews = articles => {
    news.innerHTML = '';
    const articlesList = divFactory.create();
    articles.forEach(article => {
        const articleItem = renderArticle(article);
        articlesList.appendChild(articleItem);
    });

    news.scrollIntoView();
    news.innerHTML = articlesList.innerHTML;
}

export default renderNews;