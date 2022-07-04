const ProgressBarStep = (props) => {
	const stepItem = [];
	for (let i = 1; i <= props.totalQuestions; i += 1) {
		let classes = 'border border-primary rounded-circle zindex-1 ';
		classes += props.currentQuestion >= i ? 'bg-primary' : 'bg-white';
		if (i === 1) {
			classes += ' me-2';
		} else if (i === props.totalQuestions) {
			classes += ' ms-2';
		} else {
			classes += ' mx-2';
		}
		stepItem.push(<li key={i} className={classes}></li>);
	}
	return (
		<>
			<div className="d-flex justify-content-between align-items-center mt-4">
				<strong>Start</strong>
				<ul className="list-unstyled progress--step d-flex m-0 position-relative mx-3">
					{stepItem}
				</ul>
				<strong>Done</strong>
			</div>

			<p className="w-100 text-center text-secondary font-size-sm mt-g mt-lg-3">{props.category}</p>
		</>
	);
};

export default ProgressBarStep;
