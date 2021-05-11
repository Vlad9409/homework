/*1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

- Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
- Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
необходимо увеличивать количество в существующей покупке, а не добавлять новую.
- Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/

function Product(name, count = 1, bought = false) {
  this.name = name;
  this.count = parseFloat(count);
  this.bought = bought;
}

let shoppingList = [
  new Product(`Апельсин`, `1шт.`, true),
  new Product(`Хлеб`, `1шт.`, false),
  new Product(`колбаса`, `2шт.`, false),
  new Product(`Ананас`, `1 шт.`, true),
];

function showSort(arr) {
  arr.sort(function (prevItem, nextItem) {
    if (!prevItem.bought && nextItem.bought) return -1;
    return 1;
  });
}

let product1 = new Product(`Апельсин`);
let product2 = new Product(`Киви`, 4);
let product3 = new Product(`Ананас`, `2шт.`);

function addProduct(obj, arr) {
  let isProduct = arr.find((item) => item.name === obj.name);

  if (!isProduct) {
    isProduct.count += obj.count;
  } else arr.push(obj);
}

function compleatProduct(name, arr) {
  let product = arr.find((item) => name === item.name);
  product.bought = true;
}

addProduct(product1, shoppingList);
console.log(shoppingList);
