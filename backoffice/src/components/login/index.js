import { MetaComponent } from '@rebelstack-io/metaflux';
import imageURL from '../../../public/images/logo/yakchat.svg';
import './index.css';

const DEFAULT_EMAIL_ERROR_MESSAGE = 'Use a valid email account';

class Login extends MetaComponent {
	
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
		this.handleStoreEvents();
		global.storage.on('LOGIN-FAIL', this.handleInvalidLogin.bind(this));
	}

	get email() {
		return this.querySelector('#email').value;
	}

	get password() {
		return this.querySelector('#password').value;
	}

	/**
	 * Add the css class to show form errors to the target selector by id
	 * @param {string} id Html Id
	 */
	showErrors(id) {
		this.querySelector(`#${id} + span`).classList.remove('login__error--hide');
		this.querySelector(`#${id} + span`).classList.add('login__error--show');
	}

	/**
	 * Add the css class to hide form errors to the target selector by id
	 * @param {string} id Html Id
	 */
	hideErrors(id) {
		this.querySelector(`#${id} + span`).classList.add('login__error--hide');
		this.querySelector(`#${id} + span`).classList.remove('login__error--show');
	}

	/**
	 * Validate form inputs with HTML5 input rules and send the data if everything is fine
	 */
	sendFormData() {
		// Validate the whole form
		const emailselector = this.querySelector('#email');
		const passwordselector = this.querySelector('#password');
		const form = this.querySelector('#loginform');
		if ( form.checkValidity() ) {
			// Hide all errors
			this.hideErrors('email');
			this.hideErrors('password');
			// Send request
			this.handleSend(this.email, this.password);
		} else {
			this.hideErrors('password');
			this.hideErrors('email');
			// timeout to show the css effects first
			setTimeout(() => {
				// Password input with errors
				if (!passwordselector.checkValidity() ) {
					this.showErrors('password');
					// Set the focus to the element - helps to disabled the css class in the log in button
					passwordselector.focus();
				}
				// Email input with errors
				if (!emailselector.checkValidity() ) {
					this.showErrors('email');
					// Set the focus to the element - helps to disabled the css class in the log in button
					emailselector.focus();
				}
			}, 100);
		}
	}

	/**
	 * Handle error response from the server
	 * @param {*} state 
	 */
	handleInvalidLogin(state) {
		const { error } = state;
		// Set a custom error message that comes from the server
		this.setErrorMessage('email', error.message);
		this.showErrors('email');
	}

	/**
	 * Set a message in the span element 
	 * @param {string} id HTML id
	 * @param {string} message Custom message
	 */
	setErrorMessage(id, message = DEFAULT_EMAIL_ERROR_MESSAGE) {
		this.querySelector(`#${id} + span`).innerHTML = message;
	}

	/**
	 * Send the data to firebase endpoints
	 * @param {*} email 
	 * @param {*} password 
	 */
	handleSend (email, password) {
		global.storage.dispatch({
			type: 'LOGIN-REQ', 
			email,
			password
		});
	}

	addListeners() {
		this.querySelector('#loginbtn').addEventListener('click', (e) => {
			e.preventDefault();
			this.sendFormData();
		});
		// Listener for the email
		this.querySelector('#email').addEventListener('keyup', (e) => {
			const valid = this.querySelector('#email').checkValidity();
			if ( valid ) {
				this.hideErrors('email');
			} else {
				// Set default error message for email field
				this.setErrorMessage('email', DEFAULT_EMAIL_ERROR_MESSAGE);
				// Show the error
				this.showErrors('email');
			}
		});
		// Listener for the password
		this.querySelector('#password').addEventListener('keyup', (e) => {
			const valid = this.querySelector('#password').checkValidity();
			if ( valid ) {
				this.hideErrors('password');
			} else {
				this.showErrors('password');
			}
		});
	}

	render () {
		return /*html*/`
			<div class="login__container">
				<form id="loginform" class="login__form">
					<div class="login__logo-box">
						<img src="${imageURL}" alt="Logo" class="login__logo">
					</div>

					<h1 class="login__title">
						Sign in
					</h1>
					
					<div id="form-body" class="login__formcontent">
						<div class="login__inputbox">
							<input id="email" name="email" placeholder="Email" type="email" required/>
							<span class="login__error login__error--hide">Use a valid email account</span>
						</div>
						<div class="login__inputbox">
							<input id="password" name="password" placeholder="Password" type="password" required minlength="5"/>
							<span class="login__error login__error--hide">Must contains at leats 5 characters</span>
						</div>
						<div class="login__inputbox">
							<a id="loginbtn" class="login__btn login__btn--lightblue"href="#form-body">
								Log In
							</a>
						</div>
						<br />
					</div>
					<div class="login__forgot-box">
						<a href="#">Forgot your password</a>
					</div>
				</form>
			</div>
		`;
	}
}

window.customElements.define('yak-login', Login);
