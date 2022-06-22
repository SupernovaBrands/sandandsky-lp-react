import '../../survey.scss';
import { Collapse } from 'bootstrap';

import { ReactComponent as ChevronUp } from '../../assets/chevron-up.svg';
import { ReactComponent as ChevronDown } from '../../assets/chevron-down.svg';
import activeDescription from '../../modules/priority-actives';
import productList from '../../modules/product-list';

const SurveyResult = (props) => {
	const {activePriority, envStressResult, productsRecommend, skinType} = props.answerResult;

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
                document.getElementById(`collapse${btnIndex}`).classList.remove('collapsed');
            } else {
                document.getElementById(`collapse${btnIndex}`).classList.add('collapsed');
            }
        }, 390);
    };

	console.log('productsRecommend', productsRecommend);

	return (
		<section className="survey-result mt-4">
			<div className="container px-g">
				<p className="h2 mb-2">Your Skin Analysis</p>
				<p>Below is your skin analysis:</p>
			</div>
			<div className="survey-result__bg">
				<div className="container px-2 py-4 my-g">
					<div className="accordion" id="surveyResult">
						<div className="accordion-item border-0 mb-g">
							<div className="accordion-button shadow-sm bg-white justify-content-between rounded" data-target="collapse1" id="btnCollapse1" data-btnindex="1" onClick={accordionHandle}>
								Skin Type
								<p className="d-flex align-items-center font-size-sm mb-0">{skinType.title}
									<ChevronDown className="minus ms-2" />
									<ChevronUp className="plus ms-2" />
								</p>
							</div>
							<div id="collapse1" className="accordion-collapse bg-white mt-1 collapse" data-bs-parent="#surveyResult">
								<p className="p-g font-size-sm">
									<strong className="mb-g d-block">{skinType.title}</strong>
									{skinType.desc}
								</p>
							</div>
						</div>
						<div className="accordion-item border-0">
							<div className="accordion-button shadow-sm bg-white justify-content-between rounded" data-target="collapse2" id="btnCollapse2" data-btnindex="2" onClick={accordionHandle}>
								Environmental Stress
								<p className="d-flex align-items-center font-size-sm mb-0">Result
									<ChevronDown className="minus ms-2" />
									<ChevronUp className="plus ms-2" />
								</p>
							</div>
							<div id="collapse2" className="accordion-collapse bg-white mt-1 collapse" data-bs-parent="#surveyResult">
								<p className="p-g font-size-sm">
									<strong className="mb-g d-block">{envStressResult.title.charAt(0).toUpperCase()+envStressResult.title.toLowerCase().slice(1)}</strong>
									{envStressResult.desc}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container px-g mt-4 mb-g">
				<p className="h2 mb-2">Priority Actives</p>
				<p>These active ingredients have been identified to suit your skin’s needs and concerns:</p>
			</div>

			<div className="survey-result__bg">
				<div className="container px-2 py-4 my-g">
					<div className="accordion" id="surveyResult_2">
						{activePriority && activePriority.map((item, index) => {
							const itemIndex = index + 3;
							const itemHandle = item.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
							return (
								<div key={index} className="accordion-item border-0 mb-g">
									<div className="accordion-button shadow-sm bg-white justify-content-start rounded" data-target={`collapse${itemIndex}`} id={`btnCollapse${itemIndex}`} data-btnindex={itemIndex} onClick={accordionHandle}>
										{activeDescription[itemHandle].icon}
										{activeDescription[itemHandle].title}
										<p className="d-flex align-items-center font-size-sm mb-0 ms-auto">
											<ChevronDown className="minus ms-2" />
											<ChevronUp className="plus ms-2" />
										</p>
									</div>
									<div id={`collapse${itemIndex}`} className="accordion-collapse bg-white mt-1 collapse" data-bs-parent="#surveyResult_2">
										<div className="p-g row">
											<div className="col-5 text-center">Icon</div>
											<div className="col-7 text-center border-start">{activeDescription[itemHandle].desc}</div>
										</div>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>

			<div className="container px-g mt-4 mb-g">
				<p className="h2 mb-2">Your Skincare Essentials</p>
				<p>Below are the essential products for your skin based off your skin analysis:</p>
			</div>
		</section>
	);
};

export default SurveyResult;
