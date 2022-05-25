import { Fragment, useEffect } from 'react';
import ProductImageCarouselItem from './ProductImageCarouselItem';
import carouselLoop from "../../modules/carousel-loop";
import carouselSwipe from "../../modules/carousel-swipe";

const ProductImageCarousel = () => {
    if (window.innerWidth <= 768) {
        carouselLoop('product-image-carousel', true);
    }
    carouselLoop('product-image-carousel__indicator');
    useEffect(() => {
        carouselSwipe('product-image-carousel');
    }, []);
    const PRODUCT_IMAGES = [
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/fb8aae30-185f-4d46-0d8a-102e2a802500',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/fb5a6b90-54f2-4d01-0671-9f0d9ccd0d00',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bfb25673-2a74-4850-ea78-adb87f403100',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ceeca618-544c-4452-0c63-8cec8fe79300',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5ce366f7-8bbd-4d5c-9f2f-f7953d910800',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/6e20f16e-7855-4dff-e5bd-9db239ab8700',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ba085a54-f75f-4277-29de-1ca94f6c4d00',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ae06b8d7-6869-4b57-9158-dd438bb36000',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d23c7007-3f3a-48fa-2601-acd35401b500',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/fe696936-3e32-4a36-e202-5b9a5eece800',
        },
    ];

    return (
        <Fragment>
            <div key="product-image-carousel__container" className="product-image-carousel__container col-12 col-lg-6 order-lg-2 px-0 px-lg-g">
                <figure id="product-image-carousel" className="product-image-carousel carousel slide mb-0 no-gutters__in-container d-lg-flex flex-column" data-bs-ride="carousel" data-bs-interval="false" data-bs-touch="false">
                    <div key="div-carousel-1" className="carousel-inner">
                        {PRODUCT_IMAGES.map((image, index) => (
                            <ProductImageCarouselItem
                                key={image.jpg}
                                jpg={image.jpg}
                                webp={image.webp}
                                index={index}
                                lazy={index === 0}
                            />
                        ))} 
                    </div>
                    <ol class="carousel-indicators--dots-unclickable d-lg-none px-1 mx-auto mb-0 justify-content-end align-items-center">
                        {PRODUCT_IMAGES.map((image, index) => (
                            <li key={`product-image-carousel-ind${index}`} data-bs-target="" data-bs-slide-to={index} class={`rounded-circle ${index === 0 ? 'active' : ''}`}></li>
                        ))}
                    </ol>
                </figure>
            </div>

            <div key="product-image-carousel__indicator" id="product-image-carousel__indicator" className="product-image-carousel__indicator carousel--swipe col-12 col-lg-1 order-lg-1 carousel slide carousel--loop mb-1 mb-lg-0 px-0 px-lg-g  d-none d-lg-block" data-bs-slide-number="5" data-bs-ride="carousel" data-bs-interval="false" data-bs-touch="false">
                <div key="carousel-inner" className="carousel-inner d-flex flex-nowrap flex-lg-column">
                    {PRODUCT_IMAGES.map((image, index) => (
                    <div key={image.jpg} data-bs-target="#product-image-carousel" data-bs-slide-to={index} className={`product-image-carousel__indicator__item carousel-item col-12 px-lg-0 pb-lg-3 mw-100 ${ index === 0 ? 'active':''}`}>
                        <button className={`btn-unstyled border d-block w-100 ${index === 0 ? 'border-white': 'border-white'}`}>
                            <picture className="ratio ratio-1x1 w-100 d-block bg-shimmer">
                                <source type="image/webp" srcSet={`${image.webp}/200x`}/>
                                <source type="image/jpeg" srcSet={`${image.jpg}/200x`}/>
                                <img src={`${image.jpg}/200x`} loading="lazy" />
                            </picture>
                        </button>
                    </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
};
export default ProductImageCarousel