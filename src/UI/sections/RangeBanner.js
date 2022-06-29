
const RangeBanner = () => {
	return (
		<section className='range__banner jumbotron'>
			<div className='d-lg-none text-center'>
				<h1 className='mb-1'>Australian Pink Clay</h1>
				<p className='mb-1'>Detoxify • Refine • Soothe</p>
			</div>

			<picture className="d-block w-100">
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/f3f82e1a-ea42-4354-17e8-baf3682e3800/1400x" media="(min-width: 768px)" type="image/webp" />
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0f2c9f33-c4d8-44f8-5681-410317a01400/1400x" media="(min-width: 768px)" type="image/jpeg" />
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2f541eea-7df8-4afc-e516-57ec6d5d8e00/828x" type="image/webp" />
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/41cd1db0-c033-428e-e24a-b877e6a17000/828x" type="image/jpeg" />
				<img
					src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/41cd1db0-c033-428e-e24a-b877e6a17000/828x"
					alt="Range banner"
					className="w-100 fit--cover" />
			</picture>
        </section>
	);
};

export default RangeBanner;
