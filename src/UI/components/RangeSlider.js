const RangeSlider = (props) => {
	const {
		rangeValue,
		rangeMax,
		handleRangeChange,
		percentWidth,
	} = props;
	return (
		<div className="position-relative">
        	<input type="range" value={rangeValue} className="form-range" min="0" max={rangeMax} step="1" id="range" onChange={handleRangeChange} />
            <div className="progress progress--range">
                <div id="progress--range__bar" className="progress-bar" style={percentWidth} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
	);
};

export default RangeSlider;
