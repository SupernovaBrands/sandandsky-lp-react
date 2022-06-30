import ProductCard from "../components/ProductCard";


const RangeCarousel = () => {
	return (
		<section className='container mt-4 mt-lg-5'>
			<p className='fw-bold mb-3 d-flex text-center justify-content-between align-items-center'>
				<span className='h1'>Detoxifies skin and refines pores</span>
				<a href="https://www.sandandsky.com/collections/all" class="btn btn-outline-primary border-primary d-none d-lg-inline">Shop All</a>
			</p>
			<div className='carousel--scroll position-relative px-lg-hg'>
				<div className='carousel-inner d-flex flex-lg-nowrap row w-auto px-hg'>
					<ProductCard className='carousel-item' />
					<ProductCard className='carousel-item' />
					<ProductCard className='carousel-item' />
					<ProductCard className='carousel-item' />
					<ProductCard className='carousel-item' />
					<ProductCard className='carousel-item' />
					<ProductCard className='carousel-item' />
					<ProductCard className='carousel-item' />
				</div>
			</div>
		</section>
	);
};

export default RangeCarousel;
