import './style.less';
import { divFactory, LogDecorator } from '../patterns'

const renderArticle = data => {
    const { title, publishedAt, description, urlToImage } = data;
    const loggerDecorator = new LogDecorator(divFactory);
    const articleItem = loggerDecorator.create({class: 'news-item'});

    articleItem.innerHTML = 
        `<img class="news-item-img" src=${urlToImage} />
        <div class="news-item-title">${title}</div>
        <div class="news-item-description">${description}</div>
        <div class="news-item-date">${publishedAt}</div>`;

    return articleItem;
}

export default renderArticle;