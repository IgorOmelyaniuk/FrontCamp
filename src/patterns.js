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

