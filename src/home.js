import './style.css';
import egg from './egg.png';

function createElement(tag, classNames = [], textContent = '') {
    const element = document.createElement(tag);
    if (classNames.length > 0) {
        element.classList.add(...classNames);
    }
    if (textContent) {
        element.textContent = textContent;
    }
    return element;
}

export function homePage() {
    const content = document.querySelector('.content');
    const fragment = document.createDocumentFragment();

    const presentation = createElement('section', ['section']);
    const hours = createElement('section', ['section', 'hours']);
    const location = createElement('section', ['section']);
    const description = createElement('p', [], "Welcome to my restaurant, where we blend innovation and tradition to deliver a dining experience that's as unforgettable as it is delicious. Our menu features locally-sourced ingredients and globally-inspired flavors, crafted with passion by our talented chefs to delight every palate.");
    const hoursDescription = createElement('p', [], 'Restaurant Mafs');
    const titleHours = createElement('p', [], 'Hours of Operation:');
    const locationAddr = createElement('p', [], '123 Main Street, Springfield, IL 62704, USA');
    const list = createElement('ul', []);
    const list1 = createElement('li', [], 'Monday to Thursday: 8:00 AM - 4:00 PM');
    const list2 = createElement('li', [], 'Friday and Saturday: 8:00 AM - 2:00 PM');
    const myImage = new Image();
    myImage.src = egg;
    myImage.classList.add('img-reference');

    list.appendChild(list1);
    list.appendChild(list2);
    presentation.appendChild(description);
    hours.appendChild(hoursDescription);
    hours.appendChild(titleHours);
    hours.appendChild(list);
    hours.appendChild(myImage)
    location.appendChild(locationAddr);
    

    fragment.appendChild(presentation);
    fragment.appendChild(hours);
    fragment.appendChild(location)

    content.appendChild(fragment);

    return content;
}