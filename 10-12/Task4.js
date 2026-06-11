// Функция для задания 4 (расчёт по формуле)
function calculateY(x) {
    // Проверка, что x — число
    if (isNaN(x)) {
        alert("Ошибка: введите корректное число");
        return null;
    }
    var numerator = x + 1;
    var denominator = x * x + 3 * x + 2; // x^2 + 3x + 2

    // Обработка деления на ноль
    if (denominator === 0) {
        alert("Ошибка: деление на ноль! Знаменатель равен 0 при x = " + x);
        return null;
    }

    var y = numerator / denominator;
    return y;
}