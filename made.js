// Берём кнопку вперёд
let btnRight = document.querySelector(".btnRight");
//// Берём кнопку назад
let prev = document.querySelector(".prev");
// Берём слайды
let slides = document.querySelectorAll("img");
// Объявляем переменную i 
let i = 0;
// Объявляем событие нажатия на кнопку вперёд
btnRight.addEventListener("click", function () {
    console.log(i)
    // Увеличиваем переменную i
    ++i
    // Условие если переменная i больше или равна количеству слайдов
    if (i >= slides.length) {
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Присваиваем переменной i ноль
        i = 0;
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    } else { // Иначе
        // Удаляем класс block предыдущему слайду
        slides[i-1].classList.remove("block");
        // Добавляем класс block следующему слайду
        slides[i].classList.add("block");
    }
})
// Объявляем событие нажатия на кнопку назад
prev.addEventListener("click", function () {
    console.log(i)
    i--
    if (i < 0) {
        slides[i+1].classList.remove("block");
        i = 3;
        slides[i].classList.add("block");
    } else {
        slides[i+1].classList.remove("block");
        slides[i].classList.add("block");
    }
})

//общий
var modal = document.getElementById("myModal");
//кнопка открывашка
var btn = document.getElementById('myBtn');
//кнопка закрывашка
var span = document.getElementsByClassName("close")[0];
//открывашка
btn.onclick = function() {
    modal.style.display = "block";
}
//закрывашка
span.onclick = function() {
    modal.style.display = "none";
}