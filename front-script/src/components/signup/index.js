import { MetaComponent } from '@rebelstack-io/metaflux';
import './index.css';

class Signup extends MetaComponent {
	/**
	 * MetaComponent constructor needs storage.
	 */
	constructor () {
		super();
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		this.createInputs(content);
		
		return content;
	}
	/**
	 * @description create the sigup inputs
	 * @param {HTMLElement} box 
	 */
	createInputs (box) {
		const nameInput = document.createElement('input');
		const emailInput = document.createElement('input');
		const msgTextArea = document.createElement('input');
		nameInput.setAttribute('type', 'text');
		nameInput.setAttribute('placeholder', 'Name');
		emailInput.setAttribute('type', 'email');
		emailInput.setAttribute('placeholder', 'Email');
		msgTextArea.setAttribute('type', 'text');
		msgTextArea.setAttribute('placeholder', 'Message');
		const submit = document.createElement('div');
		submit.classList.add('btn', 'primary');
		submit.innerHTML = 'Submit';
		submit.addEventListener('click', () => {
			if (nameInput.value !== '' &&
				emailInput.value !== '' &&
				msgTextArea.value !== '') {
					global.storage.dispatch({
						type: 'SIGN-UP',
						email: emailInput.value,
						name: nameInput.value,
						msg: msgTextArea.value
					});
			}
		})
		box.append(nameInput, emailInput, msgTextArea, submit);
	}

}

window.customElements.define('yak-signup', Signup);
