import carouselLoop from "../../modules/carousel-loop";

const REVIEWS = [{
	id: 1,
	title: 'Holy grail',
	text: 'This product is a holy grail, look-no-further kind of mask! It is a clay mask that doesn’t strip moisture away, and in fact boosts my moisture level. Pores are detoxed and become tighter, even after the first use. You won’t regret your purchase!',
	username: 'Shayna VanLehn'
},{
	id: 2,
	title: 'Removed makeup effectively and skin feels softer',
	text: 'I found the cleanser to be very gentle on my skin yet effective. It removed my make up easily and exfoliated my skin without stripping it. My skin felt smoother, more plump and I saw a noticeable difference in the visibility of my pores.',
	username: 'Julia'
},{
	id: 3,
	title: 'Achieved the result I wanted',
	text: 'Achieved the result I wanted after around 2-3 weeks of use. I used this in tandem with the pink clay mask and the result is clearly obvious with the before and after photo. Clear skin and lesser visible pores.',
	username: 'Corrine C.'
},{
	id: 4,
	title: 'Where has this product been all my life!! I absolutely love this toner!',
	text: 'I used this after my S&S oil control cleanser every day. Following the toner, I applied a couple splash drops, and then finished my regular routine with the S&S prebiotic moisturizer. I loved how my skin felt and looked after the toner.',
	username: 'JoAnn Smith'
},{
	id: 5,
	title: 'ABSOLUTELY IN LOVE',
	text: 'Love love love! My skin feels and looks much smoother since using this product, it helps to clear and heal breakouts, and had improved texture. It was so easy to incorporate into my skincare routine. I started to see benefits within the first week! Overall beautiful product, very satisfied and will definitely continue to use!',
	username: 'Olivia Dunstan'
}];
const REVIEW_DUPLICATED = [...REVIEWS, ...REVIEWS];

