import { MetaComponent } from '@rebelstack-io/metaflux';
import imageURL from '../../assets/images/logo/yakchat.svg';
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
		const operator = this.querySelector('#operator-opt');
		const client = this.querySelector('#client-opt')
		operator.addEventListener('click', () => {
			this.type = 'operator';
			client.classList.remove('selected');
			operator.classList.add('selected');
			this.querySelector('#domain').classList.add('hide');
		});
		client.addEventListener('click', () => {
			this.type = 'client';
			operator.classList.remove('selected');
			client.classList.add('selected');
			this.querySelector('#domain').classList.remove('hide');
		});
		const mailInput = document.querySelector('#email');
		mailInput.addEventListener('keyup', () => {
			if (mailInput.checkValidity()) {
				this.hideErrors('email')
			} else {
				this.showErrors('email')
			}
		});
		const passInput = document.querySelector('#password');
		passInput.addEventListener('keyup', () => {
			if (passInput.checkValidity()) {
				this.hideErrors('password')
			} else {
				this.showErrors('password')
			}
		});
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

	render () {
		this.type = 'operator';
		return /*html*/`
			<div class="login__container">
				<form class="signup__form">
					<div class="login__logo-box">
						<img src="../${imageURL}" alt="Logo" class="login__logo">
					</div>
					<div class="signup__formcontent">
						<div class="account-type">
							<span class="selected" id="operator-opt">Operator</span>
							<span id="client-opt">Client</span>
						</div>
						<input id="display-name" type="text" placeholder="Display name"/>
						<br/>
						<input id="email" name="email" placeholder="Email" type="email" required/>
						<span class="login__error login__error--hide">Use a valid email account</span>
						<input id="password" name="password" placeholder="Password" type="password" required minlength="5"/>
						<span class="login__error login__error--hide">Must contains at leats 5 characters</span>
						<input id="domain" class="hide" type="text" placeholder="www.example.com"/>
						<input id="signup-btn" type="submit" value="Sign up">
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
