// Factory pattern
class DomElementFactory {
    constructor () {
        this.tag = null;
    }

    create(properties) {
        const element = document.createElement(this.tag);

        if (properties) {
            const attrs = Object.keys(properties);
            attrs.forEach(attr => element.setAttribute(attr, properties[attr]));
        }

        return element;
    }
}

// Prototype pattern
const factory = new DomElementFactory();

export const divFactory = Object.create(factory);
divFactory.tag = 'div';

//Decorator pattern
class FactoryDecorator extends DomElementFactory {
    constructor(domElementFactory) {
        super()
        this._domElementFactory = domElementFactory;
    }

    create(properties) {
        return this._domElementFactory.create(properties);
    }
}

export class LogDecorator extends FactoryDecorator {
    constructor(domElementFactory) {
        super(domElementFactory);
    }

    create(properties) {
        console.log('Creating Element');
        return super.create(properties);
    }
}

// Composite pattern
export class Dom {
    static get(selector) {
        const elements = document.querySelectorAll(selector);

        if (elements.length > 1) {
            return elements;
        } else {
            return elements[0];
        }
    }

    static addClass(className, ...elements) {
        for (let element of elements) {
            element.classList.add(className);
        }
    }

    static removeClass(className, elements) {
        for (let element of elements) {
            element.classList.remove(className);
        }
    }
}
