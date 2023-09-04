import { lazy, Suspense } from "react";
import ProductProvider from "../../store/ProductProvider";
import RangeBanner from "../sections/RangeBanner";
import RangeProductTab from "../sections/RangeProductTab";

import '../../range-amazon.scss';

const Abeauty = lazy(() => import('../sections/Abeauty'));
const Recognize = lazy(() => import('../sections/Recognize'));
const AmazonReviewCarousel = lazy(() => import('../sections/AmazonReviewCarousel'));
const AmazonImage = lazy(() => import('../sections/AmazonImage'));

const ApcRange = () => {
	return (
		<ProductProvider>
			<RangeBanner amazonLp={true} />
			<RangeProductTab />
			<Suspense fallback={<div></div>}>
				<Abeauty />
				<AmazonReviewCarousel />
				<AmazonImage />
				{/* <ProudlyReview /> */}
				<Recognize />
			</Suspense>
		</ProductProvider>
	);
};

export default ApcRange;
