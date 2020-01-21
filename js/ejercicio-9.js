'use strict';

//variable
const palettesContainer = document.querySelector('.js-palettes-container');

//guardarlo aqui para luego usarlo más adelante
//cambiarlo a array para no confundirme
let palettes = [];
//trabajar con una array intermedia para volcar todo
//para no trabajar directamente en el array
let favoritesPalettes = [];


//local storage

function setLocalStorage() {
  //   console.log('setLocalStorage', palettes);
  localStorage.setItem('favoritesPalettes', JSON.stringify(favoritesPalettes));
}

function getLocalStorage() {
  const localStorageFavoritesPalettes = JSON.parse(localStorage.getItem('favoritesPalettes'));
  //   console.log('Comprobando', localStoragePalettes);
  if (localStorageFavoritesPalettes !== null) {
    // console.log('Tengo datos');
    favoritesPalettes = localStorageFavoritesPalettes;
    paintPalettes();
    listenPalettes();
  }
}







//funcion para conseguir los datos - fetch

function getServerData() {


  //aqui llamamos al servidor
  fetch("https://beta.adalab.es/Easley-ejercicios-de-fin-de-semana/data/palettes.json")
    //   .then(response => response.json());
    .then(function (response) {
      return response.json();
    })
    .then(function (serverData) {
      // parseServerData(serverData);
      // adapto los datos del sevidor a mi cortijo
      palettes = serverData.palettes;
      paintPalettes();
      listenPalettes();





    })
    .catch(function (err) {
      console.log('error', err);
    });

}

// function parseServerData(serverData) {
//   data = serverData.palettes;
// }


//funcion para pintar

function paintPalettes() {
  let htmlCode = '';

  for (let i = 0; i < palettes.length; i++) {

    //buscar un dato dentro de un array
    //saber si esta dentro de un array o no y para eso usamos indexOf
    const favoriteIndex = favoritesPalettes.indexOf(i);
    const isFavorite = favoriteIndex !== -1;
    // console.log("Fav", favoritesPalettes, "Id actual:", i, '¿Esta?', isFavorite);


    if (isFavorite === true) {
      htmlCode += `<li class="palettes__item js-palette-item palettes__item--favorite" id="${i}">`;

    } else {
      htmlCode += `<li class="palettes__item js-palette-item" id="${i}">`;
    }

    htmlCode += `<h3 class="palettes__name">${palettes[i].name}</h3>`;
    htmlCode += `<div class="palettes__colors">`;

    for (const color of palettes[i].colors) {
      htmlCode += `<div class="palettes__color" style="background-color: #${color};"></div>`;
    }


    htmlCode += `</div>`;
    htmlCode += `</li>`;
  }

  palettesContainer.innerHTML = htmlCode;
}

//handle
function toogleFavorites(event) {
  const clickedId = parseInt(event.currentTarget.id);
  const favoriteIndex = favoritesPalettes.indexOf(clickedId);
  const isFavorite = favoriteIndex !== -1;

  //   console.log('Favs:', favoritesPalettes, 'clicked', clickedId, '¿ES favorito?', isFavorite);


  if (isFavorite === true) {
    console.log('Lo saco');
    favoritesPalettes.splice(favoriteIndex, 1);

  } else {
    favoritesPalettes.push(parseInt(event.currentTarget.id));

  }
  console.log(favoritesPalettes);
  setLocalStorage();
  paintPalettes();
  listenPalettes();
}

//listener
function listenPalettes() {
  const palettesItems = document.querySelectorAll('.js-palette-item');
  for (const palettesItem of palettesItems) {

    palettesItem.addEventListener('click', toogleFavorites)
    // console.log(palettesItem);
  }
}

//para tenerlo localizado
getServerData();
getLocalStorage()
