import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';

const FaqAccordion = () => {
    const FAQCONTENT = [
        {
            title: 'What are the igredients inside Australian Pink Clay Pore Tight Kit?',
            content: 'Accordion text 1',
        },
        {
            title: 'How does it work?',
            content: 'Accordion text 2',
        },
        {
            title: 'How do I know if this cleanser is suitable for me?',
            content: "Accordion text 3",
        },
        {
            title: 'How frequently can I use the cleanser and mask?',
            content: 'Accordion text 4',
        }
    ]

	return (
		<section className='faq-accordion bg-secondary-light py-4'>
            <div className="container">
                <h2 className="text-center h1">Your questions – answered</h2>
                <div className="accordion list-unstyled border-0 mt-4 " id="faqSection">
                    {FAQCONTENT.map((faq, index) => (
                        <div key={`faqitem${index}`} className={`accordion-item border-0 border-bottom border-dark ${ index === 3 ? 'border-bottom-0':''}`}>
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
