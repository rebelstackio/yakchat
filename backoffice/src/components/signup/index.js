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
	}

	render () {
		this.type = 'operator';
		return /*html*/`
			<div class="login__container">
				<form class="signup__form">
					<div class="login__logo-box">
						<img src="${imageURL}" alt="Logo" class="login__logo">
					</div>
					<div class="signup__formcontent">
						<div class="account-type">
							<span class="selected" id="operator-opt">Operator</span>
							<span id="client-opt">Client</span>
						</div>
						<input id="display-name" type="text" placeholder="Display name"/>
						<input id="email" name="email" placeholder="Email" type="text" />
						<input id="password" name="password" placeholder="Password" type="password" />
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
