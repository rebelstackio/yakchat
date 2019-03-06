import { MetaComponent } from '@rebelstack-io/metaflux';
import imageURL from '../../../public/images/logo/yakchat.svg';
import './index.css';

class Signup extends MetaComponent {
	
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

	get domain() {
		return this.querySelector("#domain").value;
	}

	get displayName() {
		return this.querySelector("#display-name").value;
	}

	get type () {
		return this.querySelector('#type').value;
	}

	addListeners() {
		this.querySelector('#signup-btn').addEventListener('click', (e) => {
			e.preventDefault();
			console.log('e!!')
			this.handleSend(
				this.email,
				this.password,
				this.displayName,
				this.type,
				this.domain
			);
		});
		this.querySelector('#type').addEventListener('change', () => {
			this.querySelector('#domain').classList.toggle('hide');
		})
	}

	render () {
		return /*html*/`
			<div class="login__container">
				<form class="signup__form">
					<div class="login__logo-box">
						<img src="${imageURL}" alt="Logo" class="login__logo">
					</div>

					<h1 class="login__title">
						Sign up
					</h1>
					
					<div class="login__formcontent">
						<select id="type">
							<option value="operator"> Operator</option>
							<option value="client"> Client</option> 
						</select>
						<input id="display-name" type="text" placeholder="Display name"/>
						<input id="email" name="email" placeholder="Email" type="text" />
						<input id="password" name="password" placeholder="Password" type="password" /><br />
						<input id="domain" class="hide" type="text" placeholder="www.example.com"/>
						<input id="signup-btn" type="submit" value="Sign">
						<br />
					</div>
				</form>
			</div>
		`;
	}

	handleSend (email, password, displayName, type, domain) {
		global.storage.dispatch({
			type: 'SIGNUP', 
			data : {
				email, password, displayName, type, domain
			}
		});
	}

}

window.customElements.define('yak-signup', Signup);
