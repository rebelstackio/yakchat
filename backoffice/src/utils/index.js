	/**
	 * @returns HTMLElemnt
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
	export default {
		instanceElement: instanceElement
	}