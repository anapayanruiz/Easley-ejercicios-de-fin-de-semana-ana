'use strict';
'use strict';



//#4 Ahora me ves...


//variables

const ulElement = document.querySelector('.news');




function searchMars(newsArray) {
  let htmlCode = '';
  let classtitle = 'news__title';
  let classImg = 'news__image';
  let classLiHidden = 'news__item--no-image-visible';

  for (const newsItem of newsArray) {
    const titleNews = newsItem.title;
    let classLi = '';
    if (titleNews.includes('Mars') || titleNews.includes('Martians')) {
      classLi = 'news__item--from-mars';
    } else {
      classLi = 'news__item';

    }
    htmlCode += `<li class="${classLi} ${classLiHidden}"><h2 class="${classtitle}">${newsItem.title}</h2>`;
    htmlCode += `<img class="${classImg}" src="${newsItem.image}"></img></li>`;

  }
  ulElement.innerHTML += htmlCode;
  //hasta que no los pinto no puedo selecionar el li
  let liElements = document.querySelectorAll('.news__item--no-image-visible');


  //como son varios elementos hay que recorrerlos porque
  //sino devuelve solo uno. Por lo que metemos el addEventListener
  //en una iteracion
  function handleNews(event) {
    //cuando clicko en la imagen, se muestra
    const liElementClicked = event.currentTarget;
    liElementClicked.classList.toggle('news__item--no-image-visible');
  };

  //el listener lo tengo que hacer dentro porque tiene
  //pintarse y después se produce el evento

  for (const liElement of liElements) {
    liElement.addEventListener('click', handleNews);
  }
};




fetch('http://beta.adalab.es/Easley-ejercicios-de-fin-de-semana/data/news.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);

    searchMars(myJson.news);
  });
