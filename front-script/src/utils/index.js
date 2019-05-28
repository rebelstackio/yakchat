/**
 * @returns MD5 hash with the browser fingerprint
 */
export async function getClientInfo () {
		const display = getScreenInfo();
		let lang = '!0';
		if (navigator.languages) {
			lang = navigator.languages.join(':');
		}
		let keyboard = '!0';
		if (navigator.keyboard) {
			await navigator.keyboard.getLayoutMap().then(res => {
				keyboard = res.size;
			})
		}
		const OS = navigator.oscpu || navigator.platform;
		let pluggins = getPluginsInfo();
		const devices = getDevices();
		const fullString = createInfoHash(display, lang, devices, keyboard, OS, pluggins);
		return fullString;
	}
	/**
	 * @description create md5 hash with the browser information
	 * @param {String} display screen info
	 * @param {String} langs langs info
	 * @param {String} devices 
	 * @param {String} keyboard 
	 * @param {String} con 
	 * @param {String} os 
	 * @param {String} plg 
	 */
	function createInfoHash (display, langs, devices, keyboard, os, plg) {
		return ([display, langs, devices, keyboard, os, plg].join(';')).split(' ').join('').md5Encode();
	}
	/**
	 * GET:
	 * 	LIST OF PLUGINS INSTALLED
	 */
	function getPluginsInfo () {
		try {
			let p = [];
			for (let x = 0; x < navigator.plugins.length; x++) {
				p.push(navigator.plugins[x].name);
			}
			return p.length > 0 ? p.join(':') : '!0';
		} catch (err) {
			return '!0';
		}
	}
	/**
	 * GET:
	 *	VIEWPORT SIZE,
	 *	VIEWPORT AVAILABLE SIZE,
	 *	COLOR DEPTH
	 */
	function getScreenInfo() {
		try {
			// viewport size
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
			let hAvail = window.screen.availHeight;
			let wAvail = window.screen.availWidth;
			// color depth per pixel
			let colorDepht = window.screen.colorDepth;
			return [[w,h].join(':'),[wAvail,hAvail].join(':'),colorDepht].join(';');
		} catch (err) {
			return '!0';
		}
	}
	/**
	 * GET:
	 * 	JAVA_ENABLE,
	 * 	HARDWARE_CONCURRENCY,
	 * 	GAME_PADS,
	 * 	COOKIES ENABLE
	 */
	function getDevices () {
		try {
			let devices = [
				navigator.javaEnabled() ? 1 : 0,
				navigator.hardwareConcurrency,
				navigator.cookieEnabled ? 1 : 0
			];
			if (navigator.getGamepads) {
				const pads = navigator.getGamepads();
				for (let i = 0; i < pads.length; i++) {
					if (pads[i] !== null) {
						devices.push(pads[i].id);
					}
				}
			}
			return devices.join(':');
		} catch (ex) {
			return '!0';
		}
	}

/**
 * 
 * @param {String} value 
 * @param {Int32Array} digis 
 */
function base64 (value, digis) {
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
			thid: base64( base64safe.slice(0, 8) ),
			ts:  base64( base64safe.slice(8,16) ),
			tid:  base64( base64safe.slice(16,18) )
		};
	}

	export default {
		getClientInfo: getClientInfo,
		parsemkey: parsemkey
	}