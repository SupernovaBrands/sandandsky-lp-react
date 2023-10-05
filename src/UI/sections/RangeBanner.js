import ConditionWrapper from "../../modules/ConditionWrapper";

const RangeBanner = (props) => {
	return (
		<section className='range__banner jumbotron'>
			{!props.noHeading && (
				<div className='d-lg-none text-center'>
					<h1 className='mb-2'>Australian Pink Clay</h1>
					<p className='mb-g'>Detoxify • Refine • Soothe</p>
				</div>
			)}

			<ConditionWrapper
				condition={props.bannerData.externalUrl}
				wrapper={(children) => <a href={props.bannerData.externalUrl}>{children}</a>}>
				<picture className="d-block w-100">
					{props.bannerData.desktop.webp && <source srcSet={props.bannerData.desktop.webp} media="(min-width: 768px)" type="image/webp" /> }
					{props.bannerData.desktop.jpeg && <source srcSet={props.bannerData.desktop.jpeg} media="(min-width: 768px)" type="image/jpeg" />}
					{props.bannerData.mobile.webp && <source srcSet={props.bannerData.mobile.webp} type="image/webp" />}
					{props.bannerData.mobile.jpeg && <source srcSet={props.bannerData.mobile.jpeg} type="image/jpeg" />}
					<img
						src={props.bannerData.mobile.jpeg}
						alt="Range banner"
						className="w-100 fit--cover" />
				</picture>
			</ConditionWrapper>
        </section>
	);
};

export default RangeBanner;
