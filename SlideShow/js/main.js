var slideIndex = 1;
showSlide(slideIndex);
function currentSlide(n) {
    showSlide(slideIndex = n);
}

function plusSlide(n) {
    showSlide(slideIndex += n);
}
function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName('itemSlides');
    let dots = document.getElementsByClassName('dot');

    if(slideIndex > slides.length) {
        slideIndex = 1;
    }

    if(slideIndex < 1) {
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; ++i) {
        slides[i].style.display = 'none';
    }

    for(i = 0; i < dots.length; ++i) {
        dots[i].className = dots[i].className.replace(' active', "");
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
}