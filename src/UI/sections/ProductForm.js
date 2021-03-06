import React, { useState, useContext } from 'react';
import ProductImagePreview from "../components/ProductImagePreview";
import ReviewStar from '../components/ReviewStar';
import QuantityBox from '../components/QuantityBox';
import ProductContext from '../../store/product-context';

const ProductForm = (props) => {
    let params = (new URL(document.location)).searchParams;
	let activeStore = params.get("utm_store") || 'us';

    const productCtx = useContext(ProductContext);
    productCtx.storeChange(activeStore);

    const defaultPrice = productCtx.price;
    const defaultCompareAtPrice = productCtx.compareAtPrice;
    const defaultSaving = productCtx.saving;

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
                eventLabel: 'pore-tight-kit',
                eventValue: 0,
            });
        }
        window.location.href = buttonUrl;
    }

    return (
        <div className="container mb-0 mt-lg-3">
            <div className="row align-items-start">
                <ProductImagePreview />
                <div className='col-12 col-lg-5 d-flex flex-column order-lg-3 px-g mt-2'>
                    <h4 className='text-center text-lg-start fw-normal order-lg-0'>Australian Pink Clay</h4>
                    <h1 className='text-center text-lg-start order-lg-0'>Pore Tight Kit</h1>
                    <div className="d-flex mb-2 justify-content-center justify-content-lg-start order-lg-0">
                        <ReviewStar score={4.8} />
                        <span className='ms-1'> <a href="https://www.sandandsky.com/products/pore-tight-kit#write-a-review" className='text-underline text-dark'>407 Reviews</a></span>
                    </div>
                    <p className="mb-2 order-lg-0 text-center text-lg-start">
						<span className="text-linethrough text-muted h2 me-1">{defaultCompareAtPrice}</span>
                        <span className="font-weight-bold h2 me-1">{defaultPrice}</span>
                        <span className="h2 fw-normal text-secondary">({defaultSaving})</span>
                    </p>
                    <div className="d-flex product-swatch-mobile__trigger pdp-afterpay-selector mb-g order-lg-1" data-text="Add to cart" data-oos="Sold Out">
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
                    <h2 className='mx-4 text-center d-lg-none h1'>Your go-to kit for peak purification</h2>
                    <p className="mb-2 mb-lg-3  order-lg-0">Step up your cleansing game with our three-piece kit containing everything you need for refined pores and clear skin. It includes a full-size cleanser, travel-size mask and reusable wipes.</p>
                    <ul className="product-form-icons list-unstyled row text-start order-lg-0 mb-0 mb-lg-3">
                        <li className='col-12 d-flex align-items-center mb-3'>
                            Drastically tighten pores and refines skin
                        </li>
                        <li className='col-12 d-flex align-items-center mb-3'>
                            Deep Pore Cleanser removes makeup and gently exfoliates with AHAs and luffa plant extract, suitable for daily use
                        </li>
                        <li className='col-12 d-flex align-items-center mb-3'>
                            5-time award winner Australian Pink Clay Mask clears congestion and impurities in 10 minutes
                        </li>
                        <li className='col-12 d-flex align-items-center mb-3'>
                            Wipe down with reusable wipes for next-level cleansing
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

ProductForm.propTypes = {
};

export default ProductForm
