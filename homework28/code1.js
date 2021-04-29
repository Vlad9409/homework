// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:

// +поле, хранящее радиус окружности;
// +get-свойство, возвращающее радиус окружности;
// +set-свойство, устанавливающее радиус окружности;
// +get-свойство, возвращающее диаметр окружности;
// +метод, вычисляющий площадь окружности;
// +метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов.

class Ring {
  constructor(r) {
    this.r = r;
  }
  get radius() {
    return `${this.r}`;
  }
  set radius(r) {
    this.r = r;
  }
  get diameter() {
    return this.r * 2;
  }
  area() {
    return Math.PI * this.r * this.r;
  }
  circumference() {
    return Math.PI * this.r * 2;
  }
}

let ring = new Ring(15);
// console.log(ring.radius);
// console.log(ring.diameter);
// console.log(ring.area().toFixed(2));
// console.log(ring.circumference().toFixed(2));
