import { MetaContainer } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../utils';
import '../../css/general.css';
import '../../handlers';
import '../../components/loby'
import '../../components/login';
import '../../components/sidebar';

class YakMainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		//global.M_instanceElement = this.instanceElement;
		this.content = document.createElement('div');
		this.content.id = 'container';
		let startEl;
		if (this.requireAuth()) {
			startEl = document.createElement('yak-login');
		} else {
			startEl = document.createElement('yak-loby');
		}
		this.handleStoreEvents();
		this.content.appendChild(startEl);
		return this.content;
	}
	/**
	 * TODO: make a real require auth
	 */
	requireAuth () {
		return !global.storage.getState().Main.auth;
	}
	
	handleStoreEvents () {
		const { storage } = global;
		storage.on('LOGIN-SUCCESS', () => {
			const loby = document.createElement('yak-loby');
			this.content.innerHTML = '';
			this.content.appendChild(loby);
		});
		storage.on('LOGOUT', () => {
			const login = document.createElement('yak-login');
			this.content.innerHTML = '';
			this.content.appendChild(login);
		})
	}

}

window.customElements.define('yak-main-container', YakMainContainer);
