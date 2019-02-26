import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/loby'
import '../../components/login';
import '../../components/sidebar';

class YakMainContainer extends MetaContainer {
	// eslint-disable-next-line class-method-use-this
	render () {
		this.content = document.createElement('div');
		this.content.id = 'container';
		let startEl;
		if (this.requireAuth()) {
			startEl = document.createElement('yak-login');
		} else {
			startEl = document.createElement('yak-loby');
		}
		this.handleStoreEvents();
		this.content = startEl;
		return this.content;
	}
	
	/**
	 * TODO: make a real require auth
	 */
	requireAuth () {
		// return !global.storage.getState().Main.auth;
		return true;
	}
	
	handleStoreEvents () {
		const { storage } = global;

		storage.on('LOGIN-SUCCESS', () => {
			// Clean the current content
			this.innerHTML = '';
			// Create the lobby component
			const loby = document.createElement('yak-loby');
			// Add to the DOM
			this.appendChild(loby);
		});

		storage.on('LOGOUT', () => {
			// Clean the current content
			this.innerHTML = '';
			// Create the login component
			const login = document.createElement('yak-login');
			// Add to the DOM
			this.appendChild(login);
		})
	}

}

window.customElements.define('yak-main-container', YakMainContainer);
