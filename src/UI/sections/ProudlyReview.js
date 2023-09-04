import { ReactComponent as ChevronPrev } from '../../assets/chevron-prev.svg';
import { ReactComponent as ChevronNext } from '../../assets/chevron-next.svg';

const ProudlyReview = () => {
	return (
		<div className="bg-gray-100 py-5 py-lg-6">
			<h2 className="container px-g h1 text-center mb-0">Recognized A-Beauty leader by…</h2>
			<div id="a-beauty-review-amazon" className="a-beauty-review container px-g carousel slide" data-bs-interval="7000" data-bs-ride="carousel">
				<ul className="list-unstyled carousel-inner mb-0 px-3 py-7 py-lg-5">
					<li className="carousel-item text-center font-size-lg justify-content-center align-items-center active">
						“It's selling out around the world.”
					</li>
					<li className="carousel-item text-center font-size-lg justify-content-center align-items-center">
						“Pores appeared visibly smaller… <br />This mask is no lie!”
					</li>
					<li className="carousel-item text-center font-size-lg justify-content-center align-items-center">
						“A-Beauty is the new K-Beauty.”
					</li>
					<li className="carousel-item text-center font-size-lg justify-content-center align-items-center">
						“Found to shrink existing acne, detoxify the pores and refine the skin to prevent future pimples.”
					</li>
				</ul>

				<a className="carousel-control-prev text-body justify-content-start" href="#a-beauty-review-amazon" role="button"
					data-bs-slide="prev">
					<span
						className="carousel-control-prev-icon carousel-control--background d-flex justify-content-center align-items-center"
						aria-hidden="true">
						<ChevronPrev />
					</span>
					{/* <span className="visually-hidden">Previous</span> */}
				</a>
				<a className="carousel-control-next text-body justify-content-end" href="#a-beauty-review-amazon" role="button"
					data-bs-slide="next">
					<span
						className="carousel-control-next-icon carousel-control--background d-flex justify-content-center align-items-center"
						aria-hidden="true">
						<ChevronNext />
					</span>
					{/* <span className="visually-hidden">Next</span> */}
				</a>

				<ol className="carousel-indicators mx-0 mb-0 justify-content-between">
					<li data-bs-target="#a-beauty-review-amazon" data-bs-slide-to="0" className="d-flex justify-content-center align-items-center active">
						<img className="d-block mw-100 mh-100" src="https://dev.sandandsky.com/cdn/shop/t/183/assets/logo-dailymail.png?v=136825921338695750301659081634" loading="lazy" alt="logo dailymail" />
					</li>
					<li data-bs-target="#a-beauty-review-amazon" data-bs-slide-to="1" className="d-flex justify-content-center align-items-center carousel-indicator--next">
						<img className="d-block mw-100 mh-100" src="https://dev.sandandsky.com/cdn/shop/t/183/assets/logo-refinery29.png?v=163264835370854050461659081641" loading="lazy" alt="logo refinery29" />
					</li>
					<li data-bs-target="#a-beauty-review-amazon" data-bs-slide-to="2" className="d-flex justify-content-center align-items-center carousel-indicator--next-out">
						<img className="d-block mw-100 mh-100" src="https://dev.sandandsky.com/cdn/shop/t/183/assets/logo-elle.png?v=131021256175075541141659081624" loading="lazy" alt="logo elle" />
					</li>
					<li data-bs-target="#a-beauty-review-amazon" data-bs-slide-to="3" className="d-flex justify-content-center align-items-center carousel-indicator--next-out">
						<img className="d-block mw-100 mh-100" src="https://dev.sandandsky.com/cdn/shop/t/183/assets/logo-glamour.png?v=13346730905543477291659081638" loading="lazy" alt="logo glamour" />
					</li>
				</ol>
			</div>
		</div>
	);
};

export default ProudlyReview;
