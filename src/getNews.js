import sendRequest from './sendRequest';
import renderNews from './news/index';
import store from './store';

const getNews = async () => {
    const { source } = store.getState();
    const articles = await sendRequest(source);
    renderNews(articles);
}

export default getNews;