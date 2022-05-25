import { Fragment, useEffect, } from "react";
import carouselLoop from "../../modules/carousel-loop";
import carouselSwipe from "../../modules/carousel-swipe";
import ConditionWrapper from "../../modules/ConditionWrapper";
import { useWindowSize } from "../../modules/Utils";

const Carousel = (props) => {
    const [width] = useWindowSize();
	let selectedIndex = 0;
    if (width > 768 && props.items.length > 4) {
        selectedIndex = 3;
    }
    carouselLoop(props.id);
    useEffect(() => {
        carouselSwipe(props.id);
    }, []);
    
    return (
        <div id={props.id} className={props.className} data-bs-ride="carousel" data-bs-interval="false" data-bs-touch="false">
            {props.centered ? (
                <ConditionWrapper
                    condition={props.items.length > 4 || props.forceCentered}
                    wrapper={(children) => <div className='carousel--centered'>{children}</div>}>
                    <div className={`carousel-inner d-flex flex-nowrap ${props.additionalClasses} ${props.items.length > 4 || props.forceCentered ? '' : 'justify-content-center'}`}>
                        {props.items.map((item, index) => (
                            <div key={`carouselItemContent1${index}`} className={`${item.carouselItemClass} ${index === selectedIndex ? 'active' : ''}`}>
                                {item.content}
                            </div>
                        ))}
                    </div>
                    {props.children}
                </ConditionWrapper>
            ) : (
                <Fragment>
                    <div className="carousel-inner d-flex flex-nowrap">
                        {props.items.map((item, index) => (
                            <div key={`carouselItemContent2${index}`} className={item.carouselItemClass}>
                                {item.content}
                            </div>
                        ))}

                    </div>
                    {props.children}
                </Fragment>
            )}
        </div>
    )
};

export default Carousel;
