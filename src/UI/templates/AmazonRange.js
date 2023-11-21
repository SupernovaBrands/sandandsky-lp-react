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
	const bannerData = {
		mobile: {
			webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ba9a30f2-8a23-4057-ab24-0edf206d1700/828x',
			jpeg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ba9a30f2-8a23-4057-ab24-0edf206d1700/828x',
		},
		desktop: {
			webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/3825aa64-0cb9-479c-da71-f5aa0de59400/2280x',
			jpeg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/3825aa64-0cb9-479c-da71-f5aa0de59400/2280x',
		},
		externalUrl: 'https://www.amazon.com/sandandsky?maas=maas_adg_8EA37C43F6AD95DB249DE08F65E1DCAA_afap_abs&ref_=aa_maas&tag=maas'
	};
	return (
		<ProductProvider>
			<RangeBanner noHeading={true} bannerData={bannerData} />
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
