import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../css/general.css';
import '../../handlers';
import '../../components/loby'
import '../../components/login';
import '../../components/sidebar';
import '../../components/settings';

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

		// TODO: there is already firebase.auth().onAuthStateChanged() so i don't think we need storage.on('LOGIN-SUCCESS') or 'LOGOUT'
		// TODO: instead, follow this pattern: https://firebase.google.com/docs/auth/admin/custom-claims#client_side_implementation_javascript
		// TODO: following that, you can query the role of the user via user.getIdToken() - once you've identified the role in the token, you can lazy-load the appropriate scripts and interface

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
