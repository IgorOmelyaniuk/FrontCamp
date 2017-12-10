import '../styles/style.less';
import '../styles/media.less';

const news = document.querySelector('.news');
const nav = document.querySelector('.navigation');
const links = document.querySelectorAll('.navigation-link');

nav.addEventListener('click', e => clickOnLink(e));

const clickOnLink = (e) =>  {
    const element = e.target;
    
    if (element.classList.contains('navigation-link')) {
        const source = element.getAttribute('data-source');
        toggleActiveClass(element);
        renderButton(element, source);
    }
}

const toggleActiveClass = element => {
    const news = document.querySelector('.news');
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    element.classList.add('active');
}

const renderButton = (element, source) => {
    const button = document.createElement('button');
    button.innerHTML = 'Get news';
    element.appendChild(button);
    button.addEventListener('click', e => {
        System.import('./news')
            .then(module => {
            module.default(source, news);
        });
    });
}


