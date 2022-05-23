import { Fragment, useEffect } from 'react';
import ProductImageCarouselItem from './ProductImageCarouselItem';
import carouselLoop from "../../modules/carousel-loop";
import carouselSwipe from "../../modules/carousel-swipe";

const ProductImageCarousel = () => {
    carouselLoop('product-image-carousel__indicator');
    useEffect(() => {
        carouselSwipe('product-image-carousel');
    }, []);
    const PRODUCT_IMAGES = [
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/fb8aae30-185f-4d46-0d8a-102e2a802500',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/fb8aae30-185f-4d46-0d8a-102e2a802500',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bfb25673-2a74-4850-ea78-adb87f403100',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/bfb25673-2a74-4850-ea78-adb87f403100',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5ce366f7-8bbd-4d5c-9f2f-f7953d910800',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5ce366f7-8bbd-4d5c-9f2f-f7953d910800',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ba085a54-f75f-4277-29de-1ca94f6c4d00',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ba085a54-f75f-4277-29de-1ca94f6c4d00',
        },
        {
            jpg: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d23c7007-3f3a-48fa-2601-acd35401b500',
            webp: 'https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/d23c7007-3f3a-48fa-2601-acd35401b500',
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
                    <div key="div-carousel-2" className="carousel-indicators d-lg-none">
                        {PRODUCT_IMAGES.map((image, index) => (
                            <button key={image.jpg} type="button" data-bs-target="#product-image-carousel" data-bs-slide-to={index} className={`rounded-circle bg-gray-800 border-gray-800 ${index === 0 ? 'active': ''}`}></button>
                        ))}
                    </div>
                </figure>
            </div>

            <div key="product-image-carousel__indicator" id="product-image-carousel__indicator" className="product-image-carousel__indicator carousel--swipe col-12 col-lg-1 order-lg-1 carousel slide carousel--loop mb-1 mb-lg-0 px-0 px-lg-g  d-none d-lg-block" data-bs-slide-number="5" data-bs-ride="carousel" data-bs-interval="false">
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