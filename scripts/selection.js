// -------- diable the three buttons ----------
let btns = document.querySelector('.buttons').children;
for (let i = 0; i < btns.length; i++) {
    btns[i].disabled = true;
}

// -------- handle first card --------
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