import '../styles/style.less';
import '../styles/media.less';

import { renderNews } from './news';

const API_KEY = '66e811207ca040b7815bd78758d16e1b';
const API_URL = 'https://newsapi.org/v2/everything?';
const news = document.querySelector('.news');
const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('.navigation-link');

nav.addEventListener('click', e => getNews(e));

const getNews = async (e) =>  {
    const element = e.target;
    
    if (element.classList.contains('navigation-link')) {
        const source = element.getAttribute('data-source');
        toggleActiveClass(element);
        const articles = await sendRequest(source);
        renderNews(articles, news);
    }
}

const toggleActiveClass = element => {
    const news = document.querySelector('.news');
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    element.classList.add('active');
}

const sendRequest = async (source) => {
    const response = await fetch(`${API_URL}sources=${source}&apiKey=${API_KEY}`);
    const { articles } = await response.json();
    return articles;
}

