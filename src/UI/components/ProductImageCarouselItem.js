import { useEffect } from "react";

const ProductImageCarouselItem = (props) => {
    const removeShimmer = (img) => {
        // eslint-disable-next-line no-param-reassign
        img.onload = null;
        const parent = img.closest('.bg-shimmer');
        parent.classList.add('bg-shimmer--loaded');
        setTimeout(() => {
            parent.classList.remove('bg-shimmer', 'bg-shimmer--loaded');
        }, 400);
    };

    useEffect(() => {
        document.querySelectorAll('.bg-shimmer img').forEach((img) => {
            if (img.complete) {
                removeShimmer(img);
            } else {
                img.onload = () => {
                    removeShimmer(img);
                };
            }
        });
    }, [])
    

    return (
        <div className={`carousel-item ${props.index === 0 ? 'active': ''}`}>
            <picture className="bg-shimmer ratio ratio-1x1 w-100 d-block">
                <source type="image/webp" srcSet={`${props.webp}/828x`}/>
                <source type="image/webp" srcSet={`${props.webp}/1140x`} media="(min-width: 992px)"/>
                <source type="image/jpeg" srcSet={`${props.jpg}/828x`}/>
                <source type="image/jpeg" srcSet={`${props.jpg}/1140x`} media="(min-width: 992px)"/>
                {props.lazy ? (<img src={`${props.jpg}/828x`} alt="" className="w-100 embed-responsive-item fit--cover"  />) : (<img src={`${props.jpg}/828x`} alt="" className="w-100 embed-responsive-item fit--cover" loading="lazy"   />) }
                
            </picture>
        </div>
    );
};

export default ProductImageCarouselItem