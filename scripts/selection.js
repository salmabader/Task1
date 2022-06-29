let isComplete = false;

// -------- handle cards --------
let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;
let index5 = 0;
function changePhoto(id) {
    let slides = "";
    let nextSlide = "";
    let prevSlide = "";
    if (id == 'right1' || id == 'left1') {
        slides = document.querySelector('.firstContent').children;
        nextSlide = document.querySelector("#right1");
        prevSlide = document.querySelector("#left1");
    }
    else if (id == 'right2' || id == 'left2') {
        slides = document.querySelector('.secondContent').children;
        nextSlide = document.querySelector("#right2");
        prevSlide = document.querySelector("#left2");
    }
    else if (id == 'right3' || id == 'left3') {
        slides = document.querySelector('.thirdContent').children;
        nextSlide = document.querySelector("#right3");
        prevSlide = document.querySelector("#left3");
    }
    else if (id == 'right4' || id == 'left4') {
        slides = document.querySelector('.fourthContent').children;
        nextSlide = document.querySelector("#right4");
        prevSlide = document.querySelector("#left4");
    }
    else {
        slides = document.querySelector('.fifthContent').children;
        nextSlide = document.querySelector("#right5");
        prevSlide = document.querySelector("#left5");
    }
    switch (id) {
        case 'right1':
            next(1, "next", index1, nextSlide, prevSlide, slides);
            break;
        case 'right2':
            next(2, "next", index2, nextSlide, prevSlide, slides);
            break;
        case 'right3':
            next(3, "next", index3, nextSlide, prevSlide, slides);
            break;
        case 'right4':
            next(4, "next", index4, nextSlide, prevSlide, slides);
            break;
        case 'right5':
            next(5, "next", index5, nextSlide, prevSlide, slides);
            break;
        case 'left1':
            next(1, "prev", index1, nextSlide, prevSlide, slides);
            break;
        case 'left2':
            next(2, "prev", index2, nextSlide, prevSlide, slides);
            break;
        case 'left3':
            next(3, "prev", index3, nextSlide, prevSlide, slides);
            break;
        case 'left4':
            next(4, "prev", index4, nextSlide, prevSlide, slides);
            break;
        case 'left5':
            next(5, "prev", index5, nextSlide, prevSlide, slides);
            break;
    }
}

function next(id, direction, index, nextSlide, prevSlide, slides) {
    let totalSlides = slides.length;
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
    if (id == 1) index1 = index;
    if (id == 2) index2 = index;
    if (id == 3) index3 = index;
    if (id == 4) index4 = index;
    if (id == 5) index5 = index;
    if (index1 > 0 && index2 > 0 && index3 > 0 && index4 > 0 && index5 > 0) {
        isComplete = true;
    }
    if (isComplete) {
        document.getElementById('btn1').disabled = false;
    }
}

// -------- handle submission button --------
function checkAnswers() {
    let correctAnswers = [5, 3, 1, 2, 4];
    if (index1 == 5 && index2 == 3 && index3 == 1 && index4 == 2 && index5 == 4) {
        let allCards = document.querySelectorAll('.card');
        for (let i = 0; i < allCards.length; i++) {
            allCards[i].classList.add('correct');
        }
        document.getElementById('btn1').disabled = true;
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn3').disabled = true;
    }

}