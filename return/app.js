const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
    console.log(1); // ошибка, после return функция дальше не работает
}

function promotion(result) {
    console.log(result * discount);
    return function(){} // функция может содержать вложенные функции
}

const res = convert(500, usdCurr);
promotion(res);

function test(){
    for (let i = 0; i < 5; i++){
        console.log(i);
        if(i === 3) return // оператор return останавливает всю функцию
    }
}

test();

function doNoting() {}

console.log(doNoting() === undefined); // вернет true 
// т.к. у функции doNoting нет оператора return и он возвращает undefined
// console - это объект
// log - это метод объекта console 

