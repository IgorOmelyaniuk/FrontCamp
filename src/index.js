import '../styles/style.less';
import '../styles/media.less';
import renderButton from './button/index';
import {toggleActiveClass} from './service';
import * as json from '../test.json'

const news = document.querySelector('.news');
const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('.navigation-link');

nav.addEventListener('click', e => clickOnLink(e));

const clickOnLink = (e) =>  {
    const element = e.target;
    
    if (element.classList.contains('navigation-link')) {
        const source = element.getAttribute('data-source');
        news.innerHTML = '';
        toggleActiveClass(element, links);
        renderButton(news, source);
    }
}