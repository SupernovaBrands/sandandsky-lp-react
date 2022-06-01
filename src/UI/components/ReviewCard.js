import ReviewStar from '../components/ReviewStar';
import { ReactComponent as GreenCheck } from '../../assets/green-checkmark.svg';

const ReviewCard = (props) => {
    return (

        <div className=" bg-gray-100 p-2 rounded-3 me-g mx-lg-g">
            <div className="d-flex mb-1">
                <ReviewStar score={5} useSharpStar={true} />
                <a href="https://www.cocoandeve.com/products/sunny-honey-bali-bronzing-self-tan-set#write-a-review" className="d-block yotpo-widget__total mt-lg-0 ms-lg-1 ms-1">5.0</a>
            </div>
            <p className='mb-3'>{props.name}  Verified Buyer<GreenCheck className='ms-1' /></p>
            {props.children}
        </div>
    )
};

export default ReviewCard;
