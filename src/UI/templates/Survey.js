import React, { useEffect, useRef, useState } from 'react';
import '../../survey.scss';

import Questions from "../../modules/questions";
import QuestionBox from "../components/QuestionBox";
import SingleChoice from '../components/SingleChoice';
import MultipleChoice from '../components/MultipleChoice';
import EmailForm from '../components/EmailForm';
import ResultContent from '../components/ResultContent';

import { setCookie, getCookie } from "../../modules/Utils";
import { useSearchParams } from "react-router-dom";
import getSkinType from '../../modules/skin-type';

import { ReactComponent as LoaderSvg } from '../../assets/loader.svg';
import { ReactComponent as SplashTop } from '../../assets/splash-top.svg';
import { ReactComponent as SplashBottom } from '../../assets/splash-bottom.svg';
import getProductResult from '../../modules/product-result';
import getEnvironmentStress from '../../modules/environment-stress';
import productList from '../../modules/product-list';

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

    const postMessageToParentCookie = (key, val) => {
        if (window.top === window.self) return;

        window.parent.postMessage({
            'func': 'setCookieFromMessage',
            'key': key,
            'value': val,
        }, `https://${site}`);
    }

    const postMessageData = (category, action, label) => {
        if (window.top === window.self) return;
        window.parent.postMessage({
            'func': 'callGaEvent',
            'category': category,
            'action': action,
            'label': label,
        }, `https://${site}`);
    }

	// refference width and height
    const targetRef = useRef();
    // const { width, height } = useResizeDetector({ targetRef });

	// initial data
    let initialState = getCookie('surveyPosition') || 'start';
    if (surveyState === 'started' && (getCookie('surveyPosition') === 'start' || getCookie('surveyPosition') === null || getCookie('surveyPosition') === '')) {
        postMessageData('Survey', 'started');
        initialState = 'question-1';
        setCookie('answeredQuestion', '');
    }
    const initialCurrentQuestion = getCookie('currentQuestion') ? parseInt(getCookie('currentQuestion'), 10) : 1;
    const initialSubmitted = getCookie('quizEmail') ? true : false;
    const answerData = getCookieAnsweredQuestion() ? getCookieAnsweredQuestion() : {};

	// states
    const [currentPosition, setPosition] = useState(initialState);
	const [currentQuestion, setQuestion] = useState(initialCurrentQuestion);
    const [currentAnswer, setAnswer] = useState(answerData);
    const [submitted, setSubmitted] = useState(initialSubmitted);
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState('');
    const additionalStep = true;

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
        if (currentPosition === 'finished' && !additionalStep) clearCookie();
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

    const sendTodataLayer = (action) => {
        const dataToPush = {
            event: 'quiz',
            event_params: {
                category: 'Survey',
                target: action
            },
        };
        window.dataLayer.push(dataToPush);
    }

	const gettingResult = (close = false) => {
        const selectedSite = site ? site : 'dev.sandandsky.com';
        sendTodataLayer('completed');
        const skinType = getSkinType(currentAnswer);
        const envStressResult = getEnvironmentStress(currentAnswer);

        const { productsRecommend, activePriority } = getProductResult(Questions, currentAnswer, selectedSite);

        const productHandle = [];
        const productSkus = [];
        let sku = '';
        productsRecommend.forEach((item, index) => {
            productHandle.push(productList[item].handle);
            productSkus.push(productList[item].sku);
            sku = `${sku}${index === 0 ? '' : ','}${productList[item].sku}`;
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
            saveData(sku);

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

    const setFinished = () => {
        postMessageData('Survey', 'viewMyResult');
        setCookie('surveyPosition', 'finished');
        setPosition('finished');
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
            if (additionalStep) {
                setFinished();
                if (submitted) {
                    gettingResult(true);
                }
            } else {
                gettingResult(true);
                // call saving data to analytics and database
                postMessageGaParent();
                gettingResult(true);
            }
        }
    }

    const postMessageGaParent = () => {
        if (window.top === window.self) return;
        const gaAnswers = decodeAnswers(currentAnswer)
        const keys = Object.keys(gaAnswers);

        postMessageData('Survey', 'completed', email);
        postMessageCookie('surveySubmitNew', 'true');

        keys.forEach((key,index) => {
            const q = Questions[index];
            const a = gaAnswers[key];
            const label = q.question;
            const action = typeof(a) === 'object' ? a.join(',') : a;
            postMessageData('Survey', action, label);
        });
    }

    const saveData = (sku) => {
        const dataForSaving = {};
        for (const [key, value] of Object.entries(currentAnswer)) {
            const idxQ = key - 1;
            if (Questions[idxQ]) {
                const questionText = `${key}: ${Questions[idxQ].question}`;
                dataForSaving[questionText] = value;
            }
        }
        console.log('productsRecommend', sku);
        const data = { store: site, _ga: gId, questions_answers: dataForSaving, email, sku };
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
    // useEffect(() => {
    //     postIframeHeight('height', height, site);
    // }, [height]);

    const classes = currentPosition !== 'result' ? '' : 'overflow-hidden';

    const startQuiz = () => {
        postMessageData('Survey', 'started');
        setPosition('question-1');
    };

    const viewMyResult = () => {
        setRedirect(true);
        postMessageGaParent();
        gettingResult(true);
    }

    const skipEmail = () => {
        gettingResult(true);
        // setSubmitted(true);
    }

    const onSubmit = (email) => {
        setCookie('quizEmail', email);
        setEmail(email);
        setSubmitted(true);
        postMessageToParentCookie('quizEmail', email);

        if (window.top !== window.self) {
            window.parent.postMessage({
                'func': 'callGaEvent',
                'category': 'Survey',
                'action': 'submitEmail',
                'label': email,
            }, `https://${site}`);
        }
    }

	return (
		<div ref={targetRef} className={`${currentPosition === 'start' ? 'cover survey-skin m-0 w-100' : classes} ${currentPosition !== 'result' ? 'container' : ''}`}>
			<div className={`row justify-content-center survey-content ${currentPosition === 'start' ? ' survey-content__start align-items-start' : 'align-content-start'} `}>
				{ currentPosition === 'start' && (
				<>
					<div className={`px-g d-flex align-items-center flex-column justify-content-center text-center ${currentPosition === 'start' ? 'heading-wrapper' : ''}`}>
						<h1 className="mb-g">Discover your routine to flawless skin</h1>
						<p className="font-size-sm mb-4">Find the perfect solution to your skin’s needs in just a few steps! <br /> Get 15% off!</p>
						<button className="btn btn-primary text-white" onClick={() => startQuiz()}>Take the quiz</button>
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
                                                // width={width}
                                                // height={height}
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
                            return false;
                        })}
                    </div>
				</>)}

                { (currentPosition === 'finished' && !submitted && additionalStep && !redirect) && (
                    <EmailForm onSubmit={onSubmit} skipEmail={skipEmail} viewMyResult={viewMyResult}/>
                )}

                { currentPosition === 'finished' && submitted && additionalStep && !redirect && (
                    <ResultContent viewMyResult={viewMyResult}/>
                )}

				{ ((currentPosition === 'finished' || currentPosition === 'result') && redirect) && (
					<div className="question-box analyzing d-flex justify-content-center align-items-center flex-column">
						<p className="question-box__title">Analysing your answers</p>
						<LoaderSvg className="loader mt-0 mb-0"/>
					</div>
				)}
			</div>
		</div>
	)
};

export default Survey;
