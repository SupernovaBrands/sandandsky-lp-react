const carousels = [];

const adjustScrollThumb = (thumb, inner, scrollParent) => {
    let innerOuterWidth;
    innerOuterWidth = inner.scrollWidth;

    // eslint-disable-next-line no-param-reassign
	thumb.style.width = `${(inner.clientWidth / innerOuterWidth) * 100}%`;
	// eslint-disable-next-line no-param-reassign
	thumb.style.left = `${(inner.scrollLeft / inner.scrollWidth) * 100}%`;
};

const carouselScroll = (carouselId) => {
    setTimeout(() => {
        const carousel = document.getElementById(carouselId);

        const inner = carousel.querySelector('.carousel-inner');
        const scrollbar = carousel.querySelector('.scrollbar');
        const scrollThumb = carousel.querySelector('.scrollbar--thumb');
        const prevButton = carousel.querySelector('.carousel-control-prev');
        const nextButton = carousel.querySelector('.carousel-control-next');

        if (scrollbar) {
            carousel.addEventListener('adjustThumb', () => { adjustScrollThumb(scrollThumb, inner, scrollbar.parentNode); });
            if (scrollThumb) adjustScrollThumb(scrollThumb, inner, scrollbar.parentNode);
        }
        carousels.push(carousel);

        let x = 0;
        let left = 0;
        let itemIndex = 0;

        const checkButton = () => {
            if (inner.scrollLeft <= 15) {
                
                if (!prevButton.classList.contains('carousel-control-prev--always-show')) {
                    prevButton.classList.add('d-none');
                } else {
                    prevButton.classList.add('disabled');
                }
            } else if (!prevButton.classList.contains('carousel-control-prev--always-show')) {
                prevButton.classList.remove('d-none');
            } else {
                prevButton.classList.remove('disabled');
            }

            const innerScrollWidth = inner.scrollWidth - 15;
            if (inner.scrollLeft + inner.clientWidth >= innerScrollWidth) {
                if (!nextButton.classList.contains('carousel-control-prev--always-show')) {
                    nextButton.classList.add('d-none');
                } else {
                    nextButton.classList.add('disabled');
                }
            } else if (!nextButton.classList.contains('carousel-control-prev--always-show')) {
                nextButton.classList.remove('d-none');
            } else {
                nextButton.classList.remove('disabled');
            }
        };

        if (scrollThumb) {
            checkButton();
        }

        const innerDrag = (e) => {
            inner.scrollLeft = left - (e.pageX || e.touches[0].pageX) + x;
            if (scrollThumb) scrollThumb.style.left = `${(inner.scrollLeft / inner.scrollWidth) * 100}%`;
            checkButton();
        };

        const scrollDrag = (e) => {
            inner.scrollLeft = left + ((e.pageX || e.touches[0].pageX) - x) * (inner.scrollWidth / scrollbar.clientWidth);
            if (scrollThumb) scrollThumb.style.left = `${(inner.scrollLeft / inner.scrollWidth) * 100}%`;
            checkButton();
        };

        inner.addEventListener('scroll', () => {
            if (scrollThumb) scrollThumb.style.left = `${(inner.scrollLeft / inner.scrollWidth) * 100}%`;
            checkButton();
        });

        const eventStart = (e) => {
            e.preventDefault();
            x = (e.pageX || e.touches[0].pageX);
            left = inner.scrollLeft;

            document.addEventListener(
                e.type === 'mousedown' ? 'mousemove' : 'touchmove',
                e.target === scrollThumb ? scrollDrag : innerDrag,
            );
        };

        inner.addEventListener('mousedown', eventStart, true);

        if (scrollThumb) {
            scrollThumb.addEventListener('mousedown', eventStart, true);
            scrollThumb.addEventListener('touchstart', eventStart, true);
        }

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', innerDrag);
            document.removeEventListener('mousemove', scrollDrag);
        });

        document.addEventListener('touchend', () => {
            document.removeEventListener('touchmove', innerDrag);
            document.removeEventListener('touchmove', scrollDrag);
        });

        const scrollItem = (direction) => (e) => {
            e.preventDefault();
            const item = carousel.querySelector('.carousel-item');
            const itemToScroll = carousel.getAttribute('item-scroll') ? carousel.getAttribute('item-scroll') : 2;
            itemIndex = Math.round(inner.scrollLeft / item.clientWidth) + (direction === 'left' ? -(itemToScroll) : itemToScroll);
            left = itemIndex * item.clientWidth;
            if (left < 0) left = 0;
            else if (left > inner.scrollWidth - inner.clientWidth) left = inner.scrollWidth - inner.clientWidth;
            inner.scroll({ left: left, top: 0, behavior: 'smooth' });
            scrollThumb.style.left = (left / inner.scrollWidth) * 100;
        };

        if (prevButton) {
            prevButton.addEventListener('mousedown', scrollItem('left'));
        }
        if (nextButton) {
            nextButton.addEventListener('mousedown', scrollItem('right'));
        }

        window.addEventListener('resize', function () {
            checkButton();
        });
    }, 500);
};

export default carouselScroll;