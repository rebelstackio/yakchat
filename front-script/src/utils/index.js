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
		} catch {
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
	export default {
		getClientInfo: getClientInfo
	}