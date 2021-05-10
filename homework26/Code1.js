/*1.  + Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), 
и следующие функции для работы с этим объектом:
Функция для вывода на экран информации об автомобиле;
Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.*/

function Car(product, label, year, speed) {
  this.product = product;
  this.label = label;
  this.year = year;
  this.speed = speed;

  this.show = function () {
    console.log(`Інформація про авто \n`);
    for (let key in this) {
      console.log(`${key} - ${this[key]}\n`);
    }
  };

  this.calcTimeOfWay = function (distance) {
    let resultTime = 0;

    resultTime = parseFloat(distance) / parseFloat(this.speed);
    resultTime = Math.round(resultTime * 10) / 10;
    resultTime += Math.trunc(resultTime / 4);

    return resultTime;
  };
}
