
import abeautyCarousel from "../../modules/a-beauty-review";

const Recognize = () => {
    abeautyCarousel('a-beauty-review');
    return (
        <div className="bg-gray-100 py-6" >
            <h2 className="container px-g h1 text-center mb-0">Recognized A-Beauty leader by…</h2>
            <div id="a-beauty-review" className="a-beauty-review container px-g carousel slide" data-bs-interval="7000" data-bs-wrap="false">
                <ul className="list-unstyled carousel-inner mb-0 px-3 py-4 py-lg-5">
                    <li
                        className="carousel-item text-center font-size-lg justify-content-center align-items-center ">
                        “It's selling out around the world.”
                    </li>
                    <li
                        className="carousel-item text-center font-size-lg justify-content-center align-items-center active">
                        “Pores appeared visibly smaller… <br />This mask is no lie!”
                    </li>
                    <li
                        className="carousel-item text-center font-size-lg justify-content-center align-items-center">
                        “A-Beauty is the new K-Beauty.”
                    </li>
                    <li
                        className="carousel-item text-center font-size-lg justify-content-center align-items-center">
                        “Found to shrink existing acne, detoxify the pores and refine the skin to prevent future pimples.”
                    </li>
                </ul>
                <button className="carousel-control-prev text-body justify-content-start" role="button"
                    data-bs-slide="prev" data-bs-target="#a-beauty-review">
                    <span className="carousel-control-prev-icon carousel-control--background d-flex justify-content-center align-items-center" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="m16.2 1.885-9.428 9.428 9.428 9.428-1.886 1.886L3 11.313 14.314 0z"></path></svg>
                    </span>
                </button>
                <button className="carousel-control-next text-body justify-content-end" role="button"
                    data-bs-slide="next" data-bs-target="#a-beauty-review">
                    <span className="carousel-control-next-icon carousel-control--background d-flex justify-content-center align-items-center" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.627 22.627" className="svg"><path d="m5.428 20.742 9.428-9.428-9.428-9.428L7.314 0l11.314 11.314L7.314 22.627z"></path></svg>
                    </span>
                </button>

                <ol className="carousel-indicators mx-0 mb-0 justify-content-between">
                    <li data-bs-target="#a-beauty-review" data-bs-slide-to="0"
                        className="d-flex justify-content-center align-items-center carousel-indicator--prev ">
                        <picture>
                            <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/054c9959-e8d3-431a-a420-b8a54f875b00/400x" />
                            <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/3994b20e-9db5-471a-45da-80a327d6a100/400x" />
                            <img className="d-block mw-100 mh-100" src={`${process.env.PUBLIC_URL}/images/mailonline.jpg`}  alt="Mail Online"   />
                        </picture>
                    </li>
                    <li data-bs-target="#a-beauty-review" data-bs-slide-to="1"
                        className="d-flex justify-content-center align-items-center active ">
                        <picture>
                            <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/54312adc-b757-4199-389c-6aff215fff00/400x" />
                            <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5a598c17-cd78-4212-159d-1e1677162500/400x" />
                            <img className="d-block mw-100 mh-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/5a598c17-cd78-4212-159d-1e1677162500/400x" alt="Refinery 29" />
                        </picture>
                    </li>
                    <li data-bs-target="#a-beauty-review" data-bs-slide-to="2"
                        className="d-flex justify-content-center align-items-center carousel-indicator--next ">
                        <picture>
                            <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/2e3d1def-752b-4a39-17a3-d9abb1002f00/400x" />
                            <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/be582085-ba2b-4dc2-4d18-44360489ee00/400x" />
                            <img className="d-block mw-100 mh-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/be582085-ba2b-4dc2-4d18-44360489ee00/400x"  alt="Elle"  />
                        </picture>
                    </li>
                    <li data-bs-target="#a-beauty-review" data-bs-slide-to="3"
                        className="d-flex justify-content-center align-items-center carousel-indicator--next-out ">
                        <picture>
                            <source type="image/webp" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/ae7f46b9-6205-4d66-3f13-0a66efac7b00/400x" />
                            <source type="image/jpeg" srcSet="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a4cb603b-5515-4635-da4c-a6edae090400/400x" />
                            <img className="d-block mw-100 mh-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/a4cb603b-5515-4635-da4c-a6edae090400/400x" alt="Glamour"  />
                        </picture>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Recognize;