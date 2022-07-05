import { lazy, Suspense } from "react";
import ProductProvider from "../../store/ProductProvider";
import RangeBanner from "../sections/RangeBanner";
import RangeApcFAQ from "../../store/range-apc-faq";
import '../../range.scss';

const RangeCarousel = lazy(() => import('../sections/RangeCarousel'));
const CustomerReviews = lazy(() => import('../sections/CustomerReviews'));
const CustomerReviews2 = lazy(() => import('../sections/CustomerReviews2'));
const Recognize = lazy(() => import('../sections/Recognize'));
const FaqAccordion = lazy(() => import('../sections/FaqAccordion'));
const RangeFormula = lazy(() => import('../sections/RangeFormula'));

const ApcRange = () => {
	return (
		<ProductProvider>
			<RangeBanner />
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
