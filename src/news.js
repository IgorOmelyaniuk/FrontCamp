import sendRequest from './news-request';
import { renderNews } from './news-render';

const getNews = async (source, news) => {
    const articles = await sendRequest(source);
    renderNews(articles, news);
}

export default getNews;