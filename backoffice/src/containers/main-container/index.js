import { MetaContainer } from '@rebelstack-io/metaflux';
import Navigo from 'navigo';
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
		this.handleRoute();
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

	handleRoute () {
		var root = '/';
		var useHash = true; // Defaults to: false
		var hash = '#!'; // Defaults to: '#'
		var router = new Navigo(root, useHash, hash);
		router.on({
			'/loby': () => {
				console.log(global.storage.getState().Main.auth)
			}}
		)
	}
	
	/**
	 * TODO: make a real require auth
	 */
	requireAuth () {
		return !global.storage.getState().Main.auth;
		//return true;
	}
	/**
	 * @description create the view depending on your user role
	 * @param {Integer} accessLevel 
	 * @param {Boolean} admin 
	 */
	createRoleView (accessLevel, admin) {
		this.innerHTML = '';
		let el;
		// TODO: CREATE EACH VIEW
		el = document.createElement('yak-loby');
		if (admin && accessLevel === 10) {
			// admin login
			console.log('i\'m admin');
		} else {
			switch (accessLevel) {
				case 3: 
					//operator
					console.log('i\'m admin an operatorator');
				break;
				case 5:
					//client t0
					console.log('i\'m admin a client T0');
				break;
				case 6: 
					//client t1
					console.log('i\'m admin a client T1');
				break;
				case 7:
					// client t2
					console.log('i\'m admin a client T2');
				break;
			}
		}
		// Add to the DOM
		this.appendChild(el);
	}
	
	handleStoreEvents () {
		const { storage } = global;
		storage.on('LOGIN-SUCCESS', (state) => {
			const {accessLevel, admin} = state.newState;
			this.createRoleView(accessLevel, admin)
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
