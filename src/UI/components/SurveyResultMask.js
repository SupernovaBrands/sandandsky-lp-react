import '../../survey.scss';
import { Collapse } from 'bootstrap';

import { ReactComponent as ChevronUp } from '../../assets/chevron-up.svg';
import { ReactComponent as ChevronDown } from '../../assets/chevron-down.svg';
import activeDescription from '../../modules/priority-actives';
import productList from '../../modules/product-list';
import { useSearchParams } from 'react-router-dom';
import { postIframeHeight, getItemRange } from "../../modules/Utils";
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';

const SurveyResult = (props) => {
	// const [resultProducts, setProducts] = useState([]);

	const [searchParams] = useSearchParams();
    const site = searchParams.get('site');
	const { productsRecommend } = props.answerResult;
    const productDetail = productList[productsRecommend[0]];
    const titleRange = getItemRange(productDetail.title);
	const selectedSite = site ? site.replace('.sandandsky.com', '') : 'dev';
	const storeDomain = (selectedSite === 'www') ? 'us' : selectedSite;

    const learnMoreSendGA = (e) => {
		if (window.top === window.self) return true;

		window.parent.postMessage({
			'func': 'callGaEvent',
			'category': 'Survey',
			'action': 'Learn More',
			'label': e.target.dataset.title,
		}, `https://${site}`);

		window.parent.location.href = e.target.href;
	};

	const accordionHandle = (e) => {
		const parentId = e.currentTarget.dataset.parent;
        const btnToggle = document.querySelectorAll(`${parentId} .accordion-button`);
        for (let i = 0; i < btnToggle.length; i++) {
            btnToggle[i].classList.remove('collapsed');
        }

        const collapse = new Collapse(document.getElementById(e.currentTarget.dataset.target), {
            toggle: true,
        });

        const btnIndex = e.currentTarget.dataset.btnindex;
        document.querySelector(`#btnCollapse${btnIndex}`).classList.toggle('collapsed');
        setTimeout(function () {
            if (collapse._element.classList.contains('show')) {
                document.getElementById(`collapse${btnIndex}`).classList.remove('collapsed');
            } else {
				document.querySelector(`#btnCollapse${btnIndex}`).classList.toggle('collapsed');
            }
			const height = document.querySelector('.survey-content').clientHeight;
			postIframeHeight('height', height, site);
		}, 390);
    };

	const resultProducts = [];
	for (let i=0; i<= productsRecommend.length - 1; i += 1) {
		const productInfo = productList[productsRecommend[i]];
		resultProducts.push(productInfo);
	}

	return (
		<section className="survey-result mt-4 mt-lg-0">
			<div className="survey-result__bg">
				<div className="container px-2 py-4 my-g my-lg-4">
					<div className="row">
						<div className="col-12 col-lg-6 col-xl-6">
							<p className="d-none d-lg-block h1 mb-2">Your Skin Analysis</p>
							<p className="d-none d-lg-block survey-result__subtitle">Below is your skin analysis:</p>
						</div>
                        <div className="col-12 col-lg-6 col-xl-6">
                            <div className="survey-result__product-list">
                                <div className="container p-g my-g  bg-white">
                                    <div className="row">
                                        <div className="col-4">
                                            <a href={`https://${selectedSite}.sandandsky.com/products/${productDetail.handle}`} aria-label={productDetail.title}>
                                                <picture>
                                                    <source srcSet={productDetail[storeDomain].image.replace('236x404', '186x322')} media="(min-width: 992px)" />
                                                    <img src={productDetail[storeDomain].image} alt={productDetail.title} className="w-100 mb-3" />
                                                </picture>
                                            </a>
                                        </div>
                                        <div className="col-8 ps-lg-0">
                                            <p className="font-size-sm mb-0">{titleRange}</p>
                                            <p className="mb-1 fw-bold">{productDetail.title.replace(titleRange, '').trim()}</p>
                                            
                                            <div className="accordion border-top border-bottom">
                                                <button className="accordion-button shadow-none bg-transparent text-body px-0 border-0 py-2 mb-0 d-flex justify-content-between font-size-sm" data-target={`collapse${productDetail[storeDomain].id}`} id={`btnCollapse${productDetail[storeDomain].id}`} data-btnindex={productDetail[storeDomain].id} onClick={accordionHandle} data-parent="#accordion__products">
                                                    How to Use
                                                    <Plus className='minus' />
                                                    <Minus className='plus' />
                                                </button>
                                                <div className="collapse" id={`collapse${productDetail[storeDomain].id}`} data-bs-parent="#accordion__products">
                                                    <p className="mb-0 pb-2">{productDetail.howto}</p>
                                                </div>
                                            </div>
                                            <div className="d-flex font-size-sm mt-g mb-3">
                                                {productDetail[storeDomain].compare_at_price && <span className="text-decoration-line-through me-1 text-muted">{productDetail[storeDomain].compare_at_price}</span>}
                                                {productDetail[storeDomain].price && <span className="text-secondary fw-bold">{productDetail[storeDomain].price}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <a href={`https://${selectedSite}.sandandsky.com/products/${productDetail.handle}`} className="btn btn-block btn-primary w-100" data-title={productDetail.title} onClick={learnMoreSendGA}>Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};

export default SurveyResult;
