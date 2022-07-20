import rangeProducts from "../../store/range-product";
import ProductCard from "../components/ProductCard";
import CarouselWrapper from "../components/CarouselWrapper";
import { useSearchParams } from "react-router-dom";

const RangeCarousel = () => {

	const [searchParams] = useSearchParams();
	const utmStore = searchParams.get('utm_store');

	let store = 'us';

    if (utmStore && ['us', 'ca', 'uk', 'eu', 'au', 'int', 'my'].includes(utmStore)) {
        store = utmStore;
    }

	const domain = `https://${store === 'us' ? 'www' : store}.sandandsky.com`;
	return (
		<section className='container mt-4 mt-lg-5 carousel--range'>
			<p className='fw-bold mb-3 d-flex text-center justify-content-center justify-content-lg-between align-items-center'>
				<span className='h1'>Detoxifies skin and refines pores</span>
				<a href={`${domain}/collections/all`} className='btn btn-lg btn-outline-primary border-primary d-none d-lg-inline'>Shop All</a>
			</p>
			<CarouselWrapper id='apcRangeCarousel'>
				{rangeProducts.map((item, idx) => (
					<ProductCard key={idx} item={item} className='carousel-item' domain={domain} store={store} />
				))}
			</CarouselWrapper>
			{/* {isMobile && <CarouselTab products={rangeProducts} domain={domain} store={store} />} */}
			<div className='text-center mt-3 mb-4'>
				<a href={`${domain}/collections/all`} className='d-inline-block d-lg-none mx-auto btn btn-lg btn-outline-primary border-primary'>Shop All</a>
			</div>
		</section>
	);
};

export default RangeCarousel;
