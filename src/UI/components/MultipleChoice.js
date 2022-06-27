import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { SurveyContext } from './QuestionBox';

const MultipleChoice = (props) => {
    const {
        answerAction,
        currentQuestion,
        setDisable,
        currentAnswer,
    } = useContext(SurveyContext);
    const {
        answers,
        lastFull,
        btnClass,
    } = props;

    const defaultSelected = currentAnswer && currentAnswer[currentQuestion] ? currentAnswer[currentQuestion].split(",") : [];
    const [selectedItems, setSelectedItems] = useState(defaultSelected);

    let disableData = false;
    if (defaultSelected && selectedItems.length === 1) {
        const disableAllButtons = answers.find((item) => item.label === defaultSelected[0]);
        if (disableAllButtons && disableAllButtons.type === 'checkboxAll') disableData = true;
    }

    const [disableRest, setDisableRest] = useState(disableData);

    const updateItems = (text, disableAll = false) => {
        let currentItems = [...selectedItems];
        if (text.includes('other:')) {
            // clear other answer
            currentItems = currentItems.filter((item,index)=> !item.includes('other:'))
            if (text.trim() !== 'other:') currentItems.push(text);
        } else {
            // clear when disableAll
            if (disableAll) {
                currentItems = [];
                setDisableRest(true);
            } else {
                setDisableRest(false)
            }

            const disableType = answers.find((answer) => answer.type === 'checkboxAll');

            if (disableType)
                currentItems = currentItems.filter((item) => item !== disableType.label);

            if (currentItems.includes(text)) {
                // slice item
                const curIndex = currentItems.indexOf(text);
                currentItems.splice(curIndex, 1);
            } else {
                // push item
                currentItems.push(text);
            }
        }
        setDisable(false);
        setSelectedItems(currentItems);
        answerAction(currentItems);
    };

    const chooseItems = (index) => {
        return (e) => {
            if (e.target.localName === 'input') { // execute only for target label, since click on label would trigger click by input also
                updateItems(answers[index].label, answers[index].type === 'checkboxAll');
            }
        }
    };

    useEffect(() => {
        answerAction('');
    }, []);

    return (
        <div className="row">
            {answers.map((answer, index) => {
                const full = lastFull && index + 1 === answers.length ? 'col-12' : 'col-6';
                const classes = `d-flex rounded align-items-center mb-g mb-lg-3 ${btnClass} position-relative border--default`;
                const disabledClass = disableRest && !selectedItems.includes(answer.label) ? 'disabled' : '';
                const itemClasses = selectedItems.includes(answer.label) ? 'border--default-selected position-relative bg-secondary-light' : '';
                return (
                    <div key={index} className={full}>
                        <div className={`${disabledClass} ${classes} ${itemClasses}`} role="button">
                            <label
                                className="d-flex checkbox-number align-items-center px-sm-1 w-100 p-2 justify-content-center zindex-1"
                                htmlFor={`${index}-flexCheckDefault`}
                                onClick={chooseItems(index)}
                                role="button">
                                    <input
                                        className='d-none'
                                        type="checkbox"
                                        defaultChecked={selectedItems.includes(answer.label)}
                                        value={answer}
                                        id={`${index}-flexCheckDefault`}/>
                                { answer.label }
                            </label>
                        </div>
                    </div>
                )
            })
        }</div>
        )
};

MultipleChoice.propTypes = {
    answers: PropTypes.array.isRequired,
    lastFull: PropTypes.bool,
};

export default MultipleChoice;
