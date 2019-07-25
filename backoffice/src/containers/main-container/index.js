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
		const production = process.env.ENVIROMENT === 'PRODUCTION';
		switch (path) {
			case (!production ? env : env + 'backoffice.html'):
				//lobby
				let auth = localStorage.getItem('authorization') !== null;
				console.log('loby', auth);
				if (auth) {
					global.storage.dispatch({
						type: 'LOGIN-SUCCESS',
						data: JSON.parse(localStorage.getItem('udata'))
					});
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
		const { storage, TPGstorage } = global;
		storage.on('LOGIN-SUCCESS', (state) => {
			const {accessLevel, admin, auth} = state.newState.Main;
			this.accessLevel = accessLevel;
			//this.createRoleView(accessLevel, admin);
		});

		storage.on('LOGOUT', (state) => {
			// Clean the current content
			this.innerHTML = '';
			// Create the login component
			const login = document.createElement('yak-login');
			// Add to the DOM
			this.appendChild(login);
		});

		global.TPGstorage.on('ADD-ITINERARY', (state) => {
			const data = state.newState.Main.lastItinerary;
			console.log(data);
			const msg = [data.date, data.title, data.description, data.time, data.icon, data.qty, data.price].join('-')
			global.storage.dispatch({type: 'SEND-MESSAGE', data: msg, msgType: 'AB'});
		})
	}

}

window.customElements.define('yak-main-container', YakMainContainer);
