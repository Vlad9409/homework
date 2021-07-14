var money = prompt('введите сумму USD:', 0);
var money = prompt('введите сумму EUR:', 0);
var money = prompt('введите сумму UAH:', 0);
var money = prompt('введите сумму AZN:', 0);
var currency = prompt('EUR = 1, UAH = 2, AZN = 3', 0);
    switch(currency) {
        case '1':
            console.log(money*0.84 + 'EUR');
            break;
        case '2':
            console.log(money*27.91 + 'UAH');
            break;
        case '3':
            console.log(money*1.7 + 'AZN');
            break;
    }