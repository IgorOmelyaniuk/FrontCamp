const toggleActiveClass = (element, links) => {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    element.classList.add('active');
}

export { toggleActiveClass };