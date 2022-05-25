import { ReactComponent as Logo } from '../../assets/ss-logo.svg';

const Footer = () => {
	return (
		<footer className="pt-md-6 pt-2 pt-lg-4 pb-1 ">
            <div className="container px-g">
                <a className='navbar-brand mx-auto text-secondary mb-1 d-block text-center' href='https://www.sandandsky.com'>
                    <Logo />
                </a>
                <small className="text-center d-block mb-5">*Everyone’s skin is different and results may vary from person to person</small>
                <small className="text-center d-block">Sand &amp; Sky respectfully acknowledges the Traditional Owners of the land on which we operate, the Boon Wurrung and Woiwurrung (Wurundjeri) peoples of the Kulin Nation, and their connections to land, sea and community. We pay our respect to their elders past, present and future extend that respect to all Aboriginal and Torres Strait Islander peoples today.</small>
                <hr />
                <small className="text-center d-block  mb-5 mb-lg-3">© 2022 Sand&amp;Sky | <a href="https://www.sandandsky.com/pages/term-condition">Terms and Conditions</a> |<br className="d-block d-lg-none" /> All rights reserved</small>
            </div>
        </footer>
	);
};

export default Footer;
