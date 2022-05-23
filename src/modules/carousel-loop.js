const carouselLoop = (carouselId) => {
    setTimeout(() => {
        const carouselLoop = document.getElementById(carouselId);
        const initCarouselItems = carouselLoop.querySelectorAll('.carousel-item');
        const initCarouselInner = carouselLoop.querySelector('.carousel-inner');

        if (768 > window.innerWidth && initCarouselItems.length <= 5) {
            for (let i = 0; i < initCarouselItems.length; i += 1) {
                const node = initCarouselInner.querySelectorAll('.carousel-item')[i+1]
                const itemClone = node.cloneNode(true);
                initCarouselInner.appendChild(itemClone);
            }
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

            if (e.target.querySelector('.carousel--centered')) {
                // special case for carousel centered we would need plus 1, as we have negative offset x on carousel-inner
                if (e.direction === 'right') {
                    const list = [...document.querySelectorAll(`#${carouselId} .carousel-item`)];
                    const active = document.querySelector(`#${carouselId} .carousel-item.active`);
                    const activeIndex = list.indexOf(active);

                    const selectorNthChild = `.carousel-item:nth-child(${activeIndex + 1 + parseInt(itemsPerSlide)})`;
                    if (e.target.querySelector(selectorNthChild)) {
                        // e.target.querySelector(selectorNthChild).classList.add('carousel-item--last');
                    }
                }
            }
        });
        if (carouselId === 'product-image-carousel__indicator') {
            const carousel = document.querySelector('#product-image-carousel__indicator');
            const items = carousel.querySelectorAll('.carousel-item');
            Array.from(items).forEach(function(element, index) {
                if (index === 0) {
                    const firstBtn = element.querySelector('button');
                    firstBtn.classList.add('border-primary');
                    firstBtn.classList.remove('border-white');
                }
                element.addEventListener('click', function (e) {
                    Array.from(items).forEach(function(elToClassRemove) {
                        elToClassRemove.querySelector('button').classList.remove('border-primary');
                        elToClassRemove.querySelector('button').classList.add('border-white');
                    });
                    const targetBtn = e.target.closest('button');
                    targetBtn.classList.add('border-primary');
                    targetBtn.classList.remove('border-white');
                });
            });
        }
    }, 500);
}

export default carouselLoop;
