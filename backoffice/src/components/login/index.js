import { MetaComponent } from '@rebelstack-io/metaflux';
import imageURL from '../../../public/images/logo.png';
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

	addListeners() {
		this.querySelector('#loginbtn').addEventListener('click', (e) => {
			e.preventDefault();
			this.handleSend(this.email, this.password);
		});
	}

	render () {
		return /*html*/`
			<div class="login__container">
				<form class="login__form">
					<div class="login__logo-box">
						<img src="${imageURL}" alt="Logo" class="login__logo">
					</div>

					<h1 class="login__title">
						Sign in
					</h1>
					
					<div class="login__formcontent">
						<input id="email" name="email" placeholder="Email" type="text" />
						<input id="password" name="password" placeholder="Password" type="password" /><br />
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
		})
	}

}

window.customElements.define('yak-login', Login);
