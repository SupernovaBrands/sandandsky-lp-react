import { ReactComponent as StarFull } from '../../assets/star-full.svg';
import { getItemRange } from '../../modules/Utils';

const AmazonProductCard = (props) => {
	const { item } = props;
	const titleRange = getItemRange(item.title);

	return (
		<div className={`col-9 col-lg-3 product-card position-relative pb-0 mb-0 ${props.className}`}>
			<figure className="bg-gray-100 rounded-lg flex-grow-1 d-flex flex-column rounded-lg">
				<a href={`${item.handle}`} className='position-relative' aria-label={item.title}>
					<img className='w-100' src={item.img} alt={item.title} />
					<img className='w-100 img--hover' src={item.imgHover} alt={item.title} />
				</a>
				<figcaption className='mt-0 flex-grow-1 d-flex flex-column p-g product-card__content'>
					<p className="mb-2 text-center text-lg-start font-size-sm">{titleRange}</p>
					<a href={`${item.handle}`} className="text-decoration-none mb-2 fw-bold text-center text-lg-start" aria-label={item.title}>
						{item.title.replace(titleRange, '').trim()}
					</a>
					<div className="mb-2 flex-grow-1 mt-1 align-items-center">
						<div className='d-flex flex-grow-1 align-items-center justify-content-center justify-content-lg-start font-size-sm'>
							<StarFull className='svg text-primary' />
							<span className='ms-1'>{item.ratingScore}/5.0</span>
							<a href={`${item.handle}`} className='ms-1 text-decoration-none text-nowrap text-body'> - {item.totalReviews}</a>
						</div>
					</div>
					{/* <p className='product-card__text mb-2'>
						{item[store].comparePrice !== null && <span className='text-linethrough me-1 text-muted'>{item[store].comparePrice}</span>}
						<span className='fw-bold'>{item[store].price}</span>
					</p> */}
					<a href={`${item.handle}`} className='btn btn-block btn-primary btn__submit px-g  px-lg-3 mx-3 mx-lg-0'>Shop on Amazon</a>
				</figcaption>
			</figure>
		</div>
	);
};

export default AmazonProductCard;
