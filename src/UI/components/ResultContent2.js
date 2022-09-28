import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ResultContent = (props) => {
    const { viewMyResult } = props;

    return (
        <div className="col-12 col-lg-6 mt-4 pt-0 pt-lg-4 text-center">
            <p className="h1">Thanks!<br/>Here is your promocode:</p>
            <div className="col-12 col-lg-8 ms-auto me-auto mt-2">
                <span className='h1 px-4 py-1 text-primary rounded p-2 bg-light-gray d-inline-block bg-primary-light'>MASK10</span>
                <p className='mt-2'>No minimum spend, 10% off single full-sized masks only!</p>
                <button className="mt-2 btn btn-lg btn-primary w-100" onClick={viewMyResult}>View my results</button>
            </div>
        </div>
    )
};

ResultContent.propTypes = {
    viewMyResult: PropTypes.func.isRequired,
};

export default ResultContent;