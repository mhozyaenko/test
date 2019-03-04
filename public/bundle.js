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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGltYWdlcyA9IFtcclxuICAgICAgICAnMS5qcGcnLFxyXG4gICAgICAgICcyLmpwZycsXHJcbiAgICAgICAgJzMuanBnJyxcclxuICAgICAgICAnNC5qcGcnLFxyXG4gICAgICAgICc1LmpwZycsXHJcbiAgICAgICAgJzYuanBnJyxcclxuICAgICAgICAnNy5qcGcnLFxyXG4gICAgICAgICc4LmpwZycsXHJcbiAgICAgICAgJzkuanBnJyxcclxuICAgICAgICAnMTAuanBnJyxcclxuICAgIF07XHJcblxyXG5sZXQgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9pbWFnZXNMaXN0Jyk7XHJcbmxldCBhY3RpdmVTbGlkZSA9IDA7XHJcbmxldCBwcmV2aW91cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfcHJldicpO1xyXG5sZXQgbmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfbmV4dCcpO1xyXG5sZXQgZ2V0U2xpZGVzID0gKGltYWdlcykgPT4ge1xyXG4gICAgaW1hZ2VzLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICBsZXQgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIHNsaWRlLmNsYXNzTmFtZSA9ICdzbGlkZV9pdGVtJztcclxuICAgICAgICBzbGlkZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBpKTtcclxuICAgICAgICBzbGlkZS5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIuL2ltZy8ke2l0ZW19XCIgYWx0PVwiXCIvPmA7XHJcbiAgICAgICAgc2xpZGVyLmFwcGVuZENoaWxkKHNsaWRlKTtcclxuICAgIH0pO1xyXG4gICAgc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZV9pdGVtJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn07XHJcblxyXG5sZXQgc2V0U2xpZGUgPSBzbGlkZSA9PiB7XHJcbiAgICBhY3RpdmVTbGlkZSA9IHNsaWRlO1xyXG4gICAgY29uc29sZS5sb2coc2xpZGUpO1xyXG4gICAgbGV0IHByZXZTbGlkZSA9IChzbGlkZSE9PTApID8gc2xpZGUtMSA6IDk7XHJcbiAgICBsZXQgc2xpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlX2l0ZW0nKTtcclxuICAgIHNsaWRlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGlmIChOdW1iZXIoaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkgPT09IHByZXZTbGlkZSkgYW5pbWF0aW9uKGl0ZW0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKGl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpID09PSBzbGlkZSkgYW5pbWF0aW9uQmFjayhpdGVtKTtcclxuICAgICAgICAgICAgKE51bWJlcihpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSA9PT0gc2xpZGUpID8gaXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSA6IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSwgNzAwKTtcclxuICAgIH0pXHJcbn1cclxubGV0IGF1dG9DaGFuZ2UgPSgpID0+IHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAoYWN0aXZlU2xpZGUgPT09IDkpID8gYWN0aXZlU2xpZGUgPSAwIDogYWN0aXZlU2xpZGUrKztcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVTbGlkZSk7XHJcbiAgICAgICAgc2V0U2xpZGUoYWN0aXZlU2xpZGUpO1xyXG4gICAgfSwgNDAwMClcclxufVxyXG5sZXQgYW5pbWF0aW9uID0gKGFjdGl2ZVNsaWRlKSA9PiB7XHJcbiAgICBhY3RpdmVTbGlkZS5zdHlsZSA9ICdhbmltYXRpb246IGJsdXIgLjdzIGxpbmVhcic7XHJcbn1cclxubGV0IGFuaW1hdGlvbkJhY2sgPSAoYWN0aXZlU2xpZGUpID0+IHtcclxuICAgIGFjdGl2ZVNsaWRlLnN0eWxlID0gJ2FuaW1hdGlvbjogYmx1ckJhY2sgLjdzIGxpbmVhcic7XHJcbn1cclxucHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgKGFjdGl2ZVNsaWRlID09PSAwKSA/IGFjdGl2ZVNsaWRlID0gOSA6IGFjdGl2ZVNsaWRlLS07XHJcbiAgICBzZXRTbGlkZShhY3RpdmVTbGlkZSk7XHJcbn0pO1xyXG5uZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIChhY3RpdmVTbGlkZSA9PT0gOSkgPyBhY3RpdmVTbGlkZSA9IDAgOiBhY3RpdmVTbGlkZSsrO1xyXG4gICAgc2V0U2xpZGUoYWN0aXZlU2xpZGUpO1xyXG59KTtcclxuZ2V0U2xpZGVzKGltYWdlcyk7XHJcbmF1dG9DaGFuZ2UoKTtcclxuXHJcbiJdfQ==
