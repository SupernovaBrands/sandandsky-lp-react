import React, { useEffect, useRef, useState } from 'react';
import '../../survey.scss';

import Questions from "../../modules/mask-questions";
import QuestionBox from "../components/QuestionBox";
import SingleChoice from '../components/SingleChoice';
import MultipleChoice from '../components/MultipleChoice';

import { 
    setCookie,
    getCookie,
    decodeAnswers,
    postMessageData,
    postMessageCookie,
    getCookieAnsweredQuestion,
    setCookieAnsweredQuestion,
    clearCookie
} from "../../modules/Utils";

import { useSearchParams } from "react-router-dom";
import getSkinType from '../../modules/skin-type';

import { ReactComponent as LoaderSvg } from '../../assets/loader.svg';
import { ReactComponent as SplashTop } from '../../assets/splash-top.svg';
import { ReactComponent as SplashBottom } from '../../assets/splash-bottom.svg';
import getProductResult from '../../modules/product-result';
import getEnvironmentStress from '../../modules/environment-stress';
import productList from '../../modules/product-list';

window.getCookie = getCookie;

const SurveyMask = () => {
    const [searchParams] = useSearchParams();
    const site = searchParams.get('site');
    const gId = searchParams.get('gaid');
    const surveyState = searchParams.get('state');
    console.log(Questions)
    const targetRef = useRef();

    // INITIAL DATA
    let initialState = getCookie('surveyPosition') || 'start';
    if (surveyState === 'started' && (getCookie('surveyPosition') === 'start' || getCookie('surveyPosition') === null || getCookie('surveyPosition') === '')) {
        postMessageData('Survey', 'started');
        initialState = 'question-1';
        setCookie('answeredQuestion', '');
    }
    const initialCurrentQuestion = getCookie('currentQuestion') ? parseInt(getCookie('currentQuestion'), 10) : 1;
    const answerData = getCookieAnsweredQuestion('getCookieAnsweredQuestionMask') ? getCookieAnsweredQuestion('getCookieAnsweredQuestionMask') : {};

    // INITIAL STATES
    const [currentPosition, setPosition] = useState(initialState);
	const [currentQuestion, setQuestion] = useState(initialCurrentQuestion);
    const [currentAnswer, setAnswer] = useState(answerData);

    const classes = currentPosition !== 'result' ? 'px-g' : 'overflow-hidden';

    const startQuiz = () => {
        postMessageData('Survey', 'started');
        setPosition('question-1');
    };

    const answerAction = (question, answers) => {
        currentAnswer[question] = answers;
        setAnswer(decodeAnswers(currentAnswer));
        setCookieAnsweredQuestion(decodeAnswers(currentAnswer));
        console.log('currentAnswer', currentAnswer);
    };

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
            // saveData();
            postMessageGaParent();
            gettingResult(true);
        }
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

    const postMessageGaParent = () => {
        if (window.top === window.self) return;
        const gaAnswers = decodeAnswers(currentAnswer)
        const keys = Object.keys(gaAnswers);

        postMessageData('Survey', 'completed');
        postMessageCookie('surveySubmitNew', 'true');

        keys.forEach((key,index) => {
            const q = Questions[index];
            const a = gaAnswers[key];
            const label = q.question;
            const action = typeof(a) === 'object' ? a.join(',') : a;
            postMessageData('Survey', action, label);
        });
    }

    const gettingResult = (close=false) => {
        const selectedSite = site ? site : 'dev.sandandsky.com';


        const skinType = getSkinType(currentAnswer);
        const envStressResult = getEnvironmentStress(currentAnswer);

        const { productsRecommend, activePriority } = getProductResult(Questions, currentAnswer);

        const productHandle = [];
        const productSkus = [];
        productsRecommend.forEach((item) => {
            productHandle.push(productList[item].handle);
            productSkus.push(productList[item].sku);
        });

        if (close) {
            setCookie('surveyPosition', 'finished');
            setPosition('finished');
            postMessageCookie('surveyPosition', 'finished');
            const surveyResultObj = {
                skinType,
                envStressResult,
                productsRecommend,
                productHandle,
                productSkus,
                activePriority
            };

            const surveyResultJson = JSON.stringify(surveyResultObj);
            setCookie('surveyResult', surveyResultJson);
            postMessageCookie('surveyResult', surveyResultJson);

            setTimeout(function () {
                setCookie('surveyPosition', 'result');
                setPosition('result');
                postMessageCookie('surveyPosition', 'result');
                setCookie('surveyResult', surveyResultJson);
                postMessageCookie('surveyResult', surveyResultJson);
                clearCookie();
                if (window.top !== window.self) {
                    setTimeout(function () {
                        window.top.location.href = `https://${selectedSite}/pages/survey-result/`;
                    }, 500);
                } else {
                    window.location.href = '/survey-result';
                }
            }, 1500);
        }
    }

    return (
        <div ref={targetRef} className={`survey-mask ${currentPosition === 'start' ? 'cover' : classes} ${currentPosition !== 'result' && currentPosition !== 'start' ? 'container' : ''}`}>
            <div className={`row justify-content-center survey-content ${currentPosition === 'start' ? 'survey-content__start pt-4' : 'align-content-start'} `}>
                { currentPosition === 'start' && (
                    <>
                        <div className='survey-mask__start-screen text-center mt-7'>
                            <img className='tooltip' src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5d327fa8-3567-48a0-177f-0f28bcaa3300/828x" />
                            <h1>Mask Quiz</h1>
                            <button className="btn btn-primary text-white" onClick={() => startQuiz()}>Take the quiz</button>
                        </div>
                    </>
                )}
                { currentPosition !== 'start'
                    && currentPosition !== 'finished'
                    && currentPosition !== 'result' && (
                    <>
                        <div className="text-center position-relative">
                            {Questions.map((item, index) => {
                                const key = `question-${index}`;
                                if (currentQuestion === index + 1) {
                                    switch(item.type) {
                                        case 'MultipleChoice':
                                            return (
                                                <QuestionBox
                                                    currentAnswer={decodeAnswers(currentAnswer)}
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
                                                    // width={width}
                                                    // height={height}
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
                                                    defaultEnabled={item.inputType === 'RangeSlider' ? true : null}
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
                            })}
                        </div>
                    </>
                )}

                { (currentPosition === 'finished' || currentPosition === 'result') && (
					<div className="question-box analyzing d-flex justify-content-center align-items-center flex-column">
						<p className="question-box__title">Analysing your answers</p>
						<LoaderSvg className="loader mt-0 mb-0"/>
					</div>
				)}
            </div>
        </div>
    )
};

export default SurveyMask;