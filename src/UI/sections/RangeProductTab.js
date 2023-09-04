import CarouselWrapper from "../components/CarouselWrapper";
import amazonProducts from "../../store/amazon-product";
import AmazonProductCard from "../components/AmazonProductCard";
import carouselScroll from "../../modules/carousel-scroll";

const TAB_MENU = [
	{ active: true, label: 'Bestseller', id: 1 },
	{ active: false, label: 'Detox', id: 2 },
	{ active: false, label: 'Hydrate', id: 3 },
	{ active: false, label: 'Oil Control', id: 4 },
	{ active: false, label: 'Glow', id: 5 },
	{ active: false, label: 'Essentials', id: 6 },
];

const RangeProductTab = () => {
	carouselScroll('carousel_1');
	const changeTabs = (e) => {
		const carouselId = e.target.getAttribute('data-href');
		carouselScroll(carouselId);
	};
	return (
		<section className="container my-5">
			<div className="mb-3 d-flex justify-content-center justify-content-lg-between align-items-center">
				<p className="fw-bold h1 mb-0">Featured Products</p>
				<a href="https://www.sandandsky.com/collections/all" className="btn btn-lg btn-outline-primary d-none d-lg-block border-primary">Shop All</a>
			</div>
			<nav className="col px-0">
				<ul className="tab nav nav-tabs tab--scroll border-0 font-size-sm justify-content-center justify-content-lg-start tab--scroll-carousel mx-ng mx-lg-0">
					{TAB_MENU.map((tab) => (
						<li key={tab.id} className="nav-item text-center mb-0 px-1 ps-lg-0 pe-lg-g">
							<a onClick={changeTabs} data-href={`RangeCarousel_${tab.id}`} href={`#carousel_${tab.id}`} className={`nav-link mb-0 border-0 px-0 pb-2 text-body ${tab.active ? 'active' : ''}`} data-bs-toggle="tab">{tab.label}</a>
						</li>
					))}
				</ul>
			</nav>

			<div className="tab-content tab--scroll-carousel-content">
				{amazonProducts.map((products, id) => (
					<div key={id} className={`tab-pane ${id === 0 ? 'active' : ''}`} id={`carousel_${id + 1}`}>
						<div id={`carousel_${id}-with-tabs`} className="container mb-4 my-lg-0 px-lg-0 tab--scroll-carousel-content">
							<CarouselWrapper withTabs={true} id={`RangeCarousel_${id + 1}`} className="pt-3 pt-lg-4" amazonLp={true}>
								{products.map((item, idx) => (
									<AmazonProductCard key={idx} item={item} className='carousel-item' store='us' />
								))}
							</CarouselWrapper>
						</div>

					</div>
				))}
			</div>
			<div className="text-center d-lg-none">
				<a href="https://www.sandandsky.com/collections/all" className="btn btn-lg btn-outline-primary border-primary">Shop all featured</a>
			</div>
		</section>
	);
};

export default RangeProductTab;
