import carouselScroll from "../../modules/carousel-scroll";

const CustomerReviews = () => {
    carouselScroll('customerReviews');

    const REVIEWS = [
        {
            name: '@greivy.inc1',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1f8e983f-d70a-4d10-7c5a-d107e3024d00',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/81ae0738-aa7e-4e63-6a30-5f5b18a21100'
        },
        {
            name: '@greivy.inc2 ',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/39696f32-167d-4158-bb7b-5d69d02d4700',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/04d2e9eb-0fd7-443f-fda6-7b17bb6dfa00'
        },
        {
            name: '@greivy.inc3',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8e611144-8d7d-4a71-2ac7-458456523000',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/175a591f-4b81-430a-b314-196bd0f77a00'
        },
        {
            name: '@greivy.inc4',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/10d49152-5507-467f-6734-5f060e3f5b00',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e90f614d-0569-40ce-d0d7-8ae10279b000'
        },
        {
            name: '@greivy.inc1',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1f8e983f-d70a-4d10-7c5a-d107e3024d00',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/81ae0738-aa7e-4e63-6a30-5f5b18a21100'
        },
        {
            name: '@greivy.inc2 ',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/39696f32-167d-4158-bb7b-5d69d02d4700',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/04d2e9eb-0fd7-443f-fda6-7b17bb6dfa00'
        },
        {
            name: '@greivy.inc3',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8e611144-8d7d-4a71-2ac7-458456523000',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/175a591f-4b81-430a-b314-196bd0f77a00'
        },
        {
            name: '@greivy.inc4',
            text: 'I absolutely love to pamper my skin with the amazing pink clay mask from @sandandskyaus I wouldn’t have ended my Mother… More',
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/10d49152-5507-467f-6734-5f060e3f5b00',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e90f614d-0569-40ce-d0d7-8ae10279b000'
        },
    ]
    return (
        <section class="review-carousel py-4 py-lg-7 overflow-hidden position-relative">
            <div className="container px-g">
                <div class="d-flex justify-content-between align-items-center container pt-lg-3 justify-content-center justify-content-lg-start">
                    <h2 class="h1 col-12 mb-4 mb-lg-5 row">Don’t take our word for it…</h2>
                </div>
            </div>
            <div className="container px-g">
                <div class="carousel--scroll position-relative" id="customerReviews">
                    <div class="carousel-inner d-flex flex-nowrap row w-auto" role="listbox">
                        {REVIEWS.map((item, index) => (
                            <figure class="col-9 col-lg-3 carousel-item mb-0" key={`review-${index}`} >
                                <picture>
                                    <source type="image/webp" srcSet={`${item.webp}/828x`}/>
                                    <source type="image/webp" srcSet={`${item.webp}/1140x`} media="(min-width: 992px)"/>
                                    <source type="image/jpeg" srcSet={`${item.jpg}/828x`}/>
                                    <source type="image/jpeg" srcSet={`${item.jpg}/1140x`} media="(min-width: 992px)"/>
                                    <img src={`${item.jpg}/828x`} alt="" className="w-100" loading="lazy" />
                                </picture>
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