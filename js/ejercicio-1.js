'use strict';

const news = [{
    title: 'Asteroids 101',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Life on Mars',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Martians invade Earth',
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: "Humans aren't real",
    image: 'https://via.placeholder.com/200x100'
  },
  {
    title: 'Space The Final Frontier',
    image: 'https://via.placeholder.com/200x100'
  }
];


//variables

const ulElement = document.querySelector('.news');


let htmlCode = '';


let classLi = 'news__item';
let classtitle = 'news__title';
let classImg = 'news__image';


//#1 listado de noticias


function paintNews() {

  for (const newsItem of news) {

    htmlCode += `<li class="${classLi}"><h2 class="${classtitle}">${newsItem.title}</h2>`;
    htmlCode += `<img class="${classImg}" src="${newsItem.image}"></img></li>`;
  }
  ulElement.innerHTML += htmlCode;
};

paintNews();
