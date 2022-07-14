import carouselScroll from "../../modules/carousel-scroll";
import { truncateWords, useWindowSize } from '../../modules/Utils';

const CustomerReviews = () => {
    carouselScroll('customerReviews');
    const adjustThumb = () => {
        const reviewCarousel = document.querySelector('#customerReviews');
        reviewCarousel.dispatchEvent(new CustomEvent('adjustThumb'));
    };
    window.addEventListener('resize', adjustThumb);

    const [width] = useWindowSize();
    const reviewScroll = document.querySelector('#customerReviews .scrollbar');
    if (reviewScroll) {
        if (width < 991) {
            reviewScroll.classList.remove('d-none');
        } else {
            reviewScroll.classList.add('d-none');
        }
    }

    const REVIEWS = [
        {
            name: '@pryaathwal',
            text: 'This mask is my saviour for helping me clear my congested pores. It make my skin feel so soft and radiant after one use!',
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/db236cf0-92e9-4928-dc6a-9e8fa0afe300',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/859badc2-8138-415a-bcf5-e18a27c16700'
        },
        {
            name: '@Dalia',
            text: "The Australian Pink Clay is the only product I trust on my face! Your product has really helped my skin it's almost as if it's magic!",
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5cfda92d-78e9-4e4e-6864-06c8772f8400',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b44f5786-cb9c-4bf6-b6f5-623c028ec700'
        },
        {
            name: '@ruchipage',
            text: "I've been using this over the past few weeks and it is such a reliable formula, from heavy to natural makeup this really does remove it all. But instead of stripping, it replenishes.",
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e05c3a99-d5ae-49bb-6cf6-e79bc4d56400',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0fd8ba55-e265-423f-e842-b4df19124f00'
        },
        {
            name: '@rebekahannemaguire',
            text: 'I have been using this cleanser in my routine one to two times a week and loving it. My skin feels so soft, bright and refreshed after using it. I also found it helped my hormonal breakouts disappear a lot faster than usual which is a big plus for me.',
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4ab60b18-59c3-40b7-fc8d-dfb87ef95e00',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8933d624-0b71-46e8-7047-e055aebdce00'
        },
    ]

    const onMore = (event) => {
        event.preventDefault();
        event.target.closest('p').querySelector('.review-card__more-text').classList.remove('d-none');
        event.target.closest('p').querySelector('.review-card__more-truncated').classList.add('d-none');
        event.target.closest('p').querySelector('.review-card__more').classList.add('d-none');
    }

    const onLess = (event) => {
        event.preventDefault();
        event.target.closest('p').querySelector('.review-card__more-text').classList.add('d-none');
        event.target.closest('p').querySelector('.review-card__more-truncated').classList.remove('d-none');
        event.target.closest('p').querySelector('.review-card__more').classList.remove('d-none');
    }

    return (
        <section className="review-carousel pt-5 pb-3 py-lg-7 overflow-hidden position-relative">
            <div className="container px-g">
                <div className="d-flex align-items-center pt-lg-3 justify-content-center justify-content-lg-start">
                    <h2 className="h1 mb-3 mb-lg-5">Don’t take our word for it…</h2>
                </div>
            </div>
            <div className="container px-g">
                <div className="carousel--scroll position-relative" id="customerReviews">
                    <div className="carousel-inner d-flex flex-nowrap row w-auto" role="listbox">
                        {REVIEWS.map((item, index) => (
                            <figure className="col-9 col-lg-3 carousel-item mb-0" key={`review-${index}`} >
                                <picture>
                                    <source type="image/webp" srcSet={`${item.webp}/828x`}/>
                                    <source type="image/webp" srcSet={`${item.webp}/1140x`} media="(min-width: 992px)"/>
                                    <source type="image/jpeg" srcSet={`${item.jpg}/828x`}/>
                                    <source type="image/jpeg" srcSet={`${item.jpg}/1140x`} media="(min-width: 992px)"/>
                                    <img src={`${item.jpg}/828x`} alt="" className="w-100" loading="lazy" />
                                </picture>
                                <figcaption className="m-0 bg-secondary-light font-size-sm px-g py-3">
                                    <p className="mb-3 text-body">{item.name}</p>
                                    <p className="d-block text-body">
                                        <span className="review-card__more-truncated text-break">{ truncateWords(item.text, index === 3 ? 26 : 22) }... </span>
                                        <span className="d-none review-card__more-text text-break">
                                            {item.text}
                                            <a href="#" className="text-underline text-body review-card__less ms-1" onClick={onLess.bind(this)}>Less</a>
                                        </span>
			                            <a href="#" className="text-underline text-body review-card__more" onClick={onMore.bind(this)}>More</a>
                                    </p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>

                    <div className="container mt-3 px-0 review-carousel__scroll">
                        <div className="scrollbar">
                            <div className="scrollbar--thumb"></div>
                        </div>
                    </div>

                    <a className="carousel-control-prev text-body ms-ng" role="button">
                        <span className="carousel-control-prev-icon carousel-control--background d-flex justify-content-center align-items-center" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="m16.2 1.885-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg>
                        </span>
                    </a>
                    <a className="carousel-control-next text-body me-ng" role="button">
                        <span className="carousel-control-next-icon carousel-control--background d-flex justify-content-center align-items-center" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="m5.428 20.742 9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;
