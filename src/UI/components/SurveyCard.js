import { getItemRange } from "../../modules/Utils";
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';

import { Collapse } from 'bootstrap';
import { useSearchParams } from "react-router-dom";
const SurveyCard = (props) => {

	const {
		productDetail,
		productList,
		activePriority,
	} = props;

	const [searchParams] = useSearchParams();
	const site = searchParams.get('site');

	const titleRange = getItemRange(productDetail.title);

	const accordionHandle = (e) => {
        const btnToggle = document.querySelectorAll('.accordion-button');
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
                document.getElementById(`collapseProduct${btnIndex}`).classList.remove('collapsed');
            } else {
				document.querySelector(`#btnCollapse${btnIndex}`).classList.toggle('collapsed');
            }
        }, 390);
    };

	const selectedSite = site ? site.replace('.sandandsky.com', '') : 'dev';

	return (
		<div className="survey-result__product-list">
			<div className="container p-g my-g survey-result__bg">
				<div className="row">
					<div className="col-4">
						<a href={`https://${selectedSite}.sandandsky.com/products/${productDetail.handle}`} aria-label={productDetail.title}>
							<img src={productDetail[selectedSite].image} alt={productDetail.title} className="w-100 mb-3" />
						</a>
					</div>
					<div className="col-8 ps-lg-0">
						<p className="font-size-sm mb-0">{titleRange}</p>
						<p className="mb-1 fw-bold">{productDetail.title.replace(titleRange, '').trim()}</p>
						<p className="d-flex font-size-sm align-items-center mb-1">
							{activePriority.icon}
							{activePriority.title}
						</p>
						<div className="accordion border-top border-bottom">
							<button className="accordion-button shadow-none bg-transparent text-body px-0 border-0 py-2 mb-0 d-flex justify-content-between font-size-sm" data-target={`collapseProduct${productDetail[selectedSite].id}`} id={`btnCollapse${productDetail[selectedSite].id}`} data-btnindex={productDetail[selectedSite].id} onClick={accordionHandle}>
								How to Use
								<Plus className='minus' />
								<Minus className='plus' />
							</button>
							<div className="collapse" id={`collapseProduct${productDetail[selectedSite].id}`}>
								<p className="mb-0 pb-2">{productList.howto}</p>
							</div>
						</div>
						<div className="d-flex font-size-sm mt-g mb-3">
							{productDetail[selectedSite].compare_at_price && <span className="text-decoration-line-through me-1">${productDetail[selectedSite].compare_at_price}</span>}
							{productDetail[selectedSite].price && <span className="text-secondary fw-bold">${productDetail[selectedSite].price}</span>}
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<a href={`https://${selectedSite}.sandandsky.com/products/${productDetail.handle}`} className="btn btn-block btn-primary w-100">Learn More</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SurveyCard;
