console.log("Я загадал число от 1 до 10. Попробуй угадать его!");

let secretNumber = Math.floor(Math.random() * 10) + 1;  // Случайное число от 1 до 10
let attempts = 3; // Кол-во попыток


while (attempts > 0) {
    let userNumber = Number(prompt("Введите число: ")); // Получение данных от пользователя

    if (userNumber < secretNumber) {
        console.log("Секретное число больше");
        attempts--;
    } else if (userNumber === secretNumber) {
        console.log("Вы угадали!")
        break;
    } else {
        console.log("Секретное число меньше");
        attempts--;
    }
    console.log(`У вас осталось ${attempts} попыток!`);
}

if (attempts === 0) {
    console.log("Вы проиграли!");
} else {
    console.log("Это успех!");
}