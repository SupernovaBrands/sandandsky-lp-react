import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import { SurveyContext } from './QuestionBox';
import RangeSlider from './RangeSlider';

const SingleChoice = (props) => {
    const {
        answers,
        buttonType,
        inputType,
        btnClass,
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
        setDisable(false);
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
        <div className={`col-12 px-0 pt-1 ${inputType === 'RangeSlider' ? 'pt-lg-5 mt-lg-4' : ''}`}>
            <div className={`${inputType === 'Button' ? 'row' : 'position-relative pt-4 pt-lg-5'} justify-content-center ${inputType === 'RangeSlider' && props.showAllLabel ? 'overflow-hidden' : ''}`}>
                {inputType === 'Button' && answers.map((answer, index) => {
                    const classes = answer === selectedItem ? 'bg-secondary-light border--default-selected' : '';
                    return (
                        <div key={index} className={`${classesCol} mt-g mt-lg-3`}>
                            <button
                                className={`border--default ${classes} position-relative btn ${btnClass} btn-lg w-100 btn-outline fw-normal h-100 ${btnClass === 'btn__choice-medium' ? 'px-2' : 'px-g'} px-lg-2 py-2 py-lg-g`}
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
                            <div className="row mx-n4 mx-lg-n6 pb-2">
                                {answers.map((answer, index) => {
                                    return(
                                        <div key={index} className="col-3">{answer}</div>
                                    )
                                })}
                            </div>
                        )}
                        <RangeSlider rangeValue={rangeValue} rangeMax={rangeMax} handleRangeChange={handleRangeChange} percentWidth={percentWidth} />
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
