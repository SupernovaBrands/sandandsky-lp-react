import { Carousel } from "../vendor/bootstrap.bundle";

const abeautyCarousel = (carouselId) => {
    setTimeout(() => {
    const carouselEl = document.getElementById(carouselId);
    const carousel = Carousel.getInstance(carouselEl);
    let beforeIndicator;
    let before2Indicator;
    let afterIndicator;
    let after2Indicator;


    const prevAll = (elem) => {
        let siblingElements = [];
    
        while (elem.previousElementSibling) {
            siblingElements.push(elem.previousElementSibling)
            elem = elem.previousElementSibling
        }
    
        return siblingElements
    }

    const nextAll = (elem) => {
        let siblingElements = []
    
        while (elem.nextElementSibling) {
            siblingElements.push(elem.nextElementSibling)
            elem = elem.nextElementSibling
        }
    
        return siblingElements
     }

    carouselEl.addEventListener('slide.bs.carousel', function (e) {
        
        if ((e.from === 3 && e.to === 0) || (e.to === 3 && e.from === 0)) {
            carouselEl.classList.add('reverse-direction');
        }

        (e.to === 3) ? carouselEl.querySelector('.carousel-control-next').classList.add('d-none') : carouselEl.querySelector('.carousel-control-next').classList.remove('d-none');
        (e.to === 0) ? carouselEl.querySelector('.carousel-control-prev').classList.add('d-none') : carouselEl.querySelector('.carousel-control-prev').classList.remove('d-none');

        const indicator = e.target.querySelector('.carousel-indicators');
        beforeIndicator = e.to > 0 ? indicator.querySelectorAll('li')[(e.to - 1)] : null;
        before2Indicator = beforeIndicator ? prevAll(beforeIndicator) : null;
        afterIndicator = e.to + 1 < 4 ? indicator.querySelectorAll('li')[e.to + 1] : null;
        after2Indicator = afterIndicator ? nextAll(afterIndicator) : null;
        
        indicator.querySelectorAll('li').forEach(li => {
            li.classList.remove('carousel-indicator--prev');
            li.classList.remove('carousel-indicator--prev-out');
            li.classList.remove('carousel-indicator--next');
            li.classList.remove('carousel-indicator--next-out');
        });
        if (beforeIndicator) beforeIndicator.classList.add('carousel-indicator--prev');
        if (before2Indicator) {
            before2Indicator.forEach(li => {
                li.classList.add('carousel-indicator--prev-out');
            });
        }
        if (afterIndicator) afterIndicator.classList.add('carousel-indicator--next');
        if (after2Indicator) {
            after2Indicator.forEach(li => {
                li.classList.add('carousel-indicator--next-out');
            });
        }
    });

    carouselEl.addEventListener('slid.bs.carousel', function (e) {
        carouselEl.classList.remove('reverse-direction');
    });

    /*
    $('.a-beauty-review').on('slide.bs.carousel', function (e) {
        if ((e.from === 3 && e.to === 0) || (e.to === 3 && e.from === 0)) {
            $(this).addClass('reverse-direction');
        }

        beforeIndicator = e.to > 0 ? $(this).find('.carousel-indicators li').get(e.to - 1) : null;
        before2Indicator = beforeIndicator ? $(beforeIndicator).prevAll() : null;
        afterIndicator = e.to + 1 < $(this).find('.carousel-item').length ? $(this).find('.carousel-indicators li').get(e.to + 1) : null;
        after2Indicator = afterIndicator ? $(afterIndicator).nextAll() : null;

        $(this).find('.carousel-indicators li').removeClass('carousel-indicator--prev carousel-indicator--prev-out carousel-indicator--next carousel-indicator--next-out');
        if (beforeIndicator) $(beforeIndicator).addClass('carousel-indicator--prev');
        if (before2Indicator) $(before2Indicator).addClass('carousel-indicator--prev-out');
        if (afterIndicator) $(afterIndicator).addClass('carousel-indicator--next');
        if (after2Indicator) $(after2Indicator).addClass('carousel-indicator--next-out');
    });

    $('.a-beauty-review').on('slid.bs.carousel', function () {
        $(this).removeClass('reverse-direction');
    });
    */
    }, 500);
};

export default abeautyCarousel;