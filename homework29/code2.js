// Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть".
//  Изначально модальное окно не отображается.
// При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает.

let btn = document.querySelector(".btn");

let w = document.querySelector(".w");

let close = document.querySelector(".closed");

console.log(btn, w, closed);
btn.onclick = function () {
  w.style.display = "block";
};

closed.onclick = function () {
  w.style.display = "none";
};
