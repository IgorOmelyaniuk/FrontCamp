import './style.less';

const renderButton = (nav, news, source) => {
    const button = document.createElement('button');
    button.classList.add('lazy-button');
    button.innerHTML = 'Get News';
    nav.appendChild(button);

    button.addEventListener('click', e => {
        System.import('../getNews')
            .then(module => {
            module.default(source, news);
        });
        button.remove();
    });
}

export default renderButton;