/*2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. 
Написать следующие функции:
1) + Распечатка чека на экран;
2) +Подсчет общей суммы покупки;
3) +Получение самой дорогой покупки в чеке;
4) Подсчет средней стоимости одного товара в чеке.*/

function Product(name, count, price) {
  this.name = name;
  this.count = count;
  this.price = price;
}

let receipt = [
  new Product(`Хромекаст`, 1, 2900),
  new Product(`смартфон`, 2, 11999),
  new Product(`смартрозетка`, 5, 1497),
  new Product(`Смартштопор`, 2, 1098),
  new Product(`Ноутбук`, 2, 19999),
];

function FullPrice(arr) {
  let FullPrice = [];
  return (FullPrice = arr.map((item) => item.count * item.price));
}

function totalPurchaseAmount(arr) {
  let result = FullPrice(arr);
  return result.reduce((acc, item) => (acc += item), 0);
}
/*console.log(totalPurchaseAmount(receipt));*/

function getExpensiveProduct(arr) {
  return arr.reduce(
    (acc, item) => (acc = acc > item.price ? acc : item.price),
    0
  );
}
/*console.log(getExpensiveProduct(receipt));*/

function expensivPosition(arr) {
  let result = FullPrice(arr);
  return result.reduce((acc, item) => (acc = acc > item ? acc : item), 0);
}
/*console.log(expensivPosition(receipt));*/

function averageCheckValue(arr) {
  let sumPrice = arr.reduce((acc, item) => (acc += item.price), 0);
  return Math.floor((sumPrice / arr.length) * 100) / 100;
}

/*console.log(averageCheckValue(receipt));*/
