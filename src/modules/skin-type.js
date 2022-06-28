import Questions from "./questions";

const getSkinType = (currentAnswers) => {

	const skinConcerns = currentAnswers[7];
	const skinType = currentAnswers[1];

	const skinConcernsAnswers = Questions[6].answers;
	const skinTypeAnswers = Questions[0].answers;

	let skinResult = {};

	const skinResultList = {
		'Oily': {
			title: 'Oily, Acne-Prone',
			desc: 'Your skin tends to over-produce sebum and is more likely to be prone to blemishes or acne. Rebalancing your skin\'s microbiome is crucial to prevent excess oil and breakouts.'
		},
		'Combination': {
			title: 'Combination',
			desc: 'Hydrating is key to regulating and balacing sebum production especially for combination skin. Twice a week, pamper your skin by multi-masking to target multiple skin concerns.'
		},
		'Normal': {
			title: 'Normal',
			desc: 'Give your skin an extra burst of hydration to maintain its microbiome. Ultra-hydrating ingredients and AHAs will be your best friend.',
		},
		'Dry': {
			title: 'Dry',
			desc: 'Add that extra burst of hydration to protect your skin against dryness or dehydration. Ultra-hydrating ingredients such as Hyaluronic Acid will be your best friend.'
		},
		'Sensitive': {
			title: 'Sensitive',
			desc: 'Redness and flaky skin are often a signs of comprimised skin barrier. You will find incorporating ingredients with ultra-hydrating and anti-inflammatory properties to your skincare routine helpful to soothe and strengthen your skin barrier.'
		},
	};

	switch (skinConcerns) {
		// Clogged or enlarged pores, Blemishes or acne
		case skinConcernsAnswers[0]:
		case skinConcernsAnswers[1]:
			switch(skinType) {
				case skinTypeAnswers[0]:
					skinResult = skinResultList['Oily'];
					break;
				case skinTypeAnswers[1]:
					skinResult = skinResultList['Combination'];
					break;
				case skinTypeAnswers[2]:
					skinResult = skinResultList['Normal'];
					break;
				default:
					skinResult = skinResultList['Sensitive'];
					break;
			};
			break;
		// Excess oil
		case skinConcernsAnswers[2]:
			switch(skinType) {
				case skinTypeAnswers[0]:
					skinResult = skinResultList['Oily'];
					break;
				case skinTypeAnswers[1]:
					skinResult = skinResultList['Combination'];
					break;
				case skinTypeAnswers[2]:
					skinResult = skinResultList['Dry'];
					break;
				default:
					skinResult = skinResultList['Sensitive'];
					break;
			};
			break;
		// Scarring or uneven skin texture, Redness, Dryness and dehydration, Fine lines or wrinkles
		case skinConcernsAnswers[3]:
		case skinConcernsAnswers[4]:
		case skinConcernsAnswers[5]:
		case skinConcernsAnswers[6]:
			switch(skinType) {
				case skinTypeAnswers[0]:
					skinResult = skinResultList['Oily'];
					break;
				case skinTypeAnswers[1]:
					skinResult = skinResultList['Combination'];
					break;
				case skinTypeAnswers[2]:
					skinResult = skinResultList['Dry'];
					break;
				default:
					skinResult = skinResultList['Sensitive'];
					break;
			};
			break;
		// Dark spots or hyperpigmentation, Dullness or uneven skin tone
		case skinConcernsAnswers[7]:
		case skinConcernsAnswers[8]:
			switch(skinType) {
				case skinTypeAnswers[0]:
					skinResult.title = 'Oily';
					skinResult.desc = skinResultList['Oily'].desc;
					break;
				case skinTypeAnswers[1]:
					skinResult = skinResultList['Combination'];
					break;
				case skinTypeAnswers[2]:
					skinResult = skinResultList['Normal'];
					break;
				default:
					skinResult = skinResultList['Sensitive'];
					break;
			};
			break;
		default:
			skinResult = skinResultList['Sensitive'];
			break;

	}

	return skinResult;
};

export default getSkinType;
