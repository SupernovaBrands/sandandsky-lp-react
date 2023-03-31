import '../../survey.scss';
import { Collapse } from 'bootstrap';

import { ReactComponent as ChevronUp } from '../../assets/chevron-up.svg';
import { ReactComponent as ChevronDown } from '../../assets/chevron-down.svg';
import activeDescription from '../../modules/priority-actives';
import productList from '../../modules/product-list';
import { useSearchParams } from 'react-router-dom';
import { postIframeHeight } from "../../modules/Utils";

// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from 'react';
import SurveyCard from './SurveyCard';

const SurveyResult = (props) => {
	// const [resultProducts, setProducts] = useState([]);

	const [searchParams] = useSearchParams();
    const site = searchParams.get('site');
	const { activePriority, envStressResult, productsRecommend, skinType } = props.answerResult;

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

	// const selectedSite = site ? site : 'dev';
	// useEffect(() => {
	// 	setProducts([]);
	// 	for (let i=0; i<=productsRecommend.length - 1; i+=1) {
	// 		const productInfo = productList[productsRecommend[i]];
	// 		fetch(`https://${selectedSite}/products/${productInfo.handle}.json`)
	// 			.then((response) => response.json())
	// 			.then((data) => {
	// 				setProducts(oldArray => [...oldArray, data.product]);
	// 			});
	// 	}
	// }, [productList]);

	const resultProducts = [];
	for (let i=0; i<= productsRecommend.length - 1; i += 1) {
		const productInfo = productList[productsRecommend[i]];
		resultProducts.push(productInfo);
	}

	let rangeValue;
	let rangeStyleVal;
	switch (envStressResult.title) {
		case 'LOW':
			rangeValue = 0.25;
			rangeStyleVal = 0.125;
			break;

		case 'AVERAGE':
			rangeValue = 1;
			rangeStyleVal = 0.5;
			break;

		default:
			rangeValue = 2;
			rangeStyleVal = 1;
			break;
	}
	const rangeMin = 0;
	const rangeMax = 2;
	const rangeStyle = {
		backgroundImage: `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${rangeStyleVal}, #42A1CA), color-stop(${rangeStyleVal}, #DFF4F9))`
	};

	return (
		<section className="survey-result mt-4 mt-lg-0">
			<div className="d-lg-none container px-g">
				<p className="h2 mb-2">Your Skin Analysis</p>
				<p>Below is your skin analysis:</p>
			</div>
			<div className="survey-result__bg">
				<div className="container px-2 py-4 my-g my-lg-4">
					<div className="row">
						<div className="col-12 col-lg-5 col-xl-6">
							<p className="d-none d-lg-block h1 mb-2">Your Skin Analysis</p>
							<p className="d-none d-lg-block survey-result__subtitle">Below is your skin analysis:</p>
						</div>
						<div className="col-12 col-lg-7 col-xl-6">
							<div className="accordion" id="surveyResult">
								<div className="accordion-item border-0 mb-g">
									<div className="accordion-button shadow-sm bg-white justify-content-between rounded" data-target="collapse1" id="btnCollapse1" data-btnindex="1" onClick={accordionHandle} data-parent="#surveyResult">
										Skin Type
										<p className="d-flex align-items-center font-size-sm mb-0">{skinType.title}
											<ChevronDown className="minus ms-2" />
											<ChevronUp className="plus ms-2" />
										</p>
									</div>
									<div id="collapse1" className="accordion-collapse bg-white mt-1 collapse" data-bs-parent="#surveyResult">
										<p className="p-g px-lg-4 survey-result__desc">
											<strong className="mb-g d-block">{skinType.title}</strong>
											{skinType.desc}
										</p>
									</div>
								</div>
								<div className="accordion-item border-0">
									<div className="accordion-button shadow-sm bg-white justify-content-between rounded" data-target="collapse2" id="btnCollapse2" data-btnindex="2" onClick={accordionHandle} data-parent="#surveyResult">
										Environmental Stress
										<div className="d-flex align-items-center font-size-sm mb-0" >
											<input style={rangeStyle} className="survey-result__range" type="range" min={rangeMin} max={rangeMax} step="0.25" value={rangeValue} readOnly={true} data-target="collapse2" id="btnCollapse2" data-btnindex="2" onTouchStart={accordionHandle} role="button" />
											<ChevronDown className="minus ms-2" />
											<ChevronUp className="plus ms-2" />
										</div>
									</div>
									<div id="collapse2" className="accordion-collapse bg-white mt-1 collapse" data-bs-parent="#surveyResult">
										<p className="p-g px-lg-4 survey-result__desc">
											<strong className="mb-g d-block">{envStressResult.title.charAt(0).toUpperCase()+envStressResult.title.toLowerCase().slice(1)}</strong>
											{envStressResult.desc}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container px-g mt-4 mb-g d-lg-none">
				<p className="h2 mb-2">Priority Actives</p>
				<p>These active ingredients have been identified to suit your skin’s needs and concerns:</p>
			</div>

			<div className="survey-result__bg survey-result__priority-actives">
				<div className="container px-2 py-4 my-g">
					<div className="row">
						<div className="col-12 col-lg-5 col-xl-6 mb-2">
							<p className="h1 mb-2 d-none d-lg-block mb-2">Priority Actives</p>
							<p className="d-none d-lg-block survey-result__subtitle">These active ingredients have been identified to<br />suit your skin’s needs and concerns:</p>
						</div>
						<div className="col-12 col-lg-7 col-xl-6">
							<div className="accordion d-lg-none accordion__priority" id="surveyResult_2">
								{activePriority && activePriority.map((item, index) => {
									const itemIndex = index + 3;
									return (
										<div key={index} className="accordion-item border-0 mb-g">
											<div className="accordion-button ps-2 shadow-sm bg-white justify-content-start rounded" data-target={`collapse${itemIndex}`} id={`btnCollapse${itemIndex}`} data-btnindex={itemIndex} onClick={accordionHandle}  data-parent="#surveyResult_2">
												{activeDescription[item].icon}
												<span className="ms-1">{activeDescription[item].title}</span>
												<p className="d-flex align-items-center font-size-sm mb-0 ms-auto">
													<ChevronDown className="minus ms-2" />
													<ChevronUp className="plus ms-2" />
												</p>
											</div>
											<div id={`collapse${itemIndex}`} className="accordion-collapse bg-white mt-1 collapse" data-bs-parent="#surveyResult_2">
												<div className="p-g row align-items-center">
													<div className="col-5 text-center">
														{activeDescription[item].icon}
														<strong className="d-block mt-g px-g">{activeDescription[item].title}</strong>
													</div>
													<div className="col-7 text-center border-start">{activeDescription[item].desc}</div>
												</div>
											</div>
										</div>
									)
								})}
							</div>

							<div className="row d-none d-lg-flex px-lg-hg">
								{activePriority && activePriority.map((item, index) => {
									return (
										<div key={index} className="col-lg-4 px-lg-hg">
											<div className="pt-2 px-g bg-white text-center h-100">
												{activeDescription[item].icon}
												<p className="fw-bold border-bottom py-g">{activeDescription[item].title}</p>
												<p className="pt-2 pb-3">{activeDescription[item].desc}</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container px-g mt-4 mb-g">
				<div className="row">
					<div className="col-12 col-lg-4">
						<p className="survey-result__product fw-bold mb-2">Your Skincare Essentials</p>
						<p>Below are the essential products for your skin based off your skin analysis:</p>
					</div>
					<div className="col-12 col-lg-8">
						<div className="row" id="accordion__products">
							{resultProducts.length > 0 && resultProducts.map((item, index) => {
								return(
									<div key={index} className="col-12 col-lg-6">
										{index < 3 ? (
											<SurveyCard
											accordionHandle={accordionHandle}
											activePriority={activeDescription[activePriority[index]]}
											productDetail={item}
											productList={productList[productsRecommend[index]]} />
										) : (
											<SurveyCard
											accordionHandle={accordionHandle}
											productDetail={item}
											productList={productList[productsRecommend[index]]} />
										)}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SurveyResult;
