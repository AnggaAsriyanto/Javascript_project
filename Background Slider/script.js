const body = document.body;
const slideCont = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const left = document.getElementById('left');
const right = document.getElementById('right');

let activeSlide = 0;

setBgToBody();

slideCont.addEventListener('click', () => {
    slideCont.classList.toggle('open');
});

right.addEventListener('click', () => {
    activeSlide++;

    if(activeSlide > slides.length - 1){
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
});

left.addEventListener('click', () => {
    activeSlide--;

    if(activeSlide < 0){
        activeSlide = slides.length - 1;
    }

    setBgToBody();
    setActiveSlide();
})

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'));

    slides[activeSlide].classList.add('active');
}