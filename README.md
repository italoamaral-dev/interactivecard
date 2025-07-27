# interactivecard
An interactive credit card details form built with HTML, CSS, and JavaScript. Users can fill in their card information and see it displayed in real time, with form validation and responsive design.


# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

The main goal of this challenge was to create a web page using HTML and CSS, where the user can fill in their credit card details and see the information displayed directly on the card image shown on the page. Additionally, the form should be able to alert the user to any mistakes, such as leaving fields blank, entering letters in the numeric card field, or not meeting the required number of characters in specific fields.

The page was also designed to work seamlessly on both mobile devices and desktop screens, while following accessibility best practices as much as possible.


### Screenshot

![Desktop devices](./desktop-screenshot.png) 
![Mobile devices](./mobile-screenshot.png) 


## My process

### Built with

- HTML
- CSS
- JavaScript


### What I learned

Something simple, yet very valuable for my growth as a web developer, that I learned from this project was how to connect different languages and structures to build a single product. I was already doing this with HTML and CSS, but it was the first time I truly realized the power of JavaScript in this process.

Some functions I created that I found interesting:


```js
inputName.addEventListener("input", () => {
  displayName.forEach(el => {
    el.textContent = inputName.value || "JANE APLESEED"; 
  });
});

inputNumber.addEventListener("input", () => {
  displayNumber.forEach(el => {
    el.textContent = inputNumber.value || "0000 0000 0000 0000";
  });
});

inputMonth.addEventListener("input", () => {
  displayMonth.forEach(el => {
    el.textContent = inputMonth.value || "00";
  });
});

inputYear.addEventListener("input", () => {
  displayYear.forEach(el => {
    el.textContent = inputYear.value || "00";
  });
});

inputCVC.addEventListener("input", () => {
  displayCVC.forEach(el => {
    el.textContent = inputCVC.value || "000";
  });
});
```

Through these functions, I had the opportunity to dive deeper into creating interactive pages that provide users with visually appealing effects. It was the first time I worked on something like this, and I consider this knowledge to be of great professional value.


### Continued development

I want to further develop my ability to solve unexpected errors, which often arise in programming work and which I had to deal with constantly during this project. In addition, I want to improve my JavaScript skills, as this project required me to work with it more and it was actually my first real experience with the language. Finally, I’m always striving to improve the quality of my web pages, aiming to get closer to a professional standard.


### Useful resources

- [MANIPULANDO ELEMENTOS DA PÁGINA COM JAVASCRIPT PURO](https://www.youtube.com/watch?v=c2pmMKcSGok) - This video, produced in Portuguese, my native language, helped me get an idea of how to start manipulating form data using JavaScript, and was extremely important for the completion of my project.
- [Como fazer VALIDAÇÃO de FORMULÁRIOS com JavaScript](https://www.youtube.com/watch?v=YcTkoIAi0Bg) - This other video, also produced in Portuguese, was even more important to my project. I was able to gain a lot of knowledge about form validation from it.


## Author

## Author

- [LinkedIn](https://www.linkedin.com/in/italosamaral)  
- Email: italoamaral015@gmail.com  
- [Instagram](https://www.instagram.com/_italoamaral)


## Acknowledgments

This project, proposed by iJunior (the junior enterprise I intend to join at UFMG), allowed me to get my first real experience with pure web development. I had my first exposure to the JavaScript programming language and believe I've improved my technical knowledge of the subject, as well as practicing other skills I'd already learned, such as HTML and CSS. I hope to continue evolving and honing my hard skills with each new project.
