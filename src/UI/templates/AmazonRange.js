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
			webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/41852a7c-2a34-4b51-e546-72a2b6722e00/828x',
			jpeg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0283a94a-31e4-46b3-1728-c891604ed100/828x',
		},
		desktop: {
			webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/72205b67-66da-424c-d1bb-d47914479000/2280x',
			jpeg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/fb8e1285-ff1d-4c99-9e03-be42bb036800/2280x',
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
