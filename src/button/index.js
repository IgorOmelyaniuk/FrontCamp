import './style.less';

const renderButton = (news, source) => {
    let button = document.querySelector('.lazy-button');

    if (!button) {
        button = document.createElement('button');
        button.classList.add('lazy-button');
        button.innerHTML = 'Show News';
        news.appendChild(button);
    }
    

    button.addEventListener('click', e => {
        System.import('../getNews')
            .then(module => {
            module.default(source, news);
        });
        button.remove();
    });
}

export default renderButton;