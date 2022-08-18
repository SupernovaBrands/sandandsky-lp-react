import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Questions from '../../modules/questions';
import ProgressBarStep from './ProgressBarStep';
import { ReactComponent as SplashBottom } from '../../assets/splash-bottom.svg';

export const SurveyContext = React.createContext();
const QuestionBox = (props) => {
    const {
        question,
        caption,
        captionClass,
        children,
        colSize,
        currentQuestion,
        setCurrentQuestion,
        answerAction,
        currentAnswer,
        width,
        height,
        totalSteps,
        category,
        defaultEnabled,
    } = props;

    const prevAction = () => {
        return (e) => {
            setCurrentQuestion(currentQuestion - 1);
            e.preventDefault();
        }
    }

    const nextAction = () => {
        return (e) => {
            setCurrentQuestion(currentQuestion + 1);
            e.preventDefault();
        }
    }


    const answer = (data) => {
        answerAction(currentQuestion, data);
    }

    const defaultSelected = currentAnswer && currentAnswer[currentQuestion] ? currentAnswer[currentQuestion] : null;
    const defaultStateEnable = defaultSelected ? defaultSelected : !defaultEnabled;

    const disableState = defaultSelected ? false : defaultStateEnable;

    const [isDisabled, setDisable] = useState(disableState);
    const isLastQuestion = Questions.length === currentQuestion;

    const footerAction = currentQuestion === 6 || currentQuestion === 7 ? 'my-lg-3' : 'pt-lg-5';

    return (
        <div className={`${colSize} col-12 d-flex flex-wrap justify-content-center question-box`}>
            <ProgressBarStep category={category} currentQuestion={currentQuestion} totalQuestions={totalSteps} />
            <div className="d-flex justify-content-center align-items-center flex-column question-box__content mb-2">
                <p className={`${caption ? 'w-100' : 'w-100 mb-4 mb-lg-2'} h1 mt-4`}>{question}</p>
                { caption && (<p className={captionClass}>{caption}</p>)}
                <SurveyContext.Provider value={{answerAction: answer, currentQuestion: currentQuestion, width, height, setDisable: setDisable, currentAnswer }}>
                    { children }
                </SurveyContext.Provider>
            </div>
            <div className={`footer-action w-100 bg-white ${currentQuestion === 6 ? 'my-2' : 'my-5'} ${footerAction}`}>
                <div className={`row align-items-end ${currentQuestion > 1 ? '' : 'justify-content-center'}`}>
                    {
                        currentQuestion > 1 && (<a href="/" className="col-3 col-lg-2 text-start text-underline text-body font-size-sm mb-1" onClick={prevAction()}>Previous</a>)
                    }
                    <div className={`col-6 col-lg-4 ${currentQuestion > 1 ? 'offset-lg-2' : ''}`}>
                        <button className="btn btn-primary text-white btn-next w-100" onClick={nextAction()} disabled={isDisabled}>{ isLastQuestion ? 'View my results' : 'Next' }</button>
                    </div>
                </div>
                <SplashBottom className="d-none d-lg-block question-box__decoration-bottom position-absolute start-0 bottom-0" />
            </div>
        </div>
    )
};

QuestionBox.propTypes = {
	question: PropTypes.string.isRequired,
    caption: PropTypes.string,
    colSize: PropTypes.string,
    currentQuestion: PropTypes.number,
    setCurrentQuestion: PropTypes.func,
    answerAction: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    currentAnswer: PropTypes.object,
};

export default QuestionBox;
