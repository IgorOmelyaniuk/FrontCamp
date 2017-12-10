import '../styles/style.less';
import '../styles/media.less';
import renderButton from './button';

import * as json from '../test.json'

const news = document.querySelector('.news');
const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('.navigation-link');

nav.addEventListener('click', e => clickOnLink(e));

const clickOnLink = (e) =>  {
    const element = e.target;
    
    if (element.classList.contains('navigation-link')) {
        const source = element.getAttribute('data-source');
        toggleActiveClass(element);
        renderButton(nav, news, source);
    }
}

const toggleActiveClass = element => {
    const news = document.querySelector('.news');
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    element.classList.add('active');
}
