import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SplashTop } from '../../assets/splash-top.svg';
import { ReactComponent as SplashBottom } from '../../assets/splash-bottom.svg';

const ResultContent = (props) => {
    const { viewMyResult } = props;

    return (
        <div className="survey-email-submit container bg-primary-light mt-lg-5">
            <div className="row d-flex align-items-center text-center">
                <div className="col-12 col-lg-6 p-0">
                    <picture className="w-100 d-block">
                        <source type="image/png" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0d8b37c6-fdf3-40a4-5b2d-d46c72ad3200/828x" media="(min-width: 992px)"/>
                        <img src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/c197ee9c-de80-4abd-0e3c-aea8e4a6c600/828x" alt="" className="w-100 embed-responsive-item fit--cover"  />
                    </picture>
                </div>
                <div className="col-12 col-lg-5  px-0 py-4">
                    <div className="w-100 text-end me-ng me-lg-0 d-none d-lg-block">
                        <SplashTop />
                    </div>
                    <div className="emailBox px-g mb-5 mb-lg-0">
                        <p className="h1">Thanks! Here is your promocode:</p>
                        <div className="col-12 col-lg-8 ms-auto me-auto mt-2">
                            <span className='h1 px-4 py-1 text-primary rounded p-2 bg-light-gray d-inline-block bg-white'>SKIN15</span>
                            <p className='mt-2 mb-4'>Promo applies only to first purchase.</p>
                            <button className="mt-2 btn btn-lg btn-primary w-100" onClick={viewMyResult}>View my results</button>
                        </div>
                        <div className="footer-action w-100 pb-2 mt-7 d-lg-none">
                            <a href="#" className="d-block text-underline text-black w-100 mt-2 mb-lg-4" onClick={viewMyResult}>Skip this step</a>
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

ResultContent.propTypes = {
    lang: PropTypes.string.isRequired,
    viewMyResult: PropTypes.func.isRequired,
};

export default ResultContent;