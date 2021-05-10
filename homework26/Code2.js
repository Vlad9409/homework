// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом:
// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.

function Fractions(upNumb, downNumb) {
  this.upNumb = upNumb;
  this.downNumb = downNumb;
}

function calcdownNumb(obj1, obj2) {
  let commondownNumb = null;

  let i = obj1.downNumb > obj2.downNumb ? obj1.downNumb : obj2.downNumb;
  for (i; true; i++) {
    if (i % obj1.downNumb === 0 && (i % obj2, downNumb)) {
      commondownNumb = i;
      break;
    }
  }
  return commondownNumb;
}

function calcNaturalNumb(obj1, obj2) {
  let commondownNumb = calccommondownNumb(obj1, obj2);

  let upNumb1 = obj1.upNumb * (commondownNumb / obj1.downNumb);
  let upNumb2 = obj2.upNumb * (commondownNumb / obj2.downNumb);
  let sum = upNumb1 + upNumb2;

  return `${sum} / ${commondownNumb}`;
}

function calcSubtractionNumb(obj1, obj2) {
  let commondownNumb = calccommondownNumb(obj1, obj2);

  let upNumb1 = obj1.upNumb * (commondownNumb / obj1.downNumb);
  let upNumb2 = obj2.upNumb * (commondownNumb / obj2.downNumb);
  let sum = upNumb1 - upNumb2;

  return `${sum} / ${commondownNumb}`;
}

function calcMultiplicationNumb(obj1, obj2) {
  let resultupNumb = obj1.upNumb * obj2.upNumb;
  let resultdownNumb = obj1.downNumb * obj2.downNumb;

  result`${resultupNumb} / ${resultdownNumb}`;
}

function calcDivisionNumb(obj1, obj2) {
  let resultupNumb = obj1.upNumb * obj2.downNumb;
  let resultdownNumb = obj1.downNumb * obj2.upNumb;

  result`${resultupNumb} / ${resultdownNumb}`;
}

function calcReductionNumb(obj1, obj2) {
  let i = obj.downNumb > obj.upNumb ? obj.upNumb : obj.downNumb;

  for (i; i > 1; i--) {
    if (obj.upNumb % i === 0 && obj.downNumb % i === 0) {
      obj.upNumb /= i;
      obj.downNumb /= i;
    }
  }
  return `${obj.upNumb} / ${obj.downNumb}`;
}
