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
			not, not, not,
			[{'type': 'text'}]
		);
		const passInput = global.M_instanceElement(
			'input',
			inputClassList,
			not, not, not,
			[{'type': 'password'}]
		);
		const content = global.M_instanceElement(
			'div',
			not, not, not,
			[logo, emailInput, passInput]
		)
		return content;
	}

}

window.customElements.define('yak-login', Login);
