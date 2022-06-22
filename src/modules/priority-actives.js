
import { ReactComponent as HyaluronicAcid } from '../assets/hyaluronic-acid.svg';
import { ReactComponent as VeganSqualane } from '../assets/vegan-squalane.svg';
import { ReactComponent as Ahas } from '../assets/ahas.svg';
import { ReactComponent as VitaminC } from '../assets/vitamin-c.svg';
import { ReactComponent as Niacinamide } from '../assets/niacinamide.svg';
import { ReactComponent as VitaminE } from '../assets/vitamin-e.svg';
import { ReactComponent as SalicylicAcid } from '../assets/salicylic-acid.svg';

const activeDescription = {
	'salicylic-acid': {
		icon: <SalicylicAcid />,
		title: 'Salicylic Acid',
		desc: 'Salicylic acid is a BHA well-known for eliminating oil, reducing acne by exfoliating the skin and keeping pores clear.',
	},
	'niacinamide': {
		icon: <Niacinamide />,
		title: 'Niacinamide',
		desc: 'Niacinamide is a form of vitamin B3 that helps build proteins in the skin, retains moisture and offers protection against environmental damage.',
	},
	'vitamin-c': {
		icon: <VitaminC />,
		title: 'Vitamin C',
		desc: 'Vitamin C is an antioxidant that helps heal blemishes, reduce hyperpigmentation, and give your skin an out-of-this-world glow.'
	},
	'vitamin-e': {
		icon: <VitaminE />,
		title: 'Vitamin E',
		desc: 'Vitamin E is an anti-inflammatory agent in the skin that has moisturizing and healing benefits, and helps to strengthen skin barrier function.'
	},
	'ahas': {
		icon: <Ahas />,
		title: 'AHAs',
		desc: 'AHAs help to exfoliate the skin and treat acne. Over time, AHAs may help to improve skin texture, fade dark spots, and reduce the visible signs of aging.'
	},
	'hyaluronic-acid': {
		icon: <HyaluronicAcid />,
		title: 'Hyaluronic Acid',
		desc: 'Hyaluronic acid helps increase skin moisture and reduce the appearance of fine lines and wrinkles.'
	},
	'vegan-squalane': {
		icon: <VeganSqualane />,
		title: 'Vegan Squalane',
		desc: 'Squalane has anti-inflammatory properties that can reduce redness and swelling, as it helps moisturize and repair dry, rough skin to improve skin texture and appearance.'
	}
};

export default activeDescription;
