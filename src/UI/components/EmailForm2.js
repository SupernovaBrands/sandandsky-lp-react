import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Check } from '../../assets/check.svg';
import { validateEmail } from '../../modules/Utils';

const EmailForm = (props) => {
    const { onSubmit, viewMyResult } = props;

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
        <div className="col-12 col-lg-6 mt-4 pt-0 pt-lg-4 text-center">
            <p className="h1 mb-0">We found your perfect mask</p>
            <p className="mt-2 h4 fw-normal" dangerouslySetInnerHTML={{ __html: 'Enter your email to view your results!' }}></p>
            <div className="col-12 col-lg-8 ms-auto me-auto mt-4">
                <div className="form-group">
                    <form onSubmit={submitEmail}>
                        <input type="email" className="form-control bg-light-gray border-0" placeholder="E-mail address" onChange={onEmailChange}/>
                        <button type="submit" className="btn btn-lg d-block btn-primary mb-3 w-100 mt-2" disabled={!isValidEmail || !termChecked}>Submit</button>
                    </form>
                </div>
                <div className="d-flex pb-2 justify-content-center align-items-center">
                    <label className='checkbox-number align-items-center pt-0 font-size-sm justify-content-center' htmlFor='agree'>
                        <input className='d-none' type="checkbox" value="true" id='agree' onChange={onCheckTerm} />
                        <div className={`${termChecked ? 'bg-primary border-0' : '' } custom-check me-1 mt-0 form-check-input text-center d-flex align-items-center justify-content-center`}>
                            <Check className={`${!termChecked ? 'd-none' : ''} svg text-white`}/>
                        </div>
                    </label>
                    <label className="font-size-sm" dangerouslySetInnerHTML={{ __html: 'I agree to Privacy Policy & ToS' }} htmlFor="agree"></label>
                </div>
                <p className="font-size-sm">By signing up, you agree to receive exclusive offers via email. Sign up not required for purchase. Opt out any time.</p>
            </div>
            <div className="footer-action w-100 pb-2 bg-white mt-4">
                <a href="#" className="d-block text-underline text-black w-100 mt-2 mb-lg-4" onClick={viewMyResult}>Skip this step</a>
            </div>
        </div>
    )
};

EmailForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    viewMyResult: PropTypes.func.isRequired,
};

export default EmailForm;