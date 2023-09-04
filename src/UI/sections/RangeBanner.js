
const RangeBanner = (props) => {
	return (
		<section className='range__banner jumbotron'>
			{!props.amazonLp && (
				<div className='d-lg-none text-center'>
					<h1 className='mb-2'>Australian Pink Clay</h1>
					<p className='mb-g'>Detoxify • Refine • Soothe</p>
				</div>
			)}

			<picture className="d-block w-100">
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/3122223b-21a2-4bed-93cf-f442f0fe5000/2280x" media="(min-width: 768px)" type="image/webp" />
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/37c0aff1-a9a1-4ce0-a7ff-c7bdc4bf7600/2280x" media="(min-width: 768px)" type="image/jpeg" />
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a192e3ee-849d-46d4-7ac7-633b61e9b500/828x" type="image/webp" />
				<source srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/69115651-1071-4dd0-c5af-b58cdae11500/828x" type="image/jpeg" />
				<img
					src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/69115651-1071-4dd0-c5af-b58cdae11500/828x"
					alt="Range banner"
					className="w-100 fit--cover" />
			</picture>
        </section>
	);
};

export default RangeBanner;
