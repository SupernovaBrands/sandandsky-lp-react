import CarouselWrapper from "./CarouselWrapper";
import ProductCard from "./ProductCard";

const CarouselTab = (props) => {

	const { products, domain, store } = props;

	const tabs = [
		{
			title: 'Bestsellers',
			products: products.filter((el) => el.mobileTab.includes('bestseller')),
		},
		{
			title: 'Pore-refining',
			products: products.filter((el) => el.mobileTab.includes('pore-refining')),
		},
		{
			title: 'Hydrating',
			products: products.filter((el) => el.mobileTab.includes('hydrating')),
		},
		{
			title: 'Exfoliation',
			products: products.filter((el) => el.mobileTab.includes('exfoliation')),
		}
	];

	const tabEl = document.querySelectorAll('button[data-bs-toggle="tab"]');
	tabEl.forEach(tabItem => {
		tabItem.addEventListener('shown.bs.tab', function (event) {
			const bsTarget = event.target.dataset.bsTarget;
			const carousel = document.querySelector(`${bsTarget} .carousel--scroll`);
			const carouselItem = document.querySelectorAll(`${bsTarget} .carousel--scroll .carousel-item`);
			const scrollBarDiv = carousel.querySelector('.scrollbar').closest('.mx-lg-n1');
			const carouselNext = carousel.querySelector('.carousel-control-next');
			if (carouselItem.length > 2) {
				scrollBarDiv.classList.remove('d-none');
				carousel.dispatchEvent(new CustomEvent('adjustThumb'));
				carouselNext.classList.remove('d-none');
			} else {
				scrollBarDiv.classList.add('d-none');
				carouselNext.classList.add('d-none');
			}
		});
	});

	return (
		<div className='text-center mb-4 overflow-hidden'>
			<ul className='nav nav-tabs border-0 range__tab justify-content-center mb-3 mx-n1' id='carouselTab' role='tablist'>
				{tabs.map((item, idx) => (
					<li key={idx} className='nav-item px-hg' role='presentation'>
						<button
							className={`nav-link border-0 p-0 position-relative pb-2 font-size-sm ${idx === 0 ? 'active' : ''}`}
							id={`tab-${item.title}`} data-bs-toggle='tab' data-bs-target={`#tab${item.title}`}
							type='button' role='tab' aria-controls={`tab${item.title}`}
							aria-selected='true'>
								{item.title}
						</button>
					</li>
				))}
			</ul>
			<div className='tab-content' id='carouselTabContent'>
				{tabs.map((tab, tabindex) => (
					<div key={tabindex} className={`tab-pane fade ${tabindex === 0 ? 'show active' : ''}`}
						id={`tab${tab.title}`} role='tabpanel' aria-labelledby={`tab-${tab.title}`}>
						<CarouselWrapper id={`${tab.title}Carousel`}>
							{tab.products.map((item, idx) => (
								<ProductCard key={idx} item={item} className='carousel-item text-start' domain={domain} store={store} />
							))}
						</CarouselWrapper>
					</div>
				))}
			</div>
			<a href={`${domain}/collections/all`} className='mt-3 btn btn-lg btn-outline-primary border-primary'>Shop All</a>
		</div>
	);
};

export default CarouselTab;
