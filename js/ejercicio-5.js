'use strict';

//variable
const palettesContainer = document.querySelector('.js-palettes-container');

//guardarlo aqui para luego usarlo más adelante
//cambiarlo a array para no confundirme
let palettes = [];


//funcion para conseguir los datos

function getServerData() {


  //aqui llamamos al servidor
  fetch("http://beta.adalab.es/Easley-ejercicios-de-fin-de-semana/data/palette.json")
    //   .then(response => response.json());
    .then(function (response) {
      return response.json();
    })
    .then(function (serverData) {
      // parseServerData(serverData);
      // adapto los datos del sevidor a mi cortijo
      palettes = serverData.palettes;
      paintPalettes();



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

  //tengo que recorrer el array palette
  for (const palette of palettes) {
    htmlCode += `<li class="palettes__item">`;
    htmlCode += `<h3 class="palettes__name">${palette.name}</h3>`;
    htmlCode += `<div class="palettes__colors">`;

    //tengo que recorrer el array color
    for (const color of palette.colors) {
      htmlCode += `<div class="palettes__color" style="background-color: #${color};"></div>`;
    }
    htmlCode += `</div>`;
    htmlCode += `</li>`;
  }
  palettesContainer.innerHTML = htmlCode;
}


getServerData();
