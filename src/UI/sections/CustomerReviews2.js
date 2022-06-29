import ReviewCard from '../components/ReviewCard';
import carouselScroll from "../../modules/carousel-scroll";

const CustomerReview2 = () => {
    carouselScroll('customerReviews2');

    const CUSTOMER_REVIEWS = [
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name="Amanda L."
                >
                    <p className="font-size-sm"><b>I love it</b><br/><br/>My skin has gone from looking dull and lifeless to looking fresh, plump, hydrated & full of life! I absolutely love how this product makes me feel, my confidence levels are through the roof since using it.</p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/47848a51-846c-447e-e8e0-4db4b321b000/400x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/47848a51-846c-447e-e8e0-4db4b321b000/400x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/47848a51-846c-447e-e8e0-4db4b321b000//400x" className="img-fluid w-100" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name="Samara J."
                >
                    <p className="font-size-sm"><b>Love this product!</b><br/><br/>My skin is smooth, soft and cleaner than ever! After I washed it off I was astounded that my pores shrunk by over half their original size! Love this product!</p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1f2e1b61-79ed-4c9b-eafe-147492adbc00/400x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1f2e1b61-79ed-4c9b-eafe-147492adbc00/400x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1f2e1b61-79ed-4c9b-eafe-147492adbc00/400x"className="w-100" alt="" loading="lazy"  />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                name="Michelle C."
                >
                    <p className="font-size-sm"><b>So fresh</b><br/><br/>My skin was significantly brighter and felt so light and clean! It was fresh and the texture felt very great on my skin, and I felt like it was actually working on getting all the gunk off. </p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ea4d4048-e871-4800-3a3f-fc59a1da4300/400x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ea4d4048-e871-4800-3a3f-fc59a1da4300/400x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ea4d4048-e871-4800-3a3f-fc59a1da4300/400x" className="img-fluid w-100" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                name="Stephanie M."
                >
                    <p className="font-size-sm"><b>I love how my skin feels!</b><br/><br/>I love anything that has to do with Australian clay! So, I was super excited to try this cleanser. The rich smell combined with the exfoliate particles gives this cleanser a luxurious feel. It didn't dry up my skin it left it soft to the touch. I love the way my skin looks and feels. </p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c152a417-c00d-46e6-8b75-fddc541e1100/400x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c152a417-c00d-46e6-8b75-fddc541e1100/400x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c152a417-c00d-46e6-8b75-fddc541e1100/400x" className="img-fluid w-100" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
        {
            carouselItemClass: 'carousel-item col-9 col-md-4 rounded px-0',
            content:
                <ReviewCard
                    name="Cass W."
                >
                    <p className="font-size-sm"><b>Best morning cleanser</b><br/><br/>My experience with this cleanser has definitely been a pleasant one! The texture is beautiful, it’s so soft and lightweight with small beads in it. The smells is nice, not too overpowering and smells natural. I love it as a morning cleanser as it makes my skin feel a lot brighter and nourished.</p>
                    <div className='row no-gutters'>
                        <div className='col-6'>
                            <picture>
                                <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e510bd03-024d-4c99-e801-a3203ab4c000/400x" />
                                <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ded8bbac-8f8e-4d19-4b3d-e0ef940d5900/400x" />
                                <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ded8bbac-8f8e-4d19-4b3d-e0ef940d5900/400x" className="img-fluid w-100" alt="" loading="lazy" />
                            </picture>
                        </div>
                    </div>
                </ReviewCard>
        },
    ]

	return (
		<section className='review-carousel pb-5 pt-4 pt-lg-4'>
            <h2 className="h1 mb-4 text-center">Customer Reviews</h2>
            <div className="container px-g">
                <div className="carousel--scroll position-relative" id="customerReviews2">
                    <div className="carousel-inner d-flex flex-nowrap row w-auto" role="listbox">
                    {CUSTOMER_REVIEWS.map((item, index) => (
                        <div key={`Review2${index}`} className="carousel-item col-9 col-md-4 rounded px-0">
                            {item.content}
                        </div>
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

export default CustomerReview2;
