import SurveyResult from '../components/SurveyResult';
import { getCookie } from "../../modules/Utils";

window.getCookie = getCookie;

const SurveyResultTemplate = () => {
	const answerResult = getCookie('surveyResult') ? JSON.parse(getCookie('surveyResult')) : {};

	return (
		<div className='overflow-hidden'>
			<div className='row justify-content-center survey-content align-content-start'>
				<SurveyResult answerResult={answerResult} />
			</div>
		</div>
	);
};

export default SurveyResultTemplate;
