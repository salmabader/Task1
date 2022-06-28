// handle first card

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
    }
    else {
        if (index == 0) {
            prevSlide.classList.add('inactive');
            nextSlide.classList.remove('inactive');
        }
        if (index == 0) {
            index = 0;
        }
        else {
            index--;
        }
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("show");
    }
    slides[index].classList.add("show");

}











document.getElementById("btn1").disabled = true;
document.getElementById("btn2").disabled = true;
document.getElementById("btn3").disabled = true;