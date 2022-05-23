import {
	getCookie, setCookie, Base64,
} from './Utils';

let currentCountryName = getCookie('_shopify_country');

const pushCustEmailToSignupnl = function (email, tag, url) {
	const ajaxRequest = new XMLHttpRequest();
	ajaxRequest.open('POST', url, true);
	ajaxRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	ajaxRequest.send(`email=${email}&country=${currentCountryName}&brand_name=cocoandeve&reg_source=footer`);
	const successMessage = document.getElementById('success-message');
	if (successMessage) {
		successMessage.remove();
	}
	const successEl = document.createElement('span');
	successEl.setAttribute('id', 'success-message');
	successEl.innerHTML = 'Stay tuned for updates and tips on Coco&Eve.';
	successEl.style.cssText = 'margin-top: -1em; display: table;margin-bottom: 1rem;';
	document.getElementById('signup-footer-form').appendChild(successEl);

	// flush footer email
	setTimeout(function () {
		document.getElementById('signup-footer-form').reset();
	}, 5000);
	setCookie('bluecore_email_address', Base64.encode(email), 365);
	return false;
};

const SignupFooter = function (event) {
	event.preventDefault();
	const email = document.getElementById('signup-footer').value;
	const filter = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (filter.test(email)) {
		pushCustEmailToSignupnl(email, 'signup-footer', `https://api.cocoandeve.com/bluecore/registrations`);
	} else {
		alert('Please Enter valid email');
	}
	return false;
};

export default SignupFooter;
