import carouselLoop from "../../modules/carousel-loop";

const REVIEWS = [{
	type: 'Apc',
	id: 1,
	title: 'Holy grail',
	text: 'This product is a holy grail, look-no-further kind of mask! It is a clay mask that doesn’t strip moisture away, and in fact boosts my moisture level. Pores are detoxed and become tighter, even after the first use. You won’t regret your purchase!',
	username: 'Shayna VanLehn',
	img: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f0d2cf30-610f-4496-94c6-9901b7f57300/public',
	srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c2944690-4b76-4f96-39a6-0026e46aaf00/public',
	imgWebp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5cb72da7-afd9-416a-7e1c-e18b49546700/public',
	srcWebp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/e09f9c4c-3936-401c-717b-49ff5dd4e100/public',
	url: 'https://www.amazon.com/stores/page/13D71666-B985-4E76-AA80-CB5F48B40C97?maas=maas_adg_43B56D7812A06D86BC67A48D09CBC29B_afap_abs&ref_=aa_maas&tag=maas&ingress=3&visitId=ed42bedc-3f53-420c-8f91-6fe4cae64c34',
},{
	type: 'Apc2',
	id: 2,
	title: 'Removed makeup effectively and skin feels softer',
	text: 'I found the cleanser to be very gentle on my skin yet effective. It removed my make up easily and exfoliated my skin without stripping it. My skin felt smoother, more plump and I saw a noticeable difference in the visibility of my pores.',
	username: 'Julia',
	img: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/52e2bead-9a28-4845-a4b9-f31384119400/public',
	srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/52e2bead-9a28-4845-a4b9-f31384119400/public',
	imgWebp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/8c88abd5-e9a2-452e-5874-bd9111959300/public',
	srcWebp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/4dabcbc9-ee3d-491a-be42-ad8fcbd30200/public',
	url: 'https://www.amazon.com/Sand-Sky-Australian-Congestion-Exfoliates/dp/B08Y5PHJLD?ref_=ast_sto_dp',
},{
	type: 'BounceMask',
	id: 3,
	title: 'Achieved the result I wanted',
	text: 'Achieved the result I wanted after around 2-3 weeks of use. I used this in tandem with the pink clay mask and the result is clearly obvious with the before and after photo. Clear skin and lesser visible pores.',
	username: 'Corrine C.',
	img: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/83467212-899e-4706-258f-547013423b00/public',
	srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6ae869e7-8506-401d-47fe-b206e22dbe00/public',
	imgWebp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/54682d30-5cf2-4950-acdd-c0da4fecdf00/public',
	srcWebp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/82b453ce-69be-4c16-5a3a-d3a684876700/public',
	url: 'https://www.amazon.com/Sand-Sky-Australian-Hydrating-Moisturizing/dp/B07ZPYQC9Q?ref_=ast_sto_dp',
},{
	type: 'Toner',
	id: 4,
	title: 'Where has this product been all my life!! I absolutely love this toner!',
	text: 'I used this after my S&S oil control cleanser every day. Following the toner, I applied a couple splash drops, and then finished my regular routine with the S&S prebiotic moisturizer. I loved how my skin felt and looked after the toner.',
	username: 'JoAnn Smith',
	img: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a9e840a9-6196-4696-4f9a-d38776c9b300/public',
	srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0ea13653-c7e7-4392-f702-391b31e40a00/public',
	imgWebp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/64c78341-6637-4898-4757-18db40c30e00/public',
	srcWebp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1519a77a-c421-45ca-8beb-eff6bc495500/public',
	url: 'https://www.amazon.com/stores/page/E1C9C5D9-A08B-432E-A3B6-62D83AC1C9A9?maas=maas_adg_CDC57C77974FB085785D710BE0192BD5_afap_abs&ref_=aa_maas&tag=maas&ingress=3&visitId=ed42bedc-3f53-420c-8f91-6fe4cae64c34',
},{
	type: 'Exfo',
	id: 5,
	title: 'ABSOLUTELY IN LOVE',
	text: 'Love love love! My skin feels and looks much smoother since using this product, it helps to clear and heal breakouts, and had improved texture. It was so easy to incorporate into my skincare routine. I started to see benefits within the first week! Overall beautiful product, very satisfied and will definitely continue to use!',
	username: 'Olivia Dunstan',
	img: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/b5240f25-d570-4aba-b8a7-f0a04ccc9700/public',
	srcSet: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/96d279d3-73ed-4d08-ae13-057d618b4700/public',
	imgWebp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c819a0e0-18ab-48b0-f158-988744ff3800/public',
	srcWebp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f105acd8-0aa0-412d-3776-bf6a17147300/public',
	url: 'https://www.amazon.com/Sand-Sky-Perfection-Exfoliating-Australian/dp/B07N78L532?ref_=ast_sto_dp',
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
									<a href={review.url}>
										<picture>
											<source type="image/webp" srcSet={`${review.imgWebp}`}/>
											<source type="image/webp" srcSet={`${review.srcWebp}`} media="(min-width: 992px)"/>
											<source type="image/jpeg" srcSet={review.srcSet} media="(min-width: 992px)" />
											<img className="w-100" src={review.img} alt="Sunny Honey Bronzing Foam" />
										</picture>
									</a>
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
