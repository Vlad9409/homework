// Создать HTML-страницу с большой таблицей.
// При клике по заголовку колонки, необходимо отсортировать данные по этой колонке.
// Учтите, что числовые значения должны сортироваться как числа, а не как строки.

let mainDiv = document.getElementById("content");

let tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "content__tableDiv");
tableDiv.className = "content__tableDiv";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "content__table");
tableTag.className = "content__table";

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

class Employee {
  firstName;
  secondName;
  position;
  salary;

  constructor(
    firstName = `Vlad`,
    secondName = `Ladur`,
    position = `FrontEnd`,
    salary = 12000
  ) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.position = position;
    this.salary = salary;
  }
}

let bankStaff = [
  new Employee(`Dima`, `Makarec`, `UI/UX design`, 10000),
  new Employee(`Edik`, `Bilenko`, `BackEnd`, 12000),
  new Employee(`Ruslan`, `Sloboda`, `Manager`, 11000),
  new Employee(`Lesha`, `Sharai`, `systemAdministrator`, 9000),
  new Employee(),
];

class EmpTable {
  nameSortAsk;
  constructor(arr) {
    this.arr = arr;
    this.nameSortAsk = 1;
  }
  getHtml = function () {
    let array = this.arr;
    let tbody = document.createElement("tbody");
    tbody.setAttribute("id", "content__tbody");
    tableTag.innerHTML = "";
    tableTag.append(tbody);
    let head = document.createElement("tr");
    let th1 = document.createElement("th");
    th1.textContent = "firstName";
    th1.setAttribute("id", "content__th1");
    th1.style.cursor = "pointer";
    let th2 = document.createElement("th");
    th2.textContent = "secondName";
    th2.setAttribute("id", "content__th2");
    th2.style.cursor = "pointer";
    let th3 = document.createElement("th");
    th3.textContent = "positiom";
    th3.setAttribute("id", "content__th3");
    th3.style.cursor = "pointer";
    let th4 = document.createElement("th");
    th4.textContent = "salary";
    th4.setAttribute("id", "content__th4");
    th4.style.cursor = "pointer";
    tableTag.prepend(head);
    head.append(th1);
    th1.addEventListener("click", function () {
      tableObj.sortByName();
      tableObj.getHtml();
    });
    head.append(th2);
    head.append(th3);
    head.append(th4);
    th4.addEventListener("click", function () {
      tableObj.sortBySalary();
      tableObj.getHtml();
    });
    // console.log(this.arr);
    array.forEach((employee) => {
      let tr = document.createElement("tr");
      tbody.append(tr);
      for (let j in employee) {
        let td = document.createElement("td");
        td.innerText = employee[j];
        tr.append(td);
        td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
      }
    });

    tableTag.setAttribute("border", "2");
    tableTag.setAttribute("bordercolor", "brown");
    tableTag.setAttribute("width", "60%");
    tableTag.setAttribute(
      "style",
      "margin: auto; background-color: lightgrey;"
    );
  };
  sortByName = function () {
    let value = this.nameSortAsk;
    this.arr = this.arr.sort(function (prev, next) {
      return prev.firstName > next.firstName ? value : -value;
    });
    this.nameSortAsk = -this.nameSortAsk;
  };
  sortBySalary = function () {
    let value = this.nameSortAsk;
    this.arr = this.arr.sort(function (prev, next) {
      return prev.salary > next.salary ? value : -value;
    });
    this.nameSortAsk = -this.nameSortAsk;
  };
}
let tableObj = new EmpTable(bankStaff);
tableObj.getHtml();
tableObj.sortByName();
