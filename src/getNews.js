import sendRequest from './sendRequest';
import renderNews from './news/index';

const getNews = async (source, news) => {
    console.log(source);
    const articles = await sendRequest(source);
    renderNews(articles, news);
}

export default getNews;