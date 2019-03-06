import { MetaComponent } from '@rebelstack-io/metaflux';
import imageURL from '../../../public/images/logo/yakchat.svg';
import './index.css';

class Login extends MetaComponent {
	
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
	}

	get email() {
		return this.querySelector('#email').value;
	}

	get password() {
		return this.querySelector('#password').value;
	}

	showErrors(id) {
		this.querySelector(`#${id} + span`).classList.remove('login__error--hide');
		this.querySelector(`#${id} + span`).classList.add('login__error--show');
	}

	hideErrors(id) {
		this.querySelector(`#${id} + span`).classList.add('login__error--hide');
		this.querySelector(`#${id} + span`).classList.remove('login__error--show');
	}

	/**
	 * Validate form inputs
	 */
	sendFormData() {
		const emailselector = this.querySelector('#email');
		const passwordselector = this.querySelector('#password');
		const form = this.querySelector('#loginform');
		if ( form.checkValidity() ) {
			this.handleSend(this.email, this.password);
		} else {
			if (!emailselector.checkValidity() ) {
				this.showErrors('email');
			}
			if (!passwordselector.checkValidity() ) {
				this.showErrors('password');
			}
		}
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
					
					<div class="login__formcontent">
						<div class="login__inputbox">
							<input id="email" name="email" placeholder="Email" type="email" required/>
							<span class="login__error login__error--hide">Use a valid email account</span>
						</div>
						<div class="login__inputbox">
							<input id="password" name="password" placeholder="Password" type="password" required minlength="5"/>
							<span class="login__error login__error--hide">Must contains at leats 4 characters</span>
						</div>
						<input id="loginbtn" type="submit" value="Log in">
						<br />
					</div>
					<div class="login__forgot-box">
						<a href="#">Forgot your password</a>
					</div>
				</form>
			</div>
		`;
	}

	handleSend (email, password) {
		global.storage.dispatch({
			type: 'LOGIN-REQ', 
			email,
			password
		});
	}

}

window.customElements.define('yak-login', Login);
