import { MetaContainer } from '@rebelstack-io/metaflux';
import '../../handlers';
import '../../components/loby'
import '../../components/login';
import '../../components/sidebar';
import '../../components/settings';
import '../../components/operators/confirm-invitation';
import '../../components/signup';

class YakMainContainer extends MetaContainer {
	constructor () {
		super();
		this.handleRoute = this.handleRoute.bind(this);
	}
	
	// eslint-disable-next-line class-method-use-this
	render () {
		this.content = document.createElement('div');
		this.content.id = 'container';
		this.auth = global.storage.getState().Main.auth;
		this.handleRoute();
		this.handleStoreEvents();
		return this.content;
	}
	/**
	 * handle the routes with navigo
	 */
	handleRoute () {
		const path = document.location.pathname;
		let el;
		let env = '/';
		if (document.location.pathname.match('yakchat') !== null) {
			env = '/yakchat/';
		}
		switch (path) {
			case (env === '/' ? env : env + 'backoffice'):
				//lobby
				console.log('loby', this.auth)
				if (this.auth) {
					this.innerHTML = '';
					// Add to the DOM
					el = document.createElement('yak-loby');
					this.appendChild(el);
				} else {
					document.location.pathname = env + 'login/';
				}
				break;
			case env + 'signup/': 
				// sigup
				this.innerHTML = '';
				el = document.createElement('yak-signup');
				this.appendChild(el);
				break;
			case env + 'invite/': 
				// sigup
				this.innerHTML = '';
				el = document.createElement('confirm-invitation');
				this.appendChild(el);
				break;
			default:
				//login
				this.innerHTML = '';
				// Add to the DOM
				el = document.createElement('yak-login');
				this.appendChild(el);
				break;
		}
	}
	/**
	 * @description create the view depending on your user role
	 * @param {Integer} accessLevel 
	 * @param {Boolean} admin 
	 */
	createRoleView (accessLevel, admin) {
		if (admin && accessLevel === 10) {
			// admin login
			console.log('i\'m admin');
		} else {
			switch (accessLevel) {
				case 3: 
					//operator
					console.log('i\'m an operatorator');
					document.location.hash = '#/lobby';
				break;
				case 5:
					//client t0
					console.log('i\'m a client T0');
					document.location.hash = '#/lobby';
				break;
				case 6: 
					//client t1
					console.log('i\'m a client T1');
				break;
				case 7:
					// client t2
					console.log('i\'m a client T2');
				break;
			}
		}
	}
	/**
	 * handle storage events
	 */
	handleStoreEvents () {
		const { storage } = global;
		storage.on('LOGIN-SUCCESS', (state) => {
			const {accessLevel, admin, auth} = state.newState.Main;
			this.auth = auth;
			this.accessLevel = accessLevel;
			//this.createRoleView(accessLevel, admin);
		});

		storage.on('LOGOUT', (state) => {
			this.auth = state.newState.auth;
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
