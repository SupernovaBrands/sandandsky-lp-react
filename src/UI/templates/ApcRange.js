import { lazy, Suspense } from "react";
import ProductProvider from "../../store/ProductProvider";
import RangeBanner from "../sections/RangeBanner";
import RangeCarousel from "../sections/RangeCarousel";
// import RangeFormula from "../sections/RangeFormula";
import RangeApcFAQ from "../../store/range-apc-faq";
import '../../range.scss';

// const RangeCarousel = lazy(() => import('../sections/RangeCarousel'));
const CustomerReviews = lazy(() => import('../sections/CustomerReviews'));
const CustomerReviews2 = lazy(() => import('../sections/CustomerReviews2'));
const Recognize = lazy(() => import('../sections/Recognize'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));
const RangeFormula = lazy(() => import('../sections/RangeFormula'));

const ApcRange = () => {
	const bannerData = {
		mobile: {
			webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a192e3ee-849d-46d4-7ac7-633b61e9b500/828x',
			jpeg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/69115651-1071-4dd0-c5af-b58cdae11500/828x',
		},
		desktop: {
			webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/3122223b-21a2-4bed-93cf-f442f0fe5000/2280x',
			jpeg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/37c0aff1-a9a1-4ce0-a7ff-c7bdc4bf7600/2280x',
		}
	};
	return (
		<ProductProvider>
			<RangeBanner bannerData={bannerData} />
			<RangeCarousel />
			<Suspense fallback={<div></div>}>
				<RangeFormula />
				<CustomerReviews />
				<FaqAccordion FAQData={RangeApcFAQ} />
				<Recognize />
				<CustomerReviews2 />
			</Suspense>
		</ProductProvider>
	);
};

export default ApcRange;
