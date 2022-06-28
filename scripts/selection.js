let btns = document.querySelector('.buttons').children;
let correctAnswers = [5, 3, 1, 2, 4];
let isComplete = false;

let showsNum = document.getElementsByClassName("show");
if (showsNum.length == 5) {
    let defaultImg = 0;
    for (let i = 0; i < showsNum.length; i++) {
        if (showsNum[i].id == "default") {
            defaultImg++;
        }
    }
    if (defaultImg == 0) isComplete = true;
}

// -------- diable the three buttons ----------
if (!isComplete) {
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = true;
    }
}
else if (isComplete) {
    document.getElementById('btn1').disabled = false;
    disableOther(1);
}
function disableOther(btn) {
    for (let i = btn; i < btns.length; i++) {
        btns[i].disabled = true;
    }
}

// -------- handle cards --------
function changePhoto(id) {
}
var slides = document.querySelector('.firstContent').children;
var nextSlide = document.querySelector("#right1");
var prevSlide = document.querySelector("#left1");
var totalSlides = slides.length;
var index = 0;
nextSlide.onclick = function () {
    next("next");
}
prevSlide.onclick = function () {
    next("prev");
}
function next(direction) {
    if (direction == "next") {
        index++;
        if (index == totalSlides - 1) {
            nextSlide.classList.add('inactive');
        }
        if (index == totalSlides) {
            index = totalSlides - 1;
        }
        prevSlide.classList.remove('inactive');
    }
    else {
        if (index == 1) {
            prevSlide.classList.add('inactive');
        }
        if (index == 0) {
            index = 0;
        }
        else {
            index--;
        }
        nextSlide.classList.remove('inactive');
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show");
    }
    slides[index].classList.add("show");
}

// -------- handle submission button --------
function checkAnswers() {

}