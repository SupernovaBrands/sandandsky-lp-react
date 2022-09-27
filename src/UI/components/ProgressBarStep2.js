const ProgressBarStep2 = (props) => {
	const stepItem = [];
	for (let i = 1; i <= props.totalQuestions; i += 1) {
		let classes = 'bg-primary zindex-1 ';
		classes += props.currentQuestion >= i ? 'bg-primary' : 'bg-primary-light';
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
				<ul className="list-unstyled progress--step--flat-strip d-flex m-0 position-relative mx-3">
					{stepItem}
				</ul>
			</div>
		</>
	);
};

export default ProgressBarStep2;
