import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/loby'
import '../../components/login';

class YakMainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		global.M_instanceElement = this.instanceElement;
		this.content = document.createElement('div');
		this.content.id = 'container';
		let startEl;
		if (this.requireAuth()) {
			startEl = document.createElement('yak-login');
		} else {
			startEl = document.createElement('yak-loby');
		}
		this.content.appendChild(startEl);
		return this.content;
	}
	/**
	 * TODO: make a real require auth
	 */
	requireAuth () {
		return document.location.hash !== '#loged';
	}
	/**
	 * 
	 * @param {*} tag 
	 * @param {*} classList 
	 * @param {*} id 
	 * @param {*} innerHtml  
	 * @param {*} attList 
	 */
	instanceElement (tag, classList, id, innerHtml, attList) {
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
}

window.customElements.define('yak-main-container', YakMainContainer);
