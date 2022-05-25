
import abeautyCarousel from "../../modules/a-beauty-review";

const Recognize = () => {
    abeautyCarousel('a-beauty-review');
    return (
        <div className="bg-light py-6" >
            <h2 className="container px-g h1 text-center mb-0">Recognized A-Beauty leader by…</h2>
            <div id="a-beauty-review" className="a-beauty-review container px-g carousel slide" data-bs-interval="7000" data-bs-wrap="false">
                <ul className="list-unstyled carousel-inner mb-0 px-3 py-7 py-lg-5">
                    <li
                        className="carousel-item text-center font-size-lg justify-content-center align-items-center active">
                        “It's selling out around the world.”
                    </li>
                    <li
                        className="carousel-item text-center font-size-lg justify-content-center align-items-center">
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
                        className="d-flex justify-content-center align-items-center active">
                        <img className="d-block mw-100 mh-100" src="https://imagedelivery.net/ghVX8djKS3R8-n0oGeWHEA/0f54040b-a037-4373-e00b-55daa4672600/828x" />
                    </li>
                    <li data-bs-target="#a-beauty-review" data-bs-slide-to="1"
                        className="d-flex justify-content-center align-items-center carousel-indicator--next ">
                        <img className="d-block mw-100 mh-100" src="https://cdn.shopify.com/s/files/1/0277/5262/8295/t/123/assets/logo-elle.png?v=131021256175075541141631261907" />
                    </li>
                    <li data-bs-target="#a-beauty-review" data-bs-slide-to="2"
                        className="d-flex justify-content-center align-items-center carousel-indicator--next-out ">
                        <img className="d-block mw-100 mh-100" src="https://cdn.shopify.com/s/files/1/0277/5262/8295/t/123/assets/logo-glamour.png?v=13346730905543477291631261908" />
                    </li>
                    <li data-bs-target="#a-beauty-review" data-bs-slide-to="3"
                        className="d-flex justify-content-center align-items-center carousel-indicator--next-out ">
                        <img className="d-block mw-100 mh-100" src="https://cdn.shopify.com/s/files/1/0277/5262/8295/t/123/assets/logo-dailymail.png?v=136825921338695750301631261906" />
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default Recognize;