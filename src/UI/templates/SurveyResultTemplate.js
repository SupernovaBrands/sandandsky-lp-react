import SurveyResult from '../components/SurveyResult';
import SurveyResultMask from '../components/SurveyResultMask';
import { getCookie } from "../../modules/Utils";
import { useRef } from 'react';

window.getCookie = getCookie;

const SurveyResultTemplate = (props) => {
	const targetRef = useRef();
	// const { width, height } = useResizeDetector({ targetRef });

	// useEffect(() => {
	// 	postIframeHeight('height', height, site);
	// }, [height]);

	const answerResult = getCookie('surveyResult') ? JSON.parse(getCookie('surveyResult')) : {};

	return (
		<div ref={targetRef} className='overflow-hidden'>
			<div className='row justify-content-center survey-content align-content-start'>
				{props.quizType === 'mask' ? (<SurveyResultMask answerResult={answerResult} />) : (<SurveyResult answerResult={answerResult} />)}
			</div>
		</div>
	);
};

export default SurveyResultTemplate;
