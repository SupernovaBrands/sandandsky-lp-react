import React, { useEffect, useRef, useState } from 'react';
import '../../survey.scss';

import Questions from "../../modules/questions";
import QuestionBox from "../components/QuestionBox";
import SingleChoice from '../components/SingleChoice';
import MultipleChoice from '../components/MultipleChoice';
import { useResizeDetector } from 'react-resize-detector';

import { setCookie, getCookie } from "../../modules/Utils";
import { useSearchParams } from "react-router-dom";
import getSkinType from '../../modules/skin-type';

import { ReactComponent as LoaderSvg } from '../../assets/loader.svg';
import { ReactComponent as SplashTop } from '../../assets/splash-top.svg';
import { ReactComponent as SplashBottom } from '../../assets/splash-bottom.svg';
import getProductResult from '../../modules/product-result';
import getEnvironmentStress from '../../modules/environment-stress';
import SurveyResult from '../components/SurveyResult';


window.getCookie = getCookie;

const Survey = () => {
	const [searchParams] = useSearchParams();
    const site = searchParams.get('site');
    const gId = searchParams.get('gaid');
    const surveyState = searchParams.get('state');

	const setCookieAnsweredQuestion = (object) => {
        if (typeof object === 'object') {
            Object.entries(object).forEach((data) => {
                const key = data[0];
                const value = decodeURI(data[1]);
                object[key] = encodeURI(value);
            });
            setCookie('answeredQuestion', JSON.stringify(object));
            postMessageCookie('answeredQuestion', JSON.stringify(object));
        } else {
            setCookie('answeredQuestion', '');
        }
    }

    const getCookieAnsweredQuestion = () => {
        if (getCookie('answeredQuestion')) {
            const object = JSON.parse(getCookie('answeredQuestion'));
            Object.entries(object).forEach((data) => {
                const key = data[0];
                const value = data[1];
                object[key] = decodeURI(value);
            });
            return object;
        }
        return null;
    }

    const decodeAnswers = (object) => {
        Object.entries(object).forEach((data) => {
            const key = data[0];
            const value = data[1];
            object[key] = decodeURI(value);
        });
        return object;
    }

	// refference width and height
    const targetRef = useRef();
    const { width, height } = useResizeDetector({ targetRef });

	// initial data
    let initialState = getCookie('surveyPosition') || 'start';
    if (surveyState === 'started' && (getCookie('surveyPosition') === 'start' || getCookie('surveyPosition') === null || getCookie('surveyPosition') === '')) {
        initialState = 'question-1';
        setCookie('answeredQuestion', '');
    }
    const initialCurrentQuestion = getCookie('currentQuestion') ? parseInt(getCookie('currentQuestion'), 10) : 1;
    const answerData = getCookieAnsweredQuestion() ? getCookieAnsweredQuestion() : {};
    const answerResult = getCookie('surveyResult') ? JSON.parse(getCookie('surveyResult')) : {};

	// states
    const [currentPosition, setPosition] = useState(initialState);
	const [currentQuestion, setQuestion] = useState(initialCurrentQuestion);
    const [currentAnswer, setAnswer] = useState(answerData);
    const [currentResult, setResult] = useState(answerResult);


    const postMessageCookie = (key, val) => {
        if (window.top === window.self) return;

        window.parent.postMessage({
            'func': 'setCookieFromMessage',
            'key': key,
            'value': val,
        }, `https://${site}`);
    }

	// handler hook side effect when state changed
    useEffect(() => {
        if (currentPosition === 'start') {
            document.getElementById('root').classList.add('bg-primary-light-second');
        } else {
            document.getElementById('root').classList.remove('bg-primary-light-second');
        }

        // setCookie('surveyPosition', currentPosition);
        // postMessageCookie('surveyPosition', currentPosition); don't send to parent window when initialize survey state
    }, [currentPosition]);

    useEffect(() => {
        if (currentQuestion <= Questions.length && currentPosition !== 'finished' && currentPosition !== 'start' && currentPosition !== 'result') {
            setCookie('currentQuestion', currentQuestion);
            setCookie('surveyPosition', `question-${currentQuestion}`);
            // send cookie data to the parent window
            postMessageCookie('currentQuestion', currentQuestion);
            postMessageCookie('surveyPosition', `question-${currentQuestion}`);
        }

    }, [currentQuestion, currentPosition]);

    const answerAction = (question, answers) => {
        currentAnswer[question] = answers;
        setAnswer(decodeAnswers(currentAnswer));
        setCookieAnsweredQuestion(decodeAnswers(currentAnswer));
    };

    const clearCookie = () => {
        setCookie('currentQuestion', 1);
        setCookie('surveyPosition', 'start');
        setCookie('answeredQuestion', '');
        postMessageCookie('currentQuestion', 1);
        postMessageCookie('surveyPosition', 'start');
        postMessageCookie('answeredQuestion', '');
    }

	const gettingResult = (close=false) => {


        const skinType = getSkinType(currentAnswer);
        const envStressResult = getEnvironmentStress(currentAnswer);

        const { productsRecommend, activePriority } = getProductResult(Questions, currentAnswer);

        if (close) {
            setCookie('surveyPosition', 'finished');
            setPosition('finished');
            postMessageCookie('surveyPosition', 'finished');
            const surveyResultObj = {
                skinType,
                envStressResult,
                productsRecommend,
                activePriority
            };
            const surveyResultJson = JSON.stringify(surveyResultObj);
            setCookie('surveyResult', surveyResultJson);
            postMessageCookie('surveyResult', surveyResultJson);
            setResult(surveyResultObj);

            setTimeout(function () {
                setCookie('surveyPosition', 'result');
                setPosition('result');
                postMessageCookie('surveyPosition', 'result');
                setCookie('surveyResult', surveyResultJson);
                postMessageCookie('surveyResult', surveyResultJson);
            }, 2000);
        }
    }

	const setQuestionState = (questionIndex) => {
        if (questionIndex <= Questions.length) {
            const targetQuestion = Questions[questionIndex];
            if (targetQuestion && targetQuestion.rule && targetQuestion.rule.skipped) {
                const targetAnswer = decodeAnswers(currentAnswer)[targetQuestion.rule.question];
                if (targetAnswer === targetQuestion.rule.answer) {
                    answerAction(questionIndex, '');
                    const targetQuestionIndex = currentQuestion < questionIndex ? questionIndex + 1 : questionIndex - 1;
                    setQuestion(targetQuestionIndex);
                } else {
                    setQuestion(questionIndex);
                }
            } else {
                setQuestion(questionIndex);
            }
        } else if (questionIndex >= Questions.length) {
            gettingResult(true);
            // call saving data to analytics and database
            saveData();
            postMessageGaParent();
            gettingResult(true);
        }
    }

    const postMessageGaParent = () => {
        if (window.top === window.self) return;
        const gaAnswers = decodeAnswers(currentAnswer)
        const keys = Object.keys(gaAnswers);

        keys.forEach((key,index) => {
            const q = Questions[index];
            const a = gaAnswers[key];
            const label = q.question;
            const action = typeof(a) === 'object' ? a.join(',') : a;
            window.parent.postMessage({
                'func': 'callGaEvent',
                'category': 'Survey',
                'action': action,
                'label': label,
            }, `https://${site}`);
        });
    }

    const saveData = () => {
        const dataForSaving = {};
        for (const [key, value] of Object.entries(currentAnswer)) {
            const idxQ = key - 1;
            if (Questions[idxQ]) {
                const questionText = `${key}: ${Questions[idxQ].question}`;
                dataForSaving[questionText] = value;
            }
        }
        const data = { _ga: gId, questions_answers: dataForSaving };
        fetch('https://api.sandandsky.com/surveys', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
    }

    useEffect(() => {
        if (currentPosition === 'finished' || currentPosition === 'result') gettingResult();
    }, [currentPosition]);

    const postIframeHeight = (key, val) => {
        if (window.top === window.self) return;

        window.parent.postMessage({
            'func': 'updateIframeHeight',
            'key': key,
            'value': val,
        }, `https://${site}`);
    }

    useEffect(() => {
        postIframeHeight('height', height);
    }, [height]);

    const classes = currentPosition !== 'result' ? 'px-g' : 'overflow-hidden';

	return (
		<div ref={targetRef} className={`${currentPosition === 'start' ? 'cover' : classes} ${currentPosition !== 'result' ? 'container' : ''}`}>
			<div className={`row justify-content-center survey-content ${currentPosition === 'start' ? 'align-items-center survey-content__start' : 'align-content-start'} `}>
				{ currentPosition === 'start' && (
				<>
					<div className="px-g d-flex align-items-center flex-column justify-content-center text-center">
                        <div className="w-100 text-end mb-5 pb-5 me-ng me-lg-0">
                            <SplashTop />
                        </div>
						<h1 className="mb-g">Discover your routine to flawless skin</h1>
						<p className="font-size-sm mb-4">Find the perfect solution to your skin’s needs in just a few steps!</p>
						<button className="btn btn-primary text-white" onClick={() => setPosition('question-1')}>Take the quiz</button>
                        <div className="w-100 text-start mt-5 pt-5 ms-ng ms-lg-0">
                            <SplashBottom />
                        </div>
					</div>
				</>)}

				{ currentPosition !== 'start' && currentPosition !== 'finished' && currentPosition !== 'result' && (
				<>
					<div className="text-center position-relative">
                        <SplashTop className="d-none d-lg-block question-box__decoration-top position-absolute end-0" />
                        {Questions.map((item, index) => {
                            const key = `question-${index}`;
                            if (currentQuestion === index + 1) {
                                switch(item.type) {
                                    case 'MultipleChoice':
                                        return (
                                            <QuestionBox
                                                currentAnswer={decodeAnswers(currentAnswer)}
                                                width={width}
                                                height={height}
                                                totalQuestions={item.answers.length}
                                                totalSteps={Questions.length}
                                                answerAction={answerAction}
                                                setCurrentQuestion={setQuestionState}
                                                currentQuestion={currentQuestion}
                                                key={key}
                                                colSize='col-lg-8 offset-lg-2 col-xl-6 offset-xl-3'
                                                question={item.question}
                                                caption={item.caption ? item.caption : ''}
                                                captionClass={item.captionClass ? item.captionClass : ''}
                                                category={item.category}
                                                >
                                                <MultipleChoice answers={item.answers}
                                                    lastFull={item.lastFull}
                                                    maxChoose={item.maxChoose}
                                                    lastDisableForAll={item.lastDisableForAll}
                                                    btnClass={item.btnClass}
                                                    />
                                            </QuestionBox>
                                        );
                                    default:
                                        return (
                                            <QuestionBox
                                                currentAnswer={decodeAnswers(currentAnswer)}
                                                width={width}
                                                height={height}
                                                totalQuestions={item.answers.length}
                                                answerAction={answerAction}
                                                setCurrentQuestion={setQuestionState}
                                                currentQuestion={currentQuestion}
                                                totalSteps={Questions.length}
                                                key={key}
                                                colSize='col-lg-8 offset-lg-2 col-xl-6 offset-xl-3'
                                                question={item.question}
                                                caption={item.caption ? item.caption : ''}
                                                captionClass={item.captionClass ? item.captionClass : ''}
                                                category={item.category}
                                                >
                                                <SingleChoice
                                                    answers={item.answers}
                                                    buttonType={item.buttonType}
                                                    inputType={item.inputType}
                                                    showAllLabel={item.showAllLabel}
                                                    btnClass={item.btnClass}
                                                    />
                                            </QuestionBox>
                                        );
                                }
                            }
                            return false;
                        })}
                    </div>
				</>)}

				{ currentPosition === 'finished' && (
					<div className="question-box analyzing d-flex justify-content-center align-items-center flex-column">
						<p className="question-box__title">Analysing your answers</p>
						<LoaderSvg className="loader mt-0 mb-0"/>
					</div>
				)}

                { currentPosition === 'result' && (
                    <SurveyResult answerResult={currentResult} />
                )}
			</div>
		</div>
	)
};

export default Survey;
