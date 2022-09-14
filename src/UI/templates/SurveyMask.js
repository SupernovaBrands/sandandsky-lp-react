import React, { useEffect, useRef, useState } from 'react';
import '../../survey.scss';

import Questions from "../../modules/questions";
import QuestionBox from "../components/QuestionBox";
import SingleChoice from '../components/SingleChoice';
import MultipleChoice from '../components/MultipleChoice';

import { 
    setCookie,
    getCookie,
    decodeAnswers,
    postMessageData,
    postMessageCookie,
    getCookieAnsweredQuestion
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

    const targetRef = useRef();

    // INITIAL DATA
    let initialState = getCookie('surveyPosition') || 'start';
    if (surveyState === 'started' && (getCookie('surveyPosition') === 'start' || getCookie('surveyPosition') === null || getCookie('surveyPosition') === '')) {
        postMessageData('Survey', 'started');
        initialState = 'question-1';
        setCookie('answeredQuestion', '');
    }
    const initialCurrentQuestion = getCookie('currentQuestion') ? parseInt(getCookie('currentQuestion'), 10) : 1;
    const answerData = getCookieAnsweredQuestion() ? getCookieAnsweredQuestion() : {};

    // INITIAL STATES
    const [currentPosition, setPosition] = useState(initialState);
	const [currentQuestion, setQuestion] = useState(initialCurrentQuestion);
    const [currentAnswer, setAnswer] = useState(answerData);

    const classes = currentPosition !== 'result' ? 'px-g' : 'overflow-hidden';

    const startQuiz = () => {
        postMessageData('Survey', 'started');
        setPosition('question-1');
    };

    return (
        <div ref={targetRef} className={`survey-mask ${currentPosition === 'start' ? 'cover' : classes} ${currentPosition !== 'result' && currentPosition !== 'start' ? 'container' : ''}`}>
            <div className={`row justify-content-center survey-content ${currentPosition === 'start' ? 'survey-content__start pt-4' : 'align-content-start'} `}>
                { currentPosition === 'start' && (
                    <>
                        <div className='survey-mask__start-screen'>
                            <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5d327fa8-3567-48a0-177f-0f28bcaa3300/828x" />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
};

export default SurveyMask;