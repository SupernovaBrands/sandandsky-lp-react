import { Carousel } from "../vendor/bootstrap.bundle";
const carouselSwipe = (carouselId) => {
    const carouselSwipe = document.getElementById(carouselId);

    let xDown = null;
    let yDown = null;

    function getTouches(evt) {
        return evt.touches || evt.originalEvent.touches;
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
        if (!xDown || !yDown) {
            return;
        }

        const carousel = Carousel.getInstance(carouselSwipe);

        const xUp = evt.touches[0].clientX;
        const yUp = evt.touches[0].clientY;

        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;
        if (Math.abs(xDiff) > Math.abs(yDiff)) {

            if (xDiff > 0) {
                carousel.next();
            } else {
                carousel.prev();
            }
        } else {
            xDown = null;
            yDown = null;
        }
    }

    carouselSwipe.addEventListener('touchstart', handleTouchStart, false);
    carouselSwipe.addEventListener('touchmove', handleTouchMove, false);
};

export default carouselSwipe;