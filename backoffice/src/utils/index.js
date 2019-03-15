	/**
	 * @returns {HTMLElemnt}
	 * @description util to write an element quickly
	 * @param {String} tag tag name (div, span, h1) MANDATORY
	 * @param {Array} classList array of classes you want to have the element NOT-MANDATORY
	 * @param {String} id element id NOT-MANDATORY
	 * @param {String} innerHtml innerHTML string NOT-MANDATORY
	 * @param {Array} attList array of attributes object ([{type: 'text'}) NOT-MANDATORY
	 */
	export function instanceElement (tag, classList, id, innerHtml, attList) {
		try {
			const el = document.createElement(tag);
			if (classList && classList.length > 0) {
				classList.forEach(cl => {
					el.classList.add(cl);
				});
			}
			if (id) {
				el.id = id;
			}
			if (innerHtml) {
				el.innerHTML = innerHtml;
			}
			if (attList && attList.length > 0) {
				attList.forEach(ob => {
					Object.keys(ob).forEach(key => {
						el.setAttribute(key, ob[key]);
					})
				});
			}
			return el;
		} catch (err) {
			throw err;
		}
	}
	/**
 * 
 * @param {String} value 
 * @param {Int32Array} digis 
 */
export function base64 (value, digis) {
	if ( typeof(value) === 'number') {
		if (digis) {
			return base64.getChars(value, '').padStart(digis,'A');
		} else {
			return base64.getChars(value, '');
		}
	}
	if (typeof(value) === 'string') {
		if (value === '') { return NaN; }
		return value.split('').reverse().reduce(function(prev, cur, i) {
			return prev + base64.chars.indexOf(cur) * Math.pow(64, i);
		}, 0);
	}
}
base64.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
base64.getChars = function(num, res) {
	var mod = num % 64,
	remaining = Math.floor(num / 64),
	chars = base64.chars.charAt(mod) + res;
	if (remaining <= 0) { return chars; }
	return base64.getChars(remaining, chars);
};
export function parsemkey(base64safe) {
	// NOTE: returns object
	// TODO: validate base64safe
	return {
		tid:  base64( base64safe.slice(0,2) ),
		thid: base64( base64safe.slice(2,10) ),
		ts:  base64( base64safe.slice(10, 18) )
	};
}
	export default {
		instanceElement: instanceElement,
		base64: base64,
		parsemkey: parsemkey
	}