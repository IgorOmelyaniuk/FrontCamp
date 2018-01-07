import '../styles/style.less';
import '../styles/media.less';
// import renderButton from './button/index';
import getNews from './getNews';
import {toggleActiveClass} from './service';
import * as json from '../test.json'
import store from './store';
import { UPDATE_SOURCE } from './config';

const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('.navigation-link');

store.subscribe(getNews)

nav.addEventListener('click', e => clickOnLink(e));

const clickOnLink = (e) =>  {
    const element = e.target;
    
    if (element.classList.contains('navigation-link')) {
        const source = element.getAttribute('data-source');
        toggleActiveClass(element, links);
        changeLink(source);
    }
}

const changeLink = source => {
    console.log(source);
    store.dispatch({
        type: UPDATE_SOURCE,
        payload: source
    })
}