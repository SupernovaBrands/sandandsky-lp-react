import { ReactComponent as Botanical } from '../../assets/botanical.svg';
import { ReactComponent as Vegan } from '../../assets/vegan.svg';
import { ReactComponent as Peta } from '../../assets/peta.svg';
import { ReactComponent as EthicallySourced } from '../../assets/ethically-sourced.svg';

const Abeauty = () => {
	return (
		<section className="container px-g mt-4 mb-4 a-beauty-banner">
			<div className="row align-items-lg-center">
				<div className="col-12 col-lg-8 mb-lg-2">
					<h2 className="h1 mb-lg-4">Bringing A-Beauty to the world</h2>
					<p className="mb-0 mb-lg-2">
						Embrace our uniquely Aussie approach to skincare. It's simple.
						Based on clean and highly effective formulas, we skip the 10-step routines and crazy claims. ‘Cause we’d rather be at the beach than stuck in the bathroom. <a href="https://www.sandandsky.com/pages/a-beauty" className="link-secondary">Learn More</a>
					</p>
					<div className="row">
						<div className="col-6 col-lg-3 text-center py-3 order-lg-1">
							<Botanical />
							<span className="d-block mt-3">Australian Botanical Ingredients</span>
						</div>
						<div className="col-6 col-lg-3 text-center py-3 order-lg-4">
							<Vegan />
							<span className="d-block mt-3">No nasties, just clean vegan* formulas</span>
						</div>
						<div className="col-6 col-lg-3 text-center py-3 order-lg-2">
							<Peta />
							<span className="d-block mt-3">Cruelty-free, <br /><b>PETA</b> Approved</span>
						</div>
						<div className="col-6 col-lg-3 text-center py-3 order-lg-3">
							<EthicallySourced />
							<span className="d-block mt-3">Ethically <br />sourced</span>
						</div>
					</div>
				</div>
				<div className="col-12 col-lg-4 mt-3 mt-lg-0 d-none d-lg-block">
					<picture className="embed-responsive">
						<source srcSet="//dev.sandandsky.com/cdn/shop/files/SS_Content_BrandMood_Beach_SB_110121_740x.png?v=1621322256" media="(min-width: 992px)" />
						<img src="//dev.sandandsky.com/cdn/shop/files/SS_Content_BrandMood_Beach_SB_110121_2x_ac546fa7-8e9d-4ef0-a762-ffa639a3d0fc_768x.png?v=1621480080" alt="Bringing A-Beauty to the world" className="d-block w-100" loading="lazy" />
					</picture>
				</div>
			</div>
			<hr className="border-top mt-4 mb-0" />
		</section>
	);
};

export default Abeauty;
