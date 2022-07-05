import carouselScroll from "../../modules/carousel-scroll";

const CarouselWrapper = (props) => {
	carouselScroll(props.id);

	return (
		<div className='carousel--scroll position-relative px-lg-hg' id={props.id}>
			<div className='carousel-inner d-flex flex-nowrap row w-auto px-hg'>
				{props.children}
			</div>
			<div className='mt-g mt-lg-3 mx-2 mx-lg-n1'>
				<div className='scrollbar'>
					<div className='scrollbar--thumb'></div>
				</div>
			</div>
			<a className='carousel-control-prev text-body ms-ng' role='button'>
                <span className='carousel-control-prev-icon carousel-control--background d-flex justify-content-center align-items-center' aria-hidden='true'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="m16.2 1.885-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg>
                </span>
            </a>
            <a className='carousel-control-next text-body me-ng' role='button'>
                <span className='carousel-control-next-icon carousel-control--background d-flex justify-content-center align-items-center' aria-hidden='true'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="m5.428 20.742 9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg>
                </span>
            </a>
		</div>
	);
};

export default CarouselWrapper;
