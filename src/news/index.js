import renderArticle from '../article/index';
import './style.less';

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

export default renderNews;