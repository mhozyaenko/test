const images = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
    ];

let slider = document.querySelector('.slider_imagesList');
let activeSlide = 0;
let previous = document.querySelector('.slider_prev');
let next = document.querySelector('.slider_next');
let getSlides = (images) => {
    images.forEach((item, i) => {
        let slide = document.createElement('li');
        slide.className = 'slide_item';
        slide.setAttribute('data-id', i);
        slide.innerHTML = `<img src="./img/${item}" alt=""/>`;
        slider.appendChild(slide);
    });
    slider.querySelector('.slide_item').classList.add('active');
};

let setSlide = slide => {
    activeSlide = slide;
    console.log(slide);
    let prevSlide = (slide!==0) ? slide-1 : 9;
    let slides = document.querySelectorAll('.slide_item');
    slides.forEach(item => {
        if (Number(item.getAttribute('data-id')) === prevSlide) animation(item);
        setTimeout(() => {
            if (Number(item.getAttribute('data-id')) === slide) animationBack(item);
            (Number(item.getAttribute('data-id')) === slide) ? item.classList.add('active') : item.classList.remove('active');
        }, 700);
    })
}
let autoChange =() => {
    setInterval(() => {
        (activeSlide === 9) ? activeSlide = 0 : activeSlide++;
        console.log(activeSlide);
        setSlide(activeSlide);
    }, 4000)
}
let animation = (activeSlide) => {
    activeSlide.style = 'animation: blur .7s linear';
}
let animationBack = (activeSlide) => {
    activeSlide.style = 'animation: blurBack .7s linear';
}
previous.addEventListener('click', event => {
    event.preventDefault();
    (activeSlide === 0) ? activeSlide = 9 : activeSlide--;
    setSlide(activeSlide);
});
next.addEventListener('click', event => {
    event.preventDefault();
    (activeSlide === 9) ? activeSlide = 0 : activeSlide++;
    setSlide(activeSlide);
});
getSlides(images);
autoChange();

