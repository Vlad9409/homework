// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета,
// для которого она предназначена. Написать несколько функций для работы с ним
// 1) +Вывод на экран всех аудиторий;
// 2) +Вывод на экран аудиторий для указанного факультета;
// 3) +Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// 4) +Функция сортировки аудиторий по количеству мест;
// 5) Функция сортировки аудиторий по названию (по алфавиту).

function Auditorium(name, numSeats, nameFaculte) {
  if (numSeats < 10 || numSeats > 20) {
    /*console.log(`error`);*/
    return;
  }

  this.name = name;
  this.numSeats = numSeats;
  this.nameFaculte = nameFaculte;
}

function Group(name, numStudent, groupName) {
  this.name = name;
  this.numStudent = numStudent;
  this.groupName = groupName;
}

let AuditoriumInUnv = [
  new Auditorium(`102`, 14, `MA`),
  new Auditorium(`201`, 10, `ME`),
  new Auditorium(`101`, 21, `MI`),
  new Auditorium(`202`, 17, `EO`),
  new Auditorium(`401`, 12, `ET`),
  new Auditorium(`302`, 15, `OB`),
  new Auditorium(`301`, 19, `NG`),
];

function allAuditori(arr) {
  let result = arr.reduce(
    (acc, item) =>
      (acc += `${item.name}...${item.numSeats}...${item.nameFaculte}\n`),
    ""
  );
  console.log(result);
}

function nameFacultere(arr, nameFaculte) {
  let result = arr.filter((item) => nameFaculte === item.nameFaculte);
  allAuditori(result);
}

function sortAuditoriumByNumSeats(arr) {
  arr.sort((a, b) => a.numSeats - b.numSeats);
}

function sortAuditoriumByName(arr) {
  arr.sort((a, b) => {
    let isNumberA = +a.name;
    let isNumberB = +b.name;

    if (!isNaN(isNumberA) && !isNaN(isNumberB)) {
      return +a.name - +b.name;
    } else {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    }
  });
}
