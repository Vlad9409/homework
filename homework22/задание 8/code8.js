let round = prompt("Вкажіть довжину кола, см");
 let square = prompt("Вкажіть периметр квадрата, см");
let radius = round / 6.28;
let side = square / 4;
if (radius * 2 <= side) {
 alert("Дане коло може поміститися у даний квадрат");
 } else {
 alert("Дане коло НЕ може поміститися у даний квадрат")
 }