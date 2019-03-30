var numberRandom = Math.floor(Math.random() * 10000);

console.log(numberRandom);

var numberUser = +prompt('введите четырехзначное число');

if (isNaN(numberUser)) {
    alert('Нужно было ввести число')
} else if (numberUser == numberRandom) {
    alert('Вы угадали')
} else {
    alert('Вы проиграли :-(')
};