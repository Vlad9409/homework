// +Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// +Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.

// +Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// +Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().

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

class EmpTable {
  employees;

  constructor(employees = []) {
    this.employees = employees;
  }

  getHTML = function () {
    let table = document.getElementById(`table`);
    let array = this.employees;
    let head = document.createElement(`tr`);
    head.setAttribute("style", "font-size: 18px;");
    let th1 = document.createElement("th");
    th1.textContent = "firstName";
    let th2 = document.createElement("th");
    th1.textContent = "secondName";
    let th3 = document.createElement("th");
    th1.textContent = "positiom";
    let th4 = document.createElement("th");
    th1.textContent = "salary";
    head.append(th1);
    head.append(th2);
    head.append(th3);
    head.append(th4);
    table.append(head);
    for (let i in array) {
      let tr = document.createElement("tr");
      table.append(tr);
      for (let j in array[i]) {
        let td = document.createElement("td");
        td.textContent = array[i][j];
        tr.append(td);
        td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
      }
    }
    table.setAttribute("border", "2");
    table.setAttribute("bordercolor", "brown");
    table.setAttribute("width", "60%");
    table.setAttribute("style", "margin: auto; background-color: lightgrey;");
  };
}

let tableObj = new EmpTable(bankStaff);
tableObj.getHtml();

let bankStaff = [
  new Employee(`Dima`, `Makarec`, `UI/UX design`, 10000),
  new Employee(`Edik`, `Bilenko`, `BackEnd`, 12000),
  new Employee(`Ruslan`, `Sloboda`, `Manager`, 11000),
  new Employee(`Lesha`, `Sharai`, `systemAdministrator`, 9000),
  new Employee(),
];

console.log(getHTML);
