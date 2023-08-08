// Variables
let slideIndex = 1;
const slides = document.getElementsByClassName("my_slides");
const nextArrow = document.querySelector('.next');
const prevArrow = document.querySelector('.prev');
const dots = document.getElementsByClassName("dot");


// Calling functions
showSlidesAuto();
showSlides(slideIndex);
prevArrow.addEventListener('click', () => {
    slideIndex += -1;
    showSlides(slideIndex);
});

nextArrow.addEventListener('click', () => {
    slideIndex += 1;
    showSlides(slideIndex);
});


// Functions
// Auto slide
slideIndex = 0;
function showSlidesAuto() {
    for (const slide of slides) {
        slide.style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    dotsMoves();
    setTimeout(showSlidesAuto, 5000);
}

// Moving the dots
function dotsMoves() {
    for (const dot of dots) {
        dot.className = dot.className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";
}

// Changing the slide by clicking on a specific dot
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        slideIndex = i + 1;
        showSlides(slideIndex);
    })
}

// Displaying images in the slide
function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (const slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    dotsMoves();
}