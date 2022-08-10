import { ReactComponent as StarFull } from '../../assets/star-full.svg';
import { getItemRange } from '../../modules/Utils';

const ProductCard = (props) => {
	const { item, domain, store } = props;
	const titleRange = getItemRange(item.title);

	return (
		<figure className={`col-6 col-lg-1o5 product-card d-flex flex-column pb-0 mb-2 mb-lg-0 px-lg-hg ${props.className}`}>
			<a href={`${domain}/products/${item.handle}`} className='position-relative' aria-label={item.title}>
				<img className='w-100' src={item.img} alt={item.title} />
				<img className='w-100 img--hover' src={item.imgHover} alt={item.title} />
			</a>
			<figcaption className='mt-2 flex-grow-1 d-flex flex-column'>
				<p className="product-card__text-sm mb-2">{titleRange}</p>
				<a href={`${domain}/products/${item.handle}`} className="product-card__text mb-2 fw-bold" aria-label={item.title}>
					{item.title.replace(titleRange, '').trim()}
				</a>
				<div className='mb-2 d-flex flex-grow-1 align-items-center mt-1'>
					<StarFull className='svg text-secondary' />
					<span className='ms-1 font-size-xs'>{item.ratingScore}/5.0</span>
					<a href={`${domain}/products/${item.handle}#write-a-review`} className='ms-1 font-size-xs text-underline text-nowrap text-body'>{item.totalReviews} Reviews</a>
				</div>
				<p className='product-card__text mb-2'>
					{item[store].comparePrice !== null && <span className='text-linethrough me-1 text-muted'>{item[store].comparePrice}</span>}
					<span className='fw-bold'>{item[store].price}</span>
				</p>
				<a href={`${domain}/products/${item.handle}`} className='btn btn-block btn-primary btn__submit'>Learn more</a>
			</figcaption>
		</figure>
	);
};

export default ProductCard;
