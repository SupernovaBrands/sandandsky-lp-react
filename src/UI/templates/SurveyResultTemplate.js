import SurveyResult from '../components/SurveyResult';
import { getCookie, postIframeHeight } from "../../modules/Utils";
import { useEffect, useRef } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { useSearchParams } from 'react-router-dom';

window.getCookie = getCookie;

const SurveyResultTemplate = () => {
	const [searchParams] = useSearchParams();
	const site = searchParams.get('site');

	const targetRef = useRef();
	const { width, height } = useResizeDetector({ targetRef });

	useEffect(() => {
		postIframeHeight('height', height, site);
	}, [height]);

	const answerResult = getCookie('surveyResult') ? JSON.parse(getCookie('surveyResult')) : {};

	return (
		<div ref={targetRef} className='overflow-hidden'>
			<div className='row justify-content-center survey-content align-content-start'>
				<SurveyResult answerResult={answerResult} />
			</div>
		</div>
	);
};

export default SurveyResultTemplate;
