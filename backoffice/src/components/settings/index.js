import { MetaComponent } from '@rebelstack-io/metaflux';
import { instanceElement } from '../../utils';
import './index.css';

class Settings extends MetaComponent {
	constructor () {
		super(global.storage);
	}
	// eslint-disable-next-line class-method-use-this
	render () {
		const content = document.createElement('div');
		const closeButton = instanceElement('i', ['fa', 'fa-times'], 'set-close');
		closeButton.addEventListener('click', () => {
			this.classList.toggle('hide');
		})
		content.appendChild(closeButton);
		this.createOptions(content);
		return content;
	}

	createOptions (box) {
		const optionBox = instanceElement('div', ['option-body']);
		this.createChatSettings(optionBox);
		this.createUserSettings(optionBox);
		box.appendChild(optionBox);
	}

	createUserSettings (box) {
		const userBox = instanceElement('div', ['user-settings'], false, '<h2>User settings</h2>');
		const crrntPass = instanceElement('input',
			false, false, false,
			[{type: 'password', placeholder: 'Current Password'}]
		);
		const newPass = instanceElement('input',
			false, false, false,
			[{type: 'password', placeholder: 'New Password'}]
		);
		const newPassRP = instanceElement('input',
			false, false, false,
			[{type: 'password', placeholder: 'Repeat your password'}]
		);
		const Submit = instanceElement('button', ['btn', 'primary'], false, 'Submit')
		const chngPassBox = instanceElement('div', ['set-new-pass']);
		chngPassBox.append(crrntPass, newPass, newPassRP, Submit);
		Submit.addEventListener('click', () => {
			if (crrntPass.value !== '' && newPass.value !== '' && newPassRP.value !== '') {
				if (newPass.value === newPassRP.value) {
					this.storage.dispatch({
						type: 'CHNG-PASS', 
						data: {newPass: newPass.value, oldPass: crrntPass.value}
					})
				} else {
					console.error('error the password dont match')
				}
			} else {
				console.error('all the fields are mandatory')
			}
		})
		userBox.appendChild(chngPassBox);
		box.appendChild(userBox);
	}

	createChatSettings (box) {
		const enableBox = instanceElement('div', false, false, '<h3>Enable sounds</h3>');
		const enableSound = instanceElement('i', ['fa', 'fa-check-square']);
		const chatOptions = instanceElement('div', ['chat-settings'], false, '<h2>Chat settings</h2>');
		enableSound.addEventListener('click', () => {
			this.storage.dispatch({ type: 'TOGGLE-SOUND' });
		})
		chatOptions.appendChild(enableBox);
		enableBox.appendChild(enableSound);
		box.append(chatOptions);
	}

	handleStoreEvents () {
		return {
			'TOGGLE-SOUND': (action) => {
				const { isSoundEnable } = action.newState;
				const check = 
					document.querySelector('.fa.fa-check-square') ||
					document.querySelector('.fa.fa-square');
				console.log(check);
				check.className = isSoundEnable ? 'fa fa-check-square' : 'fa fa-square'
			}
		}
	}

}

window.customElements.define('yak-settings', Settings);
