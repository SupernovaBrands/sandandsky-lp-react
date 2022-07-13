import { ReactComponent as Cherkmark } from '../../assets/checkmark.svg';

const RangeFormula = () => {
	return (
		<section className='range__formula mt-2 mt-lg-4'>
			<div className='container'>
				<div className='row align-items-center'>
					<picture className='col-12 col-lg-7 px-0 px-lg-g'>
						<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d3048324-a7c0-439e-7519-3c61bc2ddc00/1400x" media="(min-width: 768px)" type="image/webp" />
						<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1c8dab2f-6956-4627-26f4-2ee3ffc4c000/1400x" media="(min-width: 768px)" type="image/jpeg" />
						<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d3048324-a7c0-439e-7519-3c61bc2ddc00/828x" type="image/webp" />
						<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1c8dab2f-6956-4627-26f4-2ee3ffc4c000/828x" type="image/jpeg" />
						<img className='w-100 pe-lg-6 mb-3' alt='Revolutionary Formula' src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/1c8dab2f-6956-4627-26f4-2ee3ffc4c000/828x" loading="lazy" />
					</picture>
					<div className='col-12 col-lg-5 px-g'>
						<h2 className='h1 text-center text-lg-start'>Australian Pink Clay results</h2>
						<div className='text-center text-lg-start'>
							<p className='h4 mb-2 fw-normal d-inline-block'>It's our cult-favourite for a reason. Watch <br className='d-block d-lg-none' />your skin <br className='d-none d-lg-block' />improve in a matter of minutes!</p>
						</div>
						<ul className='list-unstyled row mt-2 mb-0 range__formula-list pe-lg-5'>
							<li className='col-12 d-flex align-items-center mb-2'>
								<Cherkmark className='me-g d-flex flex-shrink-0 justify-content-center' />
								Draws out impurities, excess oil, toxins, and pollutants from the skin
							</li>
							<li className='col-12 d-flex align-items-center mb-2'>
								<Cherkmark className='me-g d-flex flex-shrink-0 justify-content-center' />
								Reduces inflammation with natural anti-inflammatory properties
							</li>
							<li className='col-12 d-flex align-items-center mb-2'>
								<Cherkmark className='me-g d-flex flex-shrink-0 justify-content-center' />
								Drastically tightens and reduces the appearance of pores
							</li>
							<li className='col-12 d-flex align-items-center mb-2'>
								<Cherkmark className='me-g d-flex flex-shrink-0 justify-content-center' />
								Deeply moisturises and resurfaces skin for a supple and soft feel
							</li>
							<li className='col-12 d-flex align-items-center'>
								<Cherkmark className='me-g d-flex flex-shrink-0 justify-content-center' />
								Perfect for all skin types, including dry, sensitive and eczema-prone skin
							</li>
						</ul>
					</div>

				</div>
			</div>
		</section>
	);
};

export default RangeFormula;
