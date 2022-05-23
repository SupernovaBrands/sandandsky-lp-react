import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as StarFull } from '../../assets/star-full.svg';
import { ReactComponent as StarHalf } from '../../assets/star-half.svg';
import { ReactComponent as StarEmpty } from '../../assets/star-line.svg';

const ReviewStar = (props) => {
	const full = Math.floor(props.score);
	const line = 5 - Math.ceil(props.score);
	const half = 5 - full - line;

	const stars = [];
	for (let x = 0; x < full; x += 1) {
		let starFull = <StarFull key={`full-${x}`} className={`svg text-secondary ${stars.length === 0 ? '' : 'ms-25'}`} />;
		if (props.useSharpStar) {
			starFull = <StarFull key={`full-${x}`} className={`svg text-secondary ${stars.length === 0 ? '' : 'ms-25'}`} />;
		}
		stars.push(starFull);
	}
	for (let x = 0; x < half; x += 1) {
		stars.push(<StarHalf key={`half-${x}`} className={`svg text-secondary ${stars.length === 0 ? '' : 'ms-25'}`} />);
	}
	for (let x = 0; x < line; x += 1) {
		stars.push(<StarEmpty key={`line-${x}`} className={`svg text-secondary ${stars.length === 0 ? '' : 'ms-25'}`} />);
	}

	return (
		<div className="d-flex">
			{stars}
		</div>
	);
};

ReviewStar.propTypes = {
	score: PropTypes.number.isRequired,
};

export default ReviewStar;
