import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';

const bootstrap = require("bootstrap")

const FaqAccordion = (props) => {
    const { FAQData } = props;

    setTimeout(function () {
        const collapseEl = document.getElementById('faqSection');
        collapseEl.addEventListener('hidden.bs.collapse', function (e) {

            setTimeout(function () {
                const contentId = e.target.id
                const collapseEl = document.getElementById(contentId);
                const isShow = collapseEl.classList.contains('show');
                var bsCollapse = new bootstrap.Collapse(collapseEl, {
                    toggle: false
                });

                if (isShow) {
                    bsCollapse.hide();
                }

            })
        });
    });

	return (
		<section className='faq-accordion bg-secondary-light py-4'>
            <div className="container">
                <h2 className="text-center h1">Your questions – answered</h2>
                <div className="accordion list-unstyled border-0 mt-2 mt-lg-4" id="faqSection">
                    {FAQData.map((faq, index) => (
                        <div key={`faqitem${index}`} className={`accordion-item border-0 border-bottom border-dark ${ index === 3 ? 'border-bottom-0':''}`} id={`accordionItem${index}`}>
                            <div className="accordion-header bg-secondary-light" id={`FagItemHeading${index}`}>
                                <button className="accordion-button bg-secondary-light h2 mb-0 collapsed w-100 d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target={`#FagItemContent${index}`}>
                                    <h4 className='col-10 ps-0 mb-0'>{faq.title}</h4>
                                    <Plus className='plus' />
							        <Minus className='minus' />
                                </button>
                            </div>
                            <div data-bs-parent="#faqSection" id={`FagItemContent${index}`} className="accordion-collapse collapse bg-secondary-light">
                                <div className="accordion-body" dangerouslySetInnerHTML={{ __html: faq.content }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
	);
};

export default FaqAccordion;
