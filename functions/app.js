function showFirstMessage(){
    console.log("Hello, World!");
}

// Надо помнить, что после создания функции, 
// ее обязательно нужно вызывать
showFirstMessage();

// Аргументы функции передаются внутри скобок
// после её имени

// Пример функциии сложения двух чисел, 
// которые будем передавать через аргументы

function plusAandB(a, b){
    return a + b;
}

console.log(plusAandB(2, 2)); // 4

// Такой же пример с аргументами, но возвращаем просто текст 
// при вызове функции

function showMessage(text) {
    console.log(text); // Hello, World!
}

showMessage("Hello, World!");

// Аргументов может быть много, и они задаются через запятую

// Теперь посмотрим как ведут себя переменные 
// внутри функции

let number = 20; // глобальная переменная
function variablesInsideFunction(){
    let number = 30; // локальная переменная
    console.log(number);
}
console.log(variablesInsideFunction());
console.log(number); // 20 из локальной переменной

// Тут выдаст ошибку, наша переменная is not defined
// Потому что переменная объявленная внутри функции будет недоступна снаружи

// Каждая функция должна что то возвращать
// для этого используется ключевое слово return

// У return есть еще одно предназначение, это возвращение 
// значение наружу функции

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum); // 50

// В этой функции ret() содержит переменную num со значением 50
// и отдает ее наружу, там переменная anotherNum присвает себе это значение
// в итоге в консольке мы получаем значение 50

// Теперь немного про классификацию функций
// их существует 3 вида, 
// fucntion declaration 
// function expression 
// arrow function

// fucntion declaration существует еще до того как до него дойдет интерпритатор, например
console.log(culc(2, 2)); // 4
console.log(culc(5, 5)); // 10
console.log(culc(3, 3)); // 6
function culc(a, b) {
    return a + b;
}
// тут все сработает без ошибок

// function expression - так называемое функциональное выражение
// например

// logger(); // не работает
let logger = function() {
    console.log("Hello");
};
logger(); // Hello
// Главное отличие, что мы его не можем использовать до начала объявления

// Стрелочные функции

let plus = (a, b) => a + b;
console.log(plus(1, 1));

// если функция содержит один аргумент, то можно не ставить скобки
// ключевое слово return тоже в некоторых случаях можно пропускать