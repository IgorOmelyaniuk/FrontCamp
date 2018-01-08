import '../styles/style.less';
import '../styles/media.less';
import getNews from './getNews';
import { Dom } from './patterns';
import * as json from '../test.json'
import store from './store';
import { UPDATE_SOURCE } from './config';

const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('.navigation-link');

nav.addEventListener('click', e => clickOnLink(e));

const clickOnLink = (e) =>  {
    const element = e.target;
    
    if (element.classList.contains('navigation-link')) {
        const source = element.getAttribute('data-source');
        const links = Dom.get('.navigation-link');
        Dom.removeClass('active', links);
        Dom.addClass('active', element);
        changeLink(source);
    }
};

const changeLink = source => {
    store.dispatch({
        type: UPDATE_SOURCE,
        payload: source
    })
};

store.subscribe(getNews);