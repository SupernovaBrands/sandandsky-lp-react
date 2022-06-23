
import { ReactComponent as HyaluronicAcid } from '../assets/hyaluronic-acid.svg';
import { ReactComponent as VeganSqualane } from '../assets/vegan-squalane.svg';
import { ReactComponent as Ahas } from '../assets/ahas.svg';
import { ReactComponent as VitaminC } from '../assets/vitamin-c.svg';
import { ReactComponent as Niacinamide } from '../assets/niacinamide.svg';
import { ReactComponent as VitaminE } from '../assets/vitamin-e.svg';
import { ReactComponent as SalicylicAcid } from '../assets/salicylic-acid.svg';

const activeDescription = {
	'Salicylic Acid': {
		icon: <SalicylicAcid className="svg--active-priority" />,
		title: 'Salicylic Acid',
		desc: 'Salicylic acid is a BHA well-known for eliminating oil, reducing acne by exfoliating the skin and keeping pores clear.',
	},
	'Niacinamide': {
		icon: <Niacinamide className="svg--active-priority" />,
		title: 'Niacinamide',
		desc: 'Niacinamide is a form of vitamin B3 that helps build proteins in the skin, retains moisture and offers protection against environmental damage.',
	},
	'Vitamin C': {
		icon: <VitaminC className="svg--active-priority" />,
		title: 'Vitamin C',
		desc: 'Vitamin C is an antioxidant that helps heal blemishes, reduce hyperpigmentation, and give your skin an out-of-this-world glow.'
	},
	'Vitamin E': {
		icon: <VitaminE className="svg--active-priority" />,
		title: 'Vitamin E',
		desc: 'Vitamin E is an anti-inflammatory agent in the skin that has moisturizing and healing benefits, and helps to strengthen skin barrier function.'
	},
	'AHAs': {
		icon: <Ahas className="svg--active-priority" />,
		title: 'AHAs',
		desc: 'AHAs help to exfoliate the skin and treat acne. Over time, AHAs may help to improve skin texture, fade dark spots, and reduce the visible signs of aging.'
	},
	'Hyaluronic Acid': {
		icon: <HyaluronicAcid className="svg--active-priority" />,
		title: 'Hyaluronic Acid',
		desc: 'Hyaluronic acid helps increase skin moisture and reduce the appearance of fine lines and wrinkles.'
	},
	'Vegan Squalane': {
		icon: <VeganSqualane className="svg--active-priority" />,
		title: 'Vegan Squalane',
		desc: 'Squalane has anti-inflammatory properties that can reduce redness and swelling, as it helps moisturize and repair dry, rough skin to improve skin texture and appearance.'
	}
};

export default activeDescription;
