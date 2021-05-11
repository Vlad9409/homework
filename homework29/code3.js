// Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

let traficLight = document.querySelector(`div.trafic__light`);
let lightred = document.getElementById(`red`);
let lightyellow = document.getElementById(`yellow`);
let lightgreen = document.getElementById(`green`);
let butn = document.getElementById(`btn`);

butn.addEventListener(`click`, function () {
  if (lightred.classList.contains(`trafic__red`)) {
    lightred.classList.remove(`trafic__red`);
    lightyellow.classList.add(`trafic__yellow`);
  } else if (lightyellow.classList.contains(`trafic__yellow`)) {
    lightyellow.classList.remove(`trafic__yellow`);
    lightgreen.classList.add(`trafic__green`);
  } else if (lightgreen.classList.contains(`trafic__green`)) {
    lightgreen.classList.remove(`trafic__green`);
    lightred.classList.add(`trafic__red`);
  }
});
