import './style.css';


export function homePage(){
    const content = document.querySelector('.content');
    const presetation = document.createElement('section');
    const description = document.createElement('p');

    presetation.classList.add("section")

    description.textContent = "Welcome to my restaurant, where we blend innovation and tradition to deliver a dining experience that's as unforgettable as it is delicious. Our menu features locally-sourced ingredients and globally-inspired flavors, crafted with passion by our talented chefs to delight every palate."
    presetation.appendChild(description);

    content.appendChild(presetation);

    return content;
}