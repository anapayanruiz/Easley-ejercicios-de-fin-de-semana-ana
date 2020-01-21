'use strict';



//#3 En el espacio nadie puede oir tus fetchs


//variables

const ulElement = document.querySelector('.news');



function searchMars(newsArray) {
  let htmlCode = '';
  let classtitle = 'news__title';
  let classImg = 'news__image';

  for (const newsItem of newsArray) {
    const titleNews = newsItem.title;
    let classLi = '';
    if (titleNews.includes('Mars') || titleNews.includes('Martians')) {
      classLi = 'news__item--from-mars';
    } else {
      classLi = 'news__item';
    }
    htmlCode += `<li class="${classLi}"><h2 class="${classtitle}">${newsItem.title}</h2>`;
    htmlCode += `<img class="${classImg}" src="${newsItem.image}"></img></li>`;
    console.log(titleNews.includes('Mars'));
    console.log(titleNews.includes('Martians'));

  }
  ulElement.innerHTML += htmlCode;

};


fetch('http://beta.adalab.es/Easley-ejercicios-de-fin-de-semana/data/news.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    debugger
    console.log(myJson);

    searchMars(myJson.news);
  });
