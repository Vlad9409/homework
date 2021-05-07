/*Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.*/

let a = +prompt(`first`);
let b = +prompt(`second`);
function geometr(a, b = a) {
  if (a != "" && b != "") return a * b;
  else if (a != "" && b == "") return a * a;
  else if (a == "" && b != "") return b * b;
}

alert(geometr(a, b));
