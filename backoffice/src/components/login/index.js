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

	/**
	 * Validate form inputs
	 */
	sendFormData() {
		const form = this.querySelector('#loginform');
		if ( form.checkValidity() ) {
			this.handleSend(this.email, this.password);
		} else {
			alert('fail');
		}
	}

	addListeners() {

		this.querySelector('#loginbtn').addEventListener('click', (e) => {
			e.preventDefault();
			this.sendFormData();
		});
		// Listener for the email
		this.querySelector('#email').addEventListener('keyup', (e) => {
			this.querySelector('#email').checkValidity();
		});
		// Listener for the password
		this.querySelector('#password').addEventListener('keyup', (e) => {
			this.querySelector('#password').checkValidity();
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
							<span class="login__error"></span>
						</div>
						<div class="login__inputbox">
							<input id="password" name="password" placeholder="Password" type="password" required minlength="5"/>
							<span class="login__error">Error</span>
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
