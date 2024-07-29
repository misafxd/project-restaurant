import { createElement } from "./home";

export function about() {
    const content = document.querySelector('.content');
    const fragment = document.createDocumentFragment();
    const about = createElement('section', ['section', 'about']);
    const paragraph = createElement('p', []);

    const textAbout = `
        <p>
            Welcome to Restaurant Mafs, your go-to destination for the finest coffee and sandwiches in town! At Mafs, we believe that every meal should be an experience, and we strive to make each visit a memorable one.
            <br><br>
            
            <strong>Our Coffee</strong>
            <br>
            We take pride in sourcing the finest beans from around the world and roasting them to perfection. Our baristas are skilled artisans who craft each cup with care, ensuring that every sip is a delightful journey. From classic espressos to signature lattes, our coffee menu is designed to satisfy even the most discerning palates.
            <br><br>
            <strong>Our Sandwiches</strong>
            <br>
            At Restaurant Mafs, we believe that a great sandwich starts with the best ingredients. We use only the freshest, locally sourced produce, premium meats, and artisanal breads to create our mouthwatering sandwiches. Whether you're in the mood for a classic club or a gourmet grilled cheese, our menu offers a variety of options to suit every taste.
            <br><br>
            
            Join us at Restaurant Mafs and experience the difference that passion and quality can make. We look forward to serving you!
        </p>
    `;

    paragraph.innerHTML = textAbout;
    about.appendChild(paragraph);


    fragment.appendChild(about);
    content.appendChild(fragment);
    return content;
}