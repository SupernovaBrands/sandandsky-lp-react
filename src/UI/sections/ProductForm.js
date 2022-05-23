import React, { useContext, useEffect, useState } from 'react';
import ProductImageCarousel from "../components/ProductImageCarousel";
import ReviewStar from '../components/ReviewStar';
import QuantityBox from '../components/QuantityBox';

import { ReactComponent as FormIcon1 } from '../../assets/ptk_icon_1.svg';
import { ReactComponent as FormIcon2 } from '../../assets/ptk_icon_2.svg';
import { ReactComponent as FormIcon3 } from '../../assets/ptk_icon_3.svg';
import { ReactComponent as FormIcon4 } from '../../assets/ptk_icon_4.svg';

import PropTypes from 'prop-types';

const ProductForm = (props) => {
    const [selectedVariantId, setSelectedVariantId] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [buttonUrl, setButtonUrl] = useState(`https://www.sandandsky.com?itemtoadd=var1&quantity=${quantity}`);

    const onChangeQuantity = (qty) => {
        const url = selectedVariantId !== '' && `https://www.sandandsky.com?itemtoadd=${selectedVariantId}&quantity=${qty}`;
        setQuantity(qty);
        setButtonUrl(url);
    }

    const onAddToCart = () => {
        if (typeof (ga) === 'function') {
            window.ga('send', 'event', {
                eventCategory: 'Add to Cart',
                eventAction: 'lp_pdp_cta',
                eventLabel: 'sunny-honey-bali-bronzing-self-tan-set',
                eventValue: 0,
            });
        }
        window.location.href = buttonUrl;
    }
    
    return (
        <div className="container mb-4 mt-lg-3">
            <div className="row align-items-start">
                <ProductImageCarousel />
                <div className='col-12 col-lg-5 d-flex flex-column order-lg-3 px-g mt-3'>
                    <h4 className='text-center text-lg-start fw-normal'>Australian Pink Clay</h4>
                    <h1 className='text-center text-lg-start'>Pore Tight Kit</h1>
                    <div className="d-flex mb-2 justify-content-center justify-content-lg-start order-lg-0">
                        <ReviewStar score={4.8} /> 
                        <span className='ms-1'> <a href="https:www//us.sandandsky.com/products/pore-tight-kit" className='text-underline text-dark'>407 Reviews</a></span>
                    </div>
                    <p className="mb-2">
						<span className="text-linethrough text-muted h2 me-1">$89.80</span>
                        <span className="font-weight-bold h2 me-1">$62.80</span>
                        <span className="h2 fw-normal text-primary">(SAVE 30%)</span>
                    </p>
                    <p className="mb-2 mb-lg-3">Step up your cleansing game with our three-piece kit containing everything you need for refined pores and clear skin. It includes a full-size cleanser, travel-size mask and reusable wipes.</p>
                    <ul className="product-form-icons list-unstyled row mb-3 text-start">
                        <li className='col-12 d-flex align-items-center mb-2'>
                            <FormIcon1 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            Drastically tighten pores and refines skin
                        </li>
                        <li className='col-12 d-flex align-items-center mb-2'>
                            <FormIcon2 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            Deep Pore Cleanser removes makeup and gently exfoliates with AHAs and luffa plant extract, suitable for daily use
                        </li>
                        <li className='col-12 d-flex align-items-center mb-2'>
                            <FormIcon3 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            5-time award winner Australian Pink Clay Mask clears congestion and impurities in 10 minutes
                        </li>
                        <li className='col-12 d-flex align-items-center mb-2'>
                            <FormIcon4 className='me-g d-flex flex-shrink-0 justify-content-center' />
                            Wipe down with reusable wipes for next-level cleansing
                        </li>
                    </ul>
                    <div className="d-flex product-swatch-mobile__trigger pdp-afterpay-selector mb-g" data-text="Add to cart" data-oos="Sold Out">
                        <div className="d-flex">
                            <div className="react-quantity-box d-none d-lg-block">
                            <QuantityBox
                                quantity='1'
                                onChangeQuantity={onChangeQuantity}
                            />
                            </div>
                        </div>
                        <button key="ProductFormButton2" className="btn btn-lg btn-primary ms-lg-g w-100 text-white" type="submit" onClick={onAddToCart}>Add to Cart</button>
					</div>
                </div>
            </div>
        </div>
    )
};

ProductForm.propTypes = {
};

export default ProductForm
