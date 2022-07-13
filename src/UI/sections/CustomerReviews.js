import carouselScroll from "../../modules/carousel-scroll";
import { truncateWords } from '../../modules/Utils';

const CustomerReviews = () => {
    carouselScroll('customerReviews');

    const REVIEWS = [
        {
            name: '@pryaathwal',
            text: 'This mask is my saviour for helping me clear my congested pores. It make my skin feel so soft and radiant after one use!',
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1f8e983f-d70a-4d10-7c5a-d107e3024d00',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/81ae0738-aa7e-4e63-6a30-5f5b18a21100'
        },
        {
            name: '@Dalia',
            text: "The Australian Pink Clay is the only product I trust on my face! Your product has really helped my skin it's almost as if it's magic!",
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/39696f32-167d-4158-bb7b-5d69d02d4700',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/04d2e9eb-0fd7-443f-fda6-7b17bb6dfa00'
        },
        {
            name: '@ruchipage',
            text: "I've been using this over the past few weeks and it is such a reliable formula, from heavy to natural makeup this really does remove it all. But instead of stripping, it replenishes.",
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8e611144-8d7d-4a71-2ac7-458456523000',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/175a591f-4b81-430a-b314-196bd0f77a00'
        },
        {
            name: '@rebekahannemaguire',
            text: 'I have been using this cleanser in my routine one to two times a week and loving it. My skin feels so soft, bright and refreshed after using it. I also found it helped my hormonal breakouts disappear a lot faster than usual which is a big plus for me.',
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/10d49152-5507-467f-6734-5f060e3f5b00',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e90f614d-0569-40ce-d0d7-8ae10279b000'
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
        <section className="review-carousel py-5 py-lg-7 overflow-hidden position-relative">
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
