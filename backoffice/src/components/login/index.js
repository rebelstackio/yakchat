import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';
class Login extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const inputClassList = ['login-input'];
		const not = undefined;
		const logo = global.M_instanceElement(
			'div',
			['login-logo']
		);
		const emailInput = global.M_instanceElement(
			'input',
			inputClassList,
			not, not,
			[{'type': 'email'}, {'placeholder': 'Email address'}]
		);
		const passInput = global.M_instanceElement(
			'input',
			inputClassList,
			not, not,
			[{'type': 'password'}, {'placeholder': 'Password'}]
		);
		const content = global.M_instanceElement(
			'div'
		)
		const submit = global.M_instanceElement(
			'button',['btn', 'primary'], not,
			`<strong>Submit</strong>`
		);
		passInput.addEventListener('keydown', (e) => {
			if (e.key === 'Enter') {
				this.handleSend(emailInput.value, passInput.value);
			}
		})
		submit.addEventListener('click', () => {
			this.handleSend(emailInput.value, passInput.value);
		});
		content.append(logo, emailInput, passInput, submit)
		return content;
	}

	handleSend (email, password) {
		global.storage.dispatch({
			type: 'LOGIN-REQ' , 
			email,
			password
		})
	}

}

window.customElements.define('yak-login', Login);
