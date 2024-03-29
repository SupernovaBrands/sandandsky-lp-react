import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Check } from '../../assets/check.svg';
import { validateEmail } from '../../modules/Utils';
import { ReactComponent as SplashTop } from '../../assets/splash-top.svg';
import { ReactComponent as SplashBottom } from '../../assets/splash-bottom.svg';

const EmailForm = (props) => {
    const { onSubmit, skipEmail } = props;

    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [termChecked, setTermCheck] = useState(false);

    const onEmailChange = (e) => {
        setIsValidEmail(validateEmail(e.target.value));
        setEmail(e.target.value);
    };

    const onCheckTerm = (e) => {
        setTermCheck(e.target.checked);
    }

    const submitEmail = (e) => {
        onSubmit(email);
        e.preventDefault();
    }

    return (
        <div className="survey-email-submit container bg-primary-light mt-lg-5">
            <div className="row d-flex align-items-center text-center">
                <div className="col-12 col-lg-6 p-0">
                    <picture className="w-100 d-block">
                        <source type="image/png" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0d8b37c6-fdf3-40a4-5b2d-d46c72ad3200/828x" media="(min-width: 992px)"/>
                        <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c197ee9c-de80-4abd-0e3c-aea8e4a6c600/828x" alt="" className="w-100 embed-responsive-item fit--cover"  />
                    </picture>
                </div>
                <div className="col-12 col-lg-6 px-0 py-3">
                    <div className="w-100 text-end me-ng me-lg-0 d-none d-lg-block">
                        <SplashTop />
                    </div>
                    <div className="emailBox px-g">
                        <p className="h1 mb-0">Get 15% Off* your customised routine!</p>
                        <p className="mt-2 h4 fw-normal col-lg-9 mx-auto px-lg-3">We've got your routine ready! Enter your email to view your results and get 15% OFF your first purchase.</p>
                        <div className="col-12 col-lg-11 ms-auto me-auto mt-4">
                            <div className="form-group">
                                <form onSubmit={submitEmail}>
                                    <input type="email" className="form-control bg-light-gray" placeholder="Email" onChange={onEmailChange}/>
                                    <div className="d-flex pb-2 justify-content-center align-items-center mt-3">
                                        <label className='checkbox-number align-items-center pt-0 font-size-sm justify-content-center' htmlFor='agree'>
                                            <input className='d-none' type="checkbox" value="true" id='agree' onChange={onCheckTerm} />
                                            <div className={`${termChecked ? 'bg-primary border-0' : '' } custom-check me-1 mt-0 form-check-input text-center d-flex align-items-center justify-content-center`}>
                                                <Check className={`${!termChecked ? 'd-none' : ''} svg text-white`}/>
                                            </div>
                                        </label>
                                        <label className="font-size-sm" htmlFor="agree">I agree to <a target="_blank" href="https://www.sandandsky.com/pages/privacy-policy">Privacy Policy</a> &amp; <a target="_blank" href="https://www.sandandsky.com/pages/term-condition">Terms & Conditions</a></label>
                                    </div>
                                    <p className="font-size-sm">By signing up, you agree to receive exclusive offers via email. Sign up not required for purchase. Opt out any time.</p>
                                    <button type="submit" className="btn btn-lg d-block btn-primary mb-3 px-6 mx-auto mt-3" disabled={!isValidEmail || !termChecked}>Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="footer-action w-100 mt-4">
                            <a href="#" className="d-block text-underline text-black w-100 mt-2 mb-lg-4" onClick={skipEmail}>Skip this step</a>
                        </div>
                    </div>
                    <div className="w-100 text-start ms-ng ms-lg-0 d-none d-lg-block">
                        <SplashBottom />
                    </div>
                </div>
            </div>
        </div>
    )
};

EmailForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    viewMyResult: PropTypes.func.isRequired,
    skipEmail: PropTypes.func.isRequired,
};

export default EmailForm;
