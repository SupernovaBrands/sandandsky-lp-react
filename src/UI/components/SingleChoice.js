import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { SurveyContext } from './QuestionBox';

const SingleChoice = (props) => {
    const {
        answers,
        buttonType,
        inputType,
    } = props;

    const {
        answerAction,
        currentQuestion,
        setDisable,
        currentAnswer,
    } = useContext(SurveyContext);

    const defaultSelected = currentAnswer && currentAnswer[currentQuestion] ? currentAnswer[currentQuestion] : null;
    const initialRange = currentAnswer && currentAnswer[currentQuestion] ? answers.indexOf(currentAnswer[currentQuestion]) : 0;
    const rangeMin = 0;
    const rangeMax = answers.length - 1;

    const [selectedItem, setSelectedItem] = useState(defaultSelected);
    const [rangeValue, setRangeValue] = useState(initialRange);

    const selectItem = (answersIndex) => {
        const selected = answers[answersIndex];
        setSelectedItem(selected);
        answerAction(selected);
        setDisable(false);
    };

    const classesCol = buttonType === 'full' ? 'col-12' : 'col-6';

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
        const selected = answers[event.target.value];
        setSelectedItem(selected);
        answerAction(selected);
    };

    const percentVal = (rangeValue - rangeMin) * 100 / (rangeMax - rangeMin);
    const percentWidth = {
        width: percentVal + `%`
    };
    const percentLeft = {
        left: percentVal + `%`,
        transform: (`translateX(-` + percentVal + `%)`),
        top: (percentVal === 100) ? -20 : 0,
    };

    if (percentVal === 100) {
        percentLeft.minWidth = 84;
    }

    return (
        <div className="col-12 px-0">
            <div className={`${inputType === 'Button' ? 'row' : 'position-relative pt-3'} justify-content-center ${inputType === 'RangeSlider' && props.showAllLabel ? 'overflow-hidden' : ''}`}>
                {inputType === 'Button' && answers.map((answer, index) => {
                    const classes = answer === selectedItem ? 'bg-secondary-light border--default-selected' : '';
                    return (
                        <div key={index} className={`${classesCol} mt-g mt-lg-3`}>
                            <button
                                className={`border--default ${classes} position-relative btn btn__choice-bigger btn-lg w-100 btn-outline fw-normal h-100 px-g px-lg-3 py-2 py-lg-g`}
                                onClick={() => selectItem(index)}>
                                {answer}
                            </button>
                        </div>
                    );
                })}

                {inputType === 'RangeSlider' && (
                    <>
                        {!props.showAllLabel && (
                            <span style={percentLeft} className="position-absolute range__value">{answers[rangeValue]}</span>
                        )}
                        {props.showAllLabel && (
                            <div className="row mx-n4 mx-lg-n6">
                                {answers.map((answer, index) => {
                                    return(
                                        <div key={index} className="col-3">{answer}</div>
                                    )
                                })}
                            </div>
                        )}
                        <div className="position-relative">
                            <input type="range" value={rangeValue} className="form-range" min="0" max={rangeMax} step="1" id="range" onChange={handleRangeChange} />
                            <div className="progress progress--range">
                                <div id="progress--range__bar" className="progress-bar" style={percentWidth} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
};

SingleChoice.propTypes = {
    answers: PropTypes.array.isRequired,
    buttonType: PropTypes.string,
};

export default SingleChoice;
