import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';

const FaqAccordion = () => {
    const FAQCONTENT = [
        {
            title: 'What are the ingredients inside Australian Pink Clay Pore Tight Kit?',
            content: '<p>Australian Pink Clay: A nutrient- and mineral-rich clay that works to detoxify skin by unclogging pores. It draws out impurities, leaving the skin deeply cleansed and helps to minimise the appearance of pores.</p><h4>Deep Pore Cleanser</h4><p>Australian Finger Lime & Luffa Plant: A blend of chemical and physical exfoliants to brighten dull skin, gently sweeping away old skin cells and helps control sebum. View full ingredient list <a href="https://www.sandandsky.com/products/pink-clay-deep-pore-cleanser">here</a></p><h4>Porefining Face Mask</h4><p>Kelp & Witch Hazel: Naturally astringent Witch Hazel refines pores and soothes irritation, while Kelp speeds up the skin repair process. Think silky-soft, healthy skin. View full ingredient list <a href="https://www.sandandsky.com/products/porefining-face-mask#ingredients">here</a></p>',
        },
        {
            title: 'How does it work?',
            content: '<p>Our signature ingredient, Australian Pink Clay, powers both the cleanser and the mask. It works to draw out impurities and dirt from deep within the skin. The cleanser also taps AHA-rich finger lime extract to exfoliate with natural acids and witch hazel for its astringent power to control sebum and tighten pores.</p><p>Our mask uses antioxidant-rich fruits, Mangosteen & Pomegranate, to boost cellular turnover and brighten and even your complexion in minutes. Plus, Vitamin C-rich Kakadu Plum breaks down pesky pigmentation.</p>',
        },
        {
            title: 'How do I know if this cleanser is suitable for me?',
            content: "<p>This detoxifying darling is suitable for most skin types – even sensitive. It’s ideal if your skin has visible and clogged pores. Or if your skin is rough, flaky and has an uneven surface. Or if it looks dull and lacklustre.</p>",
        },
        {
            title: 'How frequently can I use the cleanser and mask?',
            content: '<p>Use the cleanser morning and night. For sensitive skin, use it as a night cleanser. Use the mask 2-3 times a week for oily/combination skin and 1-2 times a week for sensitive/dry skin.</p>',
        }
    ]

	return (
		<section className='faq-accordion bg-secondary-light py-4'>
            <div className="container">
                <h2 className="text-center h1">Your questions – answered</h2>
                <div className="accordion list-unstyled border-0 mt-2 mt-lg-4" id="faqSection">
                    {FAQCONTENT.map((faq, index) => (
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
