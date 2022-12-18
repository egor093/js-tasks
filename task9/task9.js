// Задание 1

// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.


const input = document.querySelector('input');
const ul = document.querySelector('ul');

input.addEventListener('keyup',(event) => {
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.append(li);
});


// Задание 2

// Вставить в html тег input (просто предусмотреть в разметке).

// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля).
// Вам понадобится считывать значение поля, это input.value


const input = document.querySelector('input');

input.addEventListener('keyup', (event) => console.log(input.value));


// Задание 3

// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value).
// После отправки формы инпут должен быть очищен (проставить пустую строку в value).


const form = document.querySelector('form');
const input = document.querySelector('.text');
const ul = document.querySelector('ul');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let li = document.createElement('li');
    li.innerText = input.value;
    ul.append(li);
    input.value = '';
});


// Задание 4

// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. 
//В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, 
//выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
// 1) решить с помощью if
// 2) решить с помощью eval (https://developer.mozilla.org/...)


const form = document.querySelector('form');
const select = document.querySelector('select');
const calculate = document.querySelector('.calculete');
const inp1 = document.querySelector('.inp1');
const inp2 = document.querySelector('.inp2');
const div = document.querySelector('div');
let result;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if(select.value == '+') {
        result = +inp1.value + +inp2.value;
    }
    else if(select.value == '-') {
        result = +inp1.value - +inp2.value;
    }
    else if(select.value == '*') {
        result = +inp1.value * +inp2.value;
    }
    else if(select.value == '/') {
        result = +inp1.value / +inp2.value;
    };

    result = eval(`${+inp1.value }${select.value} ${+inp2.value}`);
    div.innerText = result;
    console.log(result);
});


//Задание 5

//Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. 
//При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.

const but = document.querySelector('button');

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }

but.addEventListener('mouseenter',() => {
    but.style.background = `rgb(${getRandomInteger(0, 255)},${getRandomInteger(0, 255)},${getRandomInteger(0, 255)})`;
});

but.addEventListener('mouseleave',() => {
    but.style.transform = `rotate(${getRandomInteger(-180, 180)}deg)`;
});