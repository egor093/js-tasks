// Задание 1

// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра

function createSum(a,b){
    if (arguments.length < 2) {
        console.log('введите два параметра');
    } else {
           if (typeof a == "number" && typeof b == "number") {
        console.log(a+b);
    } else {
        console.log('введенные данные не являются числами');
    } 
    }
}
createSum(1,'a');
createSum(1,2);
createSum();

// Задание 2

// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"
// function square(a) {
//   console.log(a * a)
// }
// square(10) // 100
// square()
// // ДО: NaN
// // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

function square(a) {
   if (arguments.length === 0) {
    console.error('Uncaught Error: Функция "square" не может быть вызвана без аргумента');
   } else {
    console.log(a * a);
   }
}
square(10);
square();

// Задание 3

// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }
let getNumber = (num) => {
    let random = getRandomInteger(1, 10);
    if (num >= 0 && num <= 10) {
 if (random === num) {
        return console.log('Вы выиграли');
    } else {
        return console.log(`Вы не угадали, ваше число -  ${num},  а выпало число ${random}`);
    }
    }
}
getNumber(2)

// Задание 4

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arr = [5, 4, 3, 8, 0];
let newArr = [];
function filterFor(arr, a){
    for (let item of arr) {
        if (item >= a) {
            newArr.push(item);
        }
    }
}
filterFor(arr,3);
console.log(newArr);

// Задание 5

// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

const arr = ['anya', 'sanya', 'oleg'];
function copyArr(arr){
    const copy = arr.map(item => item);
    return copy;
};
console.log(copyArr(arr));

// Задание 6

// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }

const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
}
function sumObjectValues(object) {
    let sum = 0;
    for (let item in object) {
        if (typeof object[item] == "number") {
            sum = sum + object[item];
        }
    }
    return sum;
}
console.log(sumObjectValues(objectWithNumbers));