import ReviewCard from '../components/ReviewCard';
import Carousel from '../components/Carousel';

const CustomerReview2 = () => {
    const CUSTOMER_REVIEWS = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name="Brooke M. Verified Buyer"
                >
                    <p className="font-size-sm">I have been using sand & Sky for about 2 months, and I love it! My skin feels great. I've tried so many other products. I have dark spots and occasional acne at 40 years old. And it is finally looking better! I use the deep pore cleanser, the exfoliating face scrub, the pink clay mask, and bounce mask.</p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c964bfc6-c9a7-4be1-be94-21d95955ed00/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f71bc4d4-3998-4fef-d25c-787feb678b00/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f71bc4d4-3998-4fef-d25c-787feb678b00/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name="Megan P. Verified Buyer"
                >
                    <p className="font-size-sm">I love this cleanser! Not only does it smell amazingly fresh and clean, but it is gentle enough for every day use. It makes your skin feel so nice and soft and not really tight after use. I do tend to have more sensitive skin so this is perfect for me. I really love Sand & Sky and cannot wait until I have each and every product. Thank you! X</p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4d0125e8-3ff5-4235-f1d4-120c4f89a800/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f71bc4d4-3998-4fef-d25c-787feb678b00/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f71bc4d4-3998-4fef-d25c-787feb678b00/200x"className="w-100" alt="" loading="lazy"  />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                name="Rochelle P. Verified Buyer"
                >
                    <p>No make up, no worries I'm not a fan of make up so these products are my best friend. The first thing I tried was the detox pink clay mask and since then I’ve been hooked! I now have a little collection of sand and sky and I love them all. My latest but was the cleanser and I love what it’s doing for my skin! Soft, glowy, fresh, lovely skin!</p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b74c1807-7b1a-4c2c-4839-15db63d14600/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/92f28102-38ad-4c16-ce68-953e8cd23100/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/92f28102-38ad-4c16-ce68-953e8cd23100/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                name="Fernando C. Verified Buyer"
                >
                    <p className="font-size-sm">My new favorite and go to cleanser. This one doesn't burn or feels too strong on your skin. I recommend getting the whole kit. It'll be worth it.</p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ac2234b6-f53d-4660-3bb2-7874871e7700/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6a46b0a4-291a-4f26-cd53-072f247b7500/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6a46b0a4-291a-4f26-cd53-072f247b7500/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name="Brooke M. Verified Buyer"
                >
                    <p className="font-size-sm">I have been using sand & Sky for about 2 months, and I love it! My skin feels great. I've tried so many other products. I have dark spots and occasional acne at 40 years old. And it is finally looking better! I use the deep pore cleanser, the exfoliating face scrub, the pink clay mask, and bounce mask.</p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c964bfc6-c9a7-4be1-be94-21d95955ed00/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f71bc4d4-3998-4fef-d25c-787feb678b00/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f71bc4d4-3998-4fef-d25c-787feb678b00/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name="Megan P. Verified Buyer"
                >
                    <p className="font-size-sm">I love this cleanser! Not only does it smell amazingly fresh and clean, but it is gentle enough for every day use. It makes your skin feel so nice and soft and not really tight after use. I do tend to have more sensitive skin so this is perfect for me. I really love Sand & Sky and cannot wait until I have each and every product. Thank you! X</p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4d0125e8-3ff5-4235-f1d4-120c4f89a800/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f71bc4d4-3998-4fef-d25c-787feb678b00/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f71bc4d4-3998-4fef-d25c-787feb678b00/200x"className="w-100" alt="" loading="lazy"  />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                name="Rochelle P. Verified Buyer"
                >
                    <p className="font-size-sm">No make up, no worries I'm not a fan of make up so these products are my best friend. The first thing I tried was the detox pink clay mask and since then I’ve been hooked! I now have a little collection of sand and sky and I love them all. My latest but was the cleanser and I love what it’s doing for my skin! Soft, glowy, fresh, lovely skin!</p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b74c1807-7b1a-4c2c-4839-15db63d14600/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/92f28102-38ad-4c16-ce68-953e8cd23100/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/92f28102-38ad-4c16-ce68-953e8cd23100/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                name="Fernando C. Verified Buyer"
                >
                    <p className="font-size-sm">My new favorite and go to cleanser. This one doesn't burn or feels too strong on your skin. I recommend getting the whole kit. It'll be worth it.</p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ac2234b6-f53d-4660-3bb2-7874871e7700/200x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6a46b0a4-291a-4f26-cd53-072f247b7500/200x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6a46b0a4-291a-4f26-cd53-072f247b7500/200x" className="img-fluid" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
    ]

	return (
		<section className='customer-reviews pb-5 pt-2 pt-lg-4'>
            <h2 className="h1 mb-4 text-center">Customer Reviews</h2>
            <div className='container px-g pe-0 pe-lg-g'>
                <Carousel
                    id="customerReviews2"
                    className="carousel slide carousel--loop carousel--mobile-half-next carousel--swipe"
                    items={CUSTOMER_REVIEWS}
                    slideNumber="4"
                    centered={true}>
                    <button className="carousel-control carousel-control-prev  floating-out-start justify-content-start text-secondary d-none d-lg-flex" data-bs-target="#customerReviews2" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M16.2 1.885l-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg></span>
                    </button>
                    <button className="carousel-control carousel-control-next  floating-out-end justify-content-end text-secondary d-none d-lg-flex" data-bs-target="#customerReviews2" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M5.428 20.742l9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg></span>
                    </button>
                </Carousel>
            </div>
        </section>
	);
};

export default CustomerReview2;
