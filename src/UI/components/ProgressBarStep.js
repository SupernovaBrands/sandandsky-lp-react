const ProgressBarStep = (props) => {
	const stepItem = [];
	for (let i = 1; i <= props.totalQuestions; i += 1) {
		let classes = 'border rounded-circle zindex-1 ';
		classes += props.currentQuestion >= i ? 'bg-secondary-light' : 'bg-white';
		if (i === 1) {
			stepItem.push(<li key={i} className={`${classes} me-2`}></li>);
		} else if (i === props.totalQuestions) {
			stepItem.push(<li key={i} className={`${classes} ms-2`}></li>);
		} else {
			stepItem.push(<li key={i} className={`${classes} mx-2`}></li>);
		}
	}
	return (
		<>
			<div className="d-flex justify-content-between align-items-center">
				<strong>Start</strong>
				<ul className="list-unstyled progress--step d-flex m-0 position-relative mx-3">
					{stepItem}
				</ul>
				<strong>Done</strong>
			</div>

			<p className="w-100 text-center text-secondary font-size-sm">{props.category}</p>
		</>
	);
};

export default ProgressBarStep;
