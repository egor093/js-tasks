// Задание 1

// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// С помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)

console.log(`С помощью браузера ${navigator.userAgent} я открыл страничку ${location.href}`);

// Задание 2

// В файле html есть разметка:
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// Вывести в консоль каждое из имен (содержимое каждого li).

for (let item of document.querySelectorAll('li')) {
    console.log(item.innerText);
}

// Задание 3

// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)

document.querySelectorAll('li').forEach((item,index) =>  console.log(item.innerText = index + 1));

// Задание 4

// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.

let p = document.createElement('p');
p.innerText = 'hallo';
p.style.fontSize = '36px';
p.style.fontWeight = 'bold';
document.body.appendChild(p);

// Задание 5

// Написать в html тег заголовка с текстом "Сегодня:" 
// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.

let p1 = document.createElement('p1');
p1.innerText = 'Сегодня:';
let p = document.createElement('p');
let now = new Date();
p.innerText = now;
document.body.appendChild(p1);
document.body.appendChild(p);

// Задание 6

// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. 
// Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. 
// Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.

function getTeg(teg, colorx, text) {
    let tegx = document.createElement(teg);
    tegx.style.color = colorx;
    tegx.innerText = text;
    document.body.appendChild(tegx);
}
getTeg('p', 'red', 'time');

// Задание 7

// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

let select = document.querySelector('select');
for (let i = 1960; i <= 2020; i++) {
    let option = document.createElement('option');
    option.innerText = i;
    select.appendChild(option);
}

// Задание 8

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:
// const clients = [
// {name: "Женя", order: true},
// {name: "Кристина", order: true},
// {name: "Павел", order: false},
// {name: "Виолетта", order: false},
// {name: "Костя", order: true}
// ]
// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом
// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), 
//статус зависит от от свойства order: если true – то оплатил, если false – то отменил.


const clients = [
{name: "Женя", order: true},
{name: "Кристина", order: true},
{name: "Павел", order: false},
{name: "Виолетта", order: false},
{name: "Костя", order: true}
]

let ul = document.querySelector('#task8');

for (let item of clients) {
    let li = document.createElement('li');
    if (item.order == true) {
        li.innerText = `Клиент ${item.name} оплатил заказ`;
    } else li.innerText = `Клиент ${item.name} отменил заказ`;
    ul.appendChild(li);
}


// Задание 9
// Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА. Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где element - сам элемент, которому назначаем атрибут, name - атрибут, который нужно добавить, value - его значение. 
//Также для стандартных атрибутов существуют свойства, и их можно добавлять напрямую: напр. img.src = ''
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY


let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
let div = document.createElement('div');
div.style.background = 'red';
div.style.padding = '20px';

for (item of linksArr) {
    let a = document.createElement('a');
    a.setAttribute('href', item);
    a.innerText = item;
    a.style.display = 'block';
    div.append(a);
}
document.body.appendChild(div);


// Задание 10

// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove().
// ВАЖНО: Вам нужно удалять не всю коллекцию li, а каждый отдльный li


document.querySelectorAll('.forRemove').forEach (item =>  item.remove());


// Задание 11*

// Создать массив объектов с полями name, age. Например:
// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},
// {name:'Den', age: 43}
// ]
// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.
// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.


const users = [
{name: 'Mark', age: 12},
{name: 'Olga', age: 30},
{name:'Tom', age: 25},
{name:'Den', age: 43}
]
let table = document.querySelector('table');

for(item of users) { 
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.innerText = item.name;
    td1.style.color = 'red';
    td2.innerText = item.age;
    td2.style.color = 'blue';
    tr.append(td1);
    tr.append(td2);
    table.append(tr);
}


// Задание 12

// Есть верстка: https://teenscool1.notion.site...
// С помощью JavaScript:
// 1) Найти в коде список ul и добавить ему класс “list”.
// 2) Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
// 3) На li через один (начиная с самого первого) установить класс “item”
// 4) На все ссылки в примере установить класс “custom-link”


document.querySelectorAll('ul').forEach (item =>  item.classList.add('list'));


let lastA = document.querySelector('ul + span + a');
lastA.id ='link';

let allLi = document.querySelectorAll('li');
for (let i = 0; i < allLi.length; i = i + 2){
    allLi[i].classList.add('item');
}

document.querySelectorAll('a').forEach (item =>  item.classList.add('custom-link'));


// Задание 13

// Есть верстка: https://teenscool1.notion.site...
// С помощью JavaScript:
// 1) Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
// <ul>
// <li><a href="#">Link1</a></li>
// ...
// <li class=”new-item”>item 5</li>
// <li class=”new-item”>item 6</li>
// </ul>
// Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
// 2) В каждую ссылку, которая находятся внутри списка ul, добавить по тегу strong (в каждую ссылку один strong).
// 3) В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами). В src добавьте реальный url к картинке.
// Для создания элемента используйте метод createElement.
// ПОДСКАЗКА. Для добавления в конец используется метод appendChild или append, а в начало - prepand.
// 4) Найти на странице элемент mark, добавить в конец его содержимого текст “green” и на сам элемент установить класс green.


let ul = document.querySelectorAll('li');
let newList = document.querySelector('.new-list')

ul.forEach ((item, index) =>  {
    let li = document.createElement('li');
    li.innerText = `item ${index + 1}`;
    li.classList.add('new-item');
    newList.append(li);
});


let allUl = document.querySelectorAll('li');

for (let i = 0; i < allUl.length; i++){
    let strong = document.createElement('strong')
    allUl[i].append(strong);
}


let img = document.createElement('img');
img.src = 'https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9';
img.alt = 'halllo';
document.body.prepend(img);


let mark = document.querySelector('mark');
mark.innerText = 'green';
mark.classList.add('green');