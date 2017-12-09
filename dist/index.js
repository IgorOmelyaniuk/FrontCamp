'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var API_KEY = '66e811207ca040b7815bd78758d16e1b';
var API_URL = 'https://newsapi.org/v2/everything?';
var news = document.querySelector('.news');
var nav = document.querySelector('.navigation');
var links = document.querySelectorAll('.navigation-link');

nav.addEventListener('click', function (e) {
    return getNews(e);
});

var getNews = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var element, source, articles;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        element = e.target;

                        if (!element.classList.contains('navigation-link')) {
                            _context.next = 8;
                            break;
                        }

                        source = element.getAttribute('data-source');

                        toggleActiveClass(element);
                        _context.next = 6;
                        return sendRequest(source);

                    case 6:
                        articles = _context.sent;

                        renderNews(articles);

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function getNews(_x) {
        return _ref.apply(this, arguments);
    };
}();

var toggleActiveClass = function toggleActiveClass(element) {
    var news = document.querySelector('.news');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    element.classList.add('active');
};

var sendRequest = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(source) {
        var response, _ref3, articles;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return fetch(API_URL + 'sources=' + source + '&apiKey=' + API_KEY);

                    case 2:
                        response = _context2.sent;
                        _context2.next = 5;
                        return response.json();

                    case 5:
                        _ref3 = _context2.sent;
                        articles = _ref3.articles;
                        return _context2.abrupt('return', articles);

                    case 8:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function sendRequest(_x2) {
        return _ref2.apply(this, arguments);
    };
}();

var renderNews = function renderNews(articles) {
    news.innerHTML = '';
    var articlesList = '';

    articles.forEach(function (article) {
        var value = renderArticle(article, news);
        articlesList += value.innerHTML;
    });

    news.scrollIntoView();
    news.innerHTML = articlesList;
};

var renderArticle = function renderArticle(data, news) {
    var article = document.createElement('div');
    var title = data.title,
        publishedAt = data.publishedAt,
        description = data.description,
        urlToImage = data.urlToImage;

    article.innerHTML += '<div class="news-item">\n        <img class="news-item-img" src=' + urlToImage + ' />\n        <div class="news-item-title">' + title + '</div>\n        <div class="news-item-description">' + description + '</div>\n        <div class="news-item-date">' + publishedAt + '</div>\n    </div>';

    return article;
};