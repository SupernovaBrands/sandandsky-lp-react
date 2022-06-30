import { ReactComponent as StarFull } from '../../assets/star-full.svg';

const ProductCard = (props) => {
	return (
		<figure className={`col-6 col-lg-1o5 product-card d-flex flex-column pb-2 mb-2 pb-lg-0 mb-lg-0 px-lg-hg ${props.className}`}>
			<a href='/products/oil-control-clearing-face-mask' className='position-relative' aria-label='Test'>
				<img className='w-100' src='//via.placeholder.com/222x279?text=1' alt='Test' />
				<img className='w-100' src='//via.placeholder.com/222x279?text=2' className='img--hover' alt='Test' />
			</a>
			<figcaption className='mt-2 flex-grow-1 d-flex flex-column'>
				<p className="product-card__text-sm mb-2 text-muted">Oil Control</p>
				<a href="/products/oil-control-clearing-face-mask?l=carousel" className="product-card__text mb-2 fw-bold text-body" aria-label="Oil Control Clearing Face Mask"> Clearing Face Mask</a>
				<div className='mb-2 flex-grow-1 align-items-center'>
					<StarFull className='svg text-secondary' />
					<span className='ms-1 mt-1 font-size-xs'>4.9/5.0</span>
					<a href='/products' className='ms-1 mt-1 font-size-xs text-underline text-nowrap text-dark'>7 Reviews</a>
				</div>
				<p className='product-card__text mb-2'>
					<span className='fw-bold me-1'>$61.40</span>
					<span className='text-muted text-linethrough'>$76.80</span>
				</p>
				<button className='btn btn-block btn-primary btn__submit'>Learn more</button>
			</figcaption>
		</figure>
	);
};

export default ProductCard;
