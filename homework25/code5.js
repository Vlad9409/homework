/*Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
Совершенное число – это число, равное сумме всех своих собственных делителей.*/

function getPerfect(a, b) {
  let result = [];
  for (let i = a; i < b; i++) {
    sum = 0;
    for (let n = 1; n <= i / 2; n++) {
      if (i % n === 0) sum += n;
    }
    if (i === sum) result.push(i);
  }
  return result;
}

console.log(getPerfect(1, 100));
