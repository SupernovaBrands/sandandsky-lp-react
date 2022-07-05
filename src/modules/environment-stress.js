
const ENV_DESC = {
	'LOW': {
		'title': 'LOW',
		'desc': 'Low exposures to environmental stressors can have a healthy impact on your skin, where skin feels less sensitive to external aggravators. Hydrating is key to regulating and balacing sebum production, giving your skin that supple feel, and use products with antioxidants and AHAs in your routine.'
	},
	'AVG': {
		'title': 'AVERAGE',
		'desc': 'Low exposures to environmental stressors can reduce implications on your skin, where skin feels less reactive to external aggravators. For maximum protection, reduce the amount of hours exposed outdoors, remember to use sunscreen, cleanse skin with a gentle cleanser to balance oil levels and continue using antioxidants and AHAs in your skincare routine. Hydrating is key to regulating and balacing sebum production.'
	},
	'HI': {
		'title': 'HIGH',
		'desc': 'Being exposed to environmental stressors may lead to more wrinkles, dryness, saggy and dull skin over time. It can also make skin more sensitive and reactive, resulting in an overproduction of sebum, leading to acne and other skin problems such as dry, rough and much more irritated skin. Rebalancing skin is crucial and hydrating is key. Reduce the amount of hours exposed outdoors, remember to use sunscreen, cleanse skin with a gentle cleanser to maintain skin\'s moisture, and continue using antioxidants and AHAs in your skincare routine.'
	}
};

const getEnvironmentStress = (currentAnswers) => {
	const hourAnswer = currentAnswers[2];
	const stressAnswer = currentAnswers[3];
	const airAnswer = currentAnswers[4];

	let resultKey;

	if (['Less than 1 hour', '2 hours', '3 hours', '4 hours'].includes(hourAnswer)) {
		if (['No', 'Uncertain'].includes(airAnswer) && ['None', 'Low'].includes(stressAnswer)) {
			resultKey = 'LOW';
		} else if (['Yes'].includes(airAnswer) && ['Medium', 'High'].includes(stressAnswer)) {
			resultKey = 'HI';
		} else {
			resultKey = 'AVG';
		}
	} else {
		resultKey = (['No', 'Uncertain'].includes(airAnswer) && ['None', 'Low'].includes(stressAnswer)) ? 'AVG' : 'HI';
	}

	return ENV_DESC[resultKey] ? ENV_DESC[resultKey] : ENV_DESC['HI'];
};

export default getEnvironmentStress;
