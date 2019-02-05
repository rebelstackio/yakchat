import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/input';
import '../../components/viewer';
import '../../components/header';
import '../../components/popup';
import '../../components/login';

class YakMainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		global.M_instanceElement = this.instanceElement;
		this.content = document.createElement('div');
		this.content.id = 'container';
		const loginEl = document.createElement('yak-login');
		this.content.appendChild(loginEl);
		return this.content;
	}
	/**
	 * 
	 * @param {*} tag 
	 * @param {*} classList 
	 * @param {*} id 
	 * @param {*} innerHtml 
	 * @param {*} appendList 
	 * @param {*} attList 
	 */
	instanceElement (tag, classList, id, innerHtml, attList) {
		try {
			const el = document.createElement(tag);
			if (classList && classList.length > 0) {
				el.classList.add(classList);
			}
			if (id) {
				el.id = id;
			}
			if (innerHtml) {
				el.innerHtml = innerHtml;
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
