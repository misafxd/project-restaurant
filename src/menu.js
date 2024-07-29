import { createElement } from "./home";
import americano from './americano-min.png';
import latte from './latte.png';
import cappuccino from './cappuccino.png';
import sandwich from './sandwich.png';

export function menu() {
    const content = document.querySelector('.content');
    const fragment = document.createDocumentFragment();
    const menu = createElement('section', ['section', 'menu'])
    const articles = [
        {
            "name": "Americano",
            "price": 2.50,
            "image": americano
        },
        {
            "name": "Latte",
            "price": 3.00,
            "image": latte
        },
        {
            "name": "Cappuccino",
            "price": 3.50,
            "image": cappuccino
        },
        {
            "name": "Sandwich",
            "price": 2.00,
            "image": sandwich
        },
    ]
    
    for(let item in articles){
        const article = createElement('article', ['article']);
        const articleName = createElement('h2', [], articles[item].name);
        const price = createElement('p', [], `Price: $ ${articles[item].price}`);
        const articleDescription =createElement('div', ['article-description'])
        const img = new Image;
        img.classList.add('img')
        img.src = articles[item].image;

        articleDescription.appendChild(articleName);
        articleDescription.appendChild(price);

        article.appendChild(articleDescription);
        article.appendChild(img);

        menu.appendChild(article);
    }
    

    fragment.appendChild(menu);
    content.appendChild(fragment);

    return content;
}