const AmazonReviewCarousel = () => {
	carouselLoop('amazonReviewCarousel');
	return (
		<section className="bg-secondary-light pt-5 pb-5">
			<div className="container px-0">
				<div id="amazonReviewCarousel" className="carousel slide carousel--loop carousel--loop__amazon" data-bs-ride="carousel" data-bs-interval="false">
					<div className="carousel--centered">
						<div className="carousel-inner d-flex flex-nowrap row">
							{REVIEW_DUPLICATED.map((review, id) => (
								<figure key={review.id + id} className={`carousel-item col-9 col-lg-4 ${id === 2 ? 'active' : ''}`}>
									<picture>
										<source type="image/jpeg" srcSet="https://via.placeholder.com/300x214" />
										<img className="w-100" src="https://via.placeholder.com/296x211" alt="Sunny Honey Bronzing Foam" loading="lazy" />
									</picture>
									<figcaption className="p-3 bg-white">
										<div className="d-flex text-secondary mt-2 mb-3 mt-lg-0">
											<div className="d-flex">
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="svg text-primary ">
													<path d="M11.183 2.123l1.52 3.88a1.263 1.263 0 00.892.7l4.463.3a1.111 1.111 0 01.929 1.266 1.116 1.116 0 01-.33.637l-3.372 3.113a1.141 1.141 0 00-.3 1.1l.991 4.52a1.074 1.074 0 01-.751 1.318 1.071 1.071 0 01-.835-.116l-3.867-2.41a1.061 1.061 0 00-1.091 0l-3.867 2.41a1.07 1.07 0 01-1.471-.363 1.079 1.079 0 01-.116-.837l.991-4.52a1.144 1.144 0 00-.3-1.1l-3.272-3a1.154 1.154 0 01-.118-1.625 1.15 1.15 0 01.712-.388l4.463-.4a1.061 1.061 0 00.892-.7L9.131 1.59a1.015 1.015 0 011.352-.488 1.019 1.019 0 01.528.588z" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="svg text-primary ms-1">
													<path d="M11.183 2.123l1.52 3.88a1.263 1.263 0 00.892.7l4.463.3a1.111 1.111 0 01.929 1.266 1.116 1.116 0 01-.33.637l-3.372 3.113a1.141 1.141 0 00-.3 1.1l.991 4.52a1.074 1.074 0 01-.751 1.318 1.071 1.071 0 01-.835-.116l-3.867-2.41a1.061 1.061 0 00-1.091 0l-3.867 2.41a1.07 1.07 0 01-1.471-.363 1.079 1.079 0 01-.116-.837l.991-4.52a1.144 1.144 0 00-.3-1.1l-3.272-3a1.154 1.154 0 01-.118-1.625 1.15 1.15 0 01.712-.388l4.463-.4a1.061 1.061 0 00.892-.7L9.131 1.59a1.015 1.015 0 011.352-.488 1.019 1.019 0 01.528.588z" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="svg text-primary ms-1">
													<path d="M11.183 2.123l1.52 3.88a1.263 1.263 0 00.892.7l4.463.3a1.111 1.111 0 01.929 1.266 1.116 1.116 0 01-.33.637l-3.372 3.113a1.141 1.141 0 00-.3 1.1l.991 4.52a1.074 1.074 0 01-.751 1.318 1.071 1.071 0 01-.835-.116l-3.867-2.41a1.061 1.061 0 00-1.091 0l-3.867 2.41a1.07 1.07 0 01-1.471-.363 1.079 1.079 0 01-.116-.837l.991-4.52a1.144 1.144 0 00-.3-1.1l-3.272-3a1.154 1.154 0 01-.118-1.625 1.15 1.15 0 01.712-.388l4.463-.4a1.061 1.061 0 00.892-.7L9.131 1.59a1.015 1.015 0 011.352-.488 1.019 1.019 0 01.528.588z" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="svg text-primary ms-1">
													<path d="M11.183 2.123l1.52 3.88a1.263 1.263 0 00.892.7l4.463.3a1.111 1.111 0 01.929 1.266 1.116 1.116 0 01-.33.637l-3.372 3.113a1.141 1.141 0 00-.3 1.1l.991 4.52a1.074 1.074 0 01-.751 1.318 1.071 1.071 0 01-.835-.116l-3.867-2.41a1.061 1.061 0 00-1.091 0l-3.867 2.41a1.07 1.07 0 01-1.471-.363 1.079 1.079 0 01-.116-.837l.991-4.52a1.144 1.144 0 00-.3-1.1l-3.272-3a1.154 1.154 0 01-.118-1.625 1.15 1.15 0 01.712-.388l4.463-.4a1.061 1.061 0 00.892-.7L9.131 1.59a1.015 1.015 0 011.352-.488 1.019 1.019 0 01.528.588z" />
												</svg>
												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="svg text-primary ms-1">
													<path d="M11.183 2.123l1.52 3.88a1.263 1.263 0 00.892.7l4.463.3a1.111 1.111 0 01.929 1.266 1.116 1.116 0 01-.33.637l-3.372 3.113a1.141 1.141 0 00-.3 1.1l.991 4.52a1.074 1.074 0 01-.751 1.318 1.071 1.071 0 01-.835-.116l-3.867-2.41a1.061 1.061 0 00-1.091 0l-3.867 2.41a1.07 1.07 0 01-1.471-.363 1.079 1.079 0 01-.116-.837l.991-4.52a1.144 1.144 0 00-.3-1.1l-3.272-3a1.154 1.154 0 01-.118-1.625 1.15 1.15 0 01.712-.388l4.463-.4a1.061 1.061 0 00.892-.7L9.131 1.59a1.015 1.015 0 011.352-.488 1.019 1.019 0 01.528.588z" />
												</svg>
											</div>
										</div>
										<p>{review.text}</p>
										<strong>{review.username}</strong>
									</figcaption>
								</figure>
							))}
						</div>
						<button className="rounded-0 carousel-control carousel-control-prev carousel-control--background floating-out-start justify-content-start text-primary" data-bs-target="#amazonReviewCarousel" data-bs-slide="prev">
							<span className="carousel-control-prev-icon d-flex justify-content-center align-items-center" aria-hidden="true">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M16.2 1.885l-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg>
							</span>
						</button>
						<button className="rounded-0 carousel-control carousel-control-next carousel-control--background floating-out-end justify-content-end text-primary" data-bs-target="#amazonReviewCarousel" data-bs-slide="next">
							<span className="carousel-control-next-icon d-flex justify-content-center align-items-center" aria-hidden="true">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="M5.428 20.742l9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg>
							</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AmazonReviewCarousel;
