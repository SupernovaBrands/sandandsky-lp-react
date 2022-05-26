import { Carousel } from "../vendor/bootstrap.bundle";
const carouselLoop = (carouselId) => {
    setTimeout(() => {
        const carouselLoop = document.getElementById(carouselId);
        const initCarouselItems = carouselLoop.querySelectorAll('.carousel-item');
        const initCarouselInner = carouselLoop.querySelector('.carousel-inner');
        /*
        if (768 > window.innerWidth && initCarouselItems.length <= 5) {
            console.log(initCarouselItems.length);
            for (let i = 0; i < initCarouselItems.length; i += 1) {
                const node = initCarouselInner.querySelectorAll('.carousel-item')[i]
                const itemClone = node.cloneNode(true);
                initCarouselInner.appendChild(itemClone);
                node.classList.remove('active');
            }
        }
        */

        if (768 > window.innerWidth && carouselId === 'product-image-carousel') {
            carouselLoop.addEventListener('click', function (e) {
                const carousel = Carousel.getInstance(carouselLoop);
                carousel.next();
            });
        }

        carouselLoop.addEventListener('slide.bs.carousel', function (e) {
            const $e = e.relatedTarget;
            const carouselInner = e.target.querySelector('.carousel-inner');
            const itemsEl = carouselInner.querySelectorAll('.carousel-item');
            let idx = [].indexOf.call(itemsEl, $e);
            let itemsPerSlide = e.target.dataset.bsSlideNumber ? e.target.dataset.bsSlideNumber : 3;
			const totalItems = itemsEl.length;
            if (768 > window.innerWidth) {
				itemsPerSlide = 3;
			}

            if (e.target.querySelector('.carousel--centered')) {
                // add 1 element for negative offset of carousel inner
                idx += 1;
            }

            if (window.innerWidth > 768 && (carouselId === 'FeaturedBody' || carouselId === 'FeaturedFace' || carouselId === 'FeaturedValueSets')) {
                idx += 1;
            }

            if (idx >= totalItems - (itemsPerSlide - 1)) {
                const it = itemsPerSlide - (totalItems - idx);
                for (let i = 0; i < it; i += 1) {
                    if (e.direction === 'left') {
                        carouselInner.appendChild(carouselInner.querySelectorAll('.carousel-item')[i]);
                    } else {
                        carouselInner.appendChild(carouselInner.querySelectorAll('.carousel-item')[0]);
                    }
                }
            }
            if (carouselId === 'product-image-carousel__indicator') {
                const prevBtn = e.target.querySelector('.chevron-up');
                const nextBtn = e.target.querySelector('.chevron-down');
                if (idx === 0) {
                    prevBtn.setAttribute('disabled', true);
                } else {
                    prevBtn.removeAttribute('disabled');
                }

                if (idx + 5 === totalItems) {
                    nextBtn.setAttribute('disabled', true);
                } else {
                    nextBtn.removeAttribute('disabled');
                }

            }

            const list = [...document.querySelectorAll(`#${carouselId} .carousel-item`)];
            const active = document.querySelector(`#${carouselId} .carousel-item.active`);
            const activeIndex = list.indexOf(active);
            
            if (e.target.querySelector('.carousel--centered')) {
                // special case for carousel centered we would need plus 1, as we have negative offset x on carousel-inner
                if (e.direction === 'right') {
                    const selectorNthChild = `.carousel-item:nth-child(${activeIndex + 1 + parseInt(itemsPerSlide)})`;
                    if (e.target.querySelector(selectorNthChild)) {
                        // e.target.querySelector(selectorNthChild).classList.add('carousel-item--last');
                    }
                }
            }
            const dataIndex = parseInt(active.getAttribute('data-index')) || null;
            const dotsIndicator = carouselLoop.querySelector('.carousel-indicators--dots-unclickable');
            
            let dotActive = dataIndex < 4 ? dataIndex + 1 : 0;
            if (e.direction === 'right') {
                dotActive = dataIndex === 0 || dataIndex === null ? 4 : dataIndex - 1;
            }
            if (dotsIndicator) {
                const selectedDot = dotsIndicator.querySelector(`li[data-bs-slide-to="${dotActive}"]`);
                if (selectedDot) {
                    dotsIndicator.querySelectorAll("li[data-bs-slide-to]").forEach(li => {
                        li.classList.remove('active');
                    });
                    selectedDot.classList.add('active');
                }
            }
        });
        if (carouselId === 'product-image-carousel__indicator') {
            const carousel = document.querySelector('#product-image-carousel__indicator');
            const items = carousel.querySelectorAll('.carousel-item');
            Array.from(items).forEach(function(element, index) {
                if (index === 0) {
                    const firstBtn = element.querySelector('button');
                    firstBtn.classList.add('border-secondary');
                    firstBtn.classList.remove('border-white');
                }
                element.addEventListener('click', function (e) {
                    Array.from(items).forEach(function(elToClassRemove) {
                        elToClassRemove.querySelector('button').classList.remove('border-secondary');
                        elToClassRemove.querySelector('button').classList.add('border-white');
                    });
                    const targetBtn = e.target.closest('button');
                    targetBtn.classList.add('border-secondary');
                    targetBtn.classList.remove('border-white');
                });
            });
        }
    }, 500);
}

export default carouselLoop;
