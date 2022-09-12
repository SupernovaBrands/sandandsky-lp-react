import { useLayoutEffect, useState } from "react";

export const validateEmail = function (t) {
	return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase());
};

export const Base64 = {
	decode(str) {
		return decodeURIComponent(
			atob(str)
				.split('')
				.map(function (c) {
					return `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`;
				})
				.join(''),
		);
	},
	encode(str) {
		return btoa(
			encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
				return String.fromCharCode(`0x${p1}`);
			}),
		);
	},
};

export const setCookie = (name, value, days = 1, path = '/', domain) => {
	let expires = '';
	if (days) {
		const date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = `; expires=${date.toUTCString()}`;
	}
	document.cookie = `${name}=${value || ''}${expires}; path=${path}${(domain) ? `;domain=${domain}` : ''}`;
};

export const getCookie = (name) => {
	const nameEQ = `${name}=`;
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i += 1) {
		let c = ca[i];
		while (c.charAt(0) === ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
};

export const useWindowSize = () => {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		  }
		window.addEventListener('resize', updateSize);
		updateSize();
		  return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}

export const toTitleCase = (str) => {
	return str.replace(
	  /\w\S*/g,
	  function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	  }
	);
};

export const waitFor = (condition, cb, errorCb = null, count = 0, counterLimit = 50) => {
	// only try for 10s
	if (typeof condition === 'function' && typeof cb === 'function' && count < counterLimit) {
		setTimeout(() => {
			if (condition()) {
				cb();
			} else {
				waitFor(condition, cb, errorCb, count + 1, counterLimit);
			}
		}, 200);
	} else if (typeof errorCb === 'function') {
		errorCb();
	}
};

export const isABTest = (testID) => new Promise((resolve) => {
	waitFor(() => window.google_optimize && window.google_optimize.get, () => {
		const testValue = window.google_optimize.get(testID);
		if (!testValue) {
			resolve({ test: false });
		} else {
			resolve({ test: true, value: `${testValue}` });
		}
	});
});

export const truncateWords = (str, no_words) => {
    return str.split(" ").splice(0,no_words).join(" ");
}

export const getItemRange = (itemTitle) => {
	let range = 'Aussie Skincare Essentials';
	if (itemTitle.includes('Tasmanian Spring Water')) {
		range = 'Tasmanian Spring Water';
	} else if (itemTitle.includes('Australian Pink Clay')) {
		range = 'Australian Pink Clay';
	} else if (itemTitle.includes('Australian Glow Berries')) {
		range = 'Australian Glow Berries';
	} else if (itemTitle.includes('Oil Control')) {
		range = 'Oil Control';
	}
	return range;
};

export const postIframeHeight = (key, val, site) => {
	if (window.top === window.self) return;

	window.parent.postMessage({
		'func': 'updateIframeHeight',
		'key': key,
		'value': val,
	}, `https://${site}`);
};
