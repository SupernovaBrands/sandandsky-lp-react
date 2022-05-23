import carouselScroll from "../../modules/carousel-scroll";

const CustomerReviews = () => {
    carouselScroll('customerReviews');

    const REVIEWS = [
        {
            name: '@greivy.inc1',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            img: 'https://via.placeholder.com/270x270'
        },
        {
            name: '@greivy.inc2 ',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            img: 'https://via.placeholder.com/270x270'
        },
        {
            name: '@greivy.inc3',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            img: 'https://via.placeholder.com/270x270'
        },
        {
            name: '@greivy.inc4',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            img: 'https://via.placeholder.com/270x270'
        },
        {
            name: '@greivy.inc5',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            img: 'https://via.placeholder.com/270x270'
        },
        {
            name: '@greivy.inc6',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            img: 'https://via.placeholder.com/270x270'
        },
        {
            name: '@greivy.inc7',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            img: 'https://via.placeholder.com/270x270'
        },
        {
            name: '@greivy.inc8',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            img: 'https://via.placeholder.com/270x270'
        },
        {
            name: '@greivy.inc9',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            img: 'https://via.placeholder.com/270x270'
        },
        {
            name: '@greivy.inc10',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            img: 'https://via.placeholder.com/270x270'
        },
        {
            name: '@greivy.inc11',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            img: 'https://via.placeholder.com/270x270'
        },
        {
            name: '@greivy.inc12',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            img: 'https://via.placeholder.com/270x270'
        }
    ]
    return (
        <section class="review-carousel py-4 py-lg-7 overflow-hidden position-relative">
            <div class="d-flex justify-content-between align-items-center container pt-lg-3">
                <h2 class="h1 col-10 mb-4 mb-lg-5 row">Don’t take our word for it…</h2>
            </div>
            <div className="container px-g">
                <div class="carousel--scroll position-relative" id="customerReviews">
                    <div class="carousel-inner d-flex flex-nowrap row w-auto" role="listbox">
                        {REVIEWS.map((item, index) => (
                            <figure class="col-9 col-lg-3 carousel-item mb-0" key={`review-${index}`} >
                                <img src={item.img} alt="Placeholder" class="d-block w-100" />
                                <figcaption class="m-0 bg-secondary-light font-size-sm px-g py-3">
                                    <p class="mb-3 text-body">{item.name}</p>
                                    <p class="d-block text-body">{item.text}</p>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
            
                    <div class="container mt-3 px-0 review-carousel__scroll">
                        <div class="scrollbar">
                            <div class="scrollbar--thumb"></div>
                        </div>
                    </div>
            
                    <a class="carousel-control-prev text-body ms-ng" role="button">
                        <span class="carousel-control-prev-icon carousel-control--background d-flex justify-content-center align-items-center" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" class="svg"><path d="m16.2 1.885-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg>
                        </span>
                    </a>
                    <a class="carousel-control-next text-body me-ng" role="button">
                        <span class="carousel-control-next-icon carousel-control--background d-flex justify-content-center align-items-center" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" class="svg"><path d="m5.428 20.742 9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CustomerReviews